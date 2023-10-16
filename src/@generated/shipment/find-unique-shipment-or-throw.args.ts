import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueShipmentOrThrowArgs {
  @Field(() => ShipmentWhereUniqueInput, { nullable: false })
  @Type(() => ShipmentWhereUniqueInput)
  where!: Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>;
}
