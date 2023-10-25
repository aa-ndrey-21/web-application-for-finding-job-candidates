import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';


export default function VacancyCreate({ auth, categories, vacancy}) {
    const { data, setData, patch, processing, errors } = useForm({
        category_id: vacancy.category_id,
        name: vacancy.name,
        experience: vacancy.experience,
        salary: vacancy.salary,
        city: vacancy.city,
        attend: vacancy.attend,
        employment: vacancy.employment,
        number: vacancy.number,
        email: vacancy.email,
        logo: vacancy.logo,
        description: vacancy.description,
        demands: vacancy.demands,
        details: vacancy.details,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('vacancy.update', vacancy.id));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vacancy</h2>}
        >
            <Head title="Vacancy create" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900">
                        <form 
                            onSubmit={submit}
                            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        >
                            <h3>Edit vacancy:</h3>
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
                                    value={data.category_id}
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
                                    Experience
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="experience"
                                    name="experience"
                                    value={data.experience}
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
                                    value={data.salary}
                                    onChange={(e) => setData('salary', e.target.value)}
                                />
                                <InputError message={errors.salary} />
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
                                    value={data.city}
                                    onChange={(e) => setData('city', e.target.value)}
                                />
                                <InputError message={errors.city} />
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
                                    value={data.attend}
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
                                    value={data.employment}
                                    onChange={(e) => setData('employment', e.target.value)}
                                />
                                <InputError message={errors.employment} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Logo
                                </label>
                                <input
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="logo"
                                    name="logo"
                                    value={data.logo}
                                    onChange={(e) => setData('logo', e.target.value)}
                                />
                                <InputError message={errors.logo} />
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
                                    value={data.number}
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
                                    Description
                                </label>
                                <textarea
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />
                                <InputError message={errors.description} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Demands
                                </label>
                                <textarea
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="demands"
                                    name="demands"
                                    value={data.demands}
                                    onChange={(e) => setData('demands', e.target.value)}
                                />
                                <InputError message={errors.demands} />
                            </div>
                            <div className="mb-2">
                                <label
                                    className="block text-gray-700 text-sm font-bold mt-2"
                                >
                                    Details
                                </label>
                                <textarea
                                    className={`my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                    id="details"
                                    name="details"
                                    value={data.details}
                                    onChange={(e) => setData('details', e.target.value)}
                                />
                                <InputError message={errors.details} />
                            </div>
                            
                            <PrimaryButton className="my-4" disabled={processing}>
                                Edit
                            </PrimaryButton>
                        </form>                            
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
