type FooterProps = {
  lines: string[];
};

export function Footer({ lines }: FooterProps) {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate sm:pb-0">
      {lines.map((line, index) => (
        <p key={index} className={index > 0 ? "mt-1" : ""}>
          {line}
        </p>
      ))}
    </footer>
  );
}
