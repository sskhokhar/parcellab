export interface IWeatherAdapterInterface {
  getWeatherByPostal<T>(code: number, country: string): Promise<T>;
}

export const IWeatherAdapterInterface = Symbol('IWeatherAdapterInterface');
