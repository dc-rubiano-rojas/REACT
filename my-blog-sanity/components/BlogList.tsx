import Image from 'next/image'

import urlFor from '../lib/urlFor';
import ArrowUpRightIcon from '@heroicons/react/24/solid/ArrowUpRightIcon';
import ClientSideRoute from './ClientSideRoute';

type Props = {
    posts: Post[]
}

const BlogList = ({ posts }: Props) => {
    return (
        <div>
            <hr className="border-[#F7AB0A]" />

            <div className='grid grid-cols-1 md:grid-cols-2 
            px-1- gap-10 gap-y-16 pb-24'>
                {/* Posts */}
                {posts.map(post => (
                    <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
                        <div className="group flex flex-col cursor-pointer py-5 px-5">

                            <div className="relative w-full h-80 drop-shadow-xl 
                        group-hover:scale-105 transition-transform 
                        duration-200 ease-out">
                                <Image
                                    className="object-cover object-left lg:object-center"
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.author.name}
                                    fill
                                />
                                <div className="absolute bottom-0 w-full bg-opacity-20 
                            bg-black backdrop-blur-lg rounded drop-shadow-lg 
                            text-white p-5 flex justify-between">
                                    <div>
                                        <p className="font-bold">{post.title}</p>

                                        <p>
                                            {new Date(post._createdAt).toLocaleDateString(
                                                'en-US', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-y-2 
                                md:gap-x-2 items-center">
                                        {post.categories.map(category => (
                                            <div className="bg-[#F7AB0A] text-center text-black 
                                        px-3 py-1 rounded-full text-sm font-semibold">
                                                <p>{category.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="underline text-lg font-bold">{post.title}</p>
                                {/* <p className="line-clamp-2 text-gray-500">{post.body[0].children[0].text}</p> */}
                                <p className="line-clamp-2 text-gray-500">{post.description}</p>
                            </div>

                            <p>
                                Read Post
                                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                            </p>
                        </div>
                    </ClientSideRoute>
                ))}
            </div>
        </div>
    )
}

export default BlogList