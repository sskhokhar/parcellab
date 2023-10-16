import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../prisma/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentUpdateManyWithoutArticleNestedInput } from '../article-on-shipment/article-on-shipment-update-many-without-article-nested.input';

@InputType()
export class ArticleUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  qty?: IntFieldUpdateOperationsInput;

  @Field(() => DecimalFieldUpdateOperationsInput, { nullable: true })
  @Type(() => DecimalFieldUpdateOperationsInput)
  price?: DecimalFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sku?: StringFieldUpdateOperationsInput;

  @Field(() => ArticleOnShipmentUpdateManyWithoutArticleNestedInput, {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentUpdateManyWithoutArticleNestedInput)
  shipments?: ArticleOnShipmentUpdateManyWithoutArticleNestedInput;
}
