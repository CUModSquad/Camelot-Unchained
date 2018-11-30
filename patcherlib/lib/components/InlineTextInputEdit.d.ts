/// <reference types="react" />
import { InlineInputEditStyle } from './InlineInputEdit';
export interface InlineTextInputEditProps {
    value: string;
    onSave: (prev: string, entered: string) => Promise<{
        ok: boolean;
        error?: string;
    }>;
    styles?: Partial<InlineInputEditStyle>;
}
export declare const InlineTextInputEdit: (props: InlineTextInputEditProps) => JSX.Element;
