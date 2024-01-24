import { Typography } from "@material-tailwind/react";
import logo from "../../assets/logo-footer.png";
const LINKS = [
  {
    title: "Company",
    items: ["About us", "Blog", "Security", "Pitch Deck"],
  },
  {
    title: "Wallet",
    items: ["Buy Crypto", "Sell Crypto", "NFTs", "Learn to Earn"],
  },
  {
    title: "Support",
    items: ["Help Center", "Community", "Contact us", "Available Crypto"],
  },
  {
    title: "Legal",
    items: ["Privacy Policy", "Cookies Policy", "Terms & Conditions"],
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full pt-10">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 sm:grid-cols-1">
          <div className="grid lg:grid-rows-6 grid-flow-col gap-2 sm:grid-rows-2">
            <div className="mb-0">
              <img src={logo} className="w-[15rem] h-auto" />
            </div>
            <div className="flex gap-4 text-emerald">
              <Typography
                placeholder={undefined}
                as="a"
                href="https://instagram.com/leyyerwallet"
                target="_blank"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography
                placeholder={undefined}
                as="a"
                href="https://twitter.com/leyyerwallet"
                target="_blank"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Typography>
              <Typography
                placeholder={undefined}
                as="a"
                href="https://github.com/leyyerwallet"
                target="_blank"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography
                placeholder={undefined}
                as="a"
                href="https://t.me/leyyerwallet"
                target="_blank"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography
                  placeholder={undefined}
                  as="a"
                  href="https://www.linkedin.com/company/leyyerwallet/"
                  target="_blank"
                  className="opacity-80 transition-opacity hover:opacity-100"
              >
                <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                  <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      clipRule="evenodd"
                  />
                </svg>
              </Typography>
            </div>
            <div></div>
            <div></div>

            <div className="text-left">
              <Typography placeholder={undefined} color="blue-gray" className="font-normal">
                &copy; 2024 Leyyer Tech OÜ
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-between text-left">
            {LINKS.map(({ title, items }) => (
                  <ul key={title}>
                    <Typography
                        placeholder={undefined}
                        variant="small"
                        color="black"
                        className="mb-2 font-poppins leading-4 font-bold"
                    >
                      {title}
                    </Typography>
                    {items.map((link) => (
                        <li key={link}>
                          <Typography
                              placeholder={undefined}
                              variant="small"
                              target ="blank"
                              as="a"
                              href={title === "Company" && link === "Pitch Deck" ? "https://drive.google.com/file/d/1FoLjFifjKyFIbbeLsakbCG7R2_EtBWPC/view?pli=1" : "#"}
                              color="black"
                              className="py-1.5 font-poppins font-medium leading-4 transition-colors opacity-40 hover:text-blue-gray-900"
                          >
                            {link}
                          </Typography>
                        </li>
                    ))}
                  </ul>
              ))}
            </div>
          </div>
        </div>
      </footer>
  );
};
export default Footer;
