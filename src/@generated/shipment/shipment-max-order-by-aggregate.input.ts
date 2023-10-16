import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ShipmentMaxOrderByAggregateInput {
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
}
