import { SkillCard, type Skill } from "./skill-card";

// Brand icons
import react from "../assets/icons/react.svg";
import nextjs from "../assets/icons/nextjs.svg";
import typescript from "../assets/icons/typescript.svg";
import javascript from "../assets/icons/javascript.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import vite from "../assets/icons/vite.svg";
import nodejs from "../assets/icons/nodejs.svg";
import postgresql from "../assets/icons/postgresql.svg";
import mysql from "../assets/icons/mysql.svg";
import prisma from "../assets/icons/prisma.svg";
import sqlite from "../assets/icons/sqlite.svg";
import linux from "../assets/icons/linux.svg";
import docker from "../assets/icons/docker.svg";
import redis from "../assets/icons/redis.svg";
import cloudflare from "../assets/icons/cloudflare.svg";
import vercel from "../assets/icons/vercel.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import tauri from "../assets/icons/tauri.svg";
import figma from "../assets/icons/figma.svg";

interface SkillGroup {
	title: string;
	description: string;
	skills: Skill[];
}

const SKILL_GROUPS: SkillGroup[] = [
	{
		title: "Frontend & Design",
		description:
			"I enjoy turning ideas into responsive, accessible interfaces, with attention to the small details that make them feel right.",
		skills: [
			{ name: "React", icon: react },
			{ name: "Next.js", icon: nextjs },
			{ name: "Tailwind CSS", icon: tailwindcss },
			{ name: "Vite", icon: vite },
			{ name: "Tauri", icon: tauri },
			{ name: "Figma", icon: figma },
		],
	},
	{
		title: "Backend",
		description:
			"I love problem-solving and building complex systems. I strive to create scalable, reliable, and secure solutions.",
		skills: [
			{ name: "TypeScript", icon: typescript },
			{ name: "JavaScript", icon: javascript },
			{ name: "Node.js", icon: nodejs },
			{ name: "PostgreSQL", icon: postgresql },
			{ name: "MySQL", icon: mysql },
			{ name: "Prisma", icon: prisma },
			{ name: "SQLite", icon: sqlite },
		],
	},
	{
		title: "Cloud & DevOps",
		description:
			"The infrastructure and services I use to deploy, run, and keep my projects online.",
		skills: [
			{ name: "Linux", icon: linux },
			{ name: "Docker", icon: docker },
			{ name: "Redis", icon: redis },
			{ name: "Cloudflare", icon: cloudflare },
			{ name: "Vercel", icon: vercel },
			{ name: "Git", icon: git },
			{ name: "GitHub", icon: github },
		],
	},
];

export function Skills() {
	return (
		<div className="grid gap-5 md:grid-cols-8">
			{SKILL_GROUPS.map((group, index) => (
				<SkillCard
					key={group.title}
					{...group}
					className={
						index < 2 ? "md:col-span-4" : "md:col-span-6 md:col-start-2"
					}
				/>
			))}
		</div>
	);
}

export default Skills;
