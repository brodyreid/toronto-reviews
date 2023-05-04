import { Button, MenuItem, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { supabase } from '../App';
import useGetReviews from '../hooks/useGetReviews';
import { ReviewInsert } from '../../types/types';
import ReviewCard from '../components/ReviewCard';
import useIsAdmin from '../hooks/useIsAdmin';


const addReview = async (review: ReviewInsert) => {
	const { error } = await supabase.from('reviews').insert(review);
	if (error) {
		throw new Error(error.message);
	}
};

export default function Reviews() {
	const { data: isAdmin } = useIsAdmin();


	const { data: reviews, isLoading, isSuccess, refetch } = useGetReviews();
	const ratings = [
		{
			value: 1,
			label: '1',
		},
		{
			value: 2,
			label: '2',
		},
		{
			value: 3,
			label: '3',
		},
		{
			value: 4,
			label: '4',
		},
		{
			value: 5,
			label: '5',
		},
	];

	const onSubmit = (values: ReviewInsert) => {
		addReview(values);
		refetch();
		console.log(values);
	};

	const checkSession = async () => {
		const { data: { session, user }, error } = await supabase.auth.refreshSession();
		console.log('Session: ', session, '\nUser: ', user, '\nError: ', error);
	};

	return (
		<>
			<Button onClick={checkSession}>Check Session</Button>
			<Typography variant='h3'>Hello this is the Reviews page</Typography>
			{isAdmin && <Formik
				initialValues={{
					author: '',
					restaurant: '',
					rating: 1,
					body: '',
				}}
				onSubmit={(values) => onSubmit(values)}>
				{({ values, handleChange, handleBlur }) => (
					<Form>
						<TextField
							name='author'
							label='Author'
							value={values.author}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<TextField
							name='restaurant'
							label='Restaurant'
							value={values.restaurant}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<TextField
							select
							name='rating'
							label='Rating'
							value={values.rating}
							style={{ minWidth: '100px' }}
							onChange={handleChange}
							onBlur={handleBlur}>
							{ratings.map((option) => (
								<MenuItem
									key={option.value}
									value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<TextField
							name='body'
							label='Review'
							value={values.body}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<Button type='submit'>Submit</Button>
					</Form>
				)}
			</Formik>}
			{isLoading ? <div>Loading...</div> :
				<>
				
					{isSuccess && Boolean(reviews.length) && reviews.map((review) => <ReviewCard key={review.id} {...review} />)}
				</>
			}
		</>
	);
};