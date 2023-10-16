import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleOnShipmentOrderByRelationAggregateInput } from '../article-on-shipment/article-on-shipment-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class ArticleOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  qty?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sku?: keyof typeof SortOrder;

  @Field(() => ArticleOnShipmentOrderByRelationAggregateInput, {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentOrderByRelationAggregateInput)
  shipments?: ArticleOnShipmentOrderByRelationAggregateInput;
}
