import type { EditorialWorkflowAction } from '../actions/editorialWorkflow';
import type { EntriesAction } from '../actions/entries';
import type { Entry, FieldsErrors } from '../interface';
export interface EntryDraftState {
    original?: Entry;
    entry?: Entry;
    fieldsErrors: FieldsErrors;
    hasChanged: boolean;
    key: string;
    localBackup?: {
        entry: Entry;
    };
}
declare function entryDraftReducer(state: EntryDraftState | undefined, action: EntriesAction | EditorialWorkflowAction): EntryDraftState;
export default entryDraftReducer;
