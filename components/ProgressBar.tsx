export function ProgressBar({ value, thin = false }: { value: number; thin?: boolean }) {
  return (
    <div
      className={`overflow-hidden rounded-full bg-oatmeal/40 ${thin ? "h-1" : "h-2"}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value)}
    >
      <span
        className="block h-full rounded-full bg-flame transition-[width] duration-300 motion-reduce:transition-none"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
