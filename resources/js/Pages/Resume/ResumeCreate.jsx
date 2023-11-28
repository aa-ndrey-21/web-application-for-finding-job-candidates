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

export default function ResumeCreate({ auth, categories}) {
    const { data, setData, post } = useForm({
        category_id: '',
        name: auth.user.name,
        surname: auth.user.surname,
        age: '',
        gender: auth.user.gender,
        city: '',
        number: '',
        email: auth.user.email,
        telegram: '',
        github: '',
        linkedin: '',
        experience: '',
        salary: '',
        attend: '',
        employment: '',
        image: '',
        keywords: '',
        bio: '',
        opportunities: '',
        background: '',
    });

    const dataGender = ['male', 'female', 'other'];
    const [selectedGender, setSelectedGender] = useState(data.gender || '');
    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
        setData('gender', e.target.value, () => {
        });
    };
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
        surname: '',
        age: '',
        gender: '',
        city: '',
        number: '',
        email: '',
        telegram: '',
        github: '',
        linkedin: '',
        experience: '',
        salary: '',
        attend: '',
        employment: '',
        image: '',
        keywords: '',
        bio: '',
        opportunities: '',
        background: '',
    });

    const firstStepDisabled = !data.name || !data.surname || !data.city || !data.age || !data.gender;
    const secondStepDisabled = !data.number || !data.email;
    const thirdStepDisabled = !data.category_id || !data.salary || !data.experience || !data.attend || !data.employment || !data.keywords;
    const fourthStepDisabled = !data.bio || !data.opportunities || !data.background;

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
        case 'surname':
            if (!data.surname) {
                error = 'Surname is required';
            } else if (data.surname.length > 255) {
                error = 'Surname cannot exceed 255 characters';
            }
            break;
        case 'age':
            if (!data.age || isNaN(data.age) || data.age < 16 || data.age > 135) {
                error = 'Age must be an integer between 16 and 135';
            }
            break;
        case 'gender':
            if (!data.gender || !['male', 'female', 'other'].includes(data.gender)) {
                error = 'Invalid gender';
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
        case 'github':
            if (data.github && data.github.length > 255) {
                error = 'GitHub profile URL cannot exceed 255 characters';
            }
            break;
        case 'linkedin':
            if (data.linkedin && data.linkedin.length > 255) {
                error = 'LinkedIn profile URL cannot exceed 255 characters';
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
        case 'image':
            if (data.image && (data.image.size > 5 * 1024 * 1024)) {
                error = 'Invalid image format or size (maximum 5MB)';
            }
            break;
        case 'keywords':
            if (!data.keywords) {
                error = 'Keywords are required';
            } else if (data.keywords.length > 255) {
                error = 'Keywords cannot exceed 255 characters';
            }
            break;
        case 'bio':
            if (!data.bio) {
                error = 'Bio is required';
            }
            break;
        case 'opportunities':
            if (!data.opportunities) {
                error = 'Opportunities are required';
            }
            break;
        case 'background':
            if (!data.background) {
                error = 'Background is required';
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

    const createResume = (e) => {
        e.preventDefault();
        post(route('resume.store'));
    };
    

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Creating resume</h2>}
        >
            <Head title="Creating resume" />

            <div className="py-12">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <form 
                        className="p-6 text-gray-900 flex flex-col"
                    >
                        <ProgressBar className={progress} />

                    {currentStep === 1 && (
                        <section className='mt-2'>
                            <h2 className='text-xl font-bold mb-4 text-center'>Information about yourself</h2>
                            <p className='text-sm text-red-500  font-bold mb-2 text-center'>{currentError}</p>
                            <div className='flex gap-6'>
                                <div className="mb-2 w-1/3">
                                    <Label title='Name'/>
                                    <Input className='my-2 w-full' name='name' value={data.name} onBlur={() => validateField('name')} onChange={(e) => setData('name', e.target.value)} placeholder={'Enter your name...'} error={errors.name}/>
                                </div>
                                <div className="mb-2 w-1/3">
                                    <Label title='Surname'/>
                                    <Input className='my-2 w-full' name='surname' value={data.surname} onBlur={() => validateField('surname')} onChange={(e) => setData('surname', e.target.value)} placeholder={'Enter your surname...'} error={errors.surname}/>
                                </div>
                                <div className="mb-2 w-1/3">
                                    <Label title='City'/>
                                    <Input className='my-2 w-full' name='city' value={data.city} onBlur={() => validateField('city')} onChange={(e) => setData('city', e.target.value)} placeholder={'Enter your city...'} error={errors.city}/>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className="mb-2 w-1/4">
                                    <Label title='Age'/>
                                    <Input className='my-2 w-full' name='age' value={data.age} onBlur={() => validateField('age')} onChange={(e) => setData('age', e.target.value)} placeholder={'Enter your age...'} error={errors.age}/>
                                </div>
                                <div className="mb-2 w-3/4">
                                    <Selector title='Gender' dataSelector={dataGender} selected={selectedGender} error={errors.gender} handleChange={handleGenderChange} />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <PrimaryButton className='mt-3 p-2' onClick={handleNextStep} disabled={firstStepDisabled}>
                                    Next step
                                </PrimaryButton>
                            </div>
                        </section>
                    )}
                    {currentStep === 2 && (
                        <section className='mt-2'>
                            <h2 className='text-xl font-bold mb-4 text-center'>Personal information (will be show only for employers)</h2>
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
                                <div className="mb-2 w-1/3">
                                    <Label title='Telegram (not necessary)'/>
                                    <Input className='my-2 w-full' name='telegram' value={data.telegram} onBlur={() => validateField('telegram')} onChange={(e) => setData('telegram', e.target.value)} placeholder={'...link on your Telegram'} error={errors.telegram}/>
                                </div>
                                <div className="mb-2 w-1/3">
                                    <Label title='GitHub (not necessary)'/>
                                    <Input className='my-2 w-full' name='github' value={data.github} onBlur={() => validateField('github')} onChange={(e) => setData('github', e.target.value)} placeholder={'...link on your GitHub'} error={errors.github}/>
                                </div>
                                <div className="mb-2 w-1/3">
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
                            <h2 className='text-xl font-bold mb-4 text-center'>Global information about your resume</h2>
                            <p className='text-sm text-red-500  font-bold mb-2 text-center'>{currentError}</p>
                            <div className="mb-2">
                                <Label title='Category'/>
                                <select
                                    className={`shadow my-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  ${errors.category_id ? 'border-2 border-red-500' : ''}`}
                                    id="category_id"
                                    name="category_id"
                                    value={data.category_id}
                                    onChange={(e) => setData('category_id', e.target.value)}
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>{ category.title }</option>
                                    ))}
                                </select>
                                <InputError message={errors.category_id} />
                            </div>
                            <div className='flex gap-6'>
                                <div className="mb-2 w-1/2">
                                    <Label title='Experience years'/>
                                    <Input className='my-2 w-full' name='experience' value={data.experience} onBlur={() => validateField('experience')} onChange={(e) => setData('experience', e.target.value)} placeholder={'How much years u worked?'} error={errors.experience}/>
                                </div>
                                <div className="mb-2 w-1/2">
                                    <Label title='Salary (only employers will see)'/>
                                    <Input className='my-2 w-full' name='salary' value={data.salary} onBlur={() => validateField('salary')} onChange={(e) => setData('salary', e.target.value)} placeholder={'Salary expectations'} error={errors.salary}/>
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
                                <TextArea name='keywords' value={data.keywords} placeholder='Employers can find you using these tips' onBlur={() => validateField('keywords')} onChange={(e) => setData('keywords', e.target.value)} error={errors.keywords}/>
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
                            <h2 className='text-xl font-bold mb-4 text-center'>Core information about your resume</h2>
                            <p className='text-sm text-red-500  font-bold mb-2 text-center'>{currentError}</p>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 underline font-bold mt-2"
                                >
                                    Image to 5 mb(not necessary)
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border border-customColor rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="image"
                                    name="image"
                                    type='file'
                                    onChange={(e) => setData("image", e.target.files[0])}
                                    onBlur={() => validateField('image')}
                                />
                                <InputError message={errors.image} />
                            </div>
                            <div className='mb-2'>
                                <Label title='BIO' />
                                <TextArea name='bio' value={data.bio} placeholder='A few sentences about yourself' onBlur={() => validateField('bio')} onChange={(e) => setData('bio', e.target.value)} error={errors.bio}/>
                            </div>
                            <div className='mb-2'>
                                <Label title='Opportunities' />
                                <TextArea name='opportunities' value={data.opportunities} placeholder='Your skils' onBlur={() => validateField('opportunities')} onChange={(e) => setData('opportunities', e.target.value)} error={errors.opportunities}/>
                            </div>
                            <div className='mb-2'>
                                <Label title='Background' />
                                <TextArea name='background' value={data.background} placeholder='All about your background' onBlur={() => validateField('background')} onChange={(e) => setData('background', e.target.value)} error={errors.background}/>
                            </div>
                            <div className="flex justify-between">
                                <DangerButton className='mt-3 p-2' onClick={handlePrevStep}>
                                    Come back
                                </DangerButton>
                                <PrimaryButton className="mt-3 p-2" onClick={createResume} disabled={fourthStepDisabled}>
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
