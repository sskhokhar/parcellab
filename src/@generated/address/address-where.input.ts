import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ShipmentListRelationFilter } from '../shipment/shipment-list-relation-filter.input';

@InputType()
export class AddressWhereInput {
  @Field(() => [AddressWhereInput], { nullable: true })
  AND?: Array<AddressWhereInput>;

  @Field(() => [AddressWhereInput], { nullable: true })
  OR?: Array<AddressWhereInput>;

  @Field(() => [AddressWhereInput], { nullable: true })
  NOT?: Array<AddressWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  addressLine?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  postalCode?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  country?: StringFilter;

  @Field(() => ShipmentListRelationFilter, { nullable: true })
  receiverShipments?: ShipmentListRelationFilter;

  @Field(() => ShipmentListRelationFilter, { nullable: true })
  senderShipments?: ShipmentListRelationFilter;
}
