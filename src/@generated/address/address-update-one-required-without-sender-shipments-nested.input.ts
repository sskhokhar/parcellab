import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutSenderShipmentsInput } from './address-create-without-sender-shipments.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutSenderShipmentsInput } from './address-create-or-connect-without-sender-shipments.input';
import { AddressUpsertWithoutSenderShipmentsInput } from './address-upsert-without-sender-shipments.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutSenderShipmentsInput } from './address-update-to-one-with-where-without-sender-shipments.input';

@InputType()
export class AddressUpdateOneRequiredWithoutSenderShipmentsNestedInput {

    @Field(() => AddressCreateWithoutSenderShipmentsInput, {nullable:true})
    @Type(() => AddressCreateWithoutSenderShipmentsInput)
    create?: AddressCreateWithoutSenderShipmentsInput;

    @Field(() => AddressCreateOrConnectWithoutSenderShipmentsInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutSenderShipmentsInput)
    connectOrCreate?: AddressCreateOrConnectWithoutSenderShipmentsInput;

    @Field(() => AddressUpsertWithoutSenderShipmentsInput, {nullable:true})
    @Type(() => AddressUpsertWithoutSenderShipmentsInput)
    upsert?: AddressUpsertWithoutSenderShipmentsInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutSenderShipmentsInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutSenderShipmentsInput)
    update?: AddressUpdateToOneWithWhereWithoutSenderShipmentsInput;
}
