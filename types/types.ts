import { getReviews } from '../src/api/getReviews';
import { getUserProfile } from '../src/api/useGetUserProfile';
import { Database } from './database.types';

export type Review = Awaited<ReturnType<typeof getReviews>>[0];
export type ReviewInsert = Database['public']['Tables']['reviews']['Insert'];
export type UserProfile = Omit<Awaited<ReturnType<typeof getUserProfile>>, 'updated_at'>;