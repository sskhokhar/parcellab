import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AddressUpdateOneRequiredWithoutSenderShipmentsNestedInput } from '../address/address-update-one-required-without-sender-shipments-nested.input';
import { AddressUpdateOneRequiredWithoutReceiverShipmentsNestedInput } from '../address/address-update-one-required-without-receiver-shipments-nested.input';

@InputType()
export class ShipmentUpdateWithoutArticlesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    trackingNumber?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    carrier?: StringFieldUpdateOperationsInput;

    @Field(() => AddressUpdateOneRequiredWithoutSenderShipmentsNestedInput, {nullable:true})
    senderAddress?: AddressUpdateOneRequiredWithoutSenderShipmentsNestedInput;

    @Field(() => AddressUpdateOneRequiredWithoutReceiverShipmentsNestedInput, {nullable:true})
    receiverAddress?: AddressUpdateOneRequiredWithoutReceiverShipmentsNestedInput;
}
