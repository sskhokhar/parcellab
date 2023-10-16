import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ArticleOnShipmentCreateNestedManyWithoutArticleInput } from '../article-on-shipment/article-on-shipment-create-nested-many-without-article.input';

@InputType()
export class ArticleCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: false })
  qty!: number;

  @Field(() => GraphQLDecimal, { nullable: false })
  @Type(() => Object)
  @Transform(transformToDecimal)
  price!: Decimal;

  @Field(() => String, { nullable: false })
  sku!: string;

  @Field(() => ArticleOnShipmentCreateNestedManyWithoutArticleInput, {
    nullable: true,
  })
  @Type(() => ArticleOnShipmentCreateNestedManyWithoutArticleInput)
  shipments?: ArticleOnShipmentCreateNestedManyWithoutArticleInput;
}
