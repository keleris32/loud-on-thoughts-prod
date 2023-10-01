import { FooterDataOne, FooterDataTwo } from '@/data/footerData';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NewsLetter from '@/components/molecules/newsletter/NewsLetter';
import useMode from '@/utils/themeMode';
import { Favicon } from '@/components/organism/header';
import Image from 'next/image';

/**
 * Our Footer is a reusable UI component that used to represent bottom section of any website.
 *
 * @property website details, email, phone number, some necessary link and a newsletter component.
 *
 * @returns React component that can be easily integrated into any web application.
 */

const Footer = () => {
  const { lightMode, theme } = useMode();
  const [logo, setLogo] = useState('/Loudonthoughtslogo.png');

  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  useEffect(() => {
    if (theme === 'light') {
      setLogo('/Loudonthoughtslogo.png');
    } else {
      setLogo('/LoudonthoughtsWhitelogo.png');
    }
  }, [theme]);

  return (
    <footer className="bg-base-200 px-5 md:px-0 font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5 py-16">
          <div className="col-span-12 lg:col-span-3">
            <h5 className="text-lg font-semibold text-base-content font-sans">
              About
            </h5>
            <p className="mt-3 text-base text-base-content/70 mb-6">
              Get a glimpse into the mind and insight of the Fantasma
            </p>
            <div>
              <a
                href="mailto:info@loudonthoughts.com"
                className="font-semibold text-base-content text-base"
              >
                Email :{' '}
                <span className="text-base-content/70 font-normal hover:text-primary hover:duration-300 transition">
                  info@loudonthoughts.com
                </span>
              </a>
            </div>
            <div className="mt-1">
              <a
                href="tel:880123456789"
                className="font-semibold text-base-content text-base"
              >
                Phone :{' '}
                <span className="text-base-content/70 font-normal hover:text-primary hover:duration-300 transition">
                  80 3346 2229
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-between lg:justify-center lg:gap-20 col-span-12 lg:col-span-5">
            <div>
              <h5 className="text-base-content text-lg font-semibold font-sans">
                Quick Link
              </h5>
              <div className="flex flex-col gap-y-2 mt-6">
                {FooterDataOne.map((item: any, index: number) => (
                  <div key={index}>
                    <Link
                      href={item.link}
                      className="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-base-content text-lg font-semibold font-sans">
                Category
              </h5>
              <div className="flex flex-col gap-y-2 mt-6">
                {FooterDataTwo.map((item: any, index: number) => (
                  <div key={index}>
                    <Link
                      href={item.link}
                      className="link link-hover text-base text-base-content/70 hover:text-primary transition hover:duration-300"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <NewsLetter />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between py-8 bg-base-200 border-t border-base-content/10">
          <div className="flex items-center justify-between gap-2.5">
            <Link href="/">
              {/* <Favicon className={`text-base-content`} /> */}
              <Image
                src={logo}
                width={117.27}
                height={70}
                alt="Loudonthoughts logo"
              />
            </Link>
            <div>
              {/* <h4 className="text-xl text-base-content font-sans">
                        <strong>LoudOnThoughts</strong>
                     </h4> */}
              <p className="mt-0.5 text-base-content/70 text-base">
                © Loud on Thoughts. All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-base-content/70">
            <Link
              href="/"
              className="text-base border-r border-base-content/10 pr-4 hover:text-primary transition hover:duration-300"
            >
              Terms of Use
            </Link>
            <Link
              href="/"
              className="text-base border-r border-base-content/10 pr-4  hover:text-primary transition hover:duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-base hover:text-primary transition hover:duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
