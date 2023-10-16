import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleOnShipmentWhereInput } from './article-on-shipment-where.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentOrderByWithRelationInput } from './article-on-shipment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ArticleOnShipmentWhereUniqueInput } from './article-on-shipment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArticleOnShipmentCountAggregateInput } from './article-on-shipment-count-aggregate.input';
import { ArticleOnShipmentMinAggregateInput } from './article-on-shipment-min-aggregate.input';
import { ArticleOnShipmentMaxAggregateInput } from './article-on-shipment-max-aggregate.input';

@ArgsType()
export class ArticleOnShipmentAggregateArgs {
  @Field(() => ArticleOnShipmentWhereInput, { nullable: true })
  @Type(() => ArticleOnShipmentWhereInput)
  where?: ArticleOnShipmentWhereInput;

  @Field(() => [ArticleOnShipmentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ArticleOnShipmentOrderByWithRelationInput>;

  @Field(() => ArticleOnShipmentWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<
    ArticleOnShipmentWhereUniqueInput,
    'articleId_shipmentId'
  >;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ArticleOnShipmentCountAggregateInput, { nullable: true })
  _count?: ArticleOnShipmentCountAggregateInput;

  @Field(() => ArticleOnShipmentMinAggregateInput, { nullable: true })
  _min?: ArticleOnShipmentMinAggregateInput;

  @Field(() => ArticleOnShipmentMaxAggregateInput, { nullable: true })
  _max?: ArticleOnShipmentMaxAggregateInput;
}
