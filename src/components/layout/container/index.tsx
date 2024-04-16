import styles from "./index.module.scss";
import classNames from "classnames";

interface IProps {
  className?: string;
  children?: any;
}

const Container: React.FC<IProps> = ({ children, className }) => {
  return <div className={classNames(styles.main, className)}>{children}</div>;
};

export default Container;
