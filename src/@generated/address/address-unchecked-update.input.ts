import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ShipmentUncheckedUpdateManyWithoutReceiverAddressNestedInput } from '../shipment/shipment-unchecked-update-many-without-receiver-address-nested.input';
import { ShipmentUncheckedUpdateManyWithoutSenderAddressNestedInput } from '../shipment/shipment-unchecked-update-many-without-sender-address-nested.input';

@InputType()
export class AddressUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    addressLine?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    postalCode?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    country?: StringFieldUpdateOperationsInput;

    @Field(() => ShipmentUncheckedUpdateManyWithoutReceiverAddressNestedInput, {nullable:true})
    receiverShipments?: ShipmentUncheckedUpdateManyWithoutReceiverAddressNestedInput;

    @Field(() => ShipmentUncheckedUpdateManyWithoutSenderAddressNestedInput, {nullable:true})
    senderShipments?: ShipmentUncheckedUpdateManyWithoutSenderAddressNestedInput;
}
