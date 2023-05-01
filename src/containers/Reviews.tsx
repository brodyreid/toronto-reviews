import { Button, MenuItem, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { supabase } from '../App';
import { Review } from '../../types/types';
import useGetReviews from '../hooks/useGetReviews';
import { createId } from '@paralleldrive/cuid2';

const addReview = async (values: Review) => {
	return await supabase.from('reviews').insert({
		author: values.author,
		restaurant: values.restaurant,
		rating: values.rating,
		body: values.body,
	});
};

const Reviews = () => {
	const { data: reviews, isLoading, isSuccess } = useGetReviews();
	const ratings = [
		{
			value: '1',
			label: '1',
		},
		{
			value: '2',
			label: '2',
		},
		{
			value: '3',
			label: '3',
		},
		{
			value: '4',
			label: '4',
		},
		{
			value: '5',
			label: '5',
		},
	];

	const onSubmit = (values: any) => {
		addReview({...values, id: createId(), created_at: new Date()});
		console.log(values);
	};

	return (
		<>
			<Typography variant='h3'>Hello this is the Reviews page</Typography>
			<Formik
				initialValues={{
					author: 'fff',
					restaurant: 'faaaa',
					rating: '4',
					body: 'aaa',
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
						<pre>{JSON.stringify(values, null, 2)}</pre>					
					</Form>
				)}
			</Formik>
			{isLoading ? <div>Loading...</div> :
				<>
				
					{isSuccess && reviews?.map((review) => (
						<div key={review.id}>
							<h3>{review.author}</h3>
							<p>{review.body}</p>
						</div>
					))}
				</>
			}
		</>
	);
};

export default Reviews;
