import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentCreateWithoutSenderAddressInput } from './shipment-create-without-sender-address.input';
import { Type } from 'class-transformer';
import { ShipmentCreateOrConnectWithoutSenderAddressInput } from './shipment-create-or-connect-without-sender-address.input';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';

@InputType()
export class ShipmentUncheckedCreateNestedManyWithoutSenderAddressInput {

    @Field(() => [ShipmentCreateWithoutSenderAddressInput], {nullable:true})
    @Type(() => ShipmentCreateWithoutSenderAddressInput)
    create?: Array<ShipmentCreateWithoutSenderAddressInput>;

    @Field(() => [ShipmentCreateOrConnectWithoutSenderAddressInput], {nullable:true})
    @Type(() => ShipmentCreateOrConnectWithoutSenderAddressInput)
    connectOrCreate?: Array<ShipmentCreateOrConnectWithoutSenderAddressInput>;

    @Field(() => [ShipmentWhereUniqueInput], {nullable:true})
    @Type(() => ShipmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>>;
}
