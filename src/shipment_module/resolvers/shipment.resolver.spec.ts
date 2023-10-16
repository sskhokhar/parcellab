import { Test, TestingModule } from '@nestjs/testing';
import { Shipment } from '@prisma/client';
import { ShipmentResolver } from 'src/shipment_module/resolvers/shipment.resolver';
import { ShipmentService } from 'src/shipment_module/services/shipment.service';

const mockShipment: Partial<Shipment> = {
  id: '12345',
  trackingNumber: 'TN112233',
  carrier: 'DHL',
};
const postsServiceMock = {
  findAll: jest.fn((): Partial<Shipment>[] => [mockShipment]),
  getShipmentReceiverWeather: jest.fn((id: string) => 'sunny'),
};
describe('ShipmentResolver', () => {
  let resolver: ShipmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShipmentResolver,
        { provide: ShipmentService, useValue: postsServiceMock },
      ],
    }).compile();

    resolver = module.get<ShipmentResolver>(ShipmentResolver);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should query all shipments', async () => {
    const result = await resolver.shipments({});
    expect(Array.isArray(result)).toEqual(true);
  });

  it('should resolve the weather of a shipment', async () => {
    const result = await resolver.weather(mockShipment as Shipment);
    expect(result).toEqual('sunny');
  });
});
