import type { Category } from '../types/categoryTypes';

export function mapCategoryData(rawCategory: any): Category {
  return {
    ...rawCategory,
    lastUpdated: new Date(
      (rawCategory.lastUpdated as string).replace(' ', 'T')
    ),
  };
}
