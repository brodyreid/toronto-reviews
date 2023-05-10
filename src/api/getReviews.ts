import { useQuery } from 'react-query';
import { supabase } from '../App';
import { Database } from '../../types/database.types';

type Review = Database['public']['Tables']['reviews']['Row'];
type Profile = Database['public']['Tables']['profile']['Row'];
export type ReviewWithProfile = Review & { profile: Profile };

export const getReviews = async () => {
	const { data, error } = await supabase
		.from('reviews')
		.select('*, profile(*)')
		.returns<ReviewWithProfile[]>();

	if (error) {
		throw new Error(error.message);
	}

	return data.map((review) => {
		if (!review.profile?.user_id) {
			return {
				...review,
				profile: {
					...review.profile,
					username: 'Anonymous',
					avatar_url:
						'https://ahihbpdewjvyhhbglaym.supabase.co/storage/v1/object/sign/avatars/diet_coke.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2RpZXRfY29rZS5qcGciLCJpYXQiOjE2ODM3NDg0NjYsImV4cCI6MTcxNTI4NDQ2Nn0.K7nmY2pHST4inAUecmn5F5hdMv0ntHoPUrbmDoMavJs&t=2023-05-10T19%3A54%3A26.199Z',
				},
			};
		} else {
			return review;
		}
	});
};

export default function useGetReviews() {
	return useQuery('getReviews', () => getReviews());
}