import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutShipmentsInput } from './article-update-without-shipments.input';

@InputType()
export class ArticleUpdateToOneWithWhereWithoutShipmentsInput {

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;

    @Field(() => ArticleUpdateWithoutShipmentsInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutShipmentsInput)
    data!: ArticleUpdateWithoutShipmentsInput;
}
