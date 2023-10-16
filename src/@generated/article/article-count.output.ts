import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleCount {
  @Field(() => Int, { nullable: false })
  shipments?: number;
}
