import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentUpdateWithoutArticleInput } from './article-on-shipment-update-without-article.input';

@InputType()
export class ArticleOnShipmentUpdateWithWhereUniqueWithoutArticleInput {
  @Field(() => ArticleOnShipmentWhereUniqueInput, { nullable: false })
  @Type(() => ArticleOnShipmentWhereUniqueInput)
  where!: Prisma.AtLeast<
    ArticleOnShipmentWhereUniqueInput,
    'articleId_shipmentId'
  >;

  @Field(() => ArticleOnShipmentUpdateWithoutArticleInput, { nullable: false })
  @Type(() => ArticleOnShipmentUpdateWithoutArticleInput)
  data!: ArticleOnShipmentUpdateWithoutArticleInput;
}
