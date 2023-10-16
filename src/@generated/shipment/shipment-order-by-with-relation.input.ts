import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleOnShipmentOrderByRelationAggregateInput } from '../article-on-shipment/article-on-shipment-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { AddressOrderByWithRelationInput } from '../address/address-order-by-with-relation.input';

@InputType()
export class ShipmentOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  trackingNumber?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  carrier?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  senderAddressId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  receiverAddressId?: keyof typeof SortOrder;

  @Field(() => ArticleOnShipmentOrderByRelationAggregateInput, {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentOrderByRelationAggregateInput)
  articles?: ArticleOnShipmentOrderByRelationAggregateInput;

  @Field(() => AddressOrderByWithRelationInput, { nullable: true })
  senderAddress?: AddressOrderByWithRelationInput;

  @Field(() => AddressOrderByWithRelationInput, { nullable: true })
  receiverAddress?: AddressOrderByWithRelationInput;
}
