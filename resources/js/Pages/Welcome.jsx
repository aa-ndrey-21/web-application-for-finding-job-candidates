import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome({ auth, randomResumes, randomVacancies }) {
    const [activeTab, setActiveTab] = useState('vacancies');

    return (
        <>
            {auth.user ? 
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome</h2>}
            >
                <Head title="Welcome" />
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3>
                                <button
                                    onClick={() => setActiveTab('resumes')}
                                    className={`${
                                        activeTab === 'resumes' ? 'text-blue-500 border-b-2 border-blue-500' : ''
                                    }`}
                                >
                                    Resumes
                                </button>
                                <button
                                    onClick={() => setActiveTab('vacancies')}
                                    className={`${
                                        activeTab === 'vacancies' ? 'text-blue-500 border-b-2 border-blue-500' : ''
                                    }`}
                                >
                                    Vacancies
                                </button>
                            </h3>
                            {activeTab === 'resumes' && (
                                <ul>
                                    {randomResumes.map((resume) => (
                                        <li key={resume.id}>
                                            <a href={route('resume.show', { resume: resume.id })}>{resume.id} {resume.email}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {activeTab === 'vacancies' && (
                                <ul>
                                    {randomVacancies.map((vacancy) => (
                                        <li key={vacancy.id}>
                                            <a href={route('vacancy.show', { vacancy: vacancy.id })}>{vacancy.id} {vacancy.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
            : 
            <GuestLayout>
                <Head title="Welcome" />
                <div className="p-6 text-gray-900">
                    <h3>
                        <button
                            onClick={() => setActiveTab('resumes')}
                            className={`${
                                activeTab === 'resumes' ? 'text-blue-500 border-b-2 border-blue-500' : ''
                            }`}
                        >
                            Resumes
                        </button>
                        <button
                            onClick={() => setActiveTab('vacancies')}
                            className={`${
                                activeTab === 'vacancies' ? 'text-blue-500 border-b-2 border-blue-500' : ''
                            }`}
                        >
                            Vacancies
                        </button>
                    </h3>
                    {activeTab === 'resumes' && (
                        <ul>
                            {randomResumes.map((resume) => (
                                <li key={resume.id}>
                                    <a href={route('resume.show', { resume: resume.id })}>{resume.id} {resume.email}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                    {activeTab === 'vacancies' && (
                        <ul>
                            {randomVacancies.map((vacancy) => (
                                <li key={vacancy.id}>
                                    <a href={route('vacancy.show', { vacancy: vacancy.id })}>{vacancy.id} {vacancy.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </GuestLayout>}
        </>
    );
}


            {/* <div>
                <div>
                    {auth.user ? (
                        <>
                        <Link
                            href={route('vacancy.index')}
                        >
                            Vacancies
                        </Link>

                        <Link
                            href={route('resume.index')}
                            
                        >
                            Resumes
                        </Link>
                    </>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div>
                
            </div> */}