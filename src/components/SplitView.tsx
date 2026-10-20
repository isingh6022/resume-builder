import type { ReactNode } from "react";

type SplitViewProps = {
  children: [ReactNode, ReactNode];
};

function SplitView({ children }: SplitViewProps) {
  const [main, side] = children;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
      <div style={{ minWidth: 0 }}>{main}</div>
      <div style={{ minWidth: 0 }}>{side}</div>
    </div>
  );
}

export default SplitView;
