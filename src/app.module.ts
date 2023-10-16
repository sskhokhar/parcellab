import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { redisStore } from 'cache-manager-redis-yet';
import { applicationConfig, validationSchema } from 'src/config';
import { ShipmentModule } from 'src/shipment_module/shipment.module';
import { WeatherModule } from 'src/weather_module/weather.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: validationSchema,
      load: [applicationConfig],
    }),
    CacheModule.register({
      store: redisStore,
      isGlobal: true,
      url: 'redis://redis:6379',
    }),
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: 'schema.gql',
      graphiql: true,
    }),
    ShipmentModule,
    WeatherModule,
  ],
})
export class AppModule {}
