import type { ReactNode } from 'react';

type SplitViewProps = {
  children: [ReactNode, ReactNode];
  ratio?: [number, number];
  className?: string;
};

function SplitView({ children, ratio = [3, 1], className }: SplitViewProps) {
  const [main, side] = children;

  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `${ratio[0]}fr ${ratio[1]}fr`,
      }}
    >
      <div style={{ minWidth: 0 }}>{main}</div>
      <div style={{ minWidth: 0 }}>{side}</div>
    </div>
  );
}

export default SplitView;
