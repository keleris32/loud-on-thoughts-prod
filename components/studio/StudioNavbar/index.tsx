import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5 bg-[#101112] border-b border-b-white">
        <Link href="/" className="text-white flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-white mr-2" />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
