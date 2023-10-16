import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUpdateOneRequiredWithoutShipmentsNestedInput } from '../article/article-update-one-required-without-shipments-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ArticleOnShipmentUpdateWithoutShipmentInput {
  @Field(() => ArticleUpdateOneRequiredWithoutShipmentsNestedInput, {
    nullable: true,
  })
  @Type(() => ArticleUpdateOneRequiredWithoutShipmentsNestedInput)
  article?: ArticleUpdateOneRequiredWithoutShipmentsNestedInput;
}
