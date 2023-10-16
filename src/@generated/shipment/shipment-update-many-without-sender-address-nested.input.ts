import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentCreateWithoutSenderAddressInput } from './shipment-create-without-sender-address.input';
import { Type } from 'class-transformer';
import { ShipmentCreateOrConnectWithoutSenderAddressInput } from './shipment-create-or-connect-without-sender-address.input';
import { ShipmentUpsertWithWhereUniqueWithoutSenderAddressInput } from './shipment-upsert-with-where-unique-without-sender-address.input';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';
import { ShipmentUpdateWithWhereUniqueWithoutSenderAddressInput } from './shipment-update-with-where-unique-without-sender-address.input';
import { ShipmentUpdateManyWithWhereWithoutSenderAddressInput } from './shipment-update-many-with-where-without-sender-address.input';
import { ShipmentScalarWhereInput } from './shipment-scalar-where.input';

@InputType()
export class ShipmentUpdateManyWithoutSenderAddressNestedInput {

    @Field(() => [ShipmentCreateWithoutSenderAddressInput], {nullable:true})
    @Type(() => ShipmentCreateWithoutSenderAddressInput)
    create?: Array<ShipmentCreateWithoutSenderAddressInput>;

    @Field(() => [ShipmentCreateOrConnectWithoutSenderAddressInput], {nullable:true})
    @Type(() => ShipmentCreateOrConnectWithoutSenderAddressInput)
    connectOrCreate?: Array<ShipmentCreateOrConnectWithoutSenderAddressInput>;

    @Field(() => [ShipmentUpsertWithWhereUniqueWithoutSenderAddressInput], {nullable:true})
    @Type(() => ShipmentUpsertWithWhereUniqueWithoutSenderAddressInput)
    upsert?: Array<ShipmentUpsertWithWhereUniqueWithoutSenderAddressInput>;

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

    @Field(() => [ShipmentUpdateWithWhereUniqueWithoutSenderAddressInput], {nullable:true})
    @Type(() => ShipmentUpdateWithWhereUniqueWithoutSenderAddressInput)
    update?: Array<ShipmentUpdateWithWhereUniqueWithoutSenderAddressInput>;

    @Field(() => [ShipmentUpdateManyWithWhereWithoutSenderAddressInput], {nullable:true})
    @Type(() => ShipmentUpdateManyWithWhereWithoutSenderAddressInput)
    updateMany?: Array<ShipmentUpdateManyWithWhereWithoutSenderAddressInput>;

    @Field(() => [ShipmentScalarWhereInput], {nullable:true})
    @Type(() => ShipmentScalarWhereInput)
    deleteMany?: Array<ShipmentScalarWhereInput>;
}
