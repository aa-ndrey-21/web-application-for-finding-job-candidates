import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function ResumeShow({ auth, resume, category }) {
    const [details, setDetails] = useState(false);
    const [error, setError] = useState(false);
    const showDetails = () => {
        if (auth.user.mode === 'employer') {
            setDetails(!details);
        } else {
            setError(!error);
        }
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Resume</h2>}
        >
            <Head title="Resumes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3>Resume:</h3>
                                <ul>
                                    <li>{resume.id}</li>
                                    <li>{category.title}</li>
                                </ul>
                                <div className='mt-2'>
                                    <a onClick={showDetails} className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold py-2 px-4 rounded">
                                        {details ? 'Hide details' : 'Show details'} 
                                    </a>
                                    {details && 
                                    <ul className='mt-2'>
                                        <li>{resume.email}</li>
                                        <li>{resume.number}</li>
                                        <li>{resume.telegram}</li>
                                        <li>{resume.whatsApp}</li>
                                    </ul>}
                                    {error && <div className='mt-2 text-red-600'>Login as employer to view details about this resume</div>}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
