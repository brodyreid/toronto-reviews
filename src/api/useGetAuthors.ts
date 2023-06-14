import { useQuery } from 'react-query';
import { supabase } from '../App';
import { Author, GetAuthorsReturnType} from '../../types/types';
// import { hasher } from '../utils/HashUtils';

export const getAuthors = async () => {
	const { data, error } = await supabase
		.from('profiles')
		.select('user_id, username, created_at, avatar_url, bio, reviews(count)')
		.returns<GetAuthorsReturnType[]>();

	if (error) {
		throw new Error(error.message);
	}

	return data.map(({ avatar_url, bio, created_at, reviews, username, user_id }) => ({
		user_id,
		username,
		avatar_url,
		bio,
		created_at,
		reviewsCount: reviews?.[0].count ?? 0,
	})) as Author[];
};

export default function useGetAuthors() {
	return useQuery('getAuthors', () => getAuthors());
}
