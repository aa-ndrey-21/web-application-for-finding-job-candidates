import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import city from '../../../../public/image/city.png';
import telegram from '../../../../public/image/telegram.png';
import linkedin from '../../../../public/image/linkedin.png';

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
                        <div className="p-6 text-gray-900 flex flex-col">
                            <div className='flex pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                {vacancy.logo ?
                                <div className="flex-shrink-0 w-1/4">
                                    <div className="inline-block h-36 w-36 shrink-0 bg-slate-200 rounded-full overflow-hidden">
                                        <img 
                                        src={vacancy.logo.startsWith('vacancy/') ? `/storage/${vacancy.logo}` : vacancy.logo} 
                                        alt={vacancy.name} 
                                        className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                : null}
                                <div className="flex-1 flex justify-center flex-col">
                                    <h2 className='text-2xl font-bold mb-2'>{category.title}</h2>
                                    <ul className='flex gap-6'>
                                        <li className='text-lg font-bold'>{vacancy.name}</li>
                                        <li className='text-lg'>{vacancy.city} <img className='inline-block h-6 w-6' src={city} alt="" /></li> 
                                    </ul>
                                </div>
                            </div>
                            <div className='flex flex-col items-center pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="flex items-center justify-center w-full">
                                    <ul className='flex gap-6'>
                                        <li className='text-lg'><span className='font-bold'>Employment</span> - {vacancy.employment}</li>
                                        <li className='text-lg'><span className='font-bold'>Attend</span> - {vacancy.attend}</li>
                                        <li className='text-lg'><span className='font-bold'>Need experience</span> - {vacancy.experience}</li>
                                    </ul>
                                </div>
                                <div className="max-w-2xl flex flex-col items-center justify-center w-full">
                                    <h3 className='text-lg font-bold'>Description:</h3>
                                    <p>{vacancy.description}</p>
                                </div> 
                            </div>
                            <div className='flex items-center flex-col pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="max-w-2xl flex flex-col items-center justify-center w-full">
                                    <h3 className='text-lg font-bold'>Demands:</h3>
                                    <p>{vacancy.demands}</p>
                                </div> 
                            </div>
                            <div className='flex items-center flex-col pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="max-w-2xl flex flex-col items-center justify-center w-full">
                                    <h3 className='text-lg font-bold'>Details:</h3>
                                    <p>{vacancy.details}</p>
                                </div> 
                            </div>
                            <div className='flex items-center justify-center pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className='mt-2 text-center'>
                                    <a onClick={showDetails} className="bg-customColor inline-block mb-2 hover:bg-customColor700 hover:text-gray-300 cursor-pointer text-white font-semibold py-2 px-4 rounded">
                                        {details ? 'Hide details' : 'Show details'} 
                                    </a>
                                    {details && 
                                    <>
                                        <ul className='flex gap-6'>
                                            <li className='text-lg'><span className='font-bold'>Salary</span> - {vacancy.salary}</li>
                                            <li className='text-lg'><span className='font-bold'>Email</span> - {vacancy.email}</li>
                                            <li className='text-lg'><span className='font-bold'>Number</span> - {vacancy.number}</li>
                                        </ul>
                                        {/* <h3 className='text-lg font-bold'>Social media:</h3>
                                        <ul className='flex gap-6 text-center justify-center items-center'>
                                            {vacancy.telegram && vacancy.linkedin ? (
                                                <div>
                                                    {vacancy.telegram ? (
                                                    <li className='text-lg'>
                                                        <a href={vacancy.telegram}><img className='inline-block h-6 w-6 cursor-pointer' src={telegram} alt="" /></a>
                                                    </li>
                                                    ) : null}
                                                    {vacancy.linkedin ? (
                                                    <li className='text-lg'>
                                                        <a href={vacancy.linkedin}><img className='inline-block h-6 w-6 cursor-pointer' src={linkedin} alt="" /></a>
                                                    </li>
                                                    ) : null}
                                                </div>
                                                ) : (
                                                <li className='text-lg'>Not included in this vacancy</li>
                                            )}
                                        </ul> */}
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
