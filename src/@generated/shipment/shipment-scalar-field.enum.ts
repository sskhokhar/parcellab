import { registerEnumType } from '@nestjs/graphql';

export enum ShipmentScalarFieldEnum {
  id = 'id',
  trackingNumber = 'trackingNumber',
  carrier = 'carrier',
  senderAddressId = 'senderAddressId',
  receiverAddressId = 'receiverAddressId',
}

registerEnumType(ShipmentScalarFieldEnum, {
  name: 'ShipmentScalarFieldEnum',
  description: undefined,
});
