import { useState, useEffect } from "react";
import Button from "./Button";

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Reliable.", "Creative.", "Innovative.", "Global."];

  useEffect(() => {
    let timer;
    const handleType = () => {
      const currentWord = words[loopNum % words.length];

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(100);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div className=" xl:h-screen h-screen  lg:h-screen lg:py-0 xl:py-0 py-10 bg-[#242424] text-white flex items-end justify-items-end ">
      <div className="container flex flex-col items-center justify-center lg:pt-0 xl:pt-0  xl:h-[60vh] h-full lg:h-[60vh]">
        <div>
          <div className="text-3xl lg:text-7xl xl:text-7xl font-[700] leading-[1.1]">
            <span className="">{text}</span>
            <span className="animate-pulse text-[#EDD750] ">|</span>{" "}
            {/* Cursor */}
            <br /> IT Consulting Reinvented.
          </div>
          <div className="font-[400] text-xl lg:text-3xl xl:text-3xl  my-5 ">
            You dream it. We build it—securely, beautifully, and ready for
            scale.
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-row justify-start items-center gap-5">
            <Button
              variant="primary"
              title="Get in touch"
              class="font-[700] lg:w-max xl:w-max lg:text-start xl:text-start text-center w-full"
            />
            <Button
              variant="outline"
              title="Explore Our Services"
              class="font-[700] lg:w-max xl:w-max lg:text-start xl:text-start text-center w-full "
            />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1384 1007"
        fill="none"
        className="w-[75vw] xl:top-0 top:0 lg:top-0 absolute right-0 "
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

export default Home;
