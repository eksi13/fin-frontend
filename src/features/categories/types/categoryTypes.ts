export interface RawCategory {
  id: number;
  name: string;
  budget: number;
  type: number;
  lastUpdated: string;
}

export interface Category extends Omit<RawCategory, 'lastUpdated'> {
  lastUpdated: Date;
};