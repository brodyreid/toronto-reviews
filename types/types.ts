import { getReviews } from '../src/hooks/useGetReviews';

export type Review = Awaited<ReturnType<typeof getReviews>>[0];
export type ReviewInsert = Omit<Review, 'id' | 'created_at'>;
