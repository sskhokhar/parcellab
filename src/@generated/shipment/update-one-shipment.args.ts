import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShipmentUpdateInput } from './shipment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';

@ArgsType()
export class UpdateOneShipmentArgs {

    @Field(() => ShipmentUpdateInput, {nullable:false})
    @Type(() => ShipmentUpdateInput)
    data!: ShipmentUpdateInput;

    @Field(() => ShipmentWhereUniqueInput, {nullable:false})
    @Type(() => ShipmentWhereUniqueInput)
    where!: Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>;
}
