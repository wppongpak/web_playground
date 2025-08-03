'use client';

import { useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    GET_BOOKS,
    GET_USERS,
    ADD_BOOK,
    ADD_USER,
} from '@/lib/graphql/queries';
import { I18nProvider } from '@/components/providers';

interface Book {
    id: string;
    title: string;
    author: string;
}

interface User {
    id: string;
    name: string;
    email: string;
}

export default function GraphQLExample() {
    const { t } = useTranslation('common');
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    // Queries
    const {
        loading: booksLoading,
        error: booksError,
        data: booksData,
    } = useQuery(GET_BOOKS);
    const {
        loading: usersLoading,
        error: usersError,
        data: usersData,
    } = useQuery(GET_USERS);

    // Mutations
    const [addBook] = useMutation(ADD_BOOK, {
        refetchQueries: [{ query: GET_BOOKS }],
    });

    const [addUser] = useMutation(ADD_USER, {
        refetchQueries: [{ query: GET_USERS }],
    });

    const handleAddBook = async (e: React.FormEvent) => {
        e.preventDefault();
        if (bookTitle && bookAuthor) {
            try {
                await addBook({
                    variables: {
                        title: bookTitle,
                        author: bookAuthor,
                    },
                });
                setBookTitle('');
                setBookAuthor('');
            } catch (error) {
                console.error('Error adding book:', error);
            }
        }
    };

    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault();
        if (userName && userEmail) {
            try {
                await addUser({
                    variables: {
                        name: userName,
                        email: userEmail,
                    },
                });
                setUserName('');
                setUserEmail('');
            } catch (error) {
                console.error('Error adding user:', error);
            }
        }
    };

    return (
        <I18nProvider>
            <div className="container mx-auto p-6 max-w-6xl bg-white dark:bg-gray-900 min-h-screen transition-colors">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                        {t('title')}
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Books Section */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            {t('books.title')}
                        </h2>

                        {/* Add Book Form */}
                        <form
                            onSubmit={handleAddBook}
                            className="mb-6 space-y-3"
                        >
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('books.bookTitle')}
                                    value={bookTitle}
                                    onChange={e => setBookTitle(e.target.value)}
                                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('books.authorName')}
                                    value={bookAuthor}
                                    onChange={e =>
                                        setBookAuthor(e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                            >
                                {t('books.addBook')}
                            </button>
                        </form>

                        {/* Books List */}
                        {booksLoading && (
                            <p className="text-gray-500 dark:text-gray-400">
                                {t('books.loading')}
                            </p>
                        )}
                        {booksError && (
                            <p className="text-red-500 dark:text-red-400">
                                Error: {booksError.message}
                            </p>
                        )}
                        {booksData && (
                            <div className="space-y-2">
                                {booksData.books.map((book: Book) => (
                                    <div
                                        key={book.id}
                                        className="p-3 bg-white dark:bg-gray-700 rounded border-l-4 border-blue-500"
                                    >
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                                            {book.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {t('books.by')} {book.author}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Users Section */}
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                            {t('users.title')}
                        </h2>

                        {/* Add User Form */}
                        <form
                            onSubmit={handleAddUser}
                            className="mb-6 space-y-3"
                        >
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('users.userName')}
                                    value={userName}
                                    onChange={e => setUserName(e.target.value)}
                                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder={t('users.email')}
                                    value={userEmail}
                                    onChange={e => setUserEmail(e.target.value)}
                                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white py-2 px-4 rounded transition-colors"
                            >
                                {t('users.addUser')}
                            </button>
                        </form>

                        {/* Users List */}
                        {usersLoading && (
                            <p className="text-gray-500 dark:text-gray-400">
                                {t('users.loading')}
                            </p>
                        )}
                        {usersError && (
                            <p className="text-red-500 dark:text-red-400">
                                Error: {usersError.message}
                            </p>
                        )}
                        {usersData && (
                            <div className="space-y-2">
                                {usersData.users.map((user: User) => (
                                    <div
                                        key={user.id}
                                        className="p-3 bg-white dark:bg-gray-700 rounded border-l-4 border-green-500"
                                    >
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                                            {user.name}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {user.email}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* GraphQL Endpoint Info */}
                <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        {t('graphql.endpoint')}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        {t('graphql.endpointInfo')}{' '}
                        <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200">
                            /api/graphql
                        </code>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {t('graphql.exploreInfo')}
                    </p>
                </div>
            </div>
        </I18nProvider>
    );
}
