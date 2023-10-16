import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShipmentUncheckedCreateNestedManyWithoutSenderAddressInput } from '../shipment/shipment-unchecked-create-nested-many-without-sender-address.input';

@InputType()
export class AddressUncheckedCreateWithoutReceiverShipmentsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  addressLine!: string;

  @Field(() => Int, { nullable: false })
  postalCode!: number;

  @Field(() => String, { nullable: false })
  country!: string;

  @Field(() => ShipmentUncheckedCreateNestedManyWithoutSenderAddressInput, {
    nullable: true,
  })
  senderShipments?: ShipmentUncheckedCreateNestedManyWithoutSenderAddressInput;
}
