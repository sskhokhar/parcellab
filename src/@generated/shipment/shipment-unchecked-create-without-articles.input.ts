import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShipmentUncheckedCreateWithoutArticlesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    trackingNumber!: string;

    @Field(() => String, {nullable:false})
    carrier!: string;

    @Field(() => String, {nullable:false})
    senderAddressId!: string;

    @Field(() => String, {nullable:false})
    receiverAddressId!: string;
}
