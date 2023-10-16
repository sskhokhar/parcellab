import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ShipmentUncheckedUpdateManyWithoutSenderAddressNestedInput } from '../shipment/shipment-unchecked-update-many-without-sender-address-nested.input';

@InputType()
export class AddressUncheckedUpdateWithoutReceiverShipmentsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  addressLine?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  postalCode?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  country?: StringFieldUpdateOperationsInput;

  @Field(() => ShipmentUncheckedUpdateManyWithoutSenderAddressNestedInput, {
    nullable: true,
  })
  senderShipments?: ShipmentUncheckedUpdateManyWithoutSenderAddressNestedInput;
}
