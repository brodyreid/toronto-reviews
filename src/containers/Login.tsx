import { toast } from 'react-toastify';
import { LoginForm } from '../components/Auth';
import useGetUserProfile from '../api/useGetAuthors';
import { useState } from 'react';
import { supabase } from '../App';
import { LoginProps } from '../../types/types';
import { Navigate } from 'react-router-dom';

export default function Login() {
	const [loading, setLoading] = useState(false);
	const getUser = useGetUserProfile();

	const handleSuccessfulLogin = async () => {
		const { data } = getUser;
		const username = data?.[0]?.username;

		toast.success(`Welcome back, ${username}`, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
        });
        
        return <Navigate to='/home' replace />;
	};

	const handleFailedLogin = async (error: string) => {
		toast.error(error, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};

	const handleSubmit = async ({ email, password }: LoginProps) => {
        setLoading(true);
        
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
        });
        
		if (error) {
			await handleFailedLogin(error.message);
		} else {
			await handleSuccessfulLogin();
        }
        
		setLoading(false);
	};

	return (
		<>
			<LoginForm onSubmit={handleSubmit} loading={loading} />
		</>
	);
}
