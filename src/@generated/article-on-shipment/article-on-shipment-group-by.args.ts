import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleOnShipmentWhereInput } from './article-on-shipment-where.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentOrderByWithAggregationInput } from './article-on-shipment-order-by-with-aggregation.input';
import { ArticleOnShipmentScalarFieldEnum } from './article-on-shipment-scalar-field.enum';
import { ArticleOnShipmentScalarWhereWithAggregatesInput } from './article-on-shipment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ArticleOnShipmentCountAggregateInput } from './article-on-shipment-count-aggregate.input';
import { ArticleOnShipmentMinAggregateInput } from './article-on-shipment-min-aggregate.input';
import { ArticleOnShipmentMaxAggregateInput } from './article-on-shipment-max-aggregate.input';

@ArgsType()
export class ArticleOnShipmentGroupByArgs {

    @Field(() => ArticleOnShipmentWhereInput, {nullable:true})
    @Type(() => ArticleOnShipmentWhereInput)
    where?: ArticleOnShipmentWhereInput;

    @Field(() => [ArticleOnShipmentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ArticleOnShipmentOrderByWithAggregationInput>;

    @Field(() => [ArticleOnShipmentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ArticleOnShipmentScalarFieldEnum>;

    @Field(() => ArticleOnShipmentScalarWhereWithAggregatesInput, {nullable:true})
    having?: ArticleOnShipmentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ArticleOnShipmentCountAggregateInput, {nullable:true})
    _count?: ArticleOnShipmentCountAggregateInput;

    @Field(() => ArticleOnShipmentMinAggregateInput, {nullable:true})
    _min?: ArticleOnShipmentMinAggregateInput;

    @Field(() => ArticleOnShipmentMaxAggregateInput, {nullable:true})
    _max?: ArticleOnShipmentMaxAggregateInput;
}
