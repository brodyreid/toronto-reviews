import { useQuery } from 'react-query';
import { GetUserProfileReturnType, Profile } from '../../types/types';
import { DEFAULT_AVATAR_URL, supabase } from '../App';

export const getUserProfile = async () => {
	const {
		data: { user },
	} = await supabase.auth.getUser();
	const { data, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('user_id', user?.id)
		.single<GetUserProfileReturnType>();

	if (error) {
		throw new Error(error.message);
	}

	if (!Boolean(data?.avatar_url)) {
		return data as Profile;
	} else {
		return {
			...data,
			avatar_url: DEFAULT_AVATAR_URL,
		} as Profile;
	}
};

export default function useGetUserProfile() {
	return useQuery('getUserProfile', () => getUserProfile());
}
