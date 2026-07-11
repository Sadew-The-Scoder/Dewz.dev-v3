function NeonText(props) {
    return (
        <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${props.class}`}>
            <span
                className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
                {props.children}
            </span>
        </h2>
    )
}

export default NeonText