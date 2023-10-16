import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateNestedOneWithoutShipmentsInput } from '../article/article-create-nested-one-without-shipments.input';
import { Type } from 'class-transformer';
import { ShipmentCreateNestedOneWithoutArticlesInput } from '../shipment/shipment-create-nested-one-without-articles.input';

@InputType()
export class ArticleOnShipmentCreateInput {

    @Field(() => ArticleCreateNestedOneWithoutShipmentsInput, {nullable:false})
    @Type(() => ArticleCreateNestedOneWithoutShipmentsInput)
    article!: ArticleCreateNestedOneWithoutShipmentsInput;

    @Field(() => ShipmentCreateNestedOneWithoutArticlesInput, {nullable:false})
    shipment!: ShipmentCreateNestedOneWithoutArticlesInput;
}
