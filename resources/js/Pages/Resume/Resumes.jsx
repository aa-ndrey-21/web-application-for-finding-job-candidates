import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';

export default function Resumes({ auth, resumes }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Resumes</h2>}
        >
            <Head title="Resumes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3>Resumes:</h3>
                                <ul>
                                    {resumes.data.map((resume) => (
                                        <li key={resume.id}>
                                            <a href={route('resume.show', { resume: resume.id })} >{resume.id} {resume.email}</a>
                                        </li>
                                    ))}
                                </ul>
                            <Pagination class="mt-6" links={resumes.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
