import { useEffect, useState } from "react";

export interface NavLinkItem {
	label: string;
	href?: string;
	external?: boolean;
}

export interface HeaderProps {
	initialPath?: string;
	navLinks?: NavLinkItem[];
	onNavigate?: (path: string) => void;
}

const DEFAULT_NAV_LINKS: NavLinkItem[] = [
	{ label: "about", href: "#about" },
	{ label: "projects", href: "#projects" },
	{ label: "contact", href: "#contact" },
];

export function Header({
	initialPath = "",
	navLinks = DEFAULT_NAV_LINKS,
	onNavigate,
}: HeaderProps) {
	const [activePath, setActivePath] = useState(initialPath);
	const [hoveredPath, setHoveredPath] = useState<string | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);

	const displayedPath = hoveredPath !== null ? hoveredPath : activePath;

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 8);

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (item: NavLinkItem) => {
		const cleanPath = item.label.replace(/\.+$/, "");
		setActivePath(cleanPath);
		if (onNavigate) {
			onNavigate(cleanPath);
		}
	};

	const resetHome = () => {
		setActivePath("");
		if (onNavigate) {
			onNavigate("");
		}
	};

	return (
		<header
			className={`sticky top-0 z-50 w-full select-none py-8 transition-all duration-300 ${
				isScrolled
					? "bg-[#141416]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
					: "bg-transparent border-b border-transparent"
			}`}
		>
			<div className="w-6xl max-w-full mx-auto px-4 flex items-center justify-between font-mono text-sm">
				<a
					href="/"
					onClick={(e) => {
						if (!onNavigate) return;
						e.preventDefault();
						resetHome();
					}}
					className="flex items-center group cursor-pointer text-[#cdd6f4] tracking-normal text-base hover:text-white transition-colors"
					aria-label="Home directory"
				>
					<span className="text-zinc-300">~/</span>
					{displayedPath && (
						<span
							className={`transition-colors duration-150 ${
								hoveredPath !== null
									? "text-zinc-500 font-normal"
									: "text-zinc-200 font-medium"
							}`}
						>
							{displayedPath}
						</span>
					)}
					<span
						className="inline-block w-[0.55em] h-[1.15em] ml-1.5 align-middle animate-cursor-blink bg-primary"
						style={{ backgroundColor: "var(--primary)" }}
						aria-hidden="true"
					/>
				</a>

				<nav aria-label="Main Navigation">
					<ul className="flex items-center gap-6 sm:gap-8">
						{navLinks.map((item) => {
							const cleanPath = item.label.replace(/\.+$/, "");
							const isActive = activePath === cleanPath;

							return (
								<li key={item.label}>
									<a
										href={item.href || `#${cleanPath}`}
										onClick={() => handleNavClick(item)}
										onMouseEnter={() => setHoveredPath(cleanPath)}
										onMouseLeave={() => setHoveredPath(null)}
										className={`lowercase font-mono text-sm tracking-normal transition-colors duration-150 ${
											isActive
												? "text-primary font-medium"
												: "text-[#cdd6f4]/80 hover:text-white"
										}`}
									>
										{item.label}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;