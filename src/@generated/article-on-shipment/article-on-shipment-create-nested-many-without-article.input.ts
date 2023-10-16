import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOnShipmentCreateWithoutArticleInput } from './article-on-shipment-create-without-article.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentCreateOrConnectWithoutArticleInput } from './article-on-shipment-create-or-connect-without-article.input';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';

@InputType()
export class ArticleOnShipmentCreateNestedManyWithoutArticleInput {
  @Field(() => [ArticleOnShipmentCreateWithoutArticleInput], { nullable: true })
  @Type(() => ArticleOnShipmentCreateWithoutArticleInput)
  create?: Array<ArticleOnShipmentCreateWithoutArticleInput>;

  @Field(() => [ArticleOnShipmentCreateOrConnectWithoutArticleInput], {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentCreateOrConnectWithoutArticleInput)
  connectOrCreate?: Array<ArticleOnShipmentCreateOrConnectWithoutArticleInput>;

  @Field(() => [ArticleOnShipmentWhereUniqueInput], { nullable: true })
  @Type(() => ArticleOnShipmentWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>
  >;
}
