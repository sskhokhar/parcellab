import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOnShipmentCreateWithoutShipmentInput } from './article-on-shipment-create-without-shipment.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentCreateOrConnectWithoutShipmentInput } from './article-on-shipment-create-or-connect-without-shipment.input';
import { ArticleOnShipmentUpsertWithWhereUniqueWithoutShipmentInput } from './article-on-shipment-upsert-with-where-unique-without-shipment.input';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';
import { ArticleOnShipmentUpdateWithWhereUniqueWithoutShipmentInput } from './article-on-shipment-update-with-where-unique-without-shipment.input';
import { ArticleOnShipmentUpdateManyWithWhereWithoutShipmentInput } from './article-on-shipment-update-many-with-where-without-shipment.input';
import { ArticleOnShipmentScalarWhereInput } from './article-on-shipment-scalar-where.input';

@InputType()
export class ArticleOnShipmentUpdateManyWithoutShipmentNestedInput {
  @Field(() => [ArticleOnShipmentCreateWithoutShipmentInput], {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentCreateWithoutShipmentInput)
  create?: Array<ArticleOnShipmentCreateWithoutShipmentInput>;

  @Field(() => [ArticleOnShipmentCreateOrConnectWithoutShipmentInput], {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentCreateOrConnectWithoutShipmentInput)
  connectOrCreate?: Array<ArticleOnShipmentCreateOrConnectWithoutShipmentInput>;

  @Field(() => [ArticleOnShipmentUpsertWithWhereUniqueWithoutShipmentInput], {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentUpsertWithWhereUniqueWithoutShipmentInput)
  upsert?: Array<ArticleOnShipmentUpsertWithWhereUniqueWithoutShipmentInput>;

  @Field(() => [ArticleOnShipmentWhereUniqueInput], { nullable: true })
  @Type(() => ArticleOnShipmentWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>
  >;

  @Field(() => [ArticleOnShipmentWhereUniqueInput], { nullable: true })
  @Type(() => ArticleOnShipmentWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>
  >;

  @Field(() => [ArticleOnShipmentWhereUniqueInput], { nullable: true })
  @Type(() => ArticleOnShipmentWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>
  >;

  @Field(() => [ArticleOnShipmentWhereUniqueInput], { nullable: true })
  @Type(() => ArticleOnShipmentWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>
  >;

  @Field(() => [ArticleOnShipmentUpdateWithWhereUniqueWithoutShipmentInput], {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentUpdateWithWhereUniqueWithoutShipmentInput)
  update?: Array<ArticleOnShipmentUpdateWithWhereUniqueWithoutShipmentInput>;

  @Field(() => [ArticleOnShipmentUpdateManyWithWhereWithoutShipmentInput], {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentUpdateManyWithWhereWithoutShipmentInput)
  updateMany?: Array<ArticleOnShipmentUpdateManyWithWhereWithoutShipmentInput>;

  @Field(() => [ArticleOnShipmentScalarWhereInput], { nullable: true })
  @Type(() => ArticleOnShipmentScalarWhereInput)
  deleteMany?: Array<ArticleOnShipmentScalarWhereInput>;
}
