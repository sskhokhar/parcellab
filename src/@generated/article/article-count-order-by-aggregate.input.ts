import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArticleCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  qty?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sku?: keyof typeof SortOrder;
}
