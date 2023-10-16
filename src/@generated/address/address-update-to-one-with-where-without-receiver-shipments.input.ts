import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutReceiverShipmentsInput } from './address-update-without-receiver-shipments.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutReceiverShipmentsInput {
  @Field(() => AddressWhereInput, { nullable: true })
  @Type(() => AddressWhereInput)
  where?: AddressWhereInput;

  @Field(() => AddressUpdateWithoutReceiverShipmentsInput, { nullable: false })
  @Type(() => AddressUpdateWithoutReceiverShipmentsInput)
  data!: AddressUpdateWithoutReceiverShipmentsInput;
}
