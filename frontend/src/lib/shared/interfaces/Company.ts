interface ICompany {
    id: number,
    name: string,
    username: string,
    logo: URL,
    bio: string,
    advocates: number[]
    twitter: URL | undefined,
    linkedin: URL | undefined,
}

export default ICompany;