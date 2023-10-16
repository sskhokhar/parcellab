import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Article } from '../article/article.model';
import { Shipment } from '../shipment/shipment.model';

@ObjectType()
export class ArticleOnShipment {
  @Field(() => String, { nullable: false })
  articleId!: string;

  @Field(() => String, { nullable: false })
  shipmentId!: string;

  @Field(() => Article, { nullable: false })
  article?: Article;

  @Field(() => Shipment, { nullable: false })
  shipment?: Shipment;
}
