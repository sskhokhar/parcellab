import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { ArticleOnShipmentListRelationFilter } from '../article-on-shipment/article-on-shipment-list-relation-filter.input';

@InputType()
export class ArticleWhereInput {

    @Field(() => [ArticleWhereInput], {nullable:true})
    @Type(() => ArticleWhereInput)
    AND?: Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {nullable:true})
    @Type(() => ArticleWhereInput)
    OR?: Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {nullable:true})
    @Type(() => ArticleWhereInput)
    NOT?: Array<ArticleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    qty?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    sku?: StringFilter;

    @Field(() => ArticleOnShipmentListRelationFilter, {nullable:true})
    @Type(() => ArticleOnShipmentListRelationFilter)
    shipments?: ArticleOnShipmentListRelationFilter;
}
