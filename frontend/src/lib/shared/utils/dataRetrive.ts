import type IAdvocate from "../interfaces/Advocate";

import { advocatesUrl } from "$lib/store";

import axios from "axios";

let advocateDetailsUrl: URL;

advocatesUrl.subscribe((value) => {
    advocateDetailsUrl = value;
});


export async function getAdvocateData(advocateUsername: string): Promise<IAdvocate | null> {
    
    const url = new URL(advocateUsername, advocateDetailsUrl);

    const { data, status } = await axios.get<IAdvocate>(url.toString());
    
    if (status == 404) return null;

    return data;
}