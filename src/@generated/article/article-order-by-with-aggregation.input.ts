import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleCountOrderByAggregateInput } from './article-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { ArticleAvgOrderByAggregateInput } from './article-avg-order-by-aggregate.input';
import { ArticleMaxOrderByAggregateInput } from './article-max-order-by-aggregate.input';
import { ArticleMinOrderByAggregateInput } from './article-min-order-by-aggregate.input';
import { ArticleSumOrderByAggregateInput } from './article-sum-order-by-aggregate.input';

@InputType()
export class ArticleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    qty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sku?: keyof typeof SortOrder;

    @Field(() => ArticleCountOrderByAggregateInput, {nullable:true})
    @Type(() => ArticleCountOrderByAggregateInput)
    _count?: ArticleCountOrderByAggregateInput;

    @Field(() => ArticleAvgOrderByAggregateInput, {nullable:true})
    @Type(() => ArticleAvgOrderByAggregateInput)
    _avg?: ArticleAvgOrderByAggregateInput;

    @Field(() => ArticleMaxOrderByAggregateInput, {nullable:true})
    @Type(() => ArticleMaxOrderByAggregateInput)
    _max?: ArticleMaxOrderByAggregateInput;

    @Field(() => ArticleMinOrderByAggregateInput, {nullable:true})
    @Type(() => ArticleMinOrderByAggregateInput)
    _min?: ArticleMinOrderByAggregateInput;

    @Field(() => ArticleSumOrderByAggregateInput, {nullable:true})
    @Type(() => ArticleSumOrderByAggregateInput)
    _sum?: ArticleSumOrderByAggregateInput;
}
