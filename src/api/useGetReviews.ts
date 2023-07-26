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

	return data.map(({ profiles, ...rest }) => {
		return {
			...rest,
			profile: profiles,
		};
	}) as ReviewWithProfile[];
};

export default function useGetReviews() {
	return useQuery('getReviews', () => getReviews());
}
