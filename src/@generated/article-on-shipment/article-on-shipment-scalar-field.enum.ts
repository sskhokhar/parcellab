import { registerEnumType } from '@nestjs/graphql';

export enum ArticleOnShipmentScalarFieldEnum {
  articleId = 'articleId',
  shipmentId = 'shipmentId',
}

registerEnumType(ArticleOnShipmentScalarFieldEnum, {
  name: 'ArticleOnShipmentScalarFieldEnum',
  description: undefined,
});
