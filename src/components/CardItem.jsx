function CardItem(props) {
    return (

        <span className="bg-slate-950 border border-slate-800/80 hover:border-secondary text-slate-300 hover:text-white px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 select-none">
            {props.item}
        </span>
    )
}

export default CardItem