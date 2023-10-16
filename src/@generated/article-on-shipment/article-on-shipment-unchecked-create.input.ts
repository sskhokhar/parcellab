import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArticleOnShipmentUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    articleId!: string;

    @Field(() => String, {nullable:false})
    shipmentId!: string;
}
