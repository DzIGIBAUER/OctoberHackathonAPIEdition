import type ILinks from "./Links";
import type IAdvocate from "./Advocate";

interface ICompany {
    id: number,
    name: string,
    username: string,
    url: URL,
    logo: URL,
    bio: string,
    links: ILinks[],
    advocates: IAdvocate[]
}

export default ICompany;