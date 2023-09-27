import AuthorInfo from '@/components/organism/authorInfo/AuthorInfo';
import PostCard from '@/components/molecules/card/PostCard';
import React from 'react';
import Footer from '@/components/organism/footer';
import Header from '@/components/organism/header';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export const metadata = {
  title: 'Author | LoudOnThoughts',
  description: 'Get a glimpse into the mind and insight of the Fantasma',
};

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const Author = async () => {
  const posts: Post[] = await client.fetch(query);

  console.log(posts);

  return (
    <main>
      {/* Author info */}
      <section>
        <AuthorInfo />
      </section>

      {/* Latest Post */}
      <section>
        <div className="container mx-auto mt-12 mb-24 px-5 sm:px-0">
          <h3 className="text-base-content font-bold text-2xl mb-8">
            Latest Post
          </h3>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, index: number) => (
              <div key={index}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Author;
