import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentCreateWithoutArticlesInput } from './shipment-create-without-articles.input';
import { Type } from 'class-transformer';
import { ShipmentCreateOrConnectWithoutArticlesInput } from './shipment-create-or-connect-without-articles.input';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';

@InputType()
export class ShipmentCreateNestedOneWithoutArticlesInput {
  @Field(() => ShipmentCreateWithoutArticlesInput, { nullable: true })
  @Type(() => ShipmentCreateWithoutArticlesInput)
  create?: ShipmentCreateWithoutArticlesInput;

  @Field(() => ShipmentCreateOrConnectWithoutArticlesInput, { nullable: true })
  @Type(() => ShipmentCreateOrConnectWithoutArticlesInput)
  connectOrCreate?: ShipmentCreateOrConnectWithoutArticlesInput;

  @Field(() => ShipmentWhereUniqueInput, { nullable: true })
  @Type(() => ShipmentWhereUniqueInput)
  connect?: Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>;
}
