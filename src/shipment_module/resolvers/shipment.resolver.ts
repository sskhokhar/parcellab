import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import * as DataLoader from 'dataloader';
import { Loader } from 'nestjs-dataloader';
import { ArticleOnShipment } from 'src/@generated/article-on-shipment/article-on-shipment.model';
import { FindManyShipmentArgs } from 'src/@generated/shipment/find-many-shipment.args';
import { Shipment } from 'src/@generated/shipment/shipment.model';
import { ArticleDataLoader } from 'src/shipment_module/data_loaders';
import { ShipmentService } from 'src/shipment_module/services/shipment.service';

@Resolver(() => Shipment)
export class ShipmentResolver {
  constructor(private shipmentService: ShipmentService) {}

  @Query(() => [Shipment])
  async shipments(@Args() params: FindManyShipmentArgs): Promise<Shipment[]> {
    return this.shipmentService.findAll(params);
  }

  @ResolveField(() => String)
  async weather(@Parent() shipment: Shipment) {
    const { id } = shipment;
    return this.shipmentService.getShipmentReceiverWeather(id);
  }

  @ResolveField(() => ArticleOnShipment)
  async articles(
    @Parent() shipment: Shipment,
    @Loader(ArticleDataLoader)
    articleLoader: DataLoader<
      ArticleOnShipment['shipmentId'],
      ArticleOnShipment
    >,
  ) {
    const { id } = shipment;
    return await articleLoader.load(id);
  }
}
