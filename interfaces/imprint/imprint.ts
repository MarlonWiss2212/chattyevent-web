import { ImprintAddress } from "./imprint-address";
import { ImprintContact } from "./imprint-contact";
import { ImprintDisclaimer } from "./imprint-disclaimer";

export interface Imprint {
  imprintDescription: string;
  name: string;
  address: ImprintAddress;
  contact: ImprintContact;
  disclaimer: ImprintDisclaimer;
}