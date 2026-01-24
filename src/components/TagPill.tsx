type TagPillProps = {
  children: React.ReactNode;
};

export function TagPill({ children }: TagPillProps) {
  return <span className="tag-pill">{children}</span>;
}
