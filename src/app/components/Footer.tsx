import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
function Footer() {
  const Year = new Date().getFullYear();

  const footerLinks = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Code",
      href: "/category/code",
    },
    {
      name: "Contact",
      href: "/",
    },
    {
      name: "Privacy",
      href: "/privacy",
    },
    {
      name: "Setup",
      href: "/",
    },
    {
      name: "Sitemap",
      href: "/sitemap",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/projectshub.io",
      icon: FaFacebookF,
      hoverColor: "text-[#3b5998]",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/projectshub_io",
      icon: FaTwitter,
      hoverColor: "text-[#1da1f2]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/projectshub-io",
      icon: FaLinkedinIn,
      hoverColor: "text-[#0077b5]",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UC5Wx6Yr4k4JNtQh4X5gkz4g",
      icon: FaYoutube,
      hoverColor: "text-[#ff0000]",
    },
    {
      name: "GitHub",
      href: "",
      icon: FaGithub,
      hoverColor: "text-[#333333]",
    },
  ];

  return (
    <>
      <footer className="mx-auto font-semibold max-w-7xl overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          {footerLinks.map((link) => (
            <div key={link.name} className="px-5 py-2">
              <Link
                className="text-base text-gray-500 hover:text-gray-900"
                title={link.name}
                href={link.href}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              target="_blank"
              rel="noopener noreferrer "
              href={link.href}
              title={link.name}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{link.name}</span>
              <link.icon
                className={`h-6 w-6 ${link.hoverColor} hover:text-gray-500`}
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">
          ©{Year === 2023 ? "2023" : "2023 - " + Year} ProjectsHub ® All rights
          reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
