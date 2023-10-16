import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentCreateWithoutReceiverAddressInput } from './shipment-create-without-receiver-address.input';
import { Type } from 'class-transformer';
import { ShipmentCreateOrConnectWithoutReceiverAddressInput } from './shipment-create-or-connect-without-receiver-address.input';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';

@InputType()
export class ShipmentUncheckedCreateNestedManyWithoutReceiverAddressInput {
  @Field(() => [ShipmentCreateWithoutReceiverAddressInput], { nullable: true })
  @Type(() => ShipmentCreateWithoutReceiverAddressInput)
  create?: Array<ShipmentCreateWithoutReceiverAddressInput>;

  @Field(() => [ShipmentCreateOrConnectWithoutReceiverAddressInput], {
    nullable: true,
  })
  @Type(() => ShipmentCreateOrConnectWithoutReceiverAddressInput)
  connectOrCreate?: Array<ShipmentCreateOrConnectWithoutReceiverAddressInput>;

  @Field(() => [ShipmentWhereUniqueInput], { nullable: true })
  @Type(() => ShipmentWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>
  >;
}
