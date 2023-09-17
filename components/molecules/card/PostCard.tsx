import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import React from 'react';

/**
 * Our PostCard is a reusable UI component used to display a post as a card format.
 *
 * @property featured image, category name, a heading, author image, author name, and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <div
      key={post._id}
      className="card w-fit p-4 border border-base-content/10 rounded-xl font-work"
    >
      <figure>
        <img
          src={urlForImage(post.mainImage).url()}
          alt="email"
          className={`rounded-xl`}
          width={360}
          height={240}
        />
      </figure>
      <div className="card-body py-6 px-2">
        <div className="flex gap-x-3">
          {post.categories.map((category, index) => (
            <span
              key={index}
              className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium"
            >
              {category.title}
            </span>
          ))}
          {/* <span className="btn no-animation hover:bg-primary hover:text-primary-content bg-primary/5 border-0 text-primary text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium">
            Football
          </span> */}
        </div>
        <h3>
          <Link
            href="/single-post"
            className="text-base-content hover:text-primary transition-all duration-300 ease-in-out font-semibold text-lg md:text-xl lg:text-2xl mt-2"
          >
            {post.title}
          </Link>
        </h3>
        <div className="mt-5 flex items-center gap-5 text-base-content/60 ">
          <div className=" flex items-center gap-3">
            <div className="avatar">
              <div className="w-9 rounded-full">
                {/* <img src="/einstein.jpeg" alt="avatar" /> */}
                <img src={urlForImage(post.author.image).url()} alt="avatar" />
              </div>
            </div>
            <h5>
              <Link
                href="/author"
                className="text-base font-medium hover:text-primary transition hover:duration-300"
              >
                {post.author.name}
              </Link>
            </h5>
          </div>
          <p className="text-base">July 21, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
