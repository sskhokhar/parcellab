import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutSenderShipmentsInput } from './address-update-without-sender-shipments.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutSenderShipmentsInput } from './address-create-without-sender-shipments.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutSenderShipmentsInput {

    @Field(() => AddressUpdateWithoutSenderShipmentsInput, {nullable:false})
    @Type(() => AddressUpdateWithoutSenderShipmentsInput)
    update!: AddressUpdateWithoutSenderShipmentsInput;

    @Field(() => AddressCreateWithoutSenderShipmentsInput, {nullable:false})
    @Type(() => AddressCreateWithoutSenderShipmentsInput)
    create!: AddressCreateWithoutSenderShipmentsInput;

    @Field(() => AddressWhereInput, {nullable:true})
    @Type(() => AddressWhereInput)
    where?: AddressWhereInput;
}
