import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { IWeatherAdapterInterface } from 'src/weather_module/weather.adapter.interface';
import { WeatherBitAdapter } from 'src/weather_module/weatherbit/weatherbit.adapter';
import { IWeatherResponse } from 'src/weather_module/weatherbit/weatherbit_response.interface';

describe('Weatherbit Adapter', () => {
  let service: IWeatherAdapterInterface;
  let weatherbitAPISpy: jest.SpyInstance;

  beforeEach(() => {
    weatherbitAPISpy = jest
      .spyOn(WeatherBitAdapter.prototype, 'getWeatherByPostal')
      .mockReturnValue(
        Promise.resolve({ data: [{ weather: { description: 'sunny' } }] }),
      );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Get Weather', () => {
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [HttpModule],
        providers: [
          WeatherBitAdapter,
          {
            provide: ConfigService,
            useValue: {
              get: jest.fn(() => {
                return '';
              }),
            },
          },
        ],
      }).compile();
      service = module.get<WeatherBitAdapter>(WeatherBitAdapter);
    });
    it('should call adapter.getWeatherByPostal', async () => {
      await service.getWeatherByPostal(52074, 'germany');
      expect(weatherbitAPISpy).toBeCalledWith(52074, 'germany');
    });
    it('should get weather', async () => {
      const weatherResponse: Partial<IWeatherResponse> =
        await service.getWeatherByPostal(52074, 'germany');
      expect(weatherResponse.data[0].weather.description).toBe('sunny');
    });
  });
});
