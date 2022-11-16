const Button = ({ variant }) => {
    let variantClass = ""
    switch(variant) {
        case "success":
            variantClass = "text-success";
            break;
        case "danger":
            variantClass = "text-danger";
            break;
        default:
            variantClass = "text-primary";
    }

    return (
        <button className={`text-xl ml-3 hover:text-hover ${variantClass}`}>Add</button>
    )
}

export default Button