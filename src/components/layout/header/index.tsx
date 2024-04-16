import { observer } from "mobx-react-lite";
import classNames from "classnames";
import styles from "./index.module.scss";
import Logo from "@/assets/common/logo_alien.svg";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";

interface IProps {
  isOpenSidebar: boolean;
  setOpenSidebar: (val: boolean) => void;
}

const Header: React.FC<IProps> = ({ setOpenSidebar, isOpenSidebar }) => {
  const { width } = useWindowSize();

  return (
    <>
      <div className={styles.header}>
        <div
          className={classNames(
            styles.header_container,
            width && width <= 640 && isOpenSidebar && "border-none"
          )}
        >
          <Link
            href={"/"}
            className={styles.logo}
            onClick={() => {
              if (width && width <= 640) setOpenSidebar(false);
            }}
          >
            <Logo alt="logo" />
          </Link>

          <h2>BUTTON</h2>
        </div>
      </div>
    </>
  );
};

export default observer(Header);
