import { Link } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';

export default function MyResume({ auth, className = '' }) {

    const resume_id = auth.user ? auth.user.resume_id : null;
    const {
        delete: destroy,
    } = useForm();  

    const deleteResume = (e) => {
        e.preventDefault();
        destroy(route('resume.destroy', resume_id));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Your resume</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update or create your resume.
                </p>
            </header>
            <div className="flex items-center gap-4 mt-2">
                <a
                    href={auth.user.resume_id ? route('resume.edit', auth.user.resume_id) : route('resume.create')}
                    className="bg-green-500 text-white hover:bg-green-600 font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    {auth.user.resume_id ? 'Edit resume' : 'Create resume'}
                </a>
                {auth.user.resume_id && (
                    <form onSubmit={deleteResume}>
                        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                            Delete resume
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}