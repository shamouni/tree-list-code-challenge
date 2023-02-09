import Item from "./Item";

const List = ({ data = [] }) => (
    <ul>
        {data.map(i => <Item key={i.id} {...i} />)}
    </ul>
)
export default List;
