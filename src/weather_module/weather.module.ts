import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherProvider } from 'src/weather_module/weather.provider';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [WeatherProvider],
  exports: [WeatherProvider],
})
export class WeatherModule {}
