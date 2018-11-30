/// <reference types="react" />
import { InlineInputEditStyle } from './InlineInputEdit';
export interface InlineNumberInputEditProps {
    value: number;
    min?: number;
    max?: number;
    onSave: (prev: number, entered: string) => Promise<{
        ok: boolean;
        error?: string;
    }>;
    styles?: Partial<InlineInputEditStyle>;
}
export declare const InlineNumberInputEdit: (props: InlineNumberInputEditProps) => JSX.Element;
