import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleOnShipmentUncheckedUpdateManyInput } from './article-on-shipment-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentWhereInput } from './article-on-shipment-where.input';

@ArgsType()
export class UpdateManyArticleOnShipmentArgs {

    @Field(() => ArticleOnShipmentUncheckedUpdateManyInput, {nullable:false})
    @Type(() => ArticleOnShipmentUncheckedUpdateManyInput)
    data!: ArticleOnShipmentUncheckedUpdateManyInput;

    @Field(() => ArticleOnShipmentWhereInput, {nullable:true})
    @Type(() => ArticleOnShipmentWhereInput)
    where?: ArticleOnShipmentWhereInput;
}
