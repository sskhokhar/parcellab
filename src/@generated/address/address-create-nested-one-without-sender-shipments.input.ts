import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutSenderShipmentsInput } from './address-create-without-sender-shipments.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutSenderShipmentsInput } from './address-create-or-connect-without-sender-shipments.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutSenderShipmentsInput {
  @Field(() => AddressCreateWithoutSenderShipmentsInput, { nullable: true })
  @Type(() => AddressCreateWithoutSenderShipmentsInput)
  create?: AddressCreateWithoutSenderShipmentsInput;

  @Field(() => AddressCreateOrConnectWithoutSenderShipmentsInput, {
    nullable: true,
  })
  @Type(() => AddressCreateOrConnectWithoutSenderShipmentsInput)
  connectOrCreate?: AddressCreateOrConnectWithoutSenderShipmentsInput;

  @Field(() => AddressWhereUniqueInput, { nullable: true })
  @Type(() => AddressWhereUniqueInput)
  connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
