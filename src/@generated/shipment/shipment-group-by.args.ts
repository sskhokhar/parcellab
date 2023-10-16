import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShipmentWhereInput } from './shipment-where.input';
import { Type } from 'class-transformer';
import { ShipmentOrderByWithAggregationInput } from './shipment-order-by-with-aggregation.input';
import { ShipmentScalarFieldEnum } from './shipment-scalar-field.enum';
import { ShipmentScalarWhereWithAggregatesInput } from './shipment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShipmentCountAggregateInput } from './shipment-count-aggregate.input';
import { ShipmentMinAggregateInput } from './shipment-min-aggregate.input';
import { ShipmentMaxAggregateInput } from './shipment-max-aggregate.input';

@ArgsType()
export class ShipmentGroupByArgs {
  @Field(() => ShipmentWhereInput, { nullable: true })
  @Type(() => ShipmentWhereInput)
  where?: ShipmentWhereInput;

  @Field(() => [ShipmentOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ShipmentOrderByWithAggregationInput>;

  @Field(() => [ShipmentScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ShipmentScalarFieldEnum>;

  @Field(() => ShipmentScalarWhereWithAggregatesInput, { nullable: true })
  having?: ShipmentScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ShipmentCountAggregateInput, { nullable: true })
  _count?: ShipmentCountAggregateInput;

  @Field(() => ShipmentMinAggregateInput, { nullable: true })
  _min?: ShipmentMinAggregateInput;

  @Field(() => ShipmentMaxAggregateInput, { nullable: true })
  _max?: ShipmentMaxAggregateInput;
}
