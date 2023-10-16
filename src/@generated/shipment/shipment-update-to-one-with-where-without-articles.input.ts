import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentWhereInput } from './shipment-where.input';
import { Type } from 'class-transformer';
import { ShipmentUpdateWithoutArticlesInput } from './shipment-update-without-articles.input';

@InputType()
export class ShipmentUpdateToOneWithWhereWithoutArticlesInput {
  @Field(() => ShipmentWhereInput, { nullable: true })
  @Type(() => ShipmentWhereInput)
  where?: ShipmentWhereInput;

  @Field(() => ShipmentUpdateWithoutArticlesInput, { nullable: false })
  @Type(() => ShipmentUpdateWithoutArticlesInput)
  data!: ShipmentUpdateWithoutArticlesInput;
}
