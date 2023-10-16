import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutReceiverShipmentsInput } from './address-create-without-receiver-shipments.input';
import { Type } from 'class-transformer';
import { AddressCreateOrConnectWithoutReceiverShipmentsInput } from './address-create-or-connect-without-receiver-shipments.input';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutReceiverShipmentsInput {
  @Field(() => AddressCreateWithoutReceiverShipmentsInput, { nullable: true })
  @Type(() => AddressCreateWithoutReceiverShipmentsInput)
  create?: AddressCreateWithoutReceiverShipmentsInput;

  @Field(() => AddressCreateOrConnectWithoutReceiverShipmentsInput, {
    nullable: true,
  })
  @Type(() => AddressCreateOrConnectWithoutReceiverShipmentsInput)
  connectOrCreate?: AddressCreateOrConnectWithoutReceiverShipmentsInput;

  @Field(() => AddressWhereUniqueInput, { nullable: true })
  @Type(() => AddressWhereUniqueInput)
  connect?: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
