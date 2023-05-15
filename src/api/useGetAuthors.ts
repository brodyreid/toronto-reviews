import { useQuery } from 'react-query';
import { supabase } from '../App';
import { Profile } from '../../types/types';
import { hasher } from '../utils/HashUtils';

export const getAuthors = async () => {
	const { data, error } = await supabase
		.from('profile')
		.select('username, created_at, avatar_url, bio, reviews(count)')
		.returns<Profile[]>();

	if (error) {
		throw new Error(error.message);
	}

	return data.map(({ avatar_url, bio, created_at, reviews, username }) => ({
		avatar_url,
		bio,
		created_at,
		reviewsCount: reviews?.[0].count ?? 0,
		username,
		hashedId: hasher(username)
	}));
};

export default function useGetAuthors() {
	return useQuery('getAuthors', () => getAuthors());
}
