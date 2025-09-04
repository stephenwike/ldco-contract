export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';
export interface AuthUser { id: string; name?: string; email?: string; avatarUrl?: string; }
export interface AuthAdapter {
    me(): Promise<AuthUser | null>;
    login?(opts?: { redirectTo?: string }): void | Promise<void>;
    logout?(opts?: { redirectTo?: string }): void | Promise<void>;
    subscribe?(cb: () => void): () => void;
}