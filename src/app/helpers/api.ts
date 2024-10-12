import { post } from "./postApi";
import { getSlug } from "./slugify";




export async function getPosts(): Promise<post[]> {
    const postsFetch = await fetch ('https://jsonplaceholder.typicode.com/users')
    const posts: post[] = await postsFetch.json();
    return posts;
}

 

 export async function getPost(name: string): Promise<post[]> {
    const posts = await getPosts()
    const post = posts.filter(item => getSlug(name) === getSlug(item.name))
    return post;
}
