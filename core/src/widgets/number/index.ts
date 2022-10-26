import controlComponent, { validateMinMax } from './NumberControl';
import previewComponent from './NumberPreview';
import schema from './schema';

import type { NumberField, WidgetParam } from '../../interface';

const NumberWidget = (): WidgetParam<string | number, NumberField> => {
  return {
    name: 'number',
    controlComponent,
    previewComponent,
    options: {
      validator: ({ field, value, t }) => {
        // Pattern overrides min/max logic always:
        const hasPattern = !!field.pattern ?? false;

        if (hasPattern || !value) {
          return false;
        }

        const min = field.min ?? false;
        const max = field.max ?? false;

        const error = validateMinMax(value, min, max, field, t);
        return error ?? false;
      },
      schema,
    },
  };
};

export default NumberWidget;