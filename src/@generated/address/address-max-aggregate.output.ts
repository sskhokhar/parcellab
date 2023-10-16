import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AddressMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  addressLine?: string;

  @Field(() => Int, { nullable: true })
  postalCode?: number;

  @Field(() => String, { nullable: true })
  country?: string;
}
