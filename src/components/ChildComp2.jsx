export default function ChildComp2() {
    return (
        <>
            <h2>Child Component 2</h2>

            <ChildComp2Inner />
        </>
    )
}

function ChildComp2Inner() {
    return (
        <>
            <h3>Child Component 2 Nested Component</h3>
        </>
    )
}