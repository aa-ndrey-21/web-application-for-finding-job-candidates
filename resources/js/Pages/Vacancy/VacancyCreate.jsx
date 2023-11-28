import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import ProgressBar from '@/Components/ProgressBar';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import DangerButton from '@/Components/DangerButton';
import Selector from '@/Components/Selector';
import TextArea from '@/Components/TextArea';

export default function VacancyCreate({ auth, categories}) {
    const { data, setData, post } = useForm({
        category_id: '',
        name: '',
        experience: '',
        salary: '',
        city: '',
        number: '',
        email: auth.user.email,
        telegram: '',
        linkedin: '',
        attend: '',
        employment: '',
        logo: '',
        keywords: '',
        description: '',
        demands: '',
        details: '',
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

    const [currentStep, setCurrentStep] = useState(1);
    const [currentError, setCurrentError] = useState('');
    const [errors, setErrors] = useState({
        category_id: '',
        name: '',
        experience: '',
        salary: '',
        city: '',
        number: '',
        email: '',
        telegram: '',
        linkedin: '',
        attend: '',
        employment: '',
        logo: '',
        keywords: '',
        description: '',
        demands: '',
        details: '',
    });

    const firstStepDisabled = !data.name || !data.city || !data.category_id;
    const secondStepDisabled = !data.number || !data.email;
    const thirdStepDisabled = !data.salary || !data.experience || !data.attend || !data.employment || !data.keywords;
    const fourthStepDisabled = !data.description || !data.demands || !data.details;

    const validateField = (fieldName) => {
        let error = '';
        switch (fieldName) {
        case 'category_id':
            if (!data.category_id) {
                error = 'Category is required';
            }
            break;
        case 'name':
            if (!data.name) {
                error = 'Name is required';
            } else if (data.name.length > 255) {
                error = 'Name cannot exceed 255 characters';
            }
            break;
        case 'experience':
            if (!data.experience || isNaN(data.experience) || data.experience < 0) {
                error = 'Experience must be a non-negative integer';
            }
            break;
        case 'salary':
            if (!data.salary || isNaN(data.salary) || data.salary < 0) {
                error = 'Salary must be a non-negative number';
            }
            break;
        case 'city':
            if (!data.city) {
                error = 'City is required';
            } else if (data.city.length > 255) {
                error = 'City cannot exceed 255 characters';
            }
            break;
        case 'number':
            if (!data.number) {
                error = 'Number is required';
            } else if (data.number.length > 15) {
                error = 'Number cannot exceed 15 characters';
            }
            break;
        case 'email':
            if (!data.email) {
                error = 'Email is required';
            } else if (data.email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                error = 'Invalid email';
            }
            break;
        case 'telegram':
            if (data.telegram && data.telegram.length > 255) {
                error = 'Telegram username cannot exceed 255 characters';
            }
            break;
        case 'linkedin':
            if (data.linkedin && data.linkedin.length > 255) {
                error = 'LinkedIn profile URL cannot exceed 255 characters';
            }
            break;
        case 'attend':
            if (!data.attend || !['office', 'remote', 'hybrid'].includes(data.attend)) {
                error = 'Invalid attendance type';
            }
            break;
        case 'employment':
            if (!data.employment || !['fullday', 'partday', 'hybrid'].includes(data.employment)) {
                error = 'Invalid employment type';
            }
            break;
        case 'logo':
            if (data.logo && (data.logo.size > 5 * 1024 * 1024)) {
                error = 'Invalid logo format or size (maximum 5MB)';
            }
            break;
        case 'keywords':
            if (!data.keywords) {
                error = 'Keywords are required';
            } else if (data.keywords.length > 255) {
                error = 'Keywords cannot exceed 255 characters';
            }
            break;
        case 'description':
            if (!data.description) {
                error = 'Description is required';
            }
            break;
        case 'demands':
            if (!data.demands) {
                error = 'Demands are required';
            }
            break;
        case 'details':
            if (!data.details) {
                error = 'Details are required';
            }
            break;
        default:
            break;
        }
        setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
        setCurrentError(error);
    };

    const handleNextStep = async (e) => {
        e.preventDefault();
        setCurrentStep((prevStep) => prevStep + 1);
    };
    
    const handlePrevStep = () => {
        setCurrentStep((prevStep) => Math.max(1, prevStep - 1));
    };
    const progress = currentStep === 2 ? 'w-1/2' : `w-${currentStep}/4`;

    const createVacancy = (e) => {
        e.preventDefault();
        post(route('vacancy.store'));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Creating vacancy</h2>}
        >
            <Head title="Creating vacancy" />
            <div className="py-12">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <form 
                        className="p-6 text-gray-900 flex flex-col"
                    >
                        <ProgressBar className={progress} />

                    {currentStep === 1 && (
                        <section className='mt-2'>
                            <h2 className='text-xl font-bold mb-4 text-center'>First information</h2>
                            <p className='text-sm text-red-500  font-bold mb-2 text-center'>{currentError}</p>
                            <div className='flex gap-6'>
                                <div className="mb-2 w-1/2">
                                    <Label title='Name'/>
                                    <Input className='my-2 w-full' name='name' value={data.name} onBlur={() => validateField('name')} onChange={(e) => setData('name', e.target.value)} placeholder={'Name your company...'} error={errors.name}/>
                                </div>
                                <div className="mb-2 w-1/2">
                                    <Label title='City'/>
                                    <Input className='my-2 w-full' name='city' value={data.city} onBlur={() => validateField('city')} onChange={(e) => setData('city', e.target.value)} placeholder={'Enter your city...'} error={errors.city}/>
                                </div>
                            </div>
                            <div className="mb-2">
                                <Label title='Category'/>
                                <select
                                    className={`shadow my-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.category_id ? 'border-2 border-red-500' : ''}`}
                                    id="category_id"
                                    name="category_id"
                                    value={data.category_id}
                                    onChange={(e) => setData('category_id', e.target.value)}
                                    onBlur={() => validateField('category_id')}
                                >
                                    <option value=''>Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>{ category.title }</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-end">
                                <PrimaryButton className='mt-3 p-2' disabled={firstStepDisabled} onClick={handleNextStep}>
                                    Next step
                                </PrimaryButton>
                            </div>
                        </section>
                    )}
                    {currentStep === 2 && (
                        <section className='mt-2'>
                            <h2 className='text-xl font-bold mb-4 text-center'>Personal information (will be show only for workers)</h2>
                            <p className='text-sm text-red-500  font-bold mb-2 text-center'>{currentError}</p>
                            <div className='flex gap-6'>
                                <div className="mb-2 w-1/2">
                                    <Label title='Number'/>
                                    <Input className='my-2 w-full' name='number' value={data.number} onBlur={() => validateField('number')} onChange={(e) => setData('number', e.target.value)} placeholder={'Your number...'} error={errors.number}/>
                                </div>
                                <div className="mb-2 w-1/2">
                                    <Label title='Email'/>
                                    <Input className='my-2 w-full' name='email' value={data.email} onBlur={() => validateField('email')} onChange={(e) => setData('email', e.target.value)} placeholder={'...link on your Email'} error={errors.email}/>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className="mb-2 w-1/2">
                                    <Label title='Telegram (not necessary)'/>
                                    <Input className='my-2 w-full' name='telegram' value={data.telegram} onBlur={() => validateField('telegram')} onChange={(e) => setData('telegram', e.target.value)} placeholder={'...link on your Telegram'} error={errors.telegram}/>
                                </div>
                                <div className="mb-2 w-1/2">
                                    <Label title='Linkedin (not necessary)'/>
                                    <Input className='my-2 w-full' name='linkedin' value={data.linkedin} onBlur={() => validateField('linkedin')} onChange={(e) => setData('linkedin', e.target.value)} placeholder={'...link on your Linkedin'} error={errors.linkedin}/>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <DangerButton className='mt-3 p-2' onClick={handlePrevStep}>
                                    Come back
                                </DangerButton>
                                <PrimaryButton className='mt-3 p-2' onClick={handleNextStep} disabled={secondStepDisabled}>
                                    Next step
                                </PrimaryButton>
                            </div>
                        </section>
                    )}
                    {currentStep === 3 && (
                        <section className='mt-2'>
                            <h2 className='text-xl font-bold mb-4 text-center'>Global information about your vacancy</h2>
                            <p className='text-sm text-red-500  font-bold mb-2 text-center'>{currentError}</p>
                            <div className='flex gap-6'>
                                <div className="mb-2 w-1/2">
                                    <Label title='Experience years'/>
                                    <Input className='my-2 w-full' name='experience' value={data.experience} onBlur={() => validateField('experience')} onChange={(e) => setData('experience', e.target.value)} placeholder={'Expectations based on experience...'} error={errors.experience}/>
                                </div>
                                <div className="mb-2 w-1/2">
                                    <Label title='Salary'/>
                                    <Input className='my-2 w-full' name='salary' value={data.salary} onBlur={() => validateField('salary')} onChange={(e) => setData('salary', e.target.value)} placeholder={'Salary...'} error={errors.salary}/>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className="mb-2 w-1/2">
                                    <Selector title='Attend' dataSelector={dataAttend} selected={selectedAttend} error={errors.attend} handleChange={handleAttendChange} />
                                </div>
                                <div className="mb-2 w-1/2">
                                    <Selector title='Employment' dataSelector={dataEmployment} selected={selectedEmployment} error={errors.employment} handleChange={handleEmploymentChange} />
                                </div>
                            </div>
                            <div className='mb-2'>
                                <Label title='Keywords' />
                                <TextArea name='keywords' value={data.keywords} placeholder='Workers can find your vacancy using these tips' onBlur={() => validateField('keywords')} onChange={(e) => setData('keywords', e.target.value)} error={errors.keywords}/>
                            </div>
                            <div className="flex justify-between">
                                <DangerButton className='mt-3 p-2' onClick={handlePrevStep}>
                                    Come back
                                </DangerButton>
                                <PrimaryButton className='mt-3 p-2' onClick={handleNextStep} disabled={thirdStepDisabled}>
                                    Next step
                                </PrimaryButton>
                            </div>
                        </section>
                    )}
                    {currentStep === 4 && (
                        <section className='mt-2'>
                            <h2 className='text-xl font-bold mb-4 text-center'>Core information about your vacancy</h2>
                            <p className='text-sm text-red-500  font-bold mb-2 text-center'>{currentError}</p>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 underline font-bold mt-2"
                                >
                                    Logo to 5 mb (not necessary)
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border border-customColor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="logo"
                                    name="logo"
                                    type='file'
                                    onChange={(e) => setData("logo", e.target.files[0])}
                                    onBlur={() => validateField('logo')}
                                />
                                <InputError message={errors.logo} />
                            </div>
                            <div className='mb-2'>
                                <Label title='Description' />
                                <TextArea name='description' value={data.description} placeholder='A few sentences about vacancy' onBlur={() => validateField('description')} onChange={(e) => setData('description', e.target.value)} error={errors.description}/>
                            </div>
                            <div className='mb-2'>
                                <Label title='Demands' />
                                <TextArea name='demands' value={data.demands} placeholder='Knowledge requirements' onBlur={() => validateField('demands')} onChange={(e) => setData('demands', e.target.value)} error={errors.demands}/>
                            </div>
                            <div className='mb-2'>
                                <Label title='Details' />
                                <TextArea name='details' value={data.details} placeholder='All additional information' onBlur={() => validateField('details')} onChange={(e) => setData('details', e.target.value)} error={errors.details}/>
                            </div>
                            <div className="flex justify-between">
                                <DangerButton className='mt-3 p-2' onClick={handlePrevStep}>
                                    Come back
                                </DangerButton>
                                <PrimaryButton className="mt-3 p-2" onClick={createVacancy} disabled={fourthStepDisabled}>
                                    Publish
                                </PrimaryButton>
                            </div>
                        </section>
                    )}
                    </form>                            
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
