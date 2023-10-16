import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleOnShipmentCountAggregate {

    @Field(() => Int, {nullable:false})
    articleId!: number;

    @Field(() => Int, {nullable:false})
    shipmentId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
