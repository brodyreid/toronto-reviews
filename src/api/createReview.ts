import { ReviewInsert } from "../../types/types";
import { supabase } from "../App";

export default async function createReview (review: ReviewInsert) {
	const { error } = await supabase.from('reviews').insert(review);
	if (error) {
		throw new Error(error.message);
	}
};