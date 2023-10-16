import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleOnShipmentWhereInput } from './article-on-shipment-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyArticleOnShipmentArgs {
  @Field(() => ArticleOnShipmentWhereInput, { nullable: true })
  @Type(() => ArticleOnShipmentWhereInput)
  where?: ArticleOnShipmentWhereInput;
}
