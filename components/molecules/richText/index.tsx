import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 my-5 mx-auto">
          <Image
            className="object-contain"
            src={urlForImage(value).url()}
            alt="Blog post image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    // h1: ({ children }: any) => (
    //   <h1 className="text-5xl py-10 font-bold">{children}</h1>
    // ),
    // h2: ({ children }: any) => (
    //   <h1 className="text-4xl py-10 font-bold">{children}</h1>
    // ),
    // h3: ({ children }: any) => (
    //   <h1 className="text-3xl py-10 font-bold">{children}</h1>
    // ),
    // h4: ({ children }: any) => (
    //   <h1 className="text-2xl py-10 font-bold">{children}</h1>
    // ),

    h1: ({ children }: any) => (
      <h1 className="text-3xl py-5 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h1 className="text-2xl py-5 font-bold">{children}</h1>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
