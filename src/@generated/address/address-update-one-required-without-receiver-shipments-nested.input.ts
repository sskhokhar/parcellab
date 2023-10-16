import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutReceiverShipmentsInput } from './address-create-without-receiver-shipments.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutReceiverShipmentsInput } from './address-create-or-connect-without-receiver-shipments.input';
import { AddressUpsertWithoutReceiverShipmentsInput } from './address-upsert-without-receiver-shipments.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateToOneWithWhereWithoutReceiverShipmentsInput } from './address-update-to-one-with-where-without-receiver-shipments.input';

@InputType()
export class AddressUpdateOneRequiredWithoutReceiverShipmentsNestedInput {

    @Field(() => AddressCreateWithoutReceiverShipmentsInput, {nullable:true})
    @Type(() => AddressCreateWithoutReceiverShipmentsInput)
    create?: AddressCreateWithoutReceiverShipmentsInput;

    @Field(() => AddressCreateOrConnectWithoutReceiverShipmentsInput, {nullable:true})
    @Type(() => AddressCreateOrConnectWithoutReceiverShipmentsInput)
    connectOrCreate?: AddressCreateOrConnectWithoutReceiverShipmentsInput;

    @Field(() => AddressUpsertWithoutReceiverShipmentsInput, {nullable:true})
    @Type(() => AddressUpsertWithoutReceiverShipmentsInput)
    upsert?: AddressUpsertWithoutReceiverShipmentsInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    @Type(() => AddressWhereUniqueInput)
    connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressUpdateToOneWithWhereWithoutReceiverShipmentsInput, {nullable:true})
    @Type(() => AddressUpdateToOneWithWhereWithoutReceiverShipmentsInput)
    update?: AddressUpdateToOneWithWhereWithoutReceiverShipmentsInput;
}
