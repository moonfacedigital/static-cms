import React from 'react';
import { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import { API as BitBucketAPI, BitbucketBackend } from '../bitbucket';
import { GitHubBackend } from '../github';
import { GitLabBackend } from '../gitlab';
import GitHubAPI from './GitHubAPI';
import GitLabAPI from './GitLabAPI';
import type { AuthenticationPageProps, BackendClass, BackendEntry, ConfigWithDefaults, Credentials, DisplayURL, ImplementationFile, PersistOptions, UnpublishedEntry, User } from '@staticcms/core';
import type { ApiRequest, Cursor } from '@staticcms/core/lib/util';
import type AssetProxy from '@staticcms/core/valueObjects/AssetProxy';
import type { Client } from './netlify-lfs-client';
type NetlifyIdentity = {
    logout: () => void;
    currentUser: () => User;
    on: (eventName: 'init' | 'login' | 'logout' | 'error', callback: (input?: unknown) => void) => void;
    init: () => void;
    store: {
        user: unknown;
        modal: {
            page: string;
        };
        saving: boolean;
    };
    open: () => void;
    close: () => void;
};
type AuthClient = {
    logout: () => void;
    currentUser: () => unknown;
    login?: (email: string, password: string, remember?: boolean) => Promise<User>;
    clearStore: () => void;
};
declare global {
    interface Window {
        netlifyIdentity?: NetlifyIdentity;
    }
}
export default class GitGateway implements BackendClass {
    config: ConfigWithDefaults;
    api?: GitHubAPI | GitLabAPI | BitBucketAPI;
    branch: string;
    squashMerges: boolean;
    cmsLabelPrefix: string;
    mediaFolder?: string;
    transformImages: boolean;
    gatewayUrl: string;
    netlifyLargeMediaURL: string;
    backendType: string | null;
    apiUrl: string;
    authClient?: AuthClient;
    backend: GitHubBackend | GitLabBackend | BitbucketBackend | null;
    acceptRoles?: string[];
    tokenPromise?: () => Promise<string>;
    _largeMediaClientPromise?: Promise<Client>;
    options: {
        proxied: boolean;
        API: GitHubAPI | GitLabAPI | BitBucketAPI | null;
        initialWorkflowStatus: WorkflowStatus;
    };
    constructor(config: ConfigWithDefaults, options?: {});
    status(): Promise<{
        auth: {
            status: boolean;
        };
        api: {
            status: any;
            statusPage: string;
        };
    }>;
    getAuthClient(): Promise<AuthClient | undefined>;
    requestFunction: (req: ApiRequest) => Promise<Response>;
    authenticate(credentials: Credentials): Promise<User>;
    restoreUser(): Promise<User>;
    authComponent(): React.FC<AuthenticationPageProps>;
    logout(): Promise<void>;
    getToken(): Promise<string>;
    entriesByFolder(folder: string, extension: string, depth: number): Promise<import("@staticcms/core").ImplementationEntry[]>;
    allEntriesByFolder(folder: string, extension: string, depth: number, pathRegex?: RegExp): Promise<import("@staticcms/core").ImplementationEntry[]>;
    entriesByFiles(files: ImplementationFile[]): Promise<import("@staticcms/core").ImplementationEntry[]>;
    getEntry(path: string): Promise<{
        file: {
            path: string;
            id: null;
        };
        data: string;
    } | {
        file: {
            path: string;
            id: null;
        };
        data: string;
    }>;
    isLargeMediaFile(path: string): Promise<boolean>;
    getMedia(mediaFolder?: string | undefined, folderSupport?: boolean): Promise<{
        id: string;
        name: string;
        path: string;
        displayURL: {
            id: string;
            path: string;
        };
        isDirectory: boolean;
    }[]>;
    getLargeMediaClient(): Promise<Client>;
    _getLargeMediaClient(): Promise<any>;
    getLargeMediaDisplayURL({ path, id }: {
        path: string;
        id: string | null;
    }, branch?: string): Promise<{
        url: string;
        blob: Blob;
    }>;
    getMediaDisplayURL(displayURL: DisplayURL): Promise<string>;
    getMediaFile(path: string): Promise<{
        id: string;
        displayURL: string;
        path: string;
        name: string;
        size: number;
        file: File;
        url: string;
    }>;
    persistEntry(entry: BackendEntry, options: PersistOptions): Promise<any>;
    persistMedia(mediaFile: AssetProxy, options: PersistOptions): Promise<{
        id: string;
        name: string;
        size: number;
        displayURL: string;
        path: string;
    }>;
    deleteFiles(paths: string[], commitMessage: string): Promise<any>;
    traverseCursor(cursor: Cursor, action: string): Promise<{
        entries: import("@staticcms/core").ImplementationEntry[];
        cursor: Cursor;
    }>;
    /**
     * Editorial Workflow
     */
    unpublishedEntries(): Promise<string[]>;
    unpublishedEntry({ id, collection, slug, }: {
        id?: string;
        collection?: string;
        slug?: string;
    }): Promise<UnpublishedEntry>;
    updateUnpublishedEntryStatus(collection: string, slug: string, newStatus: WorkflowStatus): Promise<any>;
    deleteUnpublishedEntry(collection: string, slug: string): Promise<any>;
    publishUnpublishedEntry(collection: string, slug: string): Promise<any>;
    unpublishedEntryDataFile(collection: string, slug: string, path: string, id: string): Promise<string>;
    unpublishedEntryMediaFile(collection: string, slug: string, path: string, id: string): Promise<{
        id: string;
        displayURL: string;
        path: string;
        name: string;
        size: number;
        file: File;
    } | {
        id: string;
        name: string;
        path: string;
        url: string;
        displayURL: string;
        file: File;
        size: number;
    }>;
    getDeployPreview(collection: string, slug: string): Promise<{
        url: string;
        status: import("../../lib/util/API").PreviewState;
    } | null>;
}
export {};
