import type IAdvocate from "$lib/shared/interfaces/Advocate";
import type { PageLoad } from './$types';

import { get } from "svelte/store";

import { advocatesUrl } from "$lib/store";

import axios from "axios";

interface IResponse {
    pagination: {
        current_page: number,
        total_pages: number,
        has_previous: boolean,
        has_next: boolean,
        prev_page: any,
        next_page: any,
        results_found: number,
        pages: number[]
    },
    advocates: IAdvocate[],
    total: number
}


const advocateListUrl = get(advocatesUrl);

export const load: PageLoad = async ({ url }) => {
    
    const fetchUrl = new URL(advocateListUrl);

    const page = url.searchParams.get("page");
    if (page) fetchUrl.searchParams.set("page", page);

    const { data } = await axios.get<IResponse>(fetchUrl.toString());
    
    return data;
};
