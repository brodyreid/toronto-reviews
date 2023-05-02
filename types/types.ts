import type { Database } from './database.types';

export type Review = Database['public']['Tables']['reviews']['Row'];
export type ReviewInsert = Omit<Review, 'id' | 'created_at'>;