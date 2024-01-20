import React from 'react';
import './Alert.css';
export declare const classes: Record<"title" | "content" | "actions" | "root" | "confirm-button", string>;
interface AlertProps {
    title: string | {
        key: string;
        options?: Record<string, unknown>;
    };
    body: string | {
        key: string;
        options?: Record<string, unknown>;
    };
    okay?: string | {
        key: string;
        options?: Record<string, unknown>;
    };
    color?: 'success' | 'error' | 'primary';
}
export interface AlertDialogProps extends AlertProps {
    resolve: () => void;
}
export declare const Alert: React.FC;
declare const alert: (props: AlertProps) => Promise<void>;
export default alert;
