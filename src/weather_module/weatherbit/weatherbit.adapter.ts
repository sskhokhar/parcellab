import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { IWeatherAdapterInterface } from 'src/weather_module/weather.adapter.interface';

@Injectable()
export class WeatherBitAdapter implements IWeatherAdapterInterface {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async getWeatherByPostal<IWeatherResponse>(
    code: number,
    country: string,
  ): Promise<IWeatherResponse> {
    console.log(
      `https://api.weatherbit.io/v2.0/current?postal_code=${code}&country=${country}&key=${this.configService.get(
        'application.weatherApi',
      )}`,
    );
    const { data } = await firstValueFrom(
      this.httpService.get<IWeatherResponse>(
        `https://api.weatherbit.io/v2.0/current?postal_code=${code}&country=${country}&key=${this.configService.get(
          'application.weatherApi',
        )}`,
      ),
    );
    return data;
  }
}
