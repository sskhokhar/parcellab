import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';
import { Type } from 'class-transformer';
import { ShipmentCreateInput } from './shipment-create.input';
import { ShipmentUpdateInput } from './shipment-update.input';

@ArgsType()
export class UpsertOneShipmentArgs {

    @Field(() => ShipmentWhereUniqueInput, {nullable:false})
    @Type(() => ShipmentWhereUniqueInput)
    where!: Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>;

    @Field(() => ShipmentCreateInput, {nullable:false})
    @Type(() => ShipmentCreateInput)
    create!: ShipmentCreateInput;

    @Field(() => ShipmentUpdateInput, {nullable:false})
    @Type(() => ShipmentUpdateInput)
    update!: ShipmentUpdateInput;
}
