import { Database } from './database.types';

// Return types for the API
export type GetReviewsReturnType =
	Database['public']['Tables']['reviews']['Row'] & {
		profiles: Database['public']['Tables']['profiles']['Row'];
	};
export type GetAuthorsReturnType = Omit<
	Database['public']['Tables']['profiles']['Row'],
	'full_name'
> & {
	reviews: { count: number }[];
};

// Common
export type ReviewInsert = Database['public']['Tables']['reviews']['Insert'];
export type Review = Database['public']['Tables']['reviews']['Row'];
export type Profile = Omit<
	Database['public']['Tables']['profiles']['Row'],
	'full_name'
>;
export type ReviewWithProfile = Review & { profile: Profile } & {
	isUserTheAuthor?: boolean;
};
export type Author = Profile & { reviewsCount: number; };

// Interfaces for Components
export interface Category {
	title: string;
	slug: string;
}
export interface LoginFields {
	email: string;
	password: string;
}
export interface LoginFormProps {
	onSubmit: (values: LoginFields) => void;
	loading: boolean;
}
