import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutSenderShipmentsInput } from './address-create-without-sender-shipments.input';

@InputType()
export class AddressCreateOrConnectWithoutSenderShipmentsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    @Type(() => AddressWhereUniqueInput)
    where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;

    @Field(() => AddressCreateWithoutSenderShipmentsInput, {nullable:false})
    @Type(() => AddressCreateWithoutSenderShipmentsInput)
    create!: AddressCreateWithoutSenderShipmentsInput;
}
