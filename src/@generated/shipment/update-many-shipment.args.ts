import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShipmentUpdateManyMutationInput } from './shipment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ShipmentWhereInput } from './shipment-where.input';

@ArgsType()
export class UpdateManyShipmentArgs {
  @Field(() => ShipmentUpdateManyMutationInput, { nullable: false })
  @Type(() => ShipmentUpdateManyMutationInput)
  data!: ShipmentUpdateManyMutationInput;

  @Field(() => ShipmentWhereInput, { nullable: true })
  @Type(() => ShipmentWhereInput)
  where?: ShipmentWhereInput;
}
