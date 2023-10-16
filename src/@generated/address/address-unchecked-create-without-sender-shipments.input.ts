import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShipmentUncheckedCreateNestedManyWithoutReceiverAddressInput } from '../shipment/shipment-unchecked-create-nested-many-without-receiver-address.input';

@InputType()
export class AddressUncheckedCreateWithoutSenderShipmentsInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  addressLine!: string;

  @Field(() => Int, { nullable: false })
  postalCode!: number;

  @Field(() => String, { nullable: false })
  country!: string;

  @Field(() => ShipmentUncheckedCreateNestedManyWithoutReceiverAddressInput, {
    nullable: true,
  })
  receiverShipments?: ShipmentUncheckedCreateNestedManyWithoutReceiverAddressInput;
}
