import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArticleOnShipmentMinAggregate {

    @Field(() => String, {nullable:true})
    articleId?: string;

    @Field(() => String, {nullable:true})
    shipmentId?: string;
}
