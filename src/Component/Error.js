const Error = (props) => {

    return <div>
        <div>Please enter valid inputs</div>
        <button onClick={() => props.flag(false)}>OK</button>
        </div>
}

export default Error;