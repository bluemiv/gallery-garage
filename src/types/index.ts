import { ReactNode } from 'react';

export type TPropsWithClassName<T = unknown> = T & { className?: string };

export type TPropsWithChidren<T = unknown> = T & { children?: ReactNode };

export type TPropsWithComponent<T = unknown> = T & TPropsWithClassName & TPropsWithChidren;
