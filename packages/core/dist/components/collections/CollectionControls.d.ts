import type { ViewStyle } from '@staticcms/core/constants/views';
import type { FilterMap, GroupMap, SortableField, SortDirection, SortMap, ViewFilter, ViewGroup } from '@staticcms/core';
import type { FC } from 'react';
interface CollectionControlsProps {
    viewStyle: ViewStyle;
    onChangeViewStyle: (viewStyle: ViewStyle) => void;
    sortableFields?: SortableField[];
    onSortClick?: (key: string, direction?: SortDirection) => Promise<void>;
    sort?: SortMap | undefined;
    filter?: Record<string, FilterMap>;
    viewFilters?: ViewFilter[];
    onFilterClick?: (filter: ViewFilter) => void;
    group?: Record<string, GroupMap>;
    viewGroups?: ViewGroup[];
    onGroupClick?: (filter: ViewGroup) => void;
}
declare const CollectionControls: FC<CollectionControlsProps>;
export default CollectionControls;
