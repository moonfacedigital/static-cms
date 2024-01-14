import type { FilterMap, ViewFilter } from '@staticcms/core';
import type { FC } from 'react';
import './FilterControl.css';
export declare const classes: Record<"filter" | "root" | "filter-label" | "list-root" | "list-label" | "list-filter" | "list-filter-label", string>;
export interface FilterControlProps {
    filter: Record<string, FilterMap> | undefined;
    viewFilters: ViewFilter[] | undefined;
    variant?: 'menu' | 'list';
    onFilterClick: ((viewFilter: ViewFilter) => void) | undefined;
}
declare const FilterControl: FC<FilterControlProps>;
export default FilterControl;
