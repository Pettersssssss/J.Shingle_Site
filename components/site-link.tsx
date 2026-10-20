import type { ComponentProps } from "react";

// Native navigation avoids the hosted router intercepting clicks before the URL changes.
export default function SiteLink(props: ComponentProps<"a">) {
  return <a {...props} target="_self" />;
}
