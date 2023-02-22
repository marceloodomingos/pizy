import { ReactNode } from "react";

import { GlassButton } from "./styles";

export default function GlassmorphismButton({
  children,
}: {
  children: ReactNode;
}) {
  return <GlassButton>{children}</GlassButton>;
}
