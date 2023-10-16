import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentCreateWithoutReceiverAddressInput } from './shipment-create-without-receiver-address.input';
import { Type } from 'class-transformer';
import { ShipmentCreateOrConnectWithoutReceiverAddressInput } from './shipment-create-or-connect-without-receiver-address.input';
import { ShipmentUpsertWithWhereUniqueWithoutReceiverAddressInput } from './shipment-upsert-with-where-unique-without-receiver-address.input';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';
import { ShipmentUpdateWithWhereUniqueWithoutReceiverAddressInput } from './shipment-update-with-where-unique-without-receiver-address.input';
import { ShipmentUpdateManyWithWhereWithoutReceiverAddressInput } from './shipment-update-many-with-where-without-receiver-address.input';
import { ShipmentScalarWhereInput } from './shipment-scalar-where.input';

@InputType()
export class ShipmentUncheckedUpdateManyWithoutReceiverAddressNestedInput {

    @Field(() => [ShipmentCreateWithoutReceiverAddressInput], {nullable:true})
    @Type(() => ShipmentCreateWithoutReceiverAddressInput)
    create?: Array<ShipmentCreateWithoutReceiverAddressInput>;

    @Field(() => [ShipmentCreateOrConnectWithoutReceiverAddressInput], {nullable:true})
    @Type(() => ShipmentCreateOrConnectWithoutReceiverAddressInput)
    connectOrCreate?: Array<ShipmentCreateOrConnectWithoutReceiverAddressInput>;

    @Field(() => [ShipmentUpsertWithWhereUniqueWithoutReceiverAddressInput], {nullable:true})
    @Type(() => ShipmentUpsertWithWhereUniqueWithoutReceiverAddressInput)
    upsert?: Array<ShipmentUpsertWithWhereUniqueWithoutReceiverAddressInput>;

    @Field(() => [ShipmentWhereUniqueInput], {nullable:true})
    @Type(() => ShipmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>>;

    @Field(() => [ShipmentWhereUniqueInput], {nullable:true})
    @Type(() => ShipmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>>;

    @Field(() => [ShipmentWhereUniqueInput], {nullable:true})
    @Type(() => ShipmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>>;

    @Field(() => [ShipmentWhereUniqueInput], {nullable:true})
    @Type(() => ShipmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>>;

    @Field(() => [ShipmentUpdateWithWhereUniqueWithoutReceiverAddressInput], {nullable:true})
    @Type(() => ShipmentUpdateWithWhereUniqueWithoutReceiverAddressInput)
    update?: Array<ShipmentUpdateWithWhereUniqueWithoutReceiverAddressInput>;

    @Field(() => [ShipmentUpdateManyWithWhereWithoutReceiverAddressInput], {nullable:true})
    @Type(() => ShipmentUpdateManyWithWhereWithoutReceiverAddressInput)
    updateMany?: Array<ShipmentUpdateManyWithWhereWithoutReceiverAddressInput>;

    @Field(() => [ShipmentScalarWhereInput], {nullable:true})
    @Type(() => ShipmentScalarWhereInput)
    deleteMany?: Array<ShipmentScalarWhereInput>;
}
