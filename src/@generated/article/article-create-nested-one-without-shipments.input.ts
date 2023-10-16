import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutShipmentsInput } from './article-create-without-shipments.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutShipmentsInput } from './article-create-or-connect-without-shipments.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateNestedOneWithoutShipmentsInput {

    @Field(() => ArticleCreateWithoutShipmentsInput, {nullable:true})
    @Type(() => ArticleCreateWithoutShipmentsInput)
    create?: ArticleCreateWithoutShipmentsInput;

    @Field(() => ArticleCreateOrConnectWithoutShipmentsInput, {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutShipmentsInput)
    connectOrCreate?: ArticleCreateOrConnectWithoutShipmentsInput;

    @Field(() => ArticleWhereUniqueInput, {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'sku'>;
}
