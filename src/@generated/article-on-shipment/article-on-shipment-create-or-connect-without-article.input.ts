import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentCreateWithoutArticleInput } from './article-on-shipment-create-without-article.input';

@InputType()
export class ArticleOnShipmentCreateOrConnectWithoutArticleInput {

    @Field(() => ArticleOnShipmentWhereUniqueInput, {nullable:false})
    @Type(() => ArticleOnShipmentWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>;

    @Field(() => ArticleOnShipmentCreateWithoutArticleInput, {nullable:false})
    @Type(() => ArticleOnShipmentCreateWithoutArticleInput)
    create!: ArticleOnShipmentCreateWithoutArticleInput;
}
