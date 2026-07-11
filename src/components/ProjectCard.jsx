import { MdOutlineArrowCircleRight } from "react-icons/md"
import NeonText from "./NeonText"

function ProjectCard({ project }) {
    return (
        <div className="bg-slate-900/30 border border-slate-900/80 hover:border-secondary/40 p-6 transition-all duration-300 backdrop-blur-sm group hover:translate-y-[-6px] flex flex-col justify-between min-h-[250px]">

            <div className="space-y-3">
                {/* Project Name */}
                <NeonText>{project.name}</NeonText>
                {/* Description */}
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                    {project.description}
                </p>
                {/* Project tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tag.map((tag, index) => (
                        <span key={index} className="bg-slate-950/60 border border-slate-800 text-slate-500 px-2 py-0.5 rounded-md text-[10px] font-mono">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Action buttons / links */}
            <div className="flex item-center gap-4 pt-5 border-t border-slate-800/40 mt-4">
                {project.link && (
                    <a href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >Source Code ↗</a>
                )}
            </div>

        </div>
    )
}

export default ProjectCard