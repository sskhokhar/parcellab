import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { ArticleCountAggregate } from './article-count-aggregate.output';
import { ArticleAvgAggregate } from './article-avg-aggregate.output';
import { ArticleSumAggregate } from './article-sum-aggregate.output';
import { ArticleMinAggregate } from './article-min-aggregate.output';
import { ArticleMaxAggregate } from './article-max-aggregate.output';

@ObjectType()
export class ArticleGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    qty!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => ArticleCountAggregate, {nullable:true})
    _count?: ArticleCountAggregate;

    @Field(() => ArticleAvgAggregate, {nullable:true})
    _avg?: ArticleAvgAggregate;

    @Field(() => ArticleSumAggregate, {nullable:true})
    _sum?: ArticleSumAggregate;

    @Field(() => ArticleMinAggregate, {nullable:true})
    _min?: ArticleMinAggregate;

    @Field(() => ArticleMaxAggregate, {nullable:true})
    _max?: ArticleMaxAggregate;
}
