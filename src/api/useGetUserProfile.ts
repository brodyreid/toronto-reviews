import { useQuery } from "react-query";
import { Profile } from "../../types/types";
import { supabase } from "../App";

export const getUserProfile = async () => {
	const { data, error } = await supabase
		.from('profile')
		.select('username, created_at, avatar_url, bio')
		.single<Profile>();

	if (error) {
		throw new Error(error.message);
	}

    return data;
};

export default function useGetUserProfile() {
	return useQuery('getUserProfile', () => getUserProfile());
}
