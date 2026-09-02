import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import TechStack from "./TechStack";

export default function CaseCard({ project }: { project: Project }) {
  return (
    <Card variant="interactive" className="group relative flex flex-col gap-4 p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="cyan">{project.category}</Badge>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold leading-snug text-white">
          <Link href={`/projetos/${project.slug}`} className="after:absolute after:inset-0">
            {project.name}
          </Link>
        </h3>
        <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
          {project.segment}
        </p>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-gray-400">{project.summary}</p>

      <TechStack tech={project.tech} limit={5} />

      <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors group-hover:text-cyan-300">
        Ver o case
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Card>
  );
}
