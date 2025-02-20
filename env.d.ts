/// <reference types="vite/client" />

declare class Isotope {
  constructor(element: HTMLElement | null, options: any);
  arrange(options: { filter: string }): void;
}
