import type { Entry, EntryData, Field, ObjectValue } from '@staticcms/core';
export interface StringTemplateFilter {
    pattern: RegExp;
    transform: (str: string, match: RegExpMatchArray, field: Field | null) => string;
}
export declare const dateParsers: Record<string, (date: Date) => string>;
export declare function parseDateFromEntry(entry: Entry, dateFieldName: string | undefined | null, dateField: Field | null): Date | undefined;
export declare const SLUG_MISSING_REQUIRED_DATE = "SLUG_MISSING_REQUIRED_DATE";
export declare function keyToPathArray(key?: string): string[];
export declare function expandPath({ data, path, paths, }: {
    data: EntryData;
    path: string;
    paths?: string[];
}): string[];
export declare function compileStringTemplate(template: string, date: Date | undefined | null, identifier: string | undefined, data: ObjectValue | undefined | null, fields: Field[] | undefined, processor?: (value: string, field: Field | null) => string): string;
export declare function extractTemplateVars(template: string): string[];
/**
 * Appends `dirname`, `filename` and `extension` to the provided `fields` map.
 * @param entryPath
 * @param fields
 * @param folder - optionally include a folder that the dirname will be relative to.
 *   eg: `addFileTemplateFields('foo/bar/baz.ext', fields, 'foo')`
 *       will result in: `{ dirname: 'bar', filename: 'baz', extension: 'ext' }`
 */
export declare function addFileTemplateFields(entryPath: string, fields: EntryData, folder?: string): EntryData;
