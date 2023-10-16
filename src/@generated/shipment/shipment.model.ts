import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ArticleOnShipment } from '../article-on-shipment/article-on-shipment.model';
import { Address } from '../address/address.model';
import { ShipmentCount } from './shipment-count.output';

@ObjectType()
export class Shipment {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  trackingNumber!: string;

  @Field(() => String, { nullable: false })
  carrier!: string;

  @Field(() => String, { nullable: false })
  senderAddressId!: string;

  @Field(() => String, { nullable: false })
  receiverAddressId!: string;

  @Field(() => [ArticleOnShipment], { nullable: true })
  articles?: Array<ArticleOnShipment>;

  @Field(() => Address, { nullable: false })
  senderAddress?: Address;

  @Field(() => Address, { nullable: false })
  receiverAddress?: Address;

  @Field(() => ShipmentCount, { nullable: false })
  _count?: ShipmentCount;
}
