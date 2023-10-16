import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  qty!: number;

  @Field(() => Int, { nullable: false })
  price!: number;

  @Field(() => Int, { nullable: false })
  sku!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
