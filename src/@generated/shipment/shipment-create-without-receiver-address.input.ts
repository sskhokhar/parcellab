import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOnShipmentCreateNestedManyWithoutShipmentInput } from '../article-on-shipment/article-on-shipment-create-nested-many-without-shipment.input';
import { Type } from 'class-transformer';
import { AddressCreateNestedOneWithoutSenderShipmentsInput } from '../address/address-create-nested-one-without-sender-shipments.input';

@InputType()
export class ShipmentCreateWithoutReceiverAddressInput {
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

  @Field(() => AddressCreateNestedOneWithoutSenderShipmentsInput, {
    nullable: false,
  })
  senderAddress!: AddressCreateNestedOneWithoutSenderShipmentsInput;
}
