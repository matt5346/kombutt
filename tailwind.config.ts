/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "white",
      black: "black",
      body: {
        light: generateColorClass("body-light"),
        default: generateColorClass("body-bg")
      },
      input: {
        text: generateColorClass("input-text"),
        light: generateColorClass("input-light"),
        default: generateColorClass("input-default")
      },
      block: {
        primary: generateColorClass("bg-primary"),
        secondary: generateColorClass("bg-secondary"),
        light: generateColorClass("bg-light"),
        main: generateColorClass("bg-main")
      }
    }
  }
};

function generateColorClass(variable: string) {
  return ({ opacityValue }: { opacityValue: string }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
}
