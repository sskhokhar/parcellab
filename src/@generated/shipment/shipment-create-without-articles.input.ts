import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateNestedOneWithoutSenderShipmentsInput } from '../address/address-create-nested-one-without-sender-shipments.input';
import { AddressCreateNestedOneWithoutReceiverShipmentsInput } from '../address/address-create-nested-one-without-receiver-shipments.input';

@InputType()
export class ShipmentCreateWithoutArticlesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    trackingNumber!: string;

    @Field(() => String, {nullable:false})
    carrier!: string;

    @Field(() => AddressCreateNestedOneWithoutSenderShipmentsInput, {nullable:false})
    senderAddress!: AddressCreateNestedOneWithoutSenderShipmentsInput;

    @Field(() => AddressCreateNestedOneWithoutReceiverShipmentsInput, {nullable:false})
    receiverAddress!: AddressCreateNestedOneWithoutReceiverShipmentsInput;
}
