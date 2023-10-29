import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function VacancyShow({ auth, vacancy, category }) {
    const [details, setDetails] = useState(false);
    const [error, setError] = useState(false);
    const showDetails = () => {
        if (auth.user.mode === 'worker') {
            setDetails(!details);
        } else {
            setError(!error);
        }
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vacancy</h2>}
        >
            <Head title="Vacancies" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3>Vacancy:</h3>
                                <ul>
                                    <li>{vacancy.id}</li>
                                    <li>{category.title}</li>
                                </ul>
                                <div className='mt-2'>
                                    <a onClick={showDetails} className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold py-2 px-4 rounded">
                                        {details ? 'Hide details' : 'Show details'} 
                                    </a>
                                    {details && 
                                    <ul className='mt-2'>
                                        <li>{vacancy.email}</li>
                                        <li>{vacancy.number}</li>
                                    </ul>}
                                    {error && <div className='mt-2 text-red-600'>Login as worker to view details about this vacancy</div>}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
