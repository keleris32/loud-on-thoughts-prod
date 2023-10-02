import Advertisement from '@/components/organism/advertisement/Advertisement';
import BannerCard from '@/components/molecules/card/BannerCard';
import PostCard from '@/components/molecules/card/PostCard';
import Link from 'next/link';
import Header from '@/components/organism/header';
import Footer from '@/components/organism/footer';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export const metadata = {
  title: 'Home Page | LoudOnThoughts',
  description: 'Get a glimpse into the mind and insight of the Fantasma',
};

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const posts: Post[] = await client.fetch(query);

  return (
    <main className="container mx-auto px-3 sm:px-0">
      {posts.length === 0 ? (
        <div className="w-full h-[300px] text-center">
          <h1 className="font-semibold text-xl">There are no posts</h1>
        </div>
      ) : (
        <>
          <section className="">
            <BannerCard posts={posts} />
          </section>

          <section className="my-20">
            <h3 className="text-base-content font-bold text-2xl mt-8 mb-4 font-work leading-8">
              Latest Post
            </h3>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, index) => {
                return (
                  <div key={post._id}>
                    {index === 0 ? null : <PostCard post={post} />}
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}
    </main>
  );
}

// export default async function Home() {
//   const posts: Post[] = await client.fetch(query);

//   // console.log(posts);

//   return (
//     <main className="container mx-auto px-3 sm:px-0">
//       {}
//       {/* Banner Component */}
//       <section className="">
//         <BannerCard posts={posts} />
//       </section>

//       {/* Advertisement Component */}
//       {/* <section className="pt-12">
//         <Advertisement />
//       </section> */}

//       {/* Latest Post */}
//       <section className="my-20">
//         <h3 className="text-base-content font-bold text-2xl mt-8 mb-4 font-work leading-8">
//           Latest Post
//         </h3>
//         {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {[1, 2, 3, 4, 5].map((item: any) => (
//             <PostCard key={item} />
//           ))}
//         </div> */}
//         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {posts.map((post, index) => {
//             return (
//               <div key={post._id}>
//                 {index === 0 ? null : <PostCard post={post} />}
//               </div>
//             );
//           })}
//         </div>
//         {/* <div className="flex items-center justify-center w-full mt-8">
//           <Link
//             href={`/blog`}
//             className="btn btn-outline btn-secondary text-secondary-content/60 font-work font-medium text-base"
//           >
//             View All Post
//           </Link>
//         </div> */}
//       </section>

//       {/* Advertisement Component */}
//       {/* <section className="mb-24">
//         <Advertisement />
//       </section> */}
//     </main>
//   );
// }
