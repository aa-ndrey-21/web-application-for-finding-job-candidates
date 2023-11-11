import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Swiper from '@/Components/Swiper';

export default function Welcome({ auth, randomResume, randomResumes, randomVacancies }) {
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
                    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg">
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
                <div className="p-0 sm:p-6 text-gray-900 flex flex-col sm:justify-center items-center">
                    <h3 className='font-semibold space-x-4'>
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
                        <div className="h-200 w-400 flex items-center justify-center">
                            <Swiper resume={randomResume} />
                        </div>
                    )}
                    {activeTab === 'vacancies' && (
                        <ul>
                            {randomVacancies.map((vacancy) => (
                                <li key={vacancy.id}>
                                    <a href={route('vacancy.show', { vacancy: vacancy.id })}>{vacancy.id} {vacancy.name}</a> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis mollitia suscipit doloremque cum qui sint placeat repellat? Ducimus nobis harum delectus. Unde, culpa! Quasi eum minus dolorum, ullam inventore natus.
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </GuestLayout>}
        </>
    );
}