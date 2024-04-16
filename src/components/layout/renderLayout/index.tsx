import dynamic from "next/dynamic";
import { observer } from "mobx-react-lite";
import useWindowSize from "@/hooks/useWindowSize";

import Container from "@/components/layout/container";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useState } from "react";

const DynamicHeader = dynamic(() => import("@/components/layout/header"));
const DynamicSidebar = dynamic(() => import("@/components/layout/sidebar"), {
  ssr: false
});

const RenderLayout: React.FC<{ children?: any }> = ({ children }) => {
  const router = useRouter();
  const { width } = useWindowSize();
  const [isOpenSidebar, setOpenSidebar] = useState<boolean>(true);

  return (
    <>
      <DynamicHeader
        isOpenSidebar={isOpenSidebar}
        setOpenSidebar={setOpenSidebar}
      />
      <div
        className={classNames(
          router.pathname === "/" && styles.layoutBg,
          (width && width >= 1650) || (width && width <= 640)
            ? "relative"
            : "flex"
        )}
      >
        <DynamicSidebar
          isOpenSidebar={isOpenSidebar}
          setOpenSidebar={setOpenSidebar}
        />
        <Container className="flex flex-col justify-between min-h-screen">
          {children}
        </Container>
      </div>

      <div id="portal" />
    </>
  );
};

export default observer(RenderLayout);
