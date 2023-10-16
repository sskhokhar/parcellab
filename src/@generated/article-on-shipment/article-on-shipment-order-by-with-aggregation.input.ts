import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleOnShipmentCountOrderByAggregateInput } from './article-on-shipment-count-order-by-aggregate.input';
import { ArticleOnShipmentMaxOrderByAggregateInput } from './article-on-shipment-max-order-by-aggregate.input';
import { ArticleOnShipmentMinOrderByAggregateInput } from './article-on-shipment-min-order-by-aggregate.input';

@InputType()
export class ArticleOnShipmentOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  articleId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  shipmentId?: keyof typeof SortOrder;

  @Field(() => ArticleOnShipmentCountOrderByAggregateInput, { nullable: true })
  _count?: ArticleOnShipmentCountOrderByAggregateInput;

  @Field(() => ArticleOnShipmentMaxOrderByAggregateInput, { nullable: true })
  _max?: ArticleOnShipmentMaxOrderByAggregateInput;

  @Field(() => ArticleOnShipmentMinOrderByAggregateInput, { nullable: true })
  _min?: ArticleOnShipmentMinOrderByAggregateInput;
}
