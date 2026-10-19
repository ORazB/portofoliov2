import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "@boxicons/react";

import { ProjectCard, type ProjectItem } from "./project-card";

export interface ProjectCarouselProps {
	projects: ProjectItem[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
	const scrollTo = useCallback(
		(index: number) => emblaApi?.scrollTo(index),
		[emblaApi],
	);

	useEffect(() => {
		if (!emblaApi) return;

		const syncState = () => {
			setCanScrollPrev(emblaApi.canScrollPrev());
			setCanScrollNext(emblaApi.canScrollNext());
			setSelectedIndex(emblaApi.selectedScrollSnap());
		};

		syncState();
		emblaApi.on("select", syncState);
		emblaApi.on("slidesInView", syncState);
		emblaApi.on("reInit", syncState);

		return () => {
			emblaApi.off("select", syncState);
			emblaApi.off("slidesInView", syncState);
			emblaApi.off("reInit", syncState);
		};
	}, [emblaApi]);

	if (projects.length === 0) return null;

	const arrowClass =
		"grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-white/15 bg-black/40 text-zinc-200 transition-colors duration-150 hover:border-primary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/15 sm:h-11 sm:w-11";

	return (
		<div className="relative w-full">
			{/*viewport - full bleed so the side slides can peek from the page edges*/}
			<div
				ref={emblaRef}
				className="overflow-hidden"
				role="region"
				aria-roledescription="carousel"
				aria-label="Projects"
			>
				{/*container*/}
				<div className="flex touch-[pan-y_pinch-zoom]">
					{projects.map((project, index) => (
						<div
							key={`${project.name}-${index}`}
							className="w-6xl flex-[0_0_86%] px-2 sm:flex-[0_0_78%] sm:px-3 lg:flex-[0_0_72%]"
							role="group"
							aria-roledescription="slide"
							aria-label={`${index + 1} of ${projects.length}`}
						>
							<div
								className={`mx-auto h-full transition-all duration-300 ease-out ${
									index === selectedIndex
										? "w-full max-w-6xl scale-100 opacity-100"
										: "w-[92%] max-w-[calc(72rem*0.92)] scale-[0.94] opacity-75"
								}`}
							>
								<ProjectCard project={project} />
							</div>
						</div>
					))}
				</div>
			</div>

			{/*controls - centered under the active card*/}
			<div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
				<button
					type="button"
					onClick={scrollPrev}
					disabled={!canScrollPrev}
					aria-label="Previous project"
					className={arrowClass}
				>
					<ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
				</button>

				{/*pagination*/}
				<div className="flex items-center gap-2" role="group" aria-label="Choose project">
					{projects.map((project, index) => (
						<button
							key={`${project.name}-dot-${index}`}
							type="button"
							onClick={() => scrollTo(index)}
							aria-label={`Go to ${project.name}`}
							aria-current={index === selectedIndex ? "true" : undefined}
							className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
								index === selectedIndex
									? "w-8 bg-primary"
									: "w-2 bg-white/20 hover:bg-white/40"
							}`}
						/>
					))}
				</div>

				<button
					type="button"
					onClick={scrollNext}
					disabled={!canScrollNext}
					aria-label="Next project"
					className={arrowClass}
				>
					<ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
				</button>
			</div>
		</div>
	);
}

export default ProjectCarousel;
