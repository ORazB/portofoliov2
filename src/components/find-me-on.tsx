import type { ComponentType } from "react";

// Box Icons
import { Github, Inbox } from "@boxicons/react";

export interface FindMeOnLink {
	label: string;
	href: string;
	icon: ComponentType<{ className?: string }>;
	external?: boolean;
}

export interface FindMeOnProps {
	title?: string;
	links?: FindMeOnLink[];
}

const DEFAULT_LINKS: FindMeOnLink[] = [
	{
		label: "github.com/ORazB",
		href: "https://github.com/ORazB",
		icon: Github,
		external: true,
	},
	{
		label: "devandramahottama@gmail.com",
		href: "mailto:devandramahottama@gmail.com",
		icon: Inbox,
	},
];

export function FindMeOn({
	title = "Find me on",
	links = DEFAULT_LINKS,
}: FindMeOnProps) {
	return (
		<div className="font-sans">
			<p className="mb-3 text-sm text-white/50">{title}</p>

			<div className="flex flex-wrap items-center gap-2 md:flex-col md:items-start">
				{links.map((link) => {
					const Icon = link.icon;

					return (
						<a
							key={link.label}
							href={link.href}
							target={link.external ? "_blank" : undefined}
							rel={link.external ? "noreferrer" : undefined}
							aria-label={link.label}
							className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] pr-3 text-white/70 transition-colors duration-150 hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
						>
							<span className="flex h-10 w-10 shrink-0 items-center justify-center">
								<Icon className="h-[18px] w-[18px] text-white/60" />
							</span>
							<span className="text-xs font-medium whitespace-nowrap">
								{link.label}
							</span>
						</a>
					);
				})}
			</div>
		</div>
	);
}

export default FindMeOn;
