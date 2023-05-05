import { useQuery } from 'react-query';
import { supabase } from '../App';

export const getUserProfile = async (userId: string | null) => {
	if (!userId) {
		const {
			data: { publicUrl },
		} = supabase.storage.from('bucket').getPublicUrl('image.jpg', {
			transform: {
				width: 500,
				height: 600,
			},
		});
		return {
			avatar_url: publicUrl,
			full_name: 'Anonymous',
			updated_at: null,
			user_id: '',
			username: 'Anonymous',
		};
	} else {
		const { data, error } = await supabase
			.from('profiles')
			.select('*')
			.eq('user_id', userId)
			.single();
		if (error) {
			throw new Error(error.message);
		}
		return data;
	}
};

export default function useGetUserProfile(userId: string | null) {
	return useQuery('getUserProfile', () => getUserProfile(userId));
}
