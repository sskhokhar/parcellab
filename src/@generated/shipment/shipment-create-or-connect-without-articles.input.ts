import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';
import { Type } from 'class-transformer';
import { ShipmentCreateWithoutArticlesInput } from './shipment-create-without-articles.input';

@InputType()
export class ShipmentCreateOrConnectWithoutArticlesInput {

    @Field(() => ShipmentWhereUniqueInput, {nullable:false})
    @Type(() => ShipmentWhereUniqueInput)
    where!: Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>;

    @Field(() => ShipmentCreateWithoutArticlesInput, {nullable:false})
    @Type(() => ShipmentCreateWithoutArticlesInput)
    create!: ShipmentCreateWithoutArticlesInput;
}
