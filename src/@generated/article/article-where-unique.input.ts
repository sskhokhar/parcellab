import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { ArticleOnShipmentListRelationFilter } from '../article-on-shipment/article-on-shipment-list-relation-filter.input';

@InputType()
export class ArticleWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  sku?: string;

  @Field(() => [ArticleWhereInput], { nullable: true })
  @Type(() => ArticleWhereInput)
  AND?: Array<ArticleWhereInput>;

  @Field(() => [ArticleWhereInput], { nullable: true })
  @Type(() => ArticleWhereInput)
  OR?: Array<ArticleWhereInput>;

  @Field(() => [ArticleWhereInput], { nullable: true })
  @Type(() => ArticleWhereInput)
  NOT?: Array<ArticleWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  qty?: IntFilter;

  @Field(() => DecimalFilter, { nullable: true })
  @Type(() => DecimalFilter)
  price?: DecimalFilter;

  @Field(() => ArticleOnShipmentListRelationFilter, { nullable: true })
  @Type(() => ArticleOnShipmentListRelationFilter)
  shipments?: ArticleOnShipmentListRelationFilter;
}
