import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ArticleRelationFilter } from '../article/article-relation-filter.input';
import { Type } from 'class-transformer';
import { ShipmentRelationFilter } from '../shipment/shipment-relation-filter.input';

@InputType()
export class ArticleOnShipmentWhereInput {

    @Field(() => [ArticleOnShipmentWhereInput], {nullable:true})
    AND?: Array<ArticleOnShipmentWhereInput>;

    @Field(() => [ArticleOnShipmentWhereInput], {nullable:true})
    OR?: Array<ArticleOnShipmentWhereInput>;

    @Field(() => [ArticleOnShipmentWhereInput], {nullable:true})
    NOT?: Array<ArticleOnShipmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    articleId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    shipmentId?: StringFilter;

    @Field(() => ArticleRelationFilter, {nullable:true})
    @Type(() => ArticleRelationFilter)
    article?: ArticleRelationFilter;

    @Field(() => ShipmentRelationFilter, {nullable:true})
    shipment?: ShipmentRelationFilter;
}
