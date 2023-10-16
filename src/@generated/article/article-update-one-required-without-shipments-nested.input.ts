import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutShipmentsInput } from './article-create-without-shipments.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutShipmentsInput } from './article-create-or-connect-without-shipments.input';
import { ArticleUpsertWithoutShipmentsInput } from './article-upsert-without-shipments.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateToOneWithWhereWithoutShipmentsInput } from './article-update-to-one-with-where-without-shipments.input';

@InputType()
export class ArticleUpdateOneRequiredWithoutShipmentsNestedInput {
  @Field(() => ArticleCreateWithoutShipmentsInput, { nullable: true })
  @Type(() => ArticleCreateWithoutShipmentsInput)
  create?: ArticleCreateWithoutShipmentsInput;

  @Field(() => ArticleCreateOrConnectWithoutShipmentsInput, { nullable: true })
  @Type(() => ArticleCreateOrConnectWithoutShipmentsInput)
  connectOrCreate?: ArticleCreateOrConnectWithoutShipmentsInput;

  @Field(() => ArticleUpsertWithoutShipmentsInput, { nullable: true })
  @Type(() => ArticleUpsertWithoutShipmentsInput)
  upsert?: ArticleUpsertWithoutShipmentsInput;

  @Field(() => ArticleWhereUniqueInput, { nullable: true })
  @Type(() => ArticleWhereUniqueInput)
  connect?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'sku'>;

  @Field(() => ArticleUpdateToOneWithWhereWithoutShipmentsInput, {
    nullable: true,
  })
  @Type(() => ArticleUpdateToOneWithWhereWithoutShipmentsInput)
  update?: ArticleUpdateToOneWithWhereWithoutShipmentsInput;
}
