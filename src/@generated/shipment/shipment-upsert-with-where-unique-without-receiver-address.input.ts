import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';
import { Type } from 'class-transformer';
import { ShipmentUpdateWithoutReceiverAddressInput } from './shipment-update-without-receiver-address.input';
import { ShipmentCreateWithoutReceiverAddressInput } from './shipment-create-without-receiver-address.input';

@InputType()
export class ShipmentUpsertWithWhereUniqueWithoutReceiverAddressInput {

    @Field(() => ShipmentWhereUniqueInput, {nullable:false})
    @Type(() => ShipmentWhereUniqueInput)
    where!: Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>;

    @Field(() => ShipmentUpdateWithoutReceiverAddressInput, {nullable:false})
    @Type(() => ShipmentUpdateWithoutReceiverAddressInput)
    update!: ShipmentUpdateWithoutReceiverAddressInput;

    @Field(() => ShipmentCreateWithoutReceiverAddressInput, {nullable:false})
    @Type(() => ShipmentCreateWithoutReceiverAddressInput)
    create!: ShipmentCreateWithoutReceiverAddressInput;
}
