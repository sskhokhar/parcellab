import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentUpdateWithoutShipmentInput } from './article-on-shipment-update-without-shipment.input';

@InputType()
export class ArticleOnShipmentUpdateWithWhereUniqueWithoutShipmentInput {
  @Field(() => ArticleOnShipmentWhereUniqueInput, { nullable: false })
  @Type(() => ArticleOnShipmentWhereUniqueInput)
  where!: Prisma.AtLeast<
    ArticleOnShipmentWhereUniqueInput,
    'articleId_shipmentId'
  >;

  @Field(() => ArticleOnShipmentUpdateWithoutShipmentInput, { nullable: false })
  @Type(() => ArticleOnShipmentUpdateWithoutShipmentInput)
  data!: ArticleOnShipmentUpdateWithoutShipmentInput;
}
