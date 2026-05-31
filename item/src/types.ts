export interface Item {
  /** Sequential listing number shown to buyers (e.g. #1). */
  number: number;
  title: string;
  description: string;
  /** Your asking price (what the buyer pays). Shown prominently. */
  price: number;
  /** Neupreis — the retail price of the item when bought new. */
  newPrice: number;
  /** Optional link to the new item's product page (more details & photos). */
  link?: string;
  /** Photo URLs. The first entry is used as the primary/cover photo. */
  photoUrl: string[];
}
