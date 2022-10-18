import type ILinks from "./Links";

interface IAdvocate {
    name: string,
    username: string,
    profile_pic: URL,
    bio: string,
    url: URL,
    links: ILinks[],
    follower_count: number
}



export default IAdvocate;