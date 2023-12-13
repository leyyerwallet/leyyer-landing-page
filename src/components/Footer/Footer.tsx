import { Typography } from "@material-tailwind/react";
import logo from '../../assets/logo-footer.png';

const LINKS = [
  {
    title: "Company",
    items: ["About", "Careers", "Affiliates", "Blog", "Press", "Security", "Investors", "Vendors", "Legal & Privacy",
   "Cookie Policy", "Cookie Preferances", "Donot share my personal information"  ],
  },
  {
    title: "Individuals",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Support",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
  {
    title: "Businesses",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Learn",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Developers",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full pt-10 pb-5">
      <div className="mx-auto w-full max-w-7xl px-8 2xl:max-w-[85%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="mb-8 md:mb-0 relative">
            <div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-w-5 aspect-h-3 w-[100vw] sm:w-[80vw] bg-gradient-to-tr from-[#00D395] to-[#ffffff] opacity-30 z-0"
              style={{
                clipPath: "ellipse(70% 40% at 50% 50%)",
              }}
            />
            <img src={logo} className="w-[15rem] h-auto mx-auto md:mx-0 z-10 relative" alt="Logo" />
            <div className="flex gap-4 text-blue-gray-900 justify-center md:justify-start mt-4 z-10 relative">
              <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Twitter icon */}
                </svg>
              </Typography>
              {/* Add other social icons as needed */}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 text-left">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography variant="small" color="black" className="mb-2 font-poppins font-bold">
                  {title}
                </Typography>
                <ul>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        variant="small"
                        as="a"
                        href="#"
                        color="black"
                        className="py-1.5 font-poppins font-medium leading-4 transition-colors opacity-40 hover:text-blue-gray-900"
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
