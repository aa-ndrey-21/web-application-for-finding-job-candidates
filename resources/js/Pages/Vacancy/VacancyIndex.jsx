import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
import VacancyCard from '@/Components/VacancyCard';

export default function VacancyIndex({ auth, vacancies, categories }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vacancies</h2>}
        >
            <Head title="Vacancies" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-6 overflow-hidden flex shadow-sm sm:rounded-lg">
                        <div className="text-gray-900 flex-initial w-9/12">
                                    {vacancies.data.map((vacancy) => (
                                        <VacancyCard key={vacancy.id} vacancy={vacancy} categories={categories} ></VacancyCard>
                                    ))}
                            <Pagination class="mt-6" links={vacancies.links} />
                        </div>
                        <div className="h-min w-3/12 p-4 ml-2 mt-2 border-2 border-customColor rounded-md">
                            
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}