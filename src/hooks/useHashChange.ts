import { createSignal } from "solid-js";

const [hash, setHash] = createSignal<string>();

const handleHashChange = (evt: HashChangeEvent) => {
  if (evt.target) setHash(window.location.hash);
};

export const useHashChange = () => {
  if (typeof hash() === "undefined") setHash(window.location.hash);
  window.addEventListener("hashchange", handleHashChange);

  return hash;
};
