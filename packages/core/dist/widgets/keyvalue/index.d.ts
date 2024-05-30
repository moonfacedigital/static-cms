import controlComponent from './KeyValueControl';
import previewComponent from './KeyValuePreview';
import converters from './converters';
import schema from './schema';
import validator from './validator';
import type { KeyValueField, WidgetParam } from '@staticcms/core';
import type { Pair } from './types';
declare const KeyValueWidget: () => WidgetParam<Pair[], KeyValueField>;
export { controlComponent as KeyValueControl, previewComponent as KeyValuePreview, converters as keyValueConverters, schema as keyValueSchema, validator as keyValueValidator, };
export default KeyValueWidget;