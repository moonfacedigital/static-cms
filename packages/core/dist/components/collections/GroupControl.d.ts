import type { GroupMap, ViewGroup } from '@staticcms/core';
import type { FC } from 'react';
import './GroupControl.css';
export declare const classes: Record<"list" | "option" | "root" | "list-label" | "list-option" | "list-option-label" | "list-option-checked-icon" | "list-option-not-checked", string>;
export interface GroupControlProps {
    group: Record<string, GroupMap> | undefined;
    viewGroups: ViewGroup[] | undefined;
    variant?: 'menu' | 'list';
    onGroupClick: ((viewGroup: ViewGroup) => void) | undefined;
}
declare const GroupControl: FC<GroupControlProps>;
export default GroupControl;
