import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArticleOnShipmentMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    articleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shipmentId?: keyof typeof SortOrder;
}
