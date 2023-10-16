import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShipmentCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  trackingNumber!: number;

  @Field(() => Int, { nullable: false })
  carrier!: number;

  @Field(() => Int, { nullable: false })
  senderAddressId!: number;

  @Field(() => Int, { nullable: false })
  receiverAddressId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
