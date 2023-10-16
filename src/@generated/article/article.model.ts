import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { ArticleOnShipment } from '../article-on-shipment/article-on-shipment.model';
import { ArticleCount } from './article-count.output';

@ObjectType()
export class Article {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    qty!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => [ArticleOnShipment], {nullable:true})
    shipments?: Array<ArticleOnShipment>;

    @Field(() => ArticleCount, {nullable:false})
    _count?: ArticleCount;
}
