import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutShipmentsInput } from './article-create-without-shipments.input';

@InputType()
export class ArticleCreateOrConnectWithoutShipmentsInput {

    @Field(() => ArticleWhereUniqueInput, {nullable:false})
    @Type(() => ArticleWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'sku'>;

    @Field(() => ArticleCreateWithoutShipmentsInput, {nullable:false})
    @Type(() => ArticleCreateWithoutShipmentsInput)
    create!: ArticleCreateWithoutShipmentsInput;
}
