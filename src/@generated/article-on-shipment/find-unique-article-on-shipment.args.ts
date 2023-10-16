import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueArticleOnShipmentArgs {
  @Field(() => ArticleOnShipmentWhereUniqueInput, { nullable: false })
  @Type(() => ArticleOnShipmentWhereUniqueInput)
  where!: Prisma.AtLeast<
    ArticleOnShipmentWhereUniqueInput,
    'articleId_shipmentId'
  >;
}
