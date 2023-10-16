import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateNestedOneWithoutShipmentsInput } from '../article/article-create-nested-one-without-shipments.input';
import { Type } from 'class-transformer';

@InputType()
export class ArticleOnShipmentCreateWithoutShipmentInput {
  @Field(() => ArticleCreateNestedOneWithoutShipmentsInput, { nullable: false })
  @Type(() => ArticleCreateNestedOneWithoutShipmentsInput)
  article!: ArticleCreateNestedOneWithoutShipmentsInput;
}
