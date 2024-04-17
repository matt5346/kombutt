import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isExtraDesk, setExtraLg] = useState(false);
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const handleResize = () => {
      // const { innerWidth, innerHeight } = window;
      const { clientWidth, clientHeight } = window.document.documentElement;
      setIsMobile(clientWidth <= 640);
      setIsTablet(clientWidth > 640 && clientWidth <= 1024);
      setIsDesktop(clientWidth > 1024);
      setExtraLg(clientWidth > 1280);
      setWidth(clientWidth);
      setHeight(clientHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop, isExtraDesk, width, height };
};

export default useDeviceType;
