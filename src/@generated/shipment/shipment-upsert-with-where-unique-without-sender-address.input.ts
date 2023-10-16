import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';
import { Type } from 'class-transformer';
import { ShipmentUpdateWithoutSenderAddressInput } from './shipment-update-without-sender-address.input';
import { ShipmentCreateWithoutSenderAddressInput } from './shipment-create-without-sender-address.input';

@InputType()
export class ShipmentUpsertWithWhereUniqueWithoutSenderAddressInput {
  @Field(() => ShipmentWhereUniqueInput, { nullable: false })
  @Type(() => ShipmentWhereUniqueInput)
  where!: Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>;

  @Field(() => ShipmentUpdateWithoutSenderAddressInput, { nullable: false })
  @Type(() => ShipmentUpdateWithoutSenderAddressInput)
  update!: ShipmentUpdateWithoutSenderAddressInput;

  @Field(() => ShipmentCreateWithoutSenderAddressInput, { nullable: false })
  @Type(() => ShipmentCreateWithoutSenderAddressInput)
  create!: ShipmentCreateWithoutSenderAddressInput;
}
