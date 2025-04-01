import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import upwork from "../assets/upwork.svg";
import linkedin from "../assets/linkedin.svg";

interface FooterProps {
  type: string;
}

const Footer = ({ type }: FooterProps) => {
  return (
    <div
      className={`w-full h-100 relative p-15 overflow-hidden  ${
        type === "black" ? "bg-[#242424]" : "bg-[#8675F2]"
      } text-white `}
    >
      <div className="container flex h-full items-center ">
        <div className="w-1/2 flex flex-col h-full justify-end ">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63"
              height="63"
              viewBox="0 0 63 63"
              fill="none"
            >
              <g clip-path="url(#clip0_139_139)">
                <path
                  d="M58.8051 54.7216C56.5119 56.7058 53.3301 57.699 49.2576 57.699C47.8546 57.699 46.4345 57.5191 44.9973 57.1605C43.5601 56.8003 42.2248 56.1759 40.9931 55.2867C39.7608 54.3956 38.7516 53.1809 37.965 51.6417L44.3296 49.3315C44.8089 50.2558 45.4926 50.8882 46.3827 51.2313C47.2729 51.5729 48.162 51.7442 49.0522 51.7442C50.6948 51.7442 52.0125 51.3584 53.0046 50.5888C53.9967 49.8182 54.4935 48.5955 54.4935 46.9187V42.3504C53.3979 43.7198 52.1406 44.7285 50.7204 45.3785C49.3003 46.0291 47.8717 46.3536 46.4345 46.3536C44.5863 46.3536 42.8236 45.8573 41.1468 44.8651C39.47 43.873 38.1011 42.4529 37.0402 40.6048C35.9792 38.7572 35.4492 36.5499 35.4492 33.9829C35.4492 31.0065 35.9792 28.5677 37.0402 26.6688C38.1011 24.7695 39.4534 23.3579 41.0961 22.4336C42.7387 21.5093 44.4326 21.0476 46.1783 21.0476C47.7863 21.0476 49.3345 21.4068 50.8239 22.1256C52.3124 22.8445 53.5361 23.9049 54.494 25.3085L55.5203 21.8182H62.2V0H0V23.7045C0.340085 22.6169 0.777123 21.5942 1.31111 20.6377C2.78247 18.0029 4.8275 15.9669 7.44571 14.5297C10.0634 13.0925 13.1001 12.3732 16.5572 12.3732C19.5682 12.3732 22.2804 12.972 24.6926 14.1696C27.1049 15.3671 28.9957 17.1299 30.365 19.4572L23.384 22.3316C22.837 21.4425 21.99 20.6729 20.8432 20.0218C19.6963 19.3713 18.234 19.0458 16.4542 19.0458C14.8457 19.0458 13.3743 19.4567 12.0396 20.278C10.7044 21.0994 9.64345 22.3226 8.85679 23.9481C8.06962 25.5737 7.67628 27.6012 7.67628 30.0305C7.67628 33.6237 8.49761 36.3876 10.1403 38.3206C11.7829 40.2542 13.939 41.2207 16.6074 41.2207C17.8733 41.2207 19.0885 41.0413 20.2524 40.6821C21.4163 40.323 22.3743 39.7156 23.1268 38.8591C23.8793 38.0037 24.2566 36.8573 24.2566 35.4201V34.4451H16.5567V27.8749H32.3669V47.2779H27.0285L25.8997 43.4792C23.709 46.4224 20.2012 47.8938 15.3767 47.8938C12.023 47.8938 9.13107 47.1669 6.70174 45.7126C4.27141 44.2583 2.39768 42.1877 1.08054 39.5016C0.65003 38.6241 0.290354 37.6952 0.000502342 36.7167V62.199H62.2005V46.7745C61.9704 50.311 60.8391 52.9604 58.8061 54.7206L58.8051 54.7216Z"
                  fill="white"
                />
                <path
                  d="M53.1327 28.5943C52.02 27.6363 50.7109 27.1571 49.2059 27.1571C47.7009 27.1571 46.34 27.671 45.2278 28.6973C44.1152 29.7241 43.5596 31.3502 43.5596 33.5735C43.5596 35.7969 44.1152 37.5174 45.2278 38.6291C46.3395 39.7418 47.6657 40.2974 49.2059 40.2974C50.2322 40.2974 51.1645 40.1009 52.0029 39.7071C52.8413 39.3138 53.5175 38.6376 54.0304 37.6797C54.5433 36.7217 54.801 35.4211 54.801 33.7785C54.801 31.2813 54.2449 29.5528 53.1327 28.5943Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_139_139">
                  <rect width="62.2" height="62.2" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <h1 className="font-[700] text-2xl">Garagol</h1>
              <span className="font-[400]">
                Consulting and Solutions Company.
              </span>
            </div>
          </div>
          <div className="mt-8">© 2025 Garagol. All rights reserved.</div>
        </div>
        <div className="relative z-10">
          <div className=" flex-col  flex gap-5 items-start  text-[#EDD750] justify-center font-medium text-lg ">
            <div className="hover:text-blue-500">Services</div>
            <div className="hover:text-blue-500">Process</div>
            <div className="hover:text-blue-500">Guarentees</div>
          </div>
          <div className=" flex mt-5 items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61574918726921"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://www.instagram.com/garagol_css/"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/company/garagol/about/"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Linkedin page"
            >
              <img src={linkedin} alt="" />
            </a>
            <a
              href="https://www.upwork.com/agencies/1791289820464082944/"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Upwork page"
            >
              <img src={upwork} alt="" />
            </a>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1384 1007"
        fill="none"
        className="w-[50vw] top-0 absolute right-0 "
      >
        <path
          d="M1112.98 1006.15C1081.83 1006.15 1050.31 1001.98 1018.4 993.62C986.499 986.023 956.872 972.35 929.525 952.599C902.178 932.848 879.768 905.881 862.296 871.696L1003.59 820.42C1014.23 840.931 1029.42 854.984 1049.17 862.581C1068.92 870.177 1088.67 873.975 1108.42 873.975C1144.89 873.975 1174.13 865.239 1196.16 847.767C1218.19 831.055 1229.21 804.088 1229.21 766.865V665.452C1204.9 695.838 1176.79 718.247 1144.89 732.681C1113.74 747.114 1082.21 754.331 1050.31 754.331C1009.29 754.331 970.166 743.316 932.943 721.286C895.721 699.256 865.335 667.731 841.786 626.71C818.236 585.689 806.462 536.691 806.462 479.718C806.462 413.628 818.236 359.693 841.786 317.913C865.335 275.372 895.341 243.847 931.804 223.337C968.267 202.826 1005.87 192.571 1044.61 192.571C1080.32 192.571 1114.5 200.547 1147.16 216.5C1180.59 232.452 1207.94 256.001 1229.21 287.147L1252 209.663H1401.27V732.681C1401.27 826.877 1375.82 896.005 1324.92 940.065C1274.03 984.124 1203.38 1006.15 1112.98 1006.15ZM1111.84 619.873C1134.63 619.873 1155.14 615.695 1173.37 607.339C1192.36 598.223 1207.56 583.03 1218.95 561.76C1230.35 540.49 1236.04 511.623 1236.04 475.16C1236.04 419.706 1223.51 381.343 1198.44 360.073C1174.13 338.803 1145.27 328.168 1111.84 328.168C1077.66 328.168 1048.03 339.563 1022.96 362.352C998.653 385.142 986.499 421.225 986.499 470.602C986.499 520.739 998.653 558.341 1022.96 583.41C1048.03 607.719 1077.66 619.873 1111.84 619.873Z"
          fill="white"
          fillOpacity="0.02"
        />
        <path
          d="M361.213 788.515C286.767 788.515 222.577 772.562 168.642 740.657C114.707 707.992 72.9262 662.034 43.3 602.781C14.4333 542.769 0 472.501 0 391.978C0 311.456 16.3324 241.948 48.9973 183.455C81.6622 124.962 126.861 79.7631 184.595 47.8578C243.087 15.9526 310.696 0 387.421 0C454.27 0 514.282 13.2938 567.457 39.8815C621.392 66.4692 663.553 105.591 693.939 157.247L538.97 221.058C526.816 201.307 507.825 184.215 481.997 169.781C456.928 155.348 424.643 148.131 385.142 148.131C349.438 148.131 316.773 157.247 287.147 175.479C257.521 193.71 233.972 221.058 216.5 257.521C199.028 293.224 190.292 338.043 190.292 391.978C190.292 471.742 208.523 533.273 244.987 576.573C281.45 619.113 329.308 640.383 388.56 640.383C416.667 640.383 443.635 636.585 469.463 628.989C495.291 620.633 516.561 606.959 533.273 587.968C549.985 568.977 558.342 543.528 558.342 511.623V489.973H387.421V344.121H738.378V774.841H619.873L594.805 690.52C546.187 755.85 468.323 788.515 361.213 788.515Z"
          fill="white"
          fillOpacity="0.02"
        />
      </svg>
    </div>
  );
};

export default Footer;
