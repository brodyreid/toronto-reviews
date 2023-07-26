import { Button, MenuItem, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import useGetReviews from '../api/useGetReviews';
import ReviewCard from '../components/ReviewCard';
import useIsAdmin from '../api/useIsUserAdmin';
import createReview from '../api/createReview';
import { useUser } from '@supabase/auth-helpers-react';
import { ReviewInsert } from '../../types/types';
import { ratings } from '../utils/ratingsUtils';
import ReviewsList from '../components/ReviewsList';

export default function Reviews() {
	const user = useUser();
	const isAdmin = useIsAdmin();
	const { data, isLoading, isSuccess, refetch } = useGetReviews();
	const reviews = !data ? [] : data.map((review) => {
		const isUserTheAuthor = !!review?.author_id && review.author_id === user?.id;
		return { ...review, isUserTheAuthor};
	});

	console.log(reviews);
	console.log(isAdmin)

	const handleCreateReview = async (values: ReviewInsert) => {
		await createReview({
			...values,
			author_id: user?.id,
		});
		await refetch();
		console.log(values);
	};

	return (
		<>
			<Typography variant='h3'>Hello this is the Reviews page</Typography>
			{isAdmin && (
				<Formik
					initialValues={{
						restaurant: '',
						rating: 1,
						body: '',
					}}
					onSubmit={(values) => handleCreateReview(values)}>
					{({ values, handleChange, handleBlur }) => (
						<Form>
							<TextField
								name='restaurant'
								label='Restaurant'
								value={values.restaurant}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<TextField
								// add individual ratings for each category
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
				</Formik>
			)}
			{isLoading ? (
				<Typography>Loading...</Typography>
			) : (
				<>
						{isSuccess &&
							<ReviewsList items={reviews} renderItem={ReviewCard} />
						}
				</>
			)}
		</>
	);
}
