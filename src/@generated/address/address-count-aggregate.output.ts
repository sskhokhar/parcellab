import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AddressCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  addressLine!: number;

  @Field(() => Int, { nullable: false })
  postalCode!: number;

  @Field(() => Int, { nullable: false })
  country!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
