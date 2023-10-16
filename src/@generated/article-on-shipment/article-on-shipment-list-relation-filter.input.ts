import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOnShipmentWhereInput } from './article-on-shipment-where.input';

@InputType()
export class ArticleOnShipmentListRelationFilter {
  @Field(() => ArticleOnShipmentWhereInput, { nullable: true })
  every?: ArticleOnShipmentWhereInput;

  @Field(() => ArticleOnShipmentWhereInput, { nullable: true })
  some?: ArticleOnShipmentWhereInput;

  @Field(() => ArticleOnShipmentWhereInput, { nullable: true })
  none?: ArticleOnShipmentWhereInput;
}
