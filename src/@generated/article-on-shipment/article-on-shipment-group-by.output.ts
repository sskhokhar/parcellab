import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArticleOnShipmentCountAggregate } from './article-on-shipment-count-aggregate.output';
import { ArticleOnShipmentMinAggregate } from './article-on-shipment-min-aggregate.output';
import { ArticleOnShipmentMaxAggregate } from './article-on-shipment-max-aggregate.output';

@ObjectType()
export class ArticleOnShipmentGroupBy {
  @Field(() => String, { nullable: false })
  articleId!: string;

  @Field(() => String, { nullable: false })
  shipmentId!: string;

  @Field(() => ArticleOnShipmentCountAggregate, { nullable: true })
  _count?: ArticleOnShipmentCountAggregate;

  @Field(() => ArticleOnShipmentMinAggregate, { nullable: true })
  _min?: ArticleOnShipmentMinAggregate;

  @Field(() => ArticleOnShipmentMaxAggregate, { nullable: true })
  _max?: ArticleOnShipmentMaxAggregate;
}
