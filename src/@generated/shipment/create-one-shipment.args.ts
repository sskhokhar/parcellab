import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShipmentCreateInput } from './shipment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneShipmentArgs {
  @Field(() => ShipmentCreateInput, { nullable: false })
  @Type(() => ShipmentCreateInput)
  data!: ShipmentCreateInput;
}
