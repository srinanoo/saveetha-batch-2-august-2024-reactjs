export default function ChildComp1({click}) {
    // console.log(props);
    // props.str = "New String";

    return (
        <>
            <h2>Child Component 1</h2>
            {/* <p>Number: {props.num}</p>
            <p>String: {props.str}</p>
            <p>Boolean: {props.bool.toString()}</p>
            <p>Array: {props.arr}</p> */}

            <button onClick={click} id="New Name">Child Click</button>
        </>
    )
}

export function ChildComp1Inner({num, str, bool, arr, obj}) {
    return (
        <>
            <h3>Child Component 1 Inner Component</h3>

            <p>Number: {num}</p>
        </>
    )
}

// export default ChildComp1;
// export { ChildComp1Inner };