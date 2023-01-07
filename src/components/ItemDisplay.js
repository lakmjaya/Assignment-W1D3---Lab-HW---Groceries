export default function ItemDisplay(props) {
    return (
        <>
        <h1>{props.item}</h1>
        <h1>{props.brand}</h1>
        <h1>{props.units}</h1>
        <h1>{props.quantity}</h1>
        </>
    )
    
}