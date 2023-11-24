import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import Selector from '@/Components/Selector';
import EditInput from '@/Components/EditInput';
import TextArea from '@/Components/TextArea';
import city from '../../../../public/image/city.png';
import edit from '../../../../public/image/edit.png';
import image from '../../../../public/image/image.png';
import telegram from '../../../../public/image/telegram.png';
import linkedin from '../../../../public/image/linkedin.png';


export default function VacancyCreate({ auth, categories, vacancy}) {
    const vacancy_id = auth.user ? auth.user.vacancy_id : null;

    const { data, setData, post, processing, errors } = useForm({
        _method: 'patch',
        category_id: vacancy.category_id,
        name: vacancy.name,
        experience: vacancy.experience,
        salary: vacancy.salary,
        city: vacancy.city,
        number: vacancy.number,
        email: vacancy.email,
        telegram: vacancy.telegram ?? '',
        linkedin: vacancy.linkedin ?? '',
        attend: vacancy.attend,
        employment: vacancy.employment,
        logo: vacancy.logo ?? '',
        keywords: vacancy.keywords,
        description: vacancy.description,
        demands: vacancy.demands,
        details: vacancy.details,
    });

    const dataAttend = ['office', 'remote', 'hybrid'];
    const [selectedAttend, setSelectedAttend] = useState(data.attend || '');
    const handleAttendChange = (e) => {
        setSelectedAttend(e.target.value);
        setData('attend', e.target.value, () => {
        });
    };
    const dataEmployment = ['partday', 'fullday', 'hybrid'];
    const [selectedEmployment, setSelectedEmployment] = useState(data.employment || '');
    const handleEmploymentChange = (e) => {
        setSelectedEmployment(e.target.value);
        setData('employment', e.target.value, () => {
        });
    };

    const [isHovered, setHovered] = useState(false);

    const hasErrors = (errors) => {
        return Object.values(errors).some(error => error);
    };
    const isAnyError = hasErrors(errors);

    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const handleImageChange = (e) => {
        setData("logo", e.target.files[0]);
        setIsImageUploaded(true);
    };

    const editVacancy = (e) => {
        e.preventDefault();
        post(route('vacancy.update', vacancy_id), data, { preserveScroll: true });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vacancy</h2>}
        >
            <Head title="Edit vacancy" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    {isAnyError && (
                        <div className="text-center mt-2 text-lg text-red-600">Please check your data entry is correct.</div>
                    )}
                        <form 
                            onSubmit={editVacancy}
                            className="p-6 text-gray-900 flex flex-col"
                        >
                            <section className='flex pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="flex-shrink-0 w-1/4 relative group">
                                    <label 
                                        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} 
                                        htmlFor="logo" 
                                        className="inline-block h-36 w-36 relative bg-slate-200 rounded-full overflow-hidden cursor-pointer group-hover:bg-slate-300"
                                    >
                                        <input
                                            accept=".jpg, .jpeg, .png, .svg, .webp"
                                            className="hidden"
                                            type="file"
                                            name="logo"
                                            id="logo"
                                            onChange={handleImageChange}
                                        />
                                        {data.logo ?
                                            <img
                                                src={vacancy.logo.startsWith('vacancy/') ? `/storage/${vacancy.logo}` : vacancy.logo}
                                                alt={data.name}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        : 
                                            <img
                                                src={image}
                                                alt={data.name}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        }
                                        {isHovered && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-50">
                                            <img className='w-10' src={edit} alt="" />
                                            <span className='font-bold'>Upload new logo</span>
                                        </div>
                                        )}
                                    </label>
                                    {isImageUploaded && (
                                        <div className="text-center mt-2 text-sm text-customColor100">
                                            Logo change successfully! Don't forget to save your changes.
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 flex justify-center flex-col">
                                    <div className='text-2xl font-bold mb-2'>
                                        <select
                                            className={`shadow w-full appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                                            ${errors.category_id ? 'border-2 border-red-500' : ''}`}
                                            id="category_id"
                                            name="category_id"
                                            value={data.category_id}
                                            onChange={(e) => setData('category_id', e.target.value)}
                                            style={{ width: categories.reduce((maxWidth, category) => Math.max(maxWidth, category.title.length * 10), 120) + 'px' }}
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map((category) => (
                                                <option key={category.id} value={category.id}>{ category.title }</option>
                                            ))}
                                        </select>
                                    </div>
                                    <ul className='flex gap-6'>
                                        <EditInput className='w-26 text-lg font-bold' name='name' value={data.name} error={errors.name} onChange={(e) => setData('name', e.target.value)} />
                                        <li className='text-lg flex items-center'>
                                            <EditInput className='w-24' name='city' value={data.city} error={errors.city} onChange={(e) => setData('city', e.target.value)} />
                                            <img className='inline-block h-6 w-6 ml-2' src={city} alt="" />
                                        </li> 
                                    </ul>
                                </div>
                            </section>
                            <section className='flex flex-col pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="flex items-center justify-center w-full">
                                    <ul className='flex gap-6'>
                                        <li className='text-lg flex items-center'><span className='font-bold mr-2'>Employment</span><span className='mr-1'>-</span> 
                                            <Selector dataSelector={dataEmployment} selected={selectedEmployment} error={errors.employment} handleChange={handleEmploymentChange} />
                                        </li>
                                        <li className='text-lg flex items-center'><span className='font-bold mr-2'>Attend</span><span className='mr-1'>-</span> 
                                            <Selector dataSelector={dataAttend} selected={selectedAttend} error={errors.attend} handleChange={handleAttendChange} />
                                        </li>
                                        <li className='text-lg flex items-center'><span className='font-bold mr-2'>Years experience</span><span className='mr-1'>-</span> 
                                            <EditInput className='w-16' name='experience' value={data.experience} error={errors.experience} onChange={(e) => setData('experience', e.target.value)} />
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full">
                                    <h3 className='text-lg font-bold'>Keywords:</h3>
                                    <div className="mb-2 w-full">
                                        <TextArea name="keywords" value={data.keywords} error={errors.keywords} onChange={(e) => setData('keywords', e.target.value)}/> 
                                    </div>
                                </div> 
                            </section>
                            
                            <section className='flex flex-col pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="flex flex-col items-center justify-center w-full">
                                    <h3 className='text-lg font-bold'>Description:</h3>
                                    <div className="mb-2 w-full">
                                        <TextArea name="description" value={data.description} error={errors.description} onChange={(e) => setData('description', e.target.value)}/> 
                                    </div>
                                </div> 
                            </section>
                            <section className='flex flex-col pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="flex flex-col items-center justify-center w-full">
                                    <h3 className='text-lg font-bold'>Demands:</h3>
                                    <div className="mb-2 w-full">
                                        <TextArea name="demands" value={data.demands} error={errors.demands} onChange={(e) => setData('demands', e.target.value)}/> 
                                    </div>
                                </div> 
                            </section>
                            <section className='flex flex-col pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className="flex flex-col items-center justify-center w-full">
                                    <h3 className='text-lg font-bold'>Details:</h3>
                                    <div className="mb-2 w-full">
                                        <TextArea name="details" value={data.details} error={errors.details} onChange={(e) => setData('details', e.target.value)}/> 
                                    </div>
                                </div> 
                            </section>
                            <section className='flex items-center justify-center pb-4 mb-4 border-b-2 border-solid border-customColor'>
                                <div className='mt-2 text-center'>
                                <h3 className='text-lg font-bold'>Details information (shown only for employer):</h3>
                                <ul className='flex gap-6'>
                                    <li className='text-lg flex items-center'><span className='font-bold mr-1'>Salary expectations -</span>
                                        <EditInput className='w-16' name='salary' value={data.salary} error={errors.salary} onChange={(e) => setData('salary', e.target.value)} />
                                        <span className='ml-1'>$</span>
                                    </li>
                                    <li className='text-lg flex items-center'><span className='font-bold mr-1'>Email -</span>
                                        <EditInput className='w-18' name='email' value={data.email} error={errors.email} onChange={(e) => setData('email', e.target.value)} />
                                    </li>
                                    <li className='text-lg flex items-center'><span className='font-bold mr-1'>Number -</span>
                                        <EditInput className='w-18' name='number' value={data.number} error={errors.number} onChange={(e) => setData('number', e.target.value)} />
                                    </li>
                                </ul>
                                <h3 className='text-lg font-bold'>Social media:</h3>
                                    <ul className='flex gap-6 text-center justify-center items-center'>
                                        <li className='text-lg'>
                                            <EditInput className='w-18' name='telegram' value={data.telegram} error={errors.telegram} onChange={(e) => setData('telegram', e.target.value)} placeholder='...link on your Telegram' />
                                            <img className='inline-block h-6 w-6 cursor-pointer ml-1' src={telegram} alt="" />
                                        </li>

                                        <li className='text-lg'>
                                            <EditInput className='w-18' name='linkedin' value={data.linkedin} error={errors.linkedin} onChange={(e) => setData('linkedin', e.target.value)} placeholder='...link on your Linkedin' />
                                            <img className='inline-block h-6 w-6 cursor-pointer ml-1' src={linkedin} alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <PrimaryButton className="my-4 ml-auto" disabled={processing}>
                                Save
                            </PrimaryButton>
                        </form>                            
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
