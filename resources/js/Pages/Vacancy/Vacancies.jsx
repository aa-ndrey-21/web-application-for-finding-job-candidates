import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Vacancies({ auth, vacancies }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vacancies</h2>}
        >
            <Head title="Vacancies" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3>Vacancies:</h3>
                                <ul>
                                    {vacancies.map((vacancy) => (
                                        <li key={vacancy.id}>
                                            <a href={`/vacancy/${vacancy.id}`} >{vacancy.id} {vacancy.name}</a>
                                        </li>
                                    ))}
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
