import React, { useEffect } from "react";
import Arrow from "@/assets/icons/arrow-down.svg";
import classNames from "classnames";
import styles from "./index.module.scss";
import Button from "@/components/button";

interface IProps {
  title?: string | React.ReactNode;
  children?: any;
  size?: "sm";
  isOpened?: boolean;
  noCover: boolean;
  className?: string;
  type?: "primary" | "secondary";
  arrowWithBorder?: boolean;
  noCloseByClick?: boolean;
}

const Dropdown: React.FC<IProps> = ({
  title,
  type = "primary",
  children,
  noCover,
  className,
  size,
  noCloseByClick = false,
  arrowWithBorder = false,
  isOpened = false
}) => {
  const [isExpanded, setIsExpanded] = React.useState(isOpened);
  const ref = React.useRef<HTMLDivElement>(null);

  const [height, setHeight] = React.useState<number | undefined>(1);

  const handleToggle = () => {
    // e.preventDefault();
    setIsExpanded(!isExpanded);

    if (ref.current && ref.current.clientHeight) {
      setHeight(ref.current.clientHeight);
    }
  };

  useEffect(() => {
    if (isOpened) {
      setIsExpanded(true);

      if (ref.current && ref.current.clientHeight) {
        setHeight(ref.current.clientHeight);
      }
    }
  }, [isOpened]);

  const classes = `list-group-item ${isExpanded ? "is-expanded" : null}`;
  const currentHeight = isExpanded ? height : 0;

  return (
    <div
      className={classNames(
        classes,
        className,
        styles.listGroupItem,
        styles[type],
        isExpanded && styles.listExpanded,
        size === "sm" && styles.sm,
        noCover && styles.noCover
      )}
      onClick={() => !noCloseByClick && handleToggle()}
    >
      <div
        className="flex items-center justify-between"
        onClick={() => noCloseByClick && handleToggle()}
      >
        <h1 className="text-2xl max-sm:text-xl font-medium text-body-primary w-[90%]">
          {title}
        </h1>
        {arrowWithBorder ? (
          <div className="bg-input-default rounded items-center justify-center">
            <Button
              size="custom"
              type="transparent"
              className="!p-0 h-[24px] w-[24px]"
              onClick={handleToggle}
            >
              <Arrow
                className={
                  isExpanded
                    ? classNames(styles.isExpanded, styles.arrow)
                    : styles.arrow
                }
              />
            </Button>
          </div>
        ) : (
          <Arrow
            className={
              isExpanded
                ? classNames(styles.isExpanded, styles.arrow)
                : styles.arrow
            }
          />
        )}
      </div>
      <div
        className={styles.collapseBlock}
        style={{ height: `${currentHeight}px` }}
      >
        <div className="card-body" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
