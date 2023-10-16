import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ArticleOnShipmentScalarWhereInput {

    @Field(() => [ArticleOnShipmentScalarWhereInput], {nullable:true})
    AND?: Array<ArticleOnShipmentScalarWhereInput>;

    @Field(() => [ArticleOnShipmentScalarWhereInput], {nullable:true})
    OR?: Array<ArticleOnShipmentScalarWhereInput>;

    @Field(() => [ArticleOnShipmentScalarWhereInput], {nullable:true})
    NOT?: Array<ArticleOnShipmentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    articleId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    shipmentId?: StringFilter;
}
