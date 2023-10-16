import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/services/prisma.service';
import { ShipmentService } from 'src/shipment_module/services/shipment.service';
import { WeatherModule } from 'src/weather_module/weather.module';

describe('ShipmentService', () => {
  let service: ShipmentService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [WeatherModule],
      providers: [
        ShipmentService,
        PrismaService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(() => {
              return '';
            }),
          },
        },
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: () => 'any value',
            set: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ShipmentService>(ShipmentService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should get all shipments', async () => {
    prisma.shipment.findMany = jest.fn().mockReturnValueOnce([
      {
        id: '12345',
        trackingNumber: 'TN112233',
        carrier: 'DHL',
      },
    ]);
    const shipments = await service.findAll({});
    expect(Array.isArray(shipments)).toBe(true);
    expect(shipments[0].id).toBe('12345');
  });
});
