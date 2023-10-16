import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShipmentOrderByRelationAggregateInput } from '../shipment/shipment-order-by-relation-aggregate.input';

@InputType()
export class AddressOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    addressLine?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postalCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => ShipmentOrderByRelationAggregateInput, {nullable:true})
    receiverShipments?: ShipmentOrderByRelationAggregateInput;

    @Field(() => ShipmentOrderByRelationAggregateInput, {nullable:true})
    senderShipments?: ShipmentOrderByRelationAggregateInput;
}
