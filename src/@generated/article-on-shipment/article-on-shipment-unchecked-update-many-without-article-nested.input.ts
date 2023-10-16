import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOnShipmentCreateWithoutArticleInput } from './article-on-shipment-create-without-article.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentCreateOrConnectWithoutArticleInput } from './article-on-shipment-create-or-connect-without-article.input';
import { ArticleOnShipmentUpsertWithWhereUniqueWithoutArticleInput } from './article-on-shipment-upsert-with-where-unique-without-article.input';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';
import { ArticleOnShipmentUpdateWithWhereUniqueWithoutArticleInput } from './article-on-shipment-update-with-where-unique-without-article.input';
import { ArticleOnShipmentUpdateManyWithWhereWithoutArticleInput } from './article-on-shipment-update-many-with-where-without-article.input';
import { ArticleOnShipmentScalarWhereInput } from './article-on-shipment-scalar-where.input';

@InputType()
export class ArticleOnShipmentUncheckedUpdateManyWithoutArticleNestedInput {

    @Field(() => [ArticleOnShipmentCreateWithoutArticleInput], {nullable:true})
    @Type(() => ArticleOnShipmentCreateWithoutArticleInput)
    create?: Array<ArticleOnShipmentCreateWithoutArticleInput>;

    @Field(() => [ArticleOnShipmentCreateOrConnectWithoutArticleInput], {nullable:true})
    @Type(() => ArticleOnShipmentCreateOrConnectWithoutArticleInput)
    connectOrCreate?: Array<ArticleOnShipmentCreateOrConnectWithoutArticleInput>;

    @Field(() => [ArticleOnShipmentUpsertWithWhereUniqueWithoutArticleInput], {nullable:true})
    @Type(() => ArticleOnShipmentUpsertWithWhereUniqueWithoutArticleInput)
    upsert?: Array<ArticleOnShipmentUpsertWithWhereUniqueWithoutArticleInput>;

    @Field(() => [ArticleOnShipmentWhereUniqueInput], {nullable:true})
    @Type(() => ArticleOnShipmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>>;

    @Field(() => [ArticleOnShipmentWhereUniqueInput], {nullable:true})
    @Type(() => ArticleOnShipmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>>;

    @Field(() => [ArticleOnShipmentWhereUniqueInput], {nullable:true})
    @Type(() => ArticleOnShipmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>>;

    @Field(() => [ArticleOnShipmentWhereUniqueInput], {nullable:true})
    @Type(() => ArticleOnShipmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>>;

    @Field(() => [ArticleOnShipmentUpdateWithWhereUniqueWithoutArticleInput], {nullable:true})
    @Type(() => ArticleOnShipmentUpdateWithWhereUniqueWithoutArticleInput)
    update?: Array<ArticleOnShipmentUpdateWithWhereUniqueWithoutArticleInput>;

    @Field(() => [ArticleOnShipmentUpdateManyWithWhereWithoutArticleInput], {nullable:true})
    @Type(() => ArticleOnShipmentUpdateManyWithWhereWithoutArticleInput)
    updateMany?: Array<ArticleOnShipmentUpdateManyWithWhereWithoutArticleInput>;

    @Field(() => [ArticleOnShipmentScalarWhereInput], {nullable:true})
    @Type(() => ArticleOnShipmentScalarWhereInput)
    deleteMany?: Array<ArticleOnShipmentScalarWhereInput>;
}
