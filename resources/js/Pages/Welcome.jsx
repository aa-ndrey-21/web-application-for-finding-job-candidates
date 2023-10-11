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
                            href={route('vacancies')}
                        >
                            Vacancies
                        </Link>

                        <Link
                            href={route('cv')}
                            
                        >
                            CV
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
