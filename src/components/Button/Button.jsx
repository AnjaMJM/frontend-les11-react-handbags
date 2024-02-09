import "./button.css"

function Button( {handleClick, children } ) {
    return (
        <button
            type="button"
            className="button"
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;