import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ArticleOnShipmentUpdateManyWithoutShipmentNestedInput } from '../article-on-shipment/article-on-shipment-update-many-without-shipment-nested.input';
import { Type } from 'class-transformer';
import { AddressUpdateOneRequiredWithoutSenderShipmentsNestedInput } from '../address/address-update-one-required-without-sender-shipments-nested.input';

@InputType()
export class ShipmentUpdateWithoutReceiverAddressInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    trackingNumber?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    carrier?: StringFieldUpdateOperationsInput;

    @Field(() => ArticleOnShipmentUpdateManyWithoutShipmentNestedInput, {nullable:true})
    @Type(() => ArticleOnShipmentUpdateManyWithoutShipmentNestedInput)
    articles?: ArticleOnShipmentUpdateManyWithoutShipmentNestedInput;

    @Field(() => AddressUpdateOneRequiredWithoutSenderShipmentsNestedInput, {nullable:true})
    senderAddress?: AddressUpdateOneRequiredWithoutSenderShipmentsNestedInput;
}
