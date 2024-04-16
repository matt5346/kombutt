import Link from "next/link";
import { FC, useMemo } from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import classNames from "classnames";
import styles from "./index.module.scss";
import useWindowSize from "@/hooks/useWindowSize";
import { observer } from "mobx-react-lite";
import Dropdown from "@/components/dropdown";

interface IProps {
  isOpenSidebar: boolean;
  setOpenSidebar: (val: boolean) => void;
}

const isRoutesEquals = (a: string, b: string) => {
  return b.replaceAll("", "").includes(a.replaceAll("", ""));
};

const SideBar: FC<IProps> = ({ isOpenSidebar, setOpenSidebar }) => {
  const intl = useIntl();
  const location = useRouter();
  const { width } = useWindowSize();

  // const [activeTab, setActiveTab] = useState(0);
  // const [isOpenSettings, setOpenSettings] = useState(false);

  const isMobile = (): boolean => {
    return !!(width && width <= 640);
  };

  const links = useMemo(
    () => [
      {
        text: "game 1",
        url: "/"
      },
      {
        url: "/userHistory",
        text: "user Bets"
      }
    ],
    [intl]
  );

  return (
    <>
      <div
        className={classNames(
          styles.sidebar,
          isOpenSidebar ? styles.open : styles.close,
          width && width >= 1650 && "absolute h-full",
          isMobile() && "absolute !w-full !h-full",
          isMobile() && !isOpenSidebar && "!-translate-x-[100%]"
        )}
      >
        <div className="sticky top-0 max-sm:top-20">
          <Dropdown
            className="!p-0 hover:!bg-block-primary"
            arrowWithBorder
            noCloseByClick
            isOpened
            noCover
            title={
              <div className={styles.dropdownTitle}>
                <div className="ml-2 whitespace-nowrap">Alien Games</div>
              </div>
            }
          >
            <ul className="flex flex-col gap-y-1">
              {links &&
                links.map((_, key) => (
                  <li key={key}>
                    <Link
                      href={_.url}
                      className={
                        isRoutesEquals(_.url, location.pathname)
                          ? classNames(
                              styles.page_link_active,
                              styles.page_link
                            )
                          : styles.page_link
                      }
                      onClick={() => isMobile() && setOpenSidebar(false)}
                    >
                      <span className="ml-2 text-body-light">{_.text}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default observer(SideBar);
