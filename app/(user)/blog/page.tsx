import Advertisement from '@/components/organism/advertisement/Advertisement';
import PostOverlayCard from '@/components/molecules/card/PostOverlayCard';
import PostCard from '@/components/molecules/card/PostCard';
import PageInfo from '@/components/organism/pageInfo/PageInfo';
import React from 'react';
import Header from '@/components/organism/header';
import Footer from '@/components/organism/footer';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export const metadata = {
  title: 'Blog | LoudOnThoughts',
  description: 'Get a glimpse into the mind and insight of the Fantasma',
};

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const BlogListing = async () => {
  const posts: Post[] = await client.fetch(query);

  return (
    <main>
      {posts.length === 0 ? (
        <div className="w-full h-[300px] text-center">
          <h1 className="font-semibold text-xl">There are no posts</h1>
        </div>
      ) : (
        <div className="container mx-auto px-3 sm:px-0">
          {/* Page title info */}
          <section>
            <PageInfo />
          </section>

          {/* Banner */}
          <section className="my-12">
            <PostOverlayCard posts={posts} />
          </section>

          {/* All posts component */}
          <section className="my-20">
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
        </div>
      )}
    </main>
  );
};

export default BlogListing;

// const BlogListing = async () => {
//   const posts: Post[] = await client.fetch(query);

//   return (
//     <main>
//       <div className="container mx-auto px-3 sm:px-0">
//         {/* Page title info */}
//         <section>
//           <PageInfo />
//         </section>

//         {/* Banner */}
//         <section className="my-12">
//           <PostOverlayCard posts={posts} />
//         </section>

//         {/* All posts component */}
//         <section className="my-20">
//           <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {posts.map((post, index) => {
//               return (
//                 <div key={post._id}>
//                   {index === 0 ? null : <PostCard post={post} />}
//                 </div>
//               );
//             })}
//           </div>
//           {/* <div className="flex items-center justify-center w-full mt-8">
//             <button className="btn btn-outline btn-secondary font-work px-5 text-base font-medium">
//               Load More
//             </button>
//           </div> */}
//         </section>

//         {/* Advertisement component */}
//         <section className="mb-24">
//           <Advertisement />
//         </section>
//       </div>
//     </main>
//   );
// };

// export default BlogListing;
