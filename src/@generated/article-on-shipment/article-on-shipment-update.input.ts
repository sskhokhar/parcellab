import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUpdateOneRequiredWithoutShipmentsNestedInput } from '../article/article-update-one-required-without-shipments-nested.input';
import { Type } from 'class-transformer';
import { ShipmentUpdateOneRequiredWithoutArticlesNestedInput } from '../shipment/shipment-update-one-required-without-articles-nested.input';

@InputType()
export class ArticleOnShipmentUpdateInput {
  @Field(() => ArticleUpdateOneRequiredWithoutShipmentsNestedInput, {
    nullable: true,
  })
  @Type(() => ArticleUpdateOneRequiredWithoutShipmentsNestedInput)
  article?: ArticleUpdateOneRequiredWithoutShipmentsNestedInput;

  @Field(() => ShipmentUpdateOneRequiredWithoutArticlesNestedInput, {
    nullable: true,
  })
  shipment?: ShipmentUpdateOneRequiredWithoutArticlesNestedInput;
}
