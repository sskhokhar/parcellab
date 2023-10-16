import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Shipment } from '../shipment/shipment.model';
import { AddressCount } from './address-count.output';

@ObjectType()
export class Address {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  addressLine!: string;

  @Field(() => Int, { nullable: false })
  postalCode!: number;

  @Field(() => String, { nullable: false })
  country!: string;

  @Field(() => [Shipment], { nullable: true })
  receiverShipments?: Array<Shipment>;

  @Field(() => [Shipment], { nullable: true })
  senderShipments?: Array<Shipment>;

  @Field(() => AddressCount, { nullable: false })
  _count?: AddressCount;
}
