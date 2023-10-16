import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { FindManyShipmentArgs } from 'src/@generated/shipment/find-many-shipment.args';
import { PrismaService } from 'src/services/prisma.service';
import { IWeatherAdapterInterface } from 'src/weather_module/weather.adapter.interface';
import { IWeatherResponse } from 'src/weather_module/weatherbit/weatherbit_response.interface';

@Injectable()
export class ShipmentService {
  constructor(
    @Inject(IWeatherAdapterInterface)
    private weatherService: IWeatherAdapterInterface,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private prismaService: PrismaService,
  ) {}

  async findAll(params: FindManyShipmentArgs) {
    return this.prismaService.shipment.findMany(params);
  }

  async findById(id: string) {
    return this.prismaService.shipment.findUnique({
      where: { id },
    });
  }

  async findShipmentArticlesByIds(shipmentIds: string[]) {
    return this.prismaService.articleOnShipment.findMany({
      where: { shipmentId: { in: shipmentIds } },
      include: { article: true },
    });
  }

  async getShipmentReceiverWeather(id: string): Promise<string> {
    const shipment = await this.prismaService.shipment.findUnique({
      where: { id },
      include: { receiverAddress: true },
    });
    const postalCode = shipment.receiverAddress.postalCode;
    const country = shipment.receiverAddress.country;
    const cachedData = await this.cacheManager.get(`${postalCode}_${country}`);

    if (cachedData) {
      return cachedData as string;
    }
    const weather =
      await this.weatherService.getWeatherByPostal<IWeatherResponse>(
        postalCode,
        country,
      );

    await this.cacheManager.set(
      `${postalCode}_${country}`,
      weather.data[0].weather.description,
      7200000,
    );

    return weather.data[0].weather.description;
  }
}
