// import { Business_Type } from "./entity.types";
export interface Gender {
  MALE: string;
  FEMALE: string;
}

export interface IUser {
  _id?: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  phone_number: string;
  email: string;
  gender: string;
  dob: string;
  password: string;
}

export interface Business_Type {
  individual: string;
  registered_business: string;
  company: string;
}

export interface ISellerAccount {
  _id?: string;
  shop_name: string;
  business_type: Business_Type;
  AM_first_last_name: string;
  AM_phone_number: string;
  email: string;
  password: string;
}

export interface ID_Type {
  passport: string;
  national_identity_number: string;
  Voters_card: string;
  drivers_lisennce: string;
}

export interface Business_Information {
  referrer_email: string;
  address: string;
  address2?: string;
  zip_code?: number;
  city: string;
  country?: string;
  business_owner_first_name?: string;
  business_owner_middle_name?: string;
  business_owner_last_name?: string;
  business_owner_dob?: string;
  business_owner_ID_type?: string;
  id_copy?: string;
  number_of_employees?: string;
  CAC_reg_number?: string;
  CAC_copy?: string;
  copy_of_tax_id_number?: string;
  VAT_registered?: boolean;
  country_you_ship_from?: string;
  Tax_id_number?: string;
}
