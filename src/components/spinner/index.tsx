import { FC } from "react";

interface IProps {
  type: "small" | "medium" | "lg" | "extraLg";
}

const variants = {
  small: "h-[20px] w-[20px]",
  medium: "w-[32px] h-[32px]",
  lg: "w-[50px] h-[50px]",
  extraLg: "w-[70px] h-[70px]"
};

export const Spinner: FC<IProps> = ({ type = "medium" }) => (
  <div className="relative">
    <div
      className={`${variants[type]} w-[20px] h-[20px] border-accent-200 border-4 rounded-full`}
    ></div>
    <div
      className={`${variants[type]} border-accent-700 border-t-4 animate-spin rounded-full absolute left-0 top-0`}
    ></div>
  </div>
);
