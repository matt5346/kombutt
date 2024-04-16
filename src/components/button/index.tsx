import classNames from "classnames";
import styles from "./index.module.scss";
import {
  EButtonLookType,
  EButtonType,
  EButtonSize
} from "@/components/button/types";
import { Spinner } from "@/components/spinner";

interface IProps {
  children: any;
  className?: string;
  disabled?: boolean;
  pending?: boolean;
  full?: boolean;
  bordered?: "white" | "grey";
  inverse?: boolean;
  size?: EButtonSize;
  type: EButtonLookType;
  buttonType?: EButtonType;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({
  children,
  className,
  disabled,
  pending,
  bordered,
  inverse,
  full,
  type,
  size = "md",
  buttonType = "button",
  onClick
}) => {
  const handleOnClick = (e: any) => {
    e.stopPropagation();
    onClick && onClick();
  };

  return (
    <button
      disabled={disabled || pending}
      className={classNames(
        className,
        styles.button,
        bordered && styles[bordered],
        inverse && styles.inverse,
        type && styles[type],
        full && styles.full,
        size && styles[size]
      )}
      type={buttonType}
      onClickCapture={handleOnClick}
    >
      {/* todo preloader */}
      {pending && <Spinner type="small" />}
      {!pending && children}
    </button>
  );
};

export default Button;
