import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';

export default function ResumeCreate({ auth, categories}) {
    const { data, setData, post, processing, errors } = useForm({
        category_id: '',
        name: auth.user.name,
        surname: auth.user.surname,
        age: '',
        gender: auth.user.gender,
        city: '',
        number: '',
        email: auth.user.email,
        telegram: '',
        whatsApp: '',
        signal: '',
        experience: '',
        salary: '',
        attend: '',
        employment: '',
        image: '',
        bio: '',
        opportunities: '',
        background: '',
    });

    const createResume = (e) => {
        e.preventDefault();
        post(route('resume.store'));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Resume</h2>}
        >
            <Head title="Resumes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900">
                        <form 
                            onSubmit={createResume}
                            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        >
                            <h3>Creating resume:</h3>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Category
                                </label>
                                <select
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="category_id"
                                    name="category_id"
                                    onChange={(e) => setData('category_id', e.target.value)}
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option value={category.id}>{ category.title }</option>
                                    ))}
                                </select>
                                <InputError message={errors.category_id} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Name
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                <InputError message={errors.name} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Surname
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="surname"
                                    name="surname"
                                    value={data.surname}
                                    onChange={(e) => setData('surname', e.target.value)}
                                />
                                <InputError message={errors.surname} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Age
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="age"
                                    name="age"
                                    onChange={(e) => setData('age', e.target.value)}
                                />
                                <InputError message={errors.age} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Gender
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="gender"
                                    name="gender"
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                />
                                <InputError message={errors.gender} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    City
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="city"
                                    name="city"
                                    onChange={(e) => setData('city', e.target.value)}
                                />
                                <InputError message={errors.city} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Number
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="number"
                                    name="number"
                                    onChange={(e) => setData('number', e.target.value)}
                                />
                                <InputError message={errors.number} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Email
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Telegram
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="telegram"
                                    name="telegram"
                                    onChange={(e) => setData('telegram', e.target.value)}
                                />
                                <InputError message={errors.telegram} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    WhatsApp
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="whatsApp"
                                    name="whatsApp"
                                    onChange={(e) => setData('whatsApp', e.target.value)}
                                />
                                <InputError message={errors.whatsApp} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Signal
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="signal"
                                    name="signal"
                                    onChange={(e) => setData('signal', e.target.value)}
                                />
                                <InputError message={errors.signal} />
                            </div>

                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Experience
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="experience"
                                    name="experience"
                                    onChange={(e) => setData('experience', e.target.value)}
                                />
                                <InputError message={errors.experience} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Salary
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="salary"
                                    name="salary"
                                    onChange={(e) => setData('salary', e.target.value)}
                                />
                                <InputError message={errors.salary} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Attend
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="attend"
                                    name="attend"
                                    onChange={(e) => setData('attend', e.target.value)}
                                />
                                <InputError message={errors.attend} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Employment
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="employment"
                                    name="employment"
                                    onChange={(e) => setData('employment', e.target.value)}
                                />
                                <InputError message={errors.employment} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Image
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="image"
                                    name="image"
                                    onChange={(e) => setData('image', e.target.value)}
                                />
                                <InputError message={errors.image} />
                            </div>

                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    BIO
                                </label>
                                <textarea
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="bio"
                                    name="bio"
                                    onChange={(e) => setData('bio', e.target.value)}
                                />
                                <InputError message={errors.bio} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Opportunities
                                </label>
                                <textarea
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="opportunities"
                                    name="opportunities"
                                    onChange={(e) => setData('opportunities', e.target.value)}
                                />
                                <InputError message={errors.opportunities} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Background
                                </label>
                                <textarea
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="background"
                                    name="background"
                                    onChange={(e) => setData('background', e.target.value)}
                                />
                                <InputError message={errors.background} />
                            </div>
                            
                            <PrimaryButton className="my-4" disabled={processing}>
                                Publish
                            </PrimaryButton>
                        </form>                            
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
