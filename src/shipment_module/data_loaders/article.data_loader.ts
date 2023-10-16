import { Injectable } from '@nestjs/common';
import { ArticleOnShipment } from '@prisma/client';
import * as DataLoader from 'dataloader';
import { groupBy } from 'lodash';
import { NestDataLoader } from 'nestjs-dataloader';
import { ShipmentService } from 'src/shipment_module/services/shipment.service';
@Injectable()
export class ArticleDataLoader
  implements NestDataLoader<string, ArticleOnShipment>
{
  constructor(private shipmentService: ShipmentService) {}

  generateDataLoader(): DataLoader<string, ArticleOnShipment> {
    return new DataLoader<string, ArticleOnShipment>(async (shipmentIds) => {
      const articleShipments =
        await this.shipmentService.findShipmentArticlesByIds(
          shipmentIds as string[],
        );
      const map = groupBy(articleShipments, (shipArt) => shipArt.shipmentId);
      return Promise.resolve(shipmentIds.map((id) => map[id]));
    });
  }
}
