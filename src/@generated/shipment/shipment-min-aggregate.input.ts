import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShipmentMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    trackingNumber?: true;

    @Field(() => Boolean, {nullable:true})
    carrier?: true;

    @Field(() => Boolean, {nullable:true})
    senderAddressId?: true;

    @Field(() => Boolean, {nullable:true})
    receiverAddressId?: true;
}
