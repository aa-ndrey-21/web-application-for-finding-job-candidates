import { Link } from '@inertiajs/react';

export default function MyVacancy({ auth, className = '' }) {

    const userMode = auth.user ? auth.user.mode : null;

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Your vacancy</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update or create your vacancy.
                </p>
            </header>
                <div className="flex items-center gap-4">
                <Link
                    href={auth.user.vacancy_id ? route('vacancy.edit', auth.user.vacancy_id) : route('vacancy.create')}
                    className="font-semibold text-black-600 hover:text-gray-900 dark:text-black-400 dark:hover:text-gray focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    {auth.user.vacancy_id ? 'Edit vacancy' : 'Create vacancy'}
                </Link>
                </div>
        </section>
    );
}