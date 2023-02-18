export enum EnumSorting {
  LOW_TO_HIGH = "LOW_TO_HIGH",
  HIGH_TO_LOW = "HIGH_TO_LOW",
  NEWEST = "NEWEST",
  OLDEST = "OLDEST",
}
export interface ISortingItem {
  label: "Price: high to low" | "Price: low to high" | "Newest" | "Oldest";
  value: EnumSorting;
}
