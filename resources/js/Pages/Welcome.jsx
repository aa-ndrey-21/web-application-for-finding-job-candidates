import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth }) {

    return (
        <>
            {auth.user ? 
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome</h2>}
            >
                <Head title="Welcome" />
                <div className="py-12">
                    <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 p-6 text-gray-900 items-center flex flex-col bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className='mb-2 text-xl text-red-400'>Sorry, but this page in processing creating. Here links where u can go.</div>
                        <div className='flex gap-6 text-xl'>
                            <div className='text-customColor hover:underline transition-all hover:tracking-wide duration-300'>
                                <a href={route('vacancy.index')}>Vacancies</a>
                            </div>
                            <div className='text-customColor hover:underline transition-all hover:tracking-wide duration-300'>
                                <a href={route('resume.index')}>Resumes</a>
                            </div>
                        </div>
                    </div>
                </div>

            </AuthenticatedLayout>
            : 
            <GuestLayout>
                <Head title="Welcome" />
                <div className="p-0 sm:p-6 text-gray-900 flex flex-col sm:justify-center items-center">
                    <div className='mb-2 text-xl text-red-400'>Sorry, but this page in processing creating. Here links where u can go.</div>
                    <div className='flex gap-6 text-xl'>
                        <div className='text-customColor hover:underline transition-all hover:tracking-wide duration-300'>
                            <a href={route('login')}>Login</a>
                        </div>
                        <div className='text-customColor hover:underline transition-all hover:tracking-wide duration-300'>
                            <a href={route('register')}>Register</a>
                        </div>
                    </div>
                </div>
            </GuestLayout>}
        </>
    );
}