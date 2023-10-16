import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentCreateInput } from './article-on-shipment-create.input';
import { ArticleOnShipmentUpdateInput } from './article-on-shipment-update.input';

@ArgsType()
export class UpsertOneArticleOnShipmentArgs {

    @Field(() => ArticleOnShipmentWhereUniqueInput, {nullable:false})
    @Type(() => ArticleOnShipmentWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>;

    @Field(() => ArticleOnShipmentCreateInput, {nullable:false})
    @Type(() => ArticleOnShipmentCreateInput)
    create!: ArticleOnShipmentCreateInput;

    @Field(() => ArticleOnShipmentUpdateInput, {nullable:false})
    @Type(() => ArticleOnShipmentUpdateInput)
    update!: ArticleOnShipmentUpdateInput;
}
