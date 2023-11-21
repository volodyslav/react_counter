

function Button() {

    const showText = true
    const text = "Hello! Please register yourself!"

    const eventHandler = (e) => {
        e.target.textContent = "Login"

    }

    return (
        <>
            {showText && <h1>{text}</h1>}
            <button onClick={(e) => eventHandler(e)}>Register</button>
        </>
    )
}

export default Button