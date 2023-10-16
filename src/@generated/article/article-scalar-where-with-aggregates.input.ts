import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';

@InputType()
export class ArticleScalarWhereWithAggregatesInput {

    @Field(() => [ArticleScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ArticleScalarWhereWithAggregatesInput)
    AND?: Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ArticleScalarWhereWithAggregatesInput)
    OR?: Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => ArticleScalarWhereWithAggregatesInput)
    NOT?: Array<ArticleScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    qty?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    price?: DecimalWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sku?: StringWithAggregatesFilter;
}
