import "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    theme?: string;
    "theme-mode"?: string;
    "theme-fontsize"?: string;
  }
}
