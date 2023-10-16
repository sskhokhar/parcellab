import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentCreateNestedOneWithoutArticlesInput } from '../shipment/shipment-create-nested-one-without-articles.input';

@InputType()
export class ArticleOnShipmentCreateWithoutArticleInput {

    @Field(() => ShipmentCreateNestedOneWithoutArticlesInput, {nullable:false})
    shipment!: ShipmentCreateNestedOneWithoutArticlesInput;
}
