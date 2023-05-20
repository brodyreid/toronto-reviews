import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	Container,
	TextField,
} from '@mui/material';
import { useState } from 'react';
import { LoginFields } from '../../types/types';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { supabase } from '../App';
import useGetUserProfile from '../api/useGetUserProfile';

export default function LoginButton() {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const getUser = useGetUserProfile();
	const navigate = useNavigate();

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleSuccessfulLogin = async () => {
		const { data: user } = getUser;
		const username = user?.username ?? '';

		toast.success(`Welcome back, ${username}`);
		setOpen(false);
		navigate('/');
	};
	const handleFailedLogin = async (error: string) => {
		toast.error(error);
	};
	const handleSubmit = async ({ email, password }: LoginFields) => {
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

	const LoginForm = () => {
		return (
			<Container>
				<Formik
					validate={(values) => {
						const errors: Partial<LoginFields> = {};
						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
								values.email,
							)
						) {
							errors.email = 'Invalid email address';
						}
						return errors;
					}}
					initialValues={{
						email: '',
						password: '',
					}}
					onSubmit={(values) => handleSubmit(values)}>
					{({ values, handleChange, handleBlur }) => (
						<Form
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: 12,
								padding: 12,
							}}>
							<TextField
								disabled={loading}
								type='email'
								name='email'
								label='Email'
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<TextField
								disabled={loading}
								type='password'
								name='password'
								label='Password'
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<Button
								variant='contained'
								sx={{ maxWidth: 24 }}
								disabled={loading}
								type='submit'>
								Login
							</Button>
						</Form>
					)}
				</Formik>
			</Container>
		);
	};

	return (
		<>
			<Button variant='outlined' onClick={handleClickOpen}>
				Login
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Login for Reviewers</DialogTitle>
				<DialogContent>
					<LoginForm />
				</DialogContent>
			</Dialog>
		</>
	);
}
