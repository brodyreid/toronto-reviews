import { Database } from './database.types';

export type ReviewInsert = Database['public']['Tables']['reviews']['Insert'];
export type Review = Database['public']['Tables']['reviews']['Row'];
export type Profile = Omit<
	Database['public']['Tables']['profile']['Row'],
	'user_id' | 'full_name'
	> & { reviews?: { count: number }[]; reviewsCount?: number; hashedId?: number };
export type ReviewWithProfile = Review & { profile: Profile };

export interface Category {
	title: string;
	slug: string;
}

export interface LoginProps {
	email: string;
	password: string;
}