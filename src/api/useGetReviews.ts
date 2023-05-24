import { useQuery } from 'react-query';
import { supabase } from '../App';
import { GetReviewsReturnType, ReviewWithProfile } from '../../types/types';

export const getReviews = async () => {
	const { data, error } = await supabase
		.from('reviews')
		.select('*, profiles(*)')
		.returns<GetReviewsReturnType[]>();

	if (error) {
		throw new Error(error.message);
	}

	return data.map((review) => {
		if (!Boolean(review?.profiles)) {
			return {
				...review,
				profile: {
					...review.profiles,
					username: 'Anonymous',
					avatar_url:
						'https://ahihbpdewjvyhhbglaym.supabase.co/storage/v1/object/sign/avatars/diet_coke.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2RpZXRfY29rZS5qcGciLCJpYXQiOjE2ODM3NDg0NjYsImV4cCI6MTcxNTI4NDQ2Nn0.K7nmY2pHST4inAUecmn5F5hdMv0ntHoPUrbmDoMavJs&t=2023-05-10T19%3A54%3A26.199Z',
				},
			};
		} else {
			return { ...review, profile: review.profiles };
		}
	}) as ReviewWithProfile[];
};

export default function useGetReviews() {
	return useQuery('getReviews', () => getReviews());
}
