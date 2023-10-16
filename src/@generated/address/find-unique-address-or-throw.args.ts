import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAddressOrThrowArgs {
  @Field(() => AddressWhereUniqueInput, { nullable: false })
  @Type(() => AddressWhereUniqueInput)
  where!: Prisma.AtLeast<AddressWhereUniqueInput, 'id'>;
}
