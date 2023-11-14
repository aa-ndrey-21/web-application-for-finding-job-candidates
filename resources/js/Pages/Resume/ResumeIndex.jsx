import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Pagination from '@/Components/Pagination';
import ResumeCard from '@/Components/ResumeCard';
import FilterResume from './FilterResume';

export default function ResumeIndex({ auth, resumes, categories }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Resumes</h2>}
        >
            <Head title="Resumes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-6 overflow-hidden flex shadow-sm sm:rounded-lg">
                        <div className="text-gray-900 flex-initial w-9/12">
                            {resumes.data.length > 0 ? (
                                resumes.data.map((resume) => (
                                    <ResumeCard key={resume.id} resume={resume} categories={categories} />
                                ))
                            ) : (
                                <p>There's nothing here yet, come back later.</p>
                            )}
                            <Pagination class="mt-6" links={resumes.links} />
                        </div>
                        <FilterResume categories={categories}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
