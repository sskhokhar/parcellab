import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentCreateWithoutShipmentInput } from './article-on-shipment-create-without-shipment.input';

@InputType()
export class ArticleOnShipmentCreateOrConnectWithoutShipmentInput {

    @Field(() => ArticleOnShipmentWhereUniqueInput, {nullable:false})
    @Type(() => ArticleOnShipmentWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleOnShipmentWhereUniqueInput, 'articleId_shipmentId'>;

    @Field(() => ArticleOnShipmentCreateWithoutShipmentInput, {nullable:false})
    @Type(() => ArticleOnShipmentCreateWithoutShipmentInput)
    create!: ArticleOnShipmentCreateWithoutShipmentInput;
}
