import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipmentCreateWithoutArticlesInput } from './shipment-create-without-articles.input';
import { Type } from 'class-transformer';
import { ShipmentCreateOrConnectWithoutArticlesInput } from './shipment-create-or-connect-without-articles.input';
import { ShipmentUpsertWithoutArticlesInput } from './shipment-upsert-without-articles.input';
import { Prisma } from '@prisma/client';
import { ShipmentWhereUniqueInput } from './shipment-where-unique.input';
import { ShipmentUpdateToOneWithWhereWithoutArticlesInput } from './shipment-update-to-one-with-where-without-articles.input';

@InputType()
export class ShipmentUpdateOneRequiredWithoutArticlesNestedInput {
  @Field(() => ShipmentCreateWithoutArticlesInput, { nullable: true })
  @Type(() => ShipmentCreateWithoutArticlesInput)
  create?: ShipmentCreateWithoutArticlesInput;

  @Field(() => ShipmentCreateOrConnectWithoutArticlesInput, { nullable: true })
  @Type(() => ShipmentCreateOrConnectWithoutArticlesInput)
  connectOrCreate?: ShipmentCreateOrConnectWithoutArticlesInput;

  @Field(() => ShipmentUpsertWithoutArticlesInput, { nullable: true })
  @Type(() => ShipmentUpsertWithoutArticlesInput)
  upsert?: ShipmentUpsertWithoutArticlesInput;

  @Field(() => ShipmentWhereUniqueInput, { nullable: true })
  @Type(() => ShipmentWhereUniqueInput)
  connect?: Prisma.AtLeast<ShipmentWhereUniqueInput, 'id' | 'trackingNumber'>;

  @Field(() => ShipmentUpdateToOneWithWhereWithoutArticlesInput, {
    nullable: true,
  })
  @Type(() => ShipmentUpdateToOneWithWhereWithoutArticlesInput)
  update?: ShipmentUpdateToOneWithWhereWithoutArticlesInput;
}
