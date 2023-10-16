import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArticleOnShipmentCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    articleId?: true;

    @Field(() => Boolean, {nullable:true})
    shipmentId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
