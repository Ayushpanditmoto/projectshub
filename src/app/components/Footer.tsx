import Link from "next/link";
import { FaTwitter, FaYoutube, FaGithub, FaRss } from 'react-icons/fa'; // Import the icons you want to use
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-200 py-10 flex flex-col justify-between h-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-1">
          <div></div>
          <div className="">
            <Link
              href="/about"
              className="text-base text-gray-800 hover:text-gray-900"
            >
              About
            </Link><br></br><br></br>
            <Link
              href="/category/code"
              className="text-base text-gray-800 hover:text-gray-900"
            >
              Code
            </Link><br></br><br></br>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-800 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
          <div>
            
          </div>
          <div className="space-y-2">
            <Link
              href="/privacy"
              className="text-base text-gray-800 hover:text-gray-900"
            >
              Privacy
            </Link><br></br><br></br>
            <Link
              href="/"
              className="text-base text-gray-800 hover:text-gray-900"
            >
              Setup
            </Link><br></br><br></br>
            <Link
              href="/sitemap"
              className="text-base text-gray-800 hover:text-gray-900"
            >
              Sitemap
            </Link>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href=""
            title=""
          >
            <FaTwitter className="h-6 w-6 text-[#00aced] hover:text-gray-500" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href=""
            title="Subscribe to our YouTube channel"
          >
            <FaYoutube className="h-6 w-6 text-red-600 hover:text-black" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href=""
            title="Explore our open-source work"
          >
            <FaGithub className="h-6 w-6 text-[#666666] hover:text-gray-500" />
          </Link>
          <Link title="RSS Feed" href="/rss.xml">
            <FaRss className="h-6 w-6 text-[#ee802f] hover:text-gray-500" />
          </Link>
        </div>
        <div className="text-gray-800 text-center">
          &copy; {currentYear} ProjectsHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
