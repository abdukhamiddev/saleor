/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/saleor/src
  Changes: 
    - Added saleor_api_url parameter.
*/
import {
  getCommerceProvider as getCoreCommerceProvider,
  useCommerce as useCoreCommerce,
} from "@plasmicpkgs/commerce";
import { getSaleorProvider, SaleorProvider } from "./provider";

export type { SaleorProvider };

export const useCommerce = () => useCoreCommerce<SaleorProvider>();
export const getCommerceProvider = (saleor_api_url: string) =>
  getCoreCommerceProvider(getSaleorProvider(saleor_api_url));
