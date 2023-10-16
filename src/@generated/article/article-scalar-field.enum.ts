import { registerEnumType } from '@nestjs/graphql';

export enum ArticleScalarFieldEnum {
  id = 'id',
  name = 'name',
  qty = 'qty',
  price = 'price',
  sku = 'sku',
}

registerEnumType(ArticleScalarFieldEnum, {
  name: 'ArticleScalarFieldEnum',
  description: undefined,
});
