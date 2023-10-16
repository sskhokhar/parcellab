import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { Type } from 'class-transformer';
import { AddressUpdateWithoutSenderShipmentsInput } from './address-update-without-sender-shipments.input';

@InputType()
export class AddressUpdateToOneWithWhereWithoutSenderShipmentsInput {
  @Field(() => AddressWhereInput, { nullable: true })
  @Type(() => AddressWhereInput)
  where?: AddressWhereInput;

  @Field(() => AddressUpdateWithoutSenderShipmentsInput, { nullable: false })
  @Type(() => AddressUpdateWithoutSenderShipmentsInput)
  data!: AddressUpdateWithoutSenderShipmentsInput;
}
