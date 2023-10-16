import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArticleOnShipmentUncheckedCreateWithoutArticleInput {

    @Field(() => String, {nullable:false})
    shipmentId!: string;
}
