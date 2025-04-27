import { useState, useEffect } from "react";
import Button from "./Button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const [showMobileButton, setShowMobileButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current route is home page
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Mobile button hide/show logic - only on home page
      if (window.innerWidth < 768 && isHomePage) {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setShowMobileButton(false);
        } else if (window.scrollY < lastScrollY) {
          // Scrolling up
          setShowMobileButton(true);
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHomePage]);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // Closing animation
      setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 300);
    } else {
      // Opening - show the button when menu is opened (only on home page)
      if (isHomePage) {
        setShowMobileButton(true);
      }
      setIsMobileMenuOpen(true);
    }
  };

  const scrollToSection = (sectionId: string) => {
    toggleMobileMenu(); // Close mobile menu when a section is clicked
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  // Calculate menu height when it opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      const menu = document.getElementById("mobile-menu");
      if (menu) {
        setMenuHeight(menu.scrollHeight);
      }
    } else {
      setMenuHeight(0);
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="w-full bg-white fixed lg:p-3 xl:p-3 p-1 z-50 top-0">
      {/* First Line - Logo and Hamburger */}
      <div className="container flex items-center w-full justify-between">
        <Link to={`/`}>
          <div
            className="flex items-center gap-3 w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Logo SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="53"
              viewBox="0 0 63 63"
              fill="none"
              className="transition-transform lg:w-auto xl:w-auto duration-300"
            >
              <g clipPath="url(#clip0_139_139)">
                <path
                  d="M58.8051 54.7216C56.5119 56.7058 53.3301 57.699 49.2576 57.699C47.8546 57.699 46.4345 57.5191 44.9973 57.1605C43.5601 56.8003 42.2248 56.1759 40.9931 55.2867C39.7608 54.3956 38.7516 53.1809 37.965 51.6417L44.3296 49.3315C44.8089 50.2558 45.4926 50.8882 46.3827 51.2313C47.2729 51.5729 48.162 51.7442 49.0522 51.7442C50.6948 51.7442 52.0125 51.3584 53.0046 50.5888C53.9967 49.8182 54.4935 48.5955 54.4935 46.9187V42.3504C53.3979 43.7198 52.1406 44.7285 50.7204 45.3785C49.3003 46.0291 47.8717 46.3536 46.4345 46.3536C44.5863 46.3536 42.8236 45.8573 41.1468 44.8651C39.47 43.873 38.1011 42.4529 37.0402 40.6048C35.9792 38.7572 35.4492 36.5499 35.4492 33.9829C35.4492 31.0065 35.9792 28.5677 37.0402 26.6688C38.1011 24.7695 39.4534 23.3579 41.0961 22.4336C42.7387 21.5093 44.4326 21.0476 46.1783 21.0476C47.7863 21.0476 49.3345 21.4068 50.8239 22.1256C52.3124 22.8445 53.5361 23.9049 54.494 25.3085L55.5203 21.8182H62.2V0H0V23.7045C0.340085 22.6169 0.777123 21.5942 1.31111 20.6377C2.78247 18.0029 4.8275 15.9669 7.44571 14.5297C10.0634 13.0925 13.1001 12.3732 16.5572 12.3732C19.5682 12.3732 22.2804 12.972 24.6926 14.1696C27.1049 15.3671 28.9957 17.1299 30.365 19.4572L23.384 22.3316C22.837 21.4425 21.99 20.6729 20.8432 20.0218C19.6963 19.3713 18.234 19.0458 16.4542 19.0458C14.8457 19.0458 13.3743 19.4567 12.0396 20.278C10.7044 21.0994 9.64345 22.3226 8.85679 23.9481C8.06962 25.5737 7.67628 27.6012 7.67628 30.0305C7.67628 33.6237 8.49761 36.3876 10.1403 38.3206C11.7829 40.2542 13.939 41.2207 16.6074 41.2207C17.8733 41.2207 19.0885 41.0413 20.2524 40.6821C21.4163 40.323 22.3743 39.7156 23.1268 38.8591C23.8793 38.0037 24.2566 36.8573 24.2566 35.4201V34.4451H16.5567V27.8749H32.3669V47.2779H27.0285L25.8997 43.4792C23.709 46.4224 20.2012 47.8938 15.3767 47.8938C12.023 47.8938 9.13107 47.1669 6.70174 45.7126C4.27141 44.2583 2.39768 42.1877 1.08054 39.5016C0.65003 38.6241 0.290354 37.6952 0.000502342 36.7167V62.199H62.2005V46.7745C61.9704 50.311 60.8391 52.9604 58.8061 54.7206L58.8051 54.7216Z"
                  fill="#242424"
                />
                <path
                  d="M53.1327 28.5943C52.02 27.6363 50.7109 27.1571 49.2059 27.1571C47.7009 27.1571 46.34 27.671 45.2278 28.6973C44.1152 29.7241 43.5596 31.3502 43.5596 33.5735C43.5596 35.7969 44.1152 37.5174 45.2278 38.6291C46.3395 39.7418 47.6657 40.2974 49.2059 40.2974C50.2322 40.2974 51.1645 40.1009 52.0029 39.7071C52.8413 39.3138 53.5175 38.6376 54.0304 37.6797C54.5433 36.7217 54.801 35.4211 54.801 33.7785C54.801 31.2813 54.2449 29.5528 53.1327 28.5943Z"
                  fill="#242424"
                />
              </g>
              <defs>
                <clipPath id="clip0_139_139">
                  <rect width="62.2" height="62.2" fill="white" />
                </clipPath>
              </defs>
            </svg>

            {/* Animated Text */}
            <div className="overflow-hidden relative h-14 w-64">
              <div
                className={`absolute  hidden lg:flex xl:flex md:flex flex-col transition-all duration-500 ease-in-out ${
                  isHovering || !isScrolled
                    ? "translate-x-0"
                    : "-translate-x-full"
                }`}
              >
                <h1 className="font-[700] lg:text-xl xl:text-xl text-lg whitespace-nowrap">
                  Garagol
                </h1>
                <span className="font-[400] whitespace-nowrap">
                  Consulting and Solutions Company.
                </span>
              </div>
              <div
                className={`absolute  flex lg:hidden xl:hidden md:hidden flex-col transition-all duration-500 ease-in-out `}
              >
                <h1 className="font-[700] lg:text-xl xl:text-xl text-lg whitespace-nowrap">
                  Garagol
                </h1>
                <span className="font-[400] whitespace-nowrap">
                  Consulting and Solutions Company.
                </span>
              </div>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-gray-700 font-medium text-lg justify-center ">
          <div className="relative group cursor-pointer transition-colors">
            <span
              className="mx-2 cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              Services
            </span>
            <div className="absolute bottom-0 left-0 w-0 cursor-pointer group-hover:w-full h-1/2 -z-1 bg-[#8675F2] bg-opavity-25"></div>
          </div>
          <div className="relative group cursor-pointer transition-colors">
            <span
              className="mx-2 cursor-pointer"
              onClick={() => scrollToSection("process")}
            >
              Process
            </span>
            <div className="absolute bottom-0 left-0 w-0 cursor-pointer group-hover:w-full h-1/2 -z-1 bg-[#8675F2] bg-opavity-25"></div>
          </div>
          <div className="relative group cursor-pointer transition-colors">
            <span
              className="mx-2 cursor-pointer"
              onClick={() => scrollToSection("commitment")}
            >
              Commitment
            </span>
            <div className="absolute bottom-0 left-0 w-0 cursor-pointer group-hover:w-full h-1/2 -z-1 bg-[#8675F2] bg-opavity-25"></div>
          </div>
          <div className="relative group cursor-pointer transition-colors">
            <span
              className="mx-2 cursor-pointer"
              onClick={() => scrollToSection("inquiry")}
            >
              Inquiry
            </span>
            <div className="absolute bottom-0 left-0 w-0 cursor-pointer group-hover:w-full h-1/2 -z-1 bg-[#8675F2] bg-opavity-25"></div>
          </div>

          <Link
            to="/estimate"
            onClick={(e) => {
              e.preventDefault();
              console.log("Would navigate to /estimate");
              setTimeout(() => navigate("/estimate"), 100);
            }}
          >
            <Button
              variant="primary"
              title="Get Estimate"
              class="cursor-pointer"
            />
          </Link>
        </div>
        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <rect x="1" y="1" width="38" height="38" fill="white" />
              <rect
                x="1"
                y="1"
                width="38"
                height="38"
                stroke="#242424"
                stroke-width="2"
              />
              <path
                d="M30.4168 20.0002C30.4168 20.3317 30.2851 20.6496 30.0507 20.884C29.8163 21.1185 29.4984 21.2502 29.1668 21.2502H10.8335C10.502 21.2502 10.184 21.1185 9.94961 20.884C9.71519 20.6496 9.5835 20.3317 9.5835 20.0002C9.5835 19.6686 9.71519 19.3507 9.94961 19.1163C10.184 18.8819 10.502 18.7502 10.8335 18.7502H29.1668C29.4984 18.7502 29.8163 18.8819 30.0507 19.1163C30.2851 19.3507 30.4168 19.6686 30.4168 20.0002ZM10.8335 14.5835H29.1668C29.4984 14.5835 29.8163 14.4518 30.0507 14.2174C30.2851 13.983 30.4168 13.665 30.4168 13.3335C30.4168 13.002 30.2851 12.684 30.0507 12.4496C29.8163 12.2152 29.4984 12.0835 29.1668 12.0835H10.8335C10.502 12.0835 10.184 12.2152 9.94961 12.4496C9.71519 12.684 9.5835 13.002 9.5835 13.3335C9.5835 13.665 9.71519 13.983 9.94961 14.2174C10.184 14.4518 10.502 14.5835 10.8335 14.5835ZM29.1668 25.4168H10.8335C10.502 25.4168 10.184 25.5485 9.94961 25.7829C9.71519 26.0174 9.5835 26.3353 9.5835 26.6668C9.5835 26.9983 9.71519 27.3163 9.94961 27.5507C10.184 27.7851 10.502 27.9168 10.8335 27.9168H29.1668C29.4984 27.9168 29.8163 27.7851 30.0507 27.5507C30.2851 27.3163 30.4168 26.9983 30.4168 26.6668C30.4168 26.3353 30.2851 26.0174 30.0507 25.7829C29.8163 25.5485 29.4984 25.4168 29.1668 25.4168Z"
                fill="#242424"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Second Line - Get Estimate Button (Mobile Only) */}
      {isHomePage && (
        <div
          className={`md:hidden container  transition-all duration-300 ease-in-out ${
            showMobileButton
              ? "opacity-100 max-h-20"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <Link to={`/estimate`} className="w-full my-[4vw] block">
            <Button
              variant="primary"
              title="Get Estimate"
              class="w-full text-center cursor-pointer"
            />
          </Link>
        </div>
      )}
      <Link to={"/estimate"}>estimate</Link>

      {/* Mobile Menu Dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{
          maxHeight: isMobileMenuOpen ? `${menuHeight}px` : "0px",
        }}
      >
        <div className="flex flex-col space-y-4 text-gray-700 font-medium py-4 px-6">
          <div
            className="cursor-pointer py-2 transition-colors duration-200 hover:text-[#8675F2]"
            onClick={() => scrollToSection("services")}
          >
            Services
          </div>
          <div
            className="cursor-pointer py-2 transition-colors duration-200 hover:text-[#8675F2]"
            onClick={() => scrollToSection("process")}
          >
            Process
          </div>
          <div
            className="cursor-pointer py-2 transition-colors duration-200 hover:text-[#8675F2]"
            onClick={() => scrollToSection("commitment")}
          >
            Commitment
          </div>
          <div
            className="cursor-pointer py-2 transition-colors duration-200 hover:text-[#8675F2]"
            onClick={() => scrollToSection("inquiry")}
          >
            Inquiry
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
