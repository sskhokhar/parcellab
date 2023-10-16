import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShipmentWhereInput } from './shipment-where.input';
import { Type } from 'class-transformer';
import { ShipmentOrderByWithRelationInput } from './shipment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShipmentScalarFieldEnum } from './shipment-scalar-field.enum';

@ArgsType()
export class FindFirstShipmentOrThrowArgs {
  @Field(() => ShipmentWhereInput, { nullable: true })
  @Type(() => ShipmentWhereInput)
  where?: ShipmentWhereInput;

  @Field(() => [ShipmentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ShipmentOrderByWithRelationInput>;

  @Field(() => ShipmentWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ShipmentScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ShipmentScalarFieldEnum>;
}
