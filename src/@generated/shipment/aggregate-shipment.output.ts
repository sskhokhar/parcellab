import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShipmentCountAggregate } from './shipment-count-aggregate.output';
import { ShipmentMinAggregate } from './shipment-min-aggregate.output';
import { ShipmentMaxAggregate } from './shipment-max-aggregate.output';

@ObjectType()
export class AggregateShipment {
  @Field(() => ShipmentCountAggregate, { nullable: true })
  _count?: ShipmentCountAggregate;

  @Field(() => ShipmentMinAggregate, { nullable: true })
  _min?: ShipmentMinAggregate;

  @Field(() => ShipmentMaxAggregate, { nullable: true })
  _max?: ShipmentMaxAggregate;
}
