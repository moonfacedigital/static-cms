import React from 'react';
import { Cursor } from '@staticcms/core/lib/util';
import type { ViewStyle } from '@staticcms/core/constants/views';
import type { CollectionWithDefaults, Entry } from '@staticcms/core';
import type { ConnectedProps } from 'react-redux';
export declare function filterNestedEntries(path: string, collectionFolder: string, entries: Entry[]): Entry<import("@staticcms/core").ObjectValue>[];
interface EntriesCollectionOwnProps {
    collection: CollectionWithDefaults;
    viewStyle: ViewStyle;
    readyToLoad: boolean;
    filterTerm: string;
}
declare const connector: import("react-redux").InferableComponentEnhancerWithProps<{
    page: number | undefined;
    filterTerm: string;
    entriesLoaded: boolean;
    isFetching: boolean;
    viewStyle: ViewStyle;
    cursor: Cursor;
    collection: CollectionWithDefaults;
    readyToLoad: boolean;
} & {}, EntriesCollectionOwnProps>;
export type EntriesCollectionProps = ConnectedProps<typeof connector>;
declare const _default: import("react-redux").ConnectedComponent<React.FC<{
    page: number | undefined;
    filterTerm: string;
    entriesLoaded: boolean;
    isFetching: boolean;
    viewStyle: ViewStyle;
    cursor: Cursor;
    collection: CollectionWithDefaults;
    readyToLoad: boolean;
} & {}>, {
    collection: CollectionWithDefaults;
    viewStyle: ViewStyle;
    readyToLoad: boolean;
    filterTerm: string;
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;
