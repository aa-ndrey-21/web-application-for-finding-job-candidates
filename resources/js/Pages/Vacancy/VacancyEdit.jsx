import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function VacancyEdit({ auth, categories}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        experience: '',
        salary: '',
        city: '',
        attend: '',
        employment: '',
        logo: '',
        description: '',
        demands: '',
        details: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('vacancy.destroy'));
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
                            <h3>Creating vacancy:</h3>
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
                                    onChange={(e) => setData('name', e.target.value)}
                                />
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
                                    onChange={(e) => setData('logo', e.target.value)}
                                />
                            </div>

                            {/* <div className="mb-2">
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
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                            </div> */}

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
                                    onChange={(e) => setData('description', e.target.value)}
                                />
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
                                    onChange={(e) => setData('demands', e.target.value)}
                                />
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
                                    onChange={(e) => setData('details', e.target.value)}
                                />
                            </div>
                            
                            <PrimaryButton className="my-4" disabled={processing}>
                                Register
                            </PrimaryButton>
                        </form>                            
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
