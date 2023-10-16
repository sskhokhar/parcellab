import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentScalarWhereInput } from './shipment-scalar-where.input';
import { Type } from 'class-transformer';
import { ShipmentUpdateManyMutationInput } from './shipment-update-many-mutation.input';

@InputType()
export class ShipmentUpdateManyWithWhereWithoutSenderAddressInput {
  @Field(() => ShipmentScalarWhereInput, { nullable: false })
  @Type(() => ShipmentScalarWhereInput)
  where!: ShipmentScalarWhereInput;

  @Field(() => ShipmentUpdateManyMutationInput, { nullable: false })
  @Type(() => ShipmentUpdateManyMutationInput)
  data!: ShipmentUpdateManyMutationInput;
}
