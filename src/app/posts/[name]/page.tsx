
import { getPosts } from "@/app/helpers/api"


interface Params {
    name: string
}


export default async function postPosts({params}: {params: Params}) {
    const post = await getPosts(params.name)

    if (!post || post.length === 0) {
        return <h1>no posts</h1>
    }

    const userPost = post[0]
    return (
        <>
       
            <h1>{userPost.name}</h1>
            <h1>{userPost.username}</h1>
            <h1>{userPost.email}</h1>
            <h1>{userPost.address.city}</h1>
            <h1>{userPost.address.street}</h1>
            <h1>{userPost.address.geo.lat}</h1>
        </>
    )
}