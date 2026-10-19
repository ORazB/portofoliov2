import { ArrowUpRight, Github } from "@boxicons/react";

export interface ProjectItem {
	period: string;
	name: string;
	role: string;
	description: string;
	shortDescription: string;
	tags: string[];
	link?: string;
	source?: string;
	image: string;
}

/** Type of the action container shown on a project card. */
export type ProjectActionType = "view" | "source";

export interface ProjectCardProps {
	project: ProjectItem;
	/** Extra prop: "view" (default) shows the "View Project" button, "source" shows only "Source Code". */
	action?: ProjectActionType;
}

function ProjectAction({
	type,
	href,
	label,
}: {
	type: ProjectActionType;
	href: string;
	label: string;
}) {
	if (type === "source") {
		return (
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				className="flex w-fit items-center gap-2 rounded-full px-2 py-2.5 text-sm font-semibold text-zinc-400 transition-colors duration-150 hover:text-white"
			>
				<span>{label}</span>
				<Github className="h-4 w-4" />
			</a>
		);
	}

	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="group/btn flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-150 hover:bg-zinc-200"
		>
			<span>{label}</span>
			<ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
		</a>
	);
}

export function ProjectCard({ project, action = "view" }: ProjectCardProps) {
	/* "View Project" is dropped when the project has no link, "Source Code" stands alone */
	const sourceHref =
		action === "source" ? (project.source ?? project.link) : project.source;
	const showView = action !== "source" && Boolean(project.link);
	const showSource = Boolean(sourceHref);

	return (
		<article className="group grid h-full grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-colors duration-200 lg:grid-cols-2">
			{/*left*/}
			<div className="flex flex-col gap-4 p-8 sm:p-10">
				<span className="w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
					{project.period}
				</span>

				<h3 className="font-serif text-4xl tracking-wide text-white sm:text-5xl">
					{project.name}
				</h3>

				<span className="font-mono text-xs tracking-[0.25em] text-zinc-500 uppercase">
					{project.role}
				</span>

				<p className="max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">
					{project.description}
				</p>

				<p className="max-w-md text-xs leading-relaxed text-zinc-500">
					{project.shortDescription}
				</p>

				{/*badges + actions*/}
				<div className="mt-auto flex flex-col gap-5 pt-8">
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs text-primary/90"
							>
								{tag}
							</span>
						))}
					</div>

					<div className="flex flex-wrap items-center gap-4">
						{showView && project.link && (
							<ProjectAction
								type="view"
								href={project.link}
								label="View Project"
							/>
						)}
						{showSource && sourceHref && (
							<ProjectAction
								type="source"
								href={sourceHref}
								label="Source Code"
							/>
						)}
					</div>
				</div>
			</div>

			{/*right image*/}
			<div className="relative min-h-[240px] overflow-hidden lg:min-h-[460px]">
				<img
					className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
					src={project.image}
					alt={project.name}
				/>
				<div
					className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-[oklch(0.1156_0.0032_285.88)]/40 to-transparent"
					aria-hidden="true"
				/>
			</div>
		</article>
	);
}
