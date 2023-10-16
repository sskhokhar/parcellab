import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutReceiverShipmentsInput } from './address-update-without-receiver-shipments.input';
import { Type } from 'class-transformer';
import { AddressCreateWithoutReceiverShipmentsInput } from './address-create-without-receiver-shipments.input';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressUpsertWithoutReceiverShipmentsInput {
  @Field(() => AddressUpdateWithoutReceiverShipmentsInput, { nullable: false })
  @Type(() => AddressUpdateWithoutReceiverShipmentsInput)
  update!: AddressUpdateWithoutReceiverShipmentsInput;

  @Field(() => AddressCreateWithoutReceiverShipmentsInput, { nullable: false })
  @Type(() => AddressCreateWithoutReceiverShipmentsInput)
  create!: AddressCreateWithoutReceiverShipmentsInput;

  @Field(() => AddressWhereInput, { nullable: true })
  @Type(() => AddressWhereInput)
  where?: AddressWhereInput;
}
