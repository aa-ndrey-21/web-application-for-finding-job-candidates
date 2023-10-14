import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <div>
                    {auth.user ? (
                        <>
                        <Link
                            href={route('vacancy.index')}
                        >
                            Vacancies
                        </Link>

                        <Link
                            href={route('resume.index')}
                            
                        >
                            Resumes
                        </Link>
                    </>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div>
                
            </div>
        </>
    );
}
