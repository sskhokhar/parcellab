import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleOrderByWithRelationInput } from '../article/article-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ShipmentOrderByWithRelationInput } from '../shipment/shipment-order-by-with-relation.input';

@InputType()
export class ArticleOnShipmentOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  articleId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  shipmentId?: keyof typeof SortOrder;

  @Field(() => ArticleOrderByWithRelationInput, { nullable: true })
  @Type(() => ArticleOrderByWithRelationInput)
  article?: ArticleOrderByWithRelationInput;

  @Field(() => ShipmentOrderByWithRelationInput, { nullable: true })
  shipment?: ShipmentOrderByWithRelationInput;
}
