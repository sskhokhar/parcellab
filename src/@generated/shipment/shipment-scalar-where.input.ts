import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ShipmentScalarWhereInput {

    @Field(() => [ShipmentScalarWhereInput], {nullable:true})
    AND?: Array<ShipmentScalarWhereInput>;

    @Field(() => [ShipmentScalarWhereInput], {nullable:true})
    OR?: Array<ShipmentScalarWhereInput>;

    @Field(() => [ShipmentScalarWhereInput], {nullable:true})
    NOT?: Array<ShipmentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    trackingNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    carrier?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    senderAddressId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    receiverAddressId?: StringFilter;
}
