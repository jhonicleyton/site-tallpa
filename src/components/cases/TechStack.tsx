import { Pill } from "@/components/ui/Badge";

export default function TechStack({ tech, limit }: { tech: readonly string[]; limit?: number }) {
  const shown = limit ? tech.slice(0, limit) : tech;
  const rest = limit ? tech.length - shown.length : 0;

  return (
    <ul className="flex flex-wrap gap-1.5">
      {shown.map((t) => (
        <li key={t}>
          <Pill>{t}</Pill>
        </li>
      ))}
      {rest > 0 && (
        <li>
          <Pill className="text-gray-500">+{rest}</Pill>
        </li>
      )}
    </ul>
  );
}
