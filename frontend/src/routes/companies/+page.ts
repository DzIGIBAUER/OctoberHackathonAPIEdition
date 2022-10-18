import type ICompany from "$lib/shared/interfaces/Company";

import { get } from "svelte/store";
import { companiesUrl } from "$lib/store";

import axios from "axios";


interface IRequestResponse {
    total: number,
    companies: ICompany[]
};


export async function load(): Promise<ICompany[]> {
    
    const apiEndpoint = get(companiesUrl);

    const { data } = await axios.get<IRequestResponse>(apiEndpoint);
    
    return data.companies;
}