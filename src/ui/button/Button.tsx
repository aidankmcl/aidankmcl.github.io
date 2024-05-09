import type { ParentComponent } from "solid-js";

export const Button: ParentComponent = (props) => {
  return <button class="m-2 px-2 py-1 b-2 b-purple card">{props.children}</button>;
};
