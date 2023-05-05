import { useQuery } from 'react-query';
import { supabase } from '../App';

export const isUserAdmin = async () => {
    const { data, error } = await supabase.rpc('has_role', { name: 'admin' });
    if (error) {
        throw new Error(error.message)
    }
    return data;
};

export default function useIsUserAdmin() {
	return Boolean(useQuery('isUserAdmin', () => isUserAdmin()).data);
};