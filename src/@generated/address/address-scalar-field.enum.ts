import { registerEnumType } from '@nestjs/graphql';

export enum AddressScalarFieldEnum {
  id = 'id',
  addressLine = 'addressLine',
  postalCode = 'postalCode',
  country = 'country',
}

registerEnumType(AddressScalarFieldEnum, {
  name: 'AddressScalarFieldEnum',
  description: undefined,
});
