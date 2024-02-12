const ListItem = ({nombre, telefono, email}) => {
    return (
        <li>
            <p>{nombre}</p>
            <p>{telefono}</p>
            <p>{email}</p>
            <hr />
        </li>
    )
}

export default ListItem