import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Selector from '@/Components/Selector';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        mode: '',
        name: '',
        surname: '',
        email: '',
        gender: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    const dataGender = ['male', 'female', 'other'];
    const [selectedGender, setSelectedGender] = useState(null);
    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
        setData('gender', e.target.value, () => {
        });
    };

    const dataMode = ['employer', 'worker'];
    const [selectedMode, setSelectedMode] = useState(null);
    const handleModeChange = (e) => {
        setSelectedMode(e.target.value);
        setData('mode', e.target.value, () => {
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <Label title="Mode" />
                    <Selector title='' dataSelector={dataMode} selected={selectedMode} handleChange={handleModeChange}/>
                    <InputError message={errors.mode} className="mt-2" />
                </div>

                <div>
                    <Label title="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <Label title="Surname" />

                    <TextInput
                        id="surname"
                        name="surname"
                        value={data.surname}
                        className="mt-1 block w-full"
                        autoComplete="surname"
                        isFocused={true}
                        onChange={(e) => setData('surname', e.target.value)}
                        required
                    />

                    <InputError message={errors.surname} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label title="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <Selector title='Gender' dataSelector={dataGender} selected={selectedGender} handleChange={handleGenderChange}/>
                    <InputError message={errors.gender} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label title="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label title="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
