import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShipmentWhereInput } from './shipment-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyShipmentArgs {
  @Field(() => ShipmentWhereInput, { nullable: true })
  @Type(() => ShipmentWhereInput)
  where?: ShipmentWhereInput;
}
