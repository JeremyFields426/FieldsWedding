import { useQueryClient } from "react-query";
import { CACHE } from "../api/Routes";

export function useInvalidation() {
	const queryClient = useQueryClient();

	return async (cache: CACHE) =>
		await queryClient.invalidateQueries(cache);
}
