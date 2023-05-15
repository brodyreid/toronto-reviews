import { Button, Container, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { LoginProps } from '../../types/types';



export function LoginForm({ onSubmit, loading }: { onSubmit: (values: LoginProps) => void, loading: boolean }) {

	return (
		<Container>
			<Formik
				validate={(values) => {
					const errors: Partial<LoginProps> = {};
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