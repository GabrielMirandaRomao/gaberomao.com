export function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <p className="mt-2 text-sm text-muted sm:text-base">{subtitle}</p>
    </div>
  );
}
