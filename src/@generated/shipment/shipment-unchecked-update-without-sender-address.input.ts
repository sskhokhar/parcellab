import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ArticleOnShipmentUncheckedUpdateManyWithoutShipmentNestedInput } from '../article-on-shipment/article-on-shipment-unchecked-update-many-without-shipment-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ShipmentUncheckedUpdateWithoutSenderAddressInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  trackingNumber?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  carrier?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  receiverAddressId?: StringFieldUpdateOperationsInput;

  @Field(() => ArticleOnShipmentUncheckedUpdateManyWithoutShipmentNestedInput, {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentUncheckedUpdateManyWithoutShipmentNestedInput)
  articles?: ArticleOnShipmentUncheckedUpdateManyWithoutShipmentNestedInput;
}
