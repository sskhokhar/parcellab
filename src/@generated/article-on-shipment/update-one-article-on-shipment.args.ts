import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleOnShipmentUpdateInput } from './article-on-shipment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';

@ArgsType()
export class UpdateOneArticleOnShipmentArgs {
  @Field(() => ArticleOnShipmentUpdateInput, { nullable: false })
  @Type(() => ArticleOnShipmentUpdateInput)
  data!: ArticleOnShipmentUpdateInput;

  @Field(() => ArticleOnShipmentWhereUniqueInput, { nullable: false })
  @Type(() => ArticleOnShipmentWhereUniqueInput)
  where!: Prisma.AtLeast<
    ArticleOnShipmentWhereUniqueInput,
    'articleId_shipmentId'
  >;
}
