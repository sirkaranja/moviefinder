import { Link } from "react-router-dom";

import Logo from "../Logo";
import { maxWidth } from "@/styles";
import { cn } from "@/utils/helper";

const Footer: React.FC = () => {
  return (
    <>
      {/* Join Now Section */}
      <section
        className="relative w-full py-8"
        style={{
          backgroundColor: "#4e9f3d",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Green Overlay */}
        <div
          className="absolute inset-0 bg-green-700 opacity-75"
          aria-hidden="true"
        ></div>

        <div
          className={cn(
            maxWidth,
            "relative flex flex-col items-center text-center gap-4 text-white"
          )}
        >
          <h2 className="text-lg font-semibold">
            Join now with your email address and choose your plan to get started.
          </h2>
          <form className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-[300px] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-gray-700"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Join Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "black",
        }}
        className="dark:bg-black lg:py-16 sm:py-10 xs:py-8 py-[30px] w-full"
      >
        <div
          className={cn(
            maxWidth,
            "flex flex-col items-center lg:gap-14 md:gap-12 sm:gap-8 xs:gap-[30px] gap-6"
          )}
        >
          <Logo logoColor="text-white" />

          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Company Section */}
            <div className="flex flex-col items-center text-white">
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-primary hover:underline transition-all duration-300 text-gray-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-primary hover:underline transition-all duration-300 text-gray-300"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Centre Section */}
            <div className="flex flex-col items-center text-white">
              <h3 className="font-bold text-lg mb-4">Help Centre</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/help-centre"
                    className="hover:text-primary hover:underline transition-all duration-300 text-gray-300"
                  >
                    Help Centre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-primary hover:underline transition-all duration-300 text-gray-300"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className="hover:text-primary hover:underline transition-all duration-300 text-gray-300"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account-billing"
                    className="hover:text-primary hover:underline transition-all duration-300 text-gray-300"
                  >
                    Account & Billing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Trending Section */}
            <div className="flex flex-col items-center text-white">
              <h3 className="font-bold text-lg mb-4">Trending Movies & Tv Series</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/most-watched"
                    className="hover:text-primary hover:underline transition-all duration-300 text-gray-300"
                  >
                    Most Watched
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recently-added"
                    className="hover:text-primary hover:underline transition-all duration-300 text-gray-300"
                  >
                    Recently Added
                  </Link>
                </li>
                <li>
                  <Link
                    to="/upcoming"
                    className="hover:text-primary hover:underline transition-all duration-300 text-gray-300"
                  >
                    Upcoming
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
