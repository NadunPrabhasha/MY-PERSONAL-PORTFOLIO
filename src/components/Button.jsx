

function Button({ className, size, children }) {
    return (
        <button className="relative flex items-center justify-center gap-2">
            <span>{children}</span>
        </button>
    )
}

export default Button