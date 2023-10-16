import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ShipmentUpdateManyWithoutSenderAddressNestedInput } from '../shipment/shipment-update-many-without-sender-address-nested.input';

@InputType()
export class AddressUpdateWithoutReceiverShipmentsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  addressLine?: StringFieldUpdateOperationsInput;

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  postalCode?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  country?: StringFieldUpdateOperationsInput;

  @Field(() => ShipmentUpdateManyWithoutSenderAddressNestedInput, {
    nullable: true,
  })
  senderShipments?: ShipmentUpdateManyWithoutSenderAddressNestedInput;
}
