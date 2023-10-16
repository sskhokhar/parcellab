import { Provider } from '@nestjs/common';
import { IWeatherAdapterInterface } from 'src/weather_module/weather.adapter.interface';
import { WeatherBitAdapter } from 'src/weather_module/weatherbit/weatherbit.adapter';

export const WeatherProvider: Provider = {
  provide: IWeatherAdapterInterface,
  useClass: WeatherBitAdapter,
};
