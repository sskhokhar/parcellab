import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AddressCountAggregate } from './address-count-aggregate.output';
import { AddressAvgAggregate } from './address-avg-aggregate.output';
import { AddressSumAggregate } from './address-sum-aggregate.output';
import { AddressMinAggregate } from './address-min-aggregate.output';
import { AddressMaxAggregate } from './address-max-aggregate.output';

@ObjectType()
export class AddressGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  addressLine!: string;

  @Field(() => Int, { nullable: false })
  postalCode!: number;

  @Field(() => String, { nullable: false })
  country!: string;

  @Field(() => AddressCountAggregate, { nullable: true })
  _count?: AddressCountAggregate;

  @Field(() => AddressAvgAggregate, { nullable: true })
  _avg?: AddressAvgAggregate;

  @Field(() => AddressSumAggregate, { nullable: true })
  _sum?: AddressSumAggregate;

  @Field(() => AddressMinAggregate, { nullable: true })
  _min?: AddressMinAggregate;

  @Field(() => AddressMaxAggregate, { nullable: true })
  _max?: AddressMaxAggregate;
}
