import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class AddressScalarWhereWithAggregatesInput {

    @Field(() => [AddressScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AddressScalarWhereWithAggregatesInput>;

    @Field(() => [AddressScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AddressScalarWhereWithAggregatesInput>;

    @Field(() => [AddressScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AddressScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    addressLine?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    postalCode?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    country?: StringWithAggregatesFilter;
}
