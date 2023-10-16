import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOnShipmentScalarWhereInput } from './article-on-shipment-scalar-where.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentUncheckedUpdateManyWithoutArticleInput } from './article-on-shipment-unchecked-update-many-without-article.input';

@InputType()
export class ArticleOnShipmentUpdateManyWithWhereWithoutArticleInput {

    @Field(() => ArticleOnShipmentScalarWhereInput, {nullable:false})
    @Type(() => ArticleOnShipmentScalarWhereInput)
    where!: ArticleOnShipmentScalarWhereInput;

    @Field(() => ArticleOnShipmentUncheckedUpdateManyWithoutArticleInput, {nullable:false})
    @Type(() => ArticleOnShipmentUncheckedUpdateManyWithoutArticleInput)
    data!: ArticleOnShipmentUncheckedUpdateManyWithoutArticleInput;
}
