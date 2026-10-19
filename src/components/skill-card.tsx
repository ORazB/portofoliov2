export interface Skill {
	name: string;
	icon: string;
}

export interface SkillCardProps {
	title: string;
	description: string;
	skills: Skill[];
	className?: string;
}

export function SkillCard({
	title,
	description,
	skills,
	className = "",
}: SkillCardProps) {
	return (
		<article
			className={`relative rounded-2xl p-px ${className}`}
		>
			<div className="relative h-full overflow-hidden rounded-[15px] bg-[#15161a] p-6">
				<div className="relative">
					<h3 className="font-sans text-2xl font-semibold tracking-wide text-white">
						{title}
					</h3>
					<p className="mt-3 max-w-md text-base leading-relaxed text-zinc-400">
						{description}
					</p>

					<ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-4">
						{skills.map((skill) => (
							<li key={skill.name} title={skill.name}>
								<img
									src={skill.icon}
									alt={skill.name}
									className="h-8 w-8 shrink-0 object-contain"
									loading="lazy"
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</article>
	);
}

export default SkillCard;
