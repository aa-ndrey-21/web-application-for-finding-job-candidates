import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href={route('welcome.index')}>
                    <ApplicationLogo className="w-20 h-20 mt-6 fill-current text-gray-800" />
                </Link>
            </div>

            <div className="sm:max-w-full m-6 px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg">
                {children}
            </div>
        </div>
    );
}
