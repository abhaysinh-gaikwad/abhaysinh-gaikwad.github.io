declare module "scrollreveal";
declare module "typed.js";
declare module "github-calendar";

interface Window {
  gtag: (...args: any[]) => void;
  dataLayer?: any[];
}
