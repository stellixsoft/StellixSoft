type Props = {
  svg: string;
  className?: string;
  label: string;
};

export default function QrCodeSvg({ svg, className, label }: Props) {
  return (
    <div
      className={className}
      role="img"
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
