export type NavItem = {
  label: string;
  path: string;
};

export type RouteWithHandle = RoutesObject & {
  handle?: {
    label?: string;
    showInNav?: boolean;
  };
  children?: RouteWithHandle[];
};

export type User =  {
    id: number,
    name: string,
    username?: string,
    email: string,
    phone?: string,
    website?: string,
    province?: string,
    city: string,
    district?: string,
    street?: string,
    zipcode?: string,
    createdAt?: string,
    updatedAt?: string,
}

export interface Main {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
