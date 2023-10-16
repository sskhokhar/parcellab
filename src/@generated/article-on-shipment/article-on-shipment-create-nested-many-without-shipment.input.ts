import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOnShipmentCreateWithoutShipmentInput } from './article-on-shipment-create-without-shipment.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentCreateOrConnectWithoutShipmentInput } from './article-on-shipment-create-or-connect-without-shipment.input';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';

@InputType()
export class ArticleOnShipmentCreateNestedManyWithoutShipmentInput {

    @Field(() => [ArticleOnShipmentCreateWithoutShipmentInput], {nullable:true})
    @Type(() => ArticleOnShipmentCreateWithoutShipmentInput)
    create?: Array<ArticleOnShipmentCreateWithoutShipmentInput>;

    @Field(() => [ArticleOnShipmentCreateOrConnectWithoutShipmentInput], {nullable:true})
    @Type(() => ArticleOnShipmentCreateOrConnectWithoutShipmentInput)
    connectOrCreate?: Array<ArticleOnShipmentCreateOrConnectWithoutShipmentInput>;

    @Field(() => [ArticleOnShipmentWhereUniqueInput], {nullable:true})
    @Type(() => ArticleOnShipmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>>;
}
