export interface HasID {
  id: number;
}

export interface SelectableItem {
  readonly id: number;
  readonly name: string;
  status: boolean;
}

export type SearchAmounts = {
  min: number | null;
  max: number | null;
};

export type SearchDates = {
  min: number;
  max: number;
};

export type OptionSelectorConfig = {
  options: SelectableItem[];
  setter: React.Dispatch<React.SetStateAction<SelectableItem[]>>;
};
