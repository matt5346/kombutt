import { observer } from "mobx-react-lite";
import useWindowSize from "@/hooks/useDeviceType";

import styles from "./index.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";

const RenderLayout: React.FC<{ children?: any }> = ({ children }) => {
  const router = useRouter();
  const { width } = useWindowSize();

  return (
    <>
      <div
        className={classNames(
          router.pathname === "/" && styles.layoutBg,
          (width && width >= 1650) || (width && width <= 640)
            ? "relative"
            : "flex"
        )}
      >
        {children}
      </div>

      <div id="portal" />
    </>
  );
};

export default observer(RenderLayout);
