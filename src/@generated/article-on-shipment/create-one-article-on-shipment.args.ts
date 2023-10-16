import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleOnShipmentCreateInput } from './article-on-shipment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneArticleOnShipmentArgs {

    @Field(() => ArticleOnShipmentCreateInput, {nullable:false})
    @Type(() => ArticleOnShipmentCreateInput)
    data!: ArticleOnShipmentCreateInput;
}
