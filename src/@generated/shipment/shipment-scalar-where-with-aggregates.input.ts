import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ShipmentScalarWhereWithAggregatesInput {
  @Field(() => [ShipmentScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ShipmentScalarWhereWithAggregatesInput>;

  @Field(() => [ShipmentScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ShipmentScalarWhereWithAggregatesInput>;

  @Field(() => [ShipmentScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ShipmentScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  trackingNumber?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  carrier?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  senderAddressId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  receiverAddressId?: StringWithAggregatesFilter;
}
