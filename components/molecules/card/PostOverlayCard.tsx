import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  posts: Post[];
}

/**
 * Our PostOverlayCard is a reusable UI component used to display a post as a card format.
 *
 * @property featured image, category name, a heading, author image, author name, and publication date.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const PostOverlayCard = ({ posts }: Props) => {
  return (
    <div className="card relative font-work">
      {/* Card Image */}
      <figure className="w-full h-[400px] xl:w-[1216px] xl:h-[500px]">
        <Image
          fill={true}
          src={urlForImage(posts[0].mainImage).url()}
          alt="Post Banner"
          className="rounded-xl object-cover"
        />
      </figure>
      <div className="card-body p-2 md:p-10 absolute bottom-0 w-full md:w-8/12 z-20">
        <div className="flex gap-x-3">
          {posts[0].categories.map((category, index) => (
            <span
              key={index}
              className="btn !cursor-default no-animation hover:bg-primary hover:text-primary-content bg-primary border-0 text-white text-sm px-3 py-2 min-h-fit h-fit rounded-md w-fit capitalize font-medium"
            >
              {category.title}
            </span>
          ))}
        </div>
        <h3>
          <Link
            href={`/post/${posts[0].slug.current}`}
            className="text-white font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition-all hover:duration-500"
          >
            {posts[0].title}
          </Link>
        </h3>
        <div className="mt-3 md:mt-6 flex items-center gap-5 text-neutral-content">
          <div className=" flex items-center gap-3">
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img
                  src={urlForImage(posts[0].author.image).url()}
                  alt="avatar"
                />
              </div>
            </div>
            <h5>
              <span className="text-white text-base-content/60 text-xs md:text-base font-medium hover:text-primary transition hover:duration-300">
                {/* Fantasma */}
                {posts[0].author.name}
              </span>
            </h5>
          </div>
          <p className="text-white text-xs md:text-base">
            {new Date(posts[0]._createdAt).toLocaleDateString('en-Us', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>

      {/*  overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
    </div>
  );
};

export default PostOverlayCard;
