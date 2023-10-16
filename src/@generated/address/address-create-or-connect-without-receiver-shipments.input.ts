import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutReceiverShipmentsInput } from './address-create-without-receiver-shipments.input';

@InputType()
export class AddressCreateOrConnectWithoutReceiverShipmentsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressCreateWithoutReceiverShipmentsInput, {nullable:false})
    @Type(() => AddressCreateWithoutReceiverShipmentsInput)
    create!: AddressCreateWithoutReceiverShipmentsInput;
}
