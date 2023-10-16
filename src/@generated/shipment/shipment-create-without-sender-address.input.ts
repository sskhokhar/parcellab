import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOnShipmentCreateNestedManyWithoutShipmentInput } from '../article-on-shipment/article-on-shipment-create-nested-many-without-shipment.input';
import { Type } from 'class-transformer';
import { AddressCreateNestedOneWithoutReceiverShipmentsInput } from '../address/address-create-nested-one-without-receiver-shipments.input';

@InputType()
export class ShipmentCreateWithoutSenderAddressInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  trackingNumber!: string;

  @Field(() => String, { nullable: false })
  carrier!: string;

  @Field(() => ArticleOnShipmentCreateNestedManyWithoutShipmentInput, {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentCreateNestedManyWithoutShipmentInput)
  articles?: ArticleOnShipmentCreateNestedManyWithoutShipmentInput;

  @Field(() => AddressCreateNestedOneWithoutReceiverShipmentsInput, {
    nullable: false,
  })
  receiverAddress!: AddressCreateNestedOneWithoutReceiverShipmentsInput;
}
