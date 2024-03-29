import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import city from '../../../../public/image/city.png';
import gender from '../../../../public/image/gender.png';
import telegram from '../../../../public/image/telegram.png';
import github from '../../../../public/image/github.png';
import linkedin from '../../../../public/image/linkedin.png';

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
                        <div className="p-6 text-gray-900 flex flex-col">
                            <div className='flex pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                {resume.image ?
                                <div className="flex-shrink-0 w-1/4">
                                    <div className="inline-block h-36 w-36 shrink-0 bg-slate-200 rounded-full overflow-hidden">
                                        <img 
                                        src={resume.image.startsWith('resume/') ? `/storage/${resume.image}` : resume.image} 
                                        alt={resume.name} 
                                        className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                : null}
                                <div className="flex-1 flex justify-center flex-col">
                                    <h2 className='text-2xl font-bold mb-2'>{category.title}</h2>
                                    <ul className='flex gap-6'>
                                        <li className='text-lg font-bold'>{resume.surname} {resume.name}</li>
                                        <li className='text-lg'>{resume.age} years</li>
                                        <li className='text-lg'>{resume.gender} <img className='inline-block h-6 w-6' src={gender} alt="" /></li>
                                        <li className='text-lg'>{resume.city} <img className='inline-block h-6 w-6' src={city} alt="" /></li> 
                                    </ul>
                                </div>
                            </div>
                            <div className='flex flex-col pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="flex items-center justify-center w-full">
                                    <ul className='flex gap-6'>
                                        <li className='text-lg'><span className='font-bold'>Employment</span> - {resume.employment}</li>
                                        <li className='text-lg'><span className='font-bold'>Attend</span> - {resume.attend}</li>
                                        <li className='text-lg'><span className='font-bold'>Years experience</span> - {resume.experience}</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full">
                                    <h3 className='text-lg font-bold'>Keywords:</h3>
                                    <p>{resume.keywords}</p>
                                </div> 
                            </div>
                            <div className='flex flex-col pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="flex flex-col items-center justify-center w-full">
                                <h3 className='text-lg font-bold'>BIO:</h3>
                                    <p>{resume.bio}</p>
                                </div> 
                            </div>
                            <div className='flex flex-col pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="flex flex-col items-center justify-center w-full">
                                    <h3 className='text-lg font-bold'>Opportunities:</h3>
                                    <p>{resume.opportunities}</p>
                                </div> 
                            </div>
                            <div className='flex flex-col pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="flex flex-col items-center justify-center w-full">
                                    <h3 className='text-lg font-bold'>Background:</h3>
                                    <p>{resume.background}</p>
                                </div> 
                            </div>
                            <div className='flex items-center justify-center pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className='mt-2 text-center'>
                                    <button onClick={showDetails} className="bg-customColor inline-block mb-2 hover:bg-customColor700 hover:text-gray-300 cursor-pointer text-white font-semibold py-2 px-4 rounded">
                                        {details ? 'Hide details' : 'Show details'} 
                                    </button>
                                    {details && 
                                    <>
                                        <ul className='flex gap-6'>
                                            <li className='text-lg'><span className='font-bold'>Salary expectations</span> - {resume.salary}</li>
                                            <li className='text-lg'><span className='font-bold'>Email</span> - {resume.email}</li>
                                            <li className='text-lg'><span className='font-bold'>Number</span> - {resume.number}</li>
                                        </ul>
                                        <h3 className='text-lg font-bold'>Social media:</h3>
                                            {resume.telegram || resume.github || resume.linkedin ? (
                                                <ul className='flex gap-6 text-center justify-center items-center'>
                                                    {resume.telegram ? (
                                                    <li className='text-lg'>
                                                        <a href={resume.telegram} target="_blank"><img className='inline-block h-6 w-6 cursor-pointer' src={telegram} alt="" /></a>
                                                    </li>
                                                    ) : null}

                                                    {resume.github ? (
                                                    <li className='text-lg'>
                                                        <a href={resume.github} target="_blank"><img className='inline-block h-6 w-6 cursor-pointer' src={github} alt="" /></a>
                                                    </li>
                                                    ) : null}

                                                    {resume.linkedin ? (
                                                    <li className='text-lg'>
                                                        <a href={resume.linkedin} target="_blank"><img className='inline-block h-6 w-6 cursor-pointer' src={linkedin} alt="" /></a>
                                                    </li>
                                                    ) : null}
                                                </ul>
                                                ) : (
                                                <p className='text-lg'>Not included in this resume</p>
                                            )}
                                    </>
                                    }
                                    {error && <div className='mt-2 text-red-600'>Login as employer to view details about this resume</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
