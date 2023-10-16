import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AddressMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  addressLine?: true;

  @Field(() => Boolean, { nullable: true })
  postalCode?: true;

  @Field(() => Boolean, { nullable: true })
  country?: true;
}
