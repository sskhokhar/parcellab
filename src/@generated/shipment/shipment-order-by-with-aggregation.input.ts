import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShipmentCountOrderByAggregateInput } from './shipment-count-order-by-aggregate.input';
import { ShipmentMaxOrderByAggregateInput } from './shipment-max-order-by-aggregate.input';
import { ShipmentMinOrderByAggregateInput } from './shipment-min-order-by-aggregate.input';

@InputType()
export class ShipmentOrderByWithAggregationInput {
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

  @Field(() => ShipmentCountOrderByAggregateInput, { nullable: true })
  _count?: ShipmentCountOrderByAggregateInput;

  @Field(() => ShipmentMaxOrderByAggregateInput, { nullable: true })
  _max?: ShipmentMaxOrderByAggregateInput;

  @Field(() => ShipmentMinOrderByAggregateInput, { nullable: true })
  _min?: ShipmentMinOrderByAggregateInput;
}
