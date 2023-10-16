import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUpdateWithoutShipmentsInput } from './article-update-without-shipments.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutShipmentsInput } from './article-create-without-shipments.input';
import { ArticleWhereInput } from './article-where.input';

@InputType()
export class ArticleUpsertWithoutShipmentsInput {
  @Field(() => ArticleUpdateWithoutShipmentsInput, { nullable: false })
  @Type(() => ArticleUpdateWithoutShipmentsInput)
  update!: ArticleUpdateWithoutShipmentsInput;

  @Field(() => ArticleCreateWithoutShipmentsInput, { nullable: false })
  @Type(() => ArticleCreateWithoutShipmentsInput)
  create!: ArticleCreateWithoutShipmentsInput;

  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  where?: ArticleWhereInput;
}
