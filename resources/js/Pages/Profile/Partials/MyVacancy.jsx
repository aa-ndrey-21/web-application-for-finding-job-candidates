import { Link } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';

export default function MyVacancy({ auth, className = '' }) {

    const vacancy_id = auth.user ? auth.user.vacancy_id : null;
    const {
        delete: destroy,
    } = useForm();  

    const deleteVacancy = (e) => {
        e.preventDefault();

        destroy(route('vacancy.destroy', vacancy_id));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Your vacancy</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update or create your vacancy.
                </p>
            </header>
            <div className="flex items-center gap-4 mt-2">
                <a
                    href={auth.user.vacancy_id ? route('vacancy.edit', auth.user.vacancy_id) : route('vacancy.create')}
                    className="bg-green-500 text-white hover:bg-green-600 font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    {auth.user.vacancy_id ? 'Edit vacancy' : 'Create vacancy'}
                </a>
                {auth.user.vacancy_id && (
                    <form onSubmit={deleteVacancy}>
                        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                            Delete vacancy
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}