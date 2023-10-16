import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArticleOnShipmentUncheckedCreateWithoutShipmentInput {

    @Field(() => String, {nullable:false})
    articleId!: string;
}
