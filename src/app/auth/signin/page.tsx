'use client';

import { useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { t } = useTranslation('common');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                setError(t('auth.invalidCredentials'));
            } else {
                // Get session to check user role
                const session = await getSession();
                router.push('/');
                router.refresh();
            }
        } catch (error) {
            setError(t('auth.invalidCredentials'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-base-content">
                        {t('auth.loginTitle')}
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {error && (
                                    <div className="alert alert-error">
                                        <span>{error}</span>
                                    </div>
                                )}

                                <div className="form-control">
                                    <label className="label" htmlFor="email">
                                        <span className="label-text">{t('auth.email')}</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="input input-bordered w-full"
                                        placeholder="admin@example.com"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label" htmlFor="password">
                                        <span className="label-text">{t('auth.password')}</span>
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        className="input input-bordered w-full"
                                        placeholder="password"
                                    />
                                </div>

                                <div className="form-control mt-6">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn btn-primary w-full"
                                    >
                                        {loading
                                            ? t('auth.signingIn')
                                            : t('auth.loginButton')}
                                    </button>
                                </div>
                            </form>

                            <div className="divider">Demo Credentials</div>
                            
                            <div className="text-sm text-base-content/70">
                                <p className="mb-2">
                                    <span className="font-semibold">Admin:</span> admin@example.com / password
                                </p>
                                <p>
                                    <span className="font-semibold">User:</span> user@example.com / password
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
