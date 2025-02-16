import { getSlug } from "@/app/helpers/slugify";
import Link from "next/link";

interface PostProps {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
        geo: {
            lat: string,
            lng: string
        }
    };
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export const Postt: React.FC<{post: PostProps}> = ({post}) => {
    return (
        <article className="flex flex-col dark:bg-gray-50 z-50">
            <a rel="noopener noreferrer" href="#" aria-label={post.name}>
                <iframe 
                  src={`https://maps.google.com/maps?q=${post.address.geo.lat},${post.address.geo.lng}&t=&z=4&ie=UTF8&iwloc=&output=embed`} 
                  width="100%" 
                  title="Google Map"
                />
            </a>
            <div className="flex flex-col flex-1 p-6">
                <a rel="noopener noreferrer" href="#" aria-label={post.name}></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
                    {post.username}
                </a>
                <Link href={"/posts/" + getSlug(post.name)}>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                        {post.name}
                    </h3>
                </Link>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                    <span>{post.address.city}</span>
                    <span>{post.website}</span>
                </div>
            </div>
        </article>
    );
};