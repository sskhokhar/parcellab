import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentUpdateOneRequiredWithoutArticlesNestedInput } from '../shipment/shipment-update-one-required-without-articles-nested.input';

@InputType()
export class ArticleOnShipmentUpdateWithoutArticleInput {

    @Field(() => ShipmentUpdateOneRequiredWithoutArticlesNestedInput, {nullable:true})
    shipment?: ShipmentUpdateOneRequiredWithoutArticlesNestedInput;
}
