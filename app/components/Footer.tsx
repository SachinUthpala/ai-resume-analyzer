
const Footer = () => {
  return (
    <footer className="bg-[url('/images/bg-main.svg')] bg-cover bg-center border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-10 lg:px-8 lg:py-12">

        {/* Main Footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand Section */}
          <div className="max-w-sm">
            <a href="/" className="inline-flex items-center group">
              <span className="text-3xl font-extrabold tracking-tight text-gradient transition-transform duration-300 group-hover:scale-105">
                RESUMIND
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-600">
              Make your next career move with confidence.
              Optimize your resume and get ready for your next opportunity.
            </p>

            {/* GitHub Profile Button */}
            <a
              href="https://github.com/SachinUthpala"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-medium text-indigo-700 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-100 hover:text-indigo-800 hover:shadow-md hover:shadow-indigo-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.17c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.004 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.815 1.103.815 2.222v3.293c0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12Z"
                />
              </svg>

              <span>GitHub Profile</span>

              <svg
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17 17 7M7 7h10v10"
                />
              </svg>
            </a>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-10 sm:gap-16">

            {/* Project Links */}
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-gray-900">
                Project
              </h3>

              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <a
                    href="/"
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-indigo-600"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/SachinUthpala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-indigo-600"
                  >
                    Developer Profile
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Links */}
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-gray-900">
                Connect
              </h3>

              <ul className="space-y-4 text-sm text-gray-600">
                <li>
                  <a
                    href="https://github.com/SachinUthpala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-indigo-600"
                  >
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/SachinUthpala?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-indigo-600"
                  >
                    Repositories
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Gradient Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-800">RESUMIND</span>.
            All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with care by{" "}
            <a
              href="https://github.com/SachinUthpala"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-700 transition-colors duration-200 hover:text-indigo-500"
            >
              Sachin Uthpala
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;