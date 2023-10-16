import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AddressAvgAggregate {

    @Field(() => Float, {nullable:true})
    postalCode?: number;
}
