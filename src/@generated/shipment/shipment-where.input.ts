import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ArticleOnShipmentListRelationFilter } from '../article-on-shipment/article-on-shipment-list-relation-filter.input';
import { Type } from 'class-transformer';
import { AddressRelationFilter } from '../address/address-relation-filter.input';

@InputType()
export class ShipmentWhereInput {

    @Field(() => [ShipmentWhereInput], {nullable:true})
    AND?: Array<ShipmentWhereInput>;

    @Field(() => [ShipmentWhereInput], {nullable:true})
    OR?: Array<ShipmentWhereInput>;

    @Field(() => [ShipmentWhereInput], {nullable:true})
    NOT?: Array<ShipmentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    trackingNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    carrier?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    senderAddressId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    receiverAddressId?: StringFilter;

    @Field(() => ArticleOnShipmentListRelationFilter, {nullable:true})
    @Type(() => ArticleOnShipmentListRelationFilter)
    articles?: ArticleOnShipmentListRelationFilter;

    @Field(() => AddressRelationFilter, {nullable:true})
    senderAddress?: AddressRelationFilter;

    @Field(() => AddressRelationFilter, {nullable:true})
    receiverAddress?: AddressRelationFilter;
}
