import { type Component, createSignal, createEffect } from "solid-js";

type SpacerProps = {
  height: number;
};

const Spacer: Component<SpacerProps> = (props) => {
  return <div class="block w-100" style={{ height: props.height + "px" }}></div>;
};

// type UseSpacerProps = {
//   ref: HTMLElement | undefined
// }

const [height, setHeight] = createSignal<number>(0);
const [ref, setRef] = createSignal<HTMLElement>();

const watchResize = (evt: Event) => {
  console.log(evt);
};

export const useSpacer = (): [typeof setRef, typeof Spacer] => {
  createEffect(() => {
    const refEl = ref();
    if (refEl) {
      refEl.addEventListener("load", watchResize);
      setHeight(refEl.clientHeight);
    }
  });

  const Component = () => <Spacer height={height()} />;

  return [setRef, Component];
};
