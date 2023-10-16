import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOnShipmentUncheckedCreateNestedManyWithoutShipmentInput } from '../article-on-shipment/article-on-shipment-unchecked-create-nested-many-without-shipment.input';
import { Type } from 'class-transformer';

@InputType()
export class ShipmentUncheckedCreateWithoutSenderAddressInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  trackingNumber!: string;

  @Field(() => String, { nullable: false })
  carrier!: string;

  @Field(() => String, { nullable: false })
  receiverAddressId!: string;

  @Field(() => ArticleOnShipmentUncheckedCreateNestedManyWithoutShipmentInput, {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentUncheckedCreateNestedManyWithoutShipmentInput)
  articles?: ArticleOnShipmentUncheckedCreateNestedManyWithoutShipmentInput;
}
