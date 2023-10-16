import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { Type } from 'class-transformer';
import { ArticleOrderByWithRelationInput } from './article-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArticleCountAggregateInput } from './article-count-aggregate.input';
import { ArticleAvgAggregateInput } from './article-avg-aggregate.input';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';

@ArgsType()
export class ArticleAggregateArgs {

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByWithRelationInput], {nullable:true})
    @Type(() => ArticleOrderByWithRelationInput)
    orderBy?: Array<ArticleOrderByWithRelationInput>;

    @Field(() => ArticleWhereUniqueInput, {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    cursor?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'sku'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ArticleCountAggregateInput, {nullable:true})
    @Type(() => ArticleCountAggregateInput)
    _count?: ArticleCountAggregateInput;

    @Field(() => ArticleAvgAggregateInput, {nullable:true})
    @Type(() => ArticleAvgAggregateInput)
    _avg?: ArticleAvgAggregateInput;

    @Field(() => ArticleSumAggregateInput, {nullable:true})
    @Type(() => ArticleSumAggregateInput)
    _sum?: ArticleSumAggregateInput;

    @Field(() => ArticleMinAggregateInput, {nullable:true})
    @Type(() => ArticleMinAggregateInput)
    _min?: ArticleMinAggregateInput;

    @Field(() => ArticleMaxAggregateInput, {nullable:true})
    @Type(() => ArticleMaxAggregateInput)
    _max?: ArticleMaxAggregateInput;
}
