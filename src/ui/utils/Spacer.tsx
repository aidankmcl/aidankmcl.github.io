import { type Component, createSignal, onMount } from "solid-js";
import { makeResizeObserver } from "@solid-primitives/resize-observer";

type Props = {
  target: HTMLElement | undefined;
};

const [height, setHeight] = createSignal<number>(0);

const { observe } = makeResizeObserver(
  (entries) => {
    for (const entry of entries) {
      setHeight(entry.target.clientHeight);
    }
  },
  { box: "content-box" },
);

export const Spacer: Component<Props> = (props) => {
  onMount(() => {
    if (props.target) observe(props.target);
  });

  return <div class="block relative z-2" style={{ height: height() + "px", width: "100%" }}></div>;
};
