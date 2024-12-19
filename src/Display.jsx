const Display = ({adding}) => {
    if (!adding || adding.length == 0) {
        return <p>Nothing to Display!</p>
    }

    return (
        {adding.map((Title,Description))}
    )
        
};
export default Display