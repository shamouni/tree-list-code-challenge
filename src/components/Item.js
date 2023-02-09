import { useState } from "react";
import List from "./List";

const Item = ({title, description, children}) => {

    const [toggle, setToggle] = useState(false);
    const icon = children.length > 0 ? 'has-child' : 'single';

    const toggleClick = e => {
        e.stopPropagation();
        setToggle(p => !p);
    }


    return (
        <li className={`${icon} ${toggle ? 'show' : 'hide'}`}>
            <div onClick={toggleClick}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            {children.length > 0 && (
                <List data={children} />
            )}
        </li>
    )
}

export default Item;
