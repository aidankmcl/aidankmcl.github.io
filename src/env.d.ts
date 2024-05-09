/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type {} from "solid-js";

// import './types/image';

declare global {
  type ComponentProps<T> = Parameters<T>[0] extends undefined ? {} : Parameters<T>[0];
}

declare module "solid-js" {
  namespace JSX {
    interface CustomEvents {
      hashchange: (evt: HashChangeEvent) => void;
    }
  }
}
