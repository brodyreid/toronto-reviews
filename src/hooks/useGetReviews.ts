import {  useQuery } from 'react-query';
import { supabase } from '../App';

const getReviews = async () => {
    const { data, error } = await supabase
        .from('reviews')
        .select('*');
		
	if (error) {
		throw new Error(error.message);
	}

	return data;
};

export default function useGetReviews() {
	return useQuery('getReviews', () => getReviews());
}