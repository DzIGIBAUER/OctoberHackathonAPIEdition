import type { IAdvocateResponse } from "$lib/shared/interfaces/Advocate";
import type { PageLoad } from './$types';

import { get } from "svelte/store";

import { advocatesUrl } from "$lib/store";
import { cachedAdvocateData } from "$lib/shared/cache.store";

import axios from "axios";


const advocateListUrl = get(advocatesUrl);

export const load: PageLoad = async ({ url }) => {
    
    const page = url.searchParams.get("page") || "1";

    const cachedData = cachedAdvocateData.getData();
    if (cachedData && cachedData.pagination.current_page.toString() == page) return cachedData;

    const fetchUrl = new URL(advocateListUrl);
    fetchUrl.searchParams.set("page", page);

    const { data } = await axios.get<IAdvocateResponse>(fetchUrl.toString());

    cachedAdvocateData.updateData(data);

    return data;
};
