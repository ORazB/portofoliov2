import { Header } from "./components/header";
import { ProjectCarousel } from "./components/project-carousel";
import { FindMeOn } from "./components/find-me-on";
import { Skills } from "./components/skills";
import type { ProjectItem } from "./components/project-card";
import profile from "./assets/profile.png";

import mifajunior from "./assets/mifa.webp";
import bisma from "./assets/bisma.webp";
import shiorio from "./assets/shiorio.webp";

import resume from "./assets/RESUME.pdf";

// Box Icons
import { Github, Linkedin, TwitterX, DiscordAlt } from "@boxicons/react";

const projects: ProjectItem[] = [
	{
		period: "2026",
		name: "MIFA Junior",
		role: "Full-Stack Developer",
		description:
			"Built a full-stack web application for a youth football academy, featuring athlete registration, class management, and payment tracking.",
		shortDescription:
			"Built a full-stack management platform for a youth football academy, streamlining athlete registration, class administration, and payment tracking.",
		tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
		link: "https://mifajunior.com",
		image: mifajunior,
	},
	{
		period: "2025",
		name: "Bisma Informatika",
		role: "Full-Stack Developer",
		description:
			"Developed a full-stack training website for Bisma Informatika, featuring training program information, user authentication, and database integration.",
		shortDescription:
			"A training platform showcasing offline programs offered by Bisma Informatika.",
		tags: ["Next.js", "TypeScript", "MySQL"],
		source: "https://github.com/ORazB/bismainformatika",
		image: bisma,
	},
	{
		period: "2026",
		name: "Shiorio (WIP)",
		role: "Software Developer",
		description:
			"Building a local-first desktop app for tracking manga, books, and novels. Everything is stored on the user's own device, with no accounts or subscriptions.",
		shortDescription:
			"Building an open-source, privacy-first desktop library tracker where users own all their data and everything works offline.",
		tags: ["React", "TypeScript", "Tauri", "SQLite"],
		image: shiorio,
	},
];

function App() {
	return (
		<>
			<Header />
			{/*hero*/}
			<section id="about" className="w-full mt-16 scroll-mt-24 sm:mt-20 lg:mt-24">
				<div className="w-6xl max-w-full mx-auto px-4 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
					{/*text*/}
					<div className="grid gap-4 text-center lg:text-left">
						<div className="grid gap-2">
							<h1 className="text-white text-4xl leading-[1.05] tracking-wide font-serif sm:text-5xl md:text-6xl lg:text-7xl">
								Hi, I'm{" "}
								<span className="text-primary">Devandra Mahottama</span>
							</h1>
							<p className="text-gray-500 text-lg font-serif sm:text-xl">
								aka. "Kyouka"/"Keita" online
							</p>
						</div>
						<p className="text-white font-sans tracking-wide text-base sm:text-lg md:text-xl">
							I'm an 18 year old from Indonesia who makes web apps, software,
							play games and is passionate about learning new things.
						</p>

						{/*social media & resume*/}
						<div className="flex items-center justify-center gap-6 mt-4 flex-wrap lg:justify-start">
							{/*social media*/}
							<div className="flex items-center gap-4">
								<a
									href="https://github.com/ORazB"
									target="_blank"
									rel="noreferrer"
									aria-label="GitHub"
									className="text-white hover:text-primary transition-colors duration-150 cursor-pointer"
								>
									<Github />
								</a>
								<a
									href="https://www.linkedin.com/in/i-gede-devandra-mahottama-9b16003a5/"
									target="_blank"
									rel="noreferrer"
									aria-label="LinkedIn"
									className="text-white hover:text-primary transition-colors duration-150 cursor-pointer"
								>
									<Linkedin />
								</a>
								<a
									href="https://x.com/zyrobol98791"
									target="_blank"
									rel="noreferrer"
									aria-label="Twitter"
									className="text-white hover:text-primary transition-colors duration-150 cursor-pointer"
								>
									<TwitterX />
								</a>
								<a
									href="https://discord.com/users/690490452583120896"
									target="_blank"
									rel="noreferrer"
									aria-label="Discord"
									className="text-white hover:text-primary transition-colors duration-150 cursor-pointer"
								>
									<DiscordAlt />
								</a>
							</div>
							{/*resume*/}
							<div className="flex items-center gap-3">
								<span className="text-zinc-400 font-sans text-sm">
									Need a resume?
								</span>
								<a
									href={resume}
									download
									className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold cursor-pointer whitespace-nowrap"
								>
									<span>Download</span>
								</a>
							</div>
						</div>
					</div>

					{/*profile*/}
					<div className="grid place-items-center">
						<img
							className="w-56 max-w-full aspect-square rounded-full object-cover sm:w-72 lg:w-[85%]"
							src={profile}
							alt="Devandra Mahottama"
						/>
					</div>
				</div>
			</section>

			{/*skills*/}
			<section className="mt-42">
				<div className="w-6xl max-w-full mx-auto px-4 grid">
					{/*text*/}
					<div className="grid gap-4">
						<h1 className="text-6xl text-white tracking-wide font-serif">
							What I <span className="text-primary">work </span>with
						</h1>
						<h2 className="text-xl text-zinc-400 font-sans tracking-wide">
							The languages, frameworks, and tools I use to turn ideas into
							functional, well crafted software.
						</h2>
					</div>

					<div className="mt-12">
						<Skills />
					</div>
				</div>
			</section>

			{/*projects*/}
			<section id="projects" className="mt-42 scroll-mt-24">
				<div className="w-6xl max-w-full mx-auto px-4 grid">
					{/*text*/}
					<div className="grid gap-4">
						<h1 className="text-6xl text-white tracking-wide font-serif">
							Things I've <span className="text-primary">worked</span> on
						</h1>
						<h2 className="text-xl text-zinc-400 font-sans tracking-wide">
							A few projects I've spent real time on, what I built, and what
							came out of it.
						</h2>
					</div>
				</div>

				{/*project carousel*/}
				<div className="mt-12">
					<ProjectCarousel projects={projects} />
				</div>
			</section>

			{/*footer*/}
			<section id="contact" className="my-42 scroll-mt-24">
				<div className="w-6xl max-w-full mx-auto px-4">
					{/*text*/}
					<div className="grid gap-4">
						<h1 className="text-7xl leading-[1.15] text-white tracking-wide font-serif max-w-[26.5rem]">
							Just love to <span className="text-primary">build</span> cool
							stuff
						</h1>
					</div>

					<div className="grid gap-12 mt-12 md:grid-cols-2 md:gap-16">
						{/*text*/}
						<div className="grid gap-4">
							<h2 className="text-xl text-zinc-400 font-sans tracking-wide">
								I like building software that is{" "}
								<span className="text-primary">clean</span>,{" "}
								<span className="text-primary">quick</span>, and{" "}
								<span className="text-primary">beautiful</span>.
							</h2>

							<h2 className="text-xl text-zinc-400 font-sans tracking-wide">
								My philosophy is honestly pretty simple: make it work, make it
								fast, care about the user and don't make it annoying.
							</h2>

							<h2 className="text-xl text-zinc-400 font-sans tracking-wide">
								Outside of that? I play games, watch anime, and explore whatever
								new thing catches my eye.
							</h2>
						</div>

						{/*find me on*/}
						<div className="border-t border-white/10 pt-6 md:border-t-0 md:pt-0">
							<FindMeOn />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
