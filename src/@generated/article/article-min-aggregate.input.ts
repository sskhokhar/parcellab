import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArticleMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;

  @Field(() => Boolean, { nullable: true })
  qty?: true;

  @Field(() => Boolean, { nullable: true })
  price?: true;

  @Field(() => Boolean, { nullable: true })
  sku?: true;
}
