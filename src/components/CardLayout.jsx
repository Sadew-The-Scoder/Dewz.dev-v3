function CardLayout(props) {
    return (

        <div className="bg-slate-900/40 border border-slate-900 hover:border-primary/40 p-6 rounded-2xl transition-all duration-300 backdrop-blur-sm group hover:translate-y-[-4px] hover:shadow-[0_10px_30px_rgba(147,54,180,0.05)]">
            <div className="flex items-center gap-3 mb-4 border-b border-b-slate-800/60 pb-2 ">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-70 group-hover:bg-highlight group-hover:animate-pulse transition-colors" />
                <h3 className="text-base font-bold text-slate-200 group-hover:text-highlight transition-colors font-mono tracking-wide">
                    {props.category}
                </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
                {props.children}
            </div>
        </div>

    )
}

export default CardLayout