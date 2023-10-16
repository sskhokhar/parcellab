import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ArticleSumAggregate {
  @Field(() => Int, { nullable: true })
  qty?: number;

  @Field(() => GraphQLDecimal, { nullable: true })
  price?: Decimal;
}
