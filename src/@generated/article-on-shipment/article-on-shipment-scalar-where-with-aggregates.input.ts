import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ArticleOnShipmentScalarWhereWithAggregatesInput {

    @Field(() => [ArticleOnShipmentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ArticleOnShipmentScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleOnShipmentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ArticleOnShipmentScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleOnShipmentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ArticleOnShipmentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    articleId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    shipmentId?: StringWithAggregatesFilter;
}
