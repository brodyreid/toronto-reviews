import { useState } from 'react';
import { supabase } from '../App';
import { Button, Container, TextField } from '@mui/material';
import { Form, Formik } from 'formik';

interface FormValues {
	email: string;
	password: string;
}

export function Login() {
	const [loading, setLoading] = useState(false);

	const onSubmit = async ({ email, password }: FormValues) => {
		setLoading(true);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			alert(error.message);
		} else {
			alert('Wahoooo! Welcome!');
		}
		setLoading(false);
	};

	return (
		<Container>
			<Formik
				validate={(values) => {
					const errors: Partial<FormValues> = {};
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
				onSubmit={(values) => onSubmit(values)}>
				{({ values, handleChange, handleBlur }) => (
					<Form>
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
						<Button disabled={loading} type='submit'>
							Login
						</Button>
					</Form>
				)}
			</Formik>
		</Container>
	);
}