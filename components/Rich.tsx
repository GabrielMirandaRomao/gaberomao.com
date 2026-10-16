// Formatação leve para textos vindos de data/:
//   `codigo`    -> <code>
//   **destaque** -> texto na cor de destaque
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`|\*\*[^*]+\*\*)/).map((part, i) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={i} className="rounded bg-surface-soft px-1.5 py-px text-[0.9em] text-accent">
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-medium text-accent">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      })}
    </>
  );
}
