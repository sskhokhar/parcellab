import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOnShipmentScalarWhereInput } from './article-on-shipment-scalar-where.input';
import { Type } from 'class-transformer';
import { ArticleOnShipmentUncheckedUpdateManyWithoutShipmentInput } from './article-on-shipment-unchecked-update-many-without-shipment.input';

@InputType()
export class ArticleOnShipmentUpdateManyWithWhereWithoutShipmentInput {

    @Field(() => ArticleOnShipmentScalarWhereInput, {nullable:false})
    @Type(() => ArticleOnShipmentScalarWhereInput)
    where!: ArticleOnShipmentScalarWhereInput;

    @Field(() => ArticleOnShipmentUncheckedUpdateManyWithoutShipmentInput, {nullable:false})
    @Type(() => ArticleOnShipmentUncheckedUpdateManyWithoutShipmentInput)
    data!: ArticleOnShipmentUncheckedUpdateManyWithoutShipmentInput;
}
