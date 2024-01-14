import type { ValueOrNestedValue } from '@staticcms/core';
export default function useData<I extends ValueOrNestedValue, O extends ValueOrNestedValue>(value: O, path?: string, preprocessor?: (value: I) => O | Promise<O>): O;
