import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentUpdateWithoutArticlesInput } from './shipment-update-without-articles.input';
import { Type } from 'class-transformer';
import { ShipmentCreateWithoutArticlesInput } from './shipment-create-without-articles.input';
import { ShipmentWhereInput } from './shipment-where.input';

@InputType()
export class ShipmentUpsertWithoutArticlesInput {

    @Field(() => ShipmentUpdateWithoutArticlesInput, {nullable:false})
    @Type(() => ShipmentUpdateWithoutArticlesInput)
    update!: ShipmentUpdateWithoutArticlesInput;

    @Field(() => ShipmentCreateWithoutArticlesInput, {nullable:false})
    @Type(() => ShipmentCreateWithoutArticlesInput)
    create!: ShipmentCreateWithoutArticlesInput;

    @Field(() => ShipmentWhereInput, {nullable:true})
    @Type(() => ShipmentWhereInput)
    where?: ShipmentWhereInput;
}
