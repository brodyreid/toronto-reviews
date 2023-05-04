import { useQuery } from 'react-query';
import { supabase } from '../App';

export const isAdmin = async () => {
    const { data, error } = await supabase.rpc('has_role', { name: 'admin' });
    if (error) {
        throw new Error(error.message)
    }
    return data;
};

export default function useIsAdmin() {
	return useQuery('isAdmin', () => isAdmin());
};