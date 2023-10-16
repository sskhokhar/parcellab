import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentWhereInput } from './shipment-where.input';

@InputType()
export class ShipmentListRelationFilter {
  @Field(() => ShipmentWhereInput, { nullable: true })
  every?: ShipmentWhereInput;

  @Field(() => ShipmentWhereInput, { nullable: true })
  some?: ShipmentWhereInput;

  @Field(() => ShipmentWhereInput, { nullable: true })
  none?: ShipmentWhereInput;
}
