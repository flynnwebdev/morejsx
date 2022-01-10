// import "./card.css"

const styles = {
    background: "lightgray",
    padding: "0.5rem",
    margin: "0.5rem",
    borderRadius: "0.5rem",
}

const Card = (props) => {
    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default Card
