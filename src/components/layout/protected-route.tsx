'use client';

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: string;
}

export function ProtectedRoute({
    children,
    requiredRole,
}: ProtectedRouteProps) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const { t } = useTranslation('common');

    // Only protect /admin/** routes
    const isAdminRoute = pathname?.startsWith('/admin');
    const requireAuth = isAdminRoute;

    useEffect(() => {
        if (status === 'loading') return;

        if (requireAuth && !session) {
            router.push('/auth/signin');
            return;
        }

        if (requiredRole && (session?.user as any)?.role !== requiredRole) {
            router.push('/');
            return;
        }
    }, [session, status, router, requireAuth, requiredRole]);

    if (status === 'loading') {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
        );
    }

    // Only show auth required message for admin routes
    if (requireAuth && !session) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-base-content mb-4">
                        {t('auth.loginRequired')}
                    </h2>
                    <button
                        onClick={() => router.push('/auth/signin')}
                        className="btn btn-primary"
                    >
                        {t('auth.signin')}
                    </button>
                </div>
            </div>
        );
    }

    if (requiredRole && (session?.user as any)?.role !== requiredRole) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-base-content mb-4">
                        Access Denied
                    </h2>
                    <p className="text-base-content/70">
                        You don't have permission to access this page.
                    </p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
