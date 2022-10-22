import type IAdvocate from "../interfaces/Advocate";

import { advocatesUrl } from "$lib/store";

import axios from "axios";


let advocateListUrl: URL;

advocatesUrl.subscribe((value) => {
    advocateListUrl = value;
});


export async function getAdvocateDetails(advocateUsername: string): Promise<IAdvocate | null> {
    
    // advocates list url with username appended turns to advocate details.
    const url = new URL(advocateUsername, advocateListUrl);

    const { data, status } = await axios.get<IAdvocate>(url.toString());
    
    if (status == 404) return null;

    return data;
}


interface IAdvocateListResponse {
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

export async function getAdvocateListPageData(page: number = 1): Promise<IAdvocateListResponse> {

    // Let's set page query parameter
    const url = new URL(advocateListUrl);
    url.searchParams.set("page", page.toString());


    const { data } = await axios.get<IAdvocateListResponse>(url.toString());

    return data;
}