import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentWhereInput } from './shipment-where.input';

@InputType()
export class ShipmentRelationFilter {

    @Field(() => ShipmentWhereInput, {nullable:true})
    is?: ShipmentWhereInput;

    @Field(() => ShipmentWhereInput, {nullable:true})
    isNot?: ShipmentWhereInput;
}
