import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DataLoaderInterceptor } from 'nestjs-dataloader';
import { PrismaService } from 'src/services/prisma.service';
import { ArticleDataLoader } from 'src/shipment_module/data_loaders';
import { ShipmentResolver } from 'src/shipment_module/resolvers/shipment.resolver';
import { ShipmentService } from 'src/shipment_module/services/shipment.service';
import { WeatherModule } from 'src/weather_module/weather.module';

@Module({
  imports: [WeatherModule],
  providers: [
    ShipmentResolver,
    ShipmentService,
    PrismaService,
    ArticleDataLoader,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class ShipmentModule {}
