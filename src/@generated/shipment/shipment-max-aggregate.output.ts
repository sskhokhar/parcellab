import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ShipmentMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    trackingNumber?: string;

    @Field(() => String, {nullable:true})
    carrier?: string;

    @Field(() => String, {nullable:true})
    senderAddressId?: string;

    @Field(() => String, {nullable:true})
    receiverAddressId?: string;
}
