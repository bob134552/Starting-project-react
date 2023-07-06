import ConceptData from "./ConceptsData";
import ConceptImages from "./ConceptImages";
import './ConceptItem.css'

const ConceptItem = (props) => {
    return (
        <li className="concept">
            <ConceptImages image={props.image} title={props.title}/>
            <ConceptData title={props.title} description={props.description}/>
        </li>
    )
}

export default ConceptItem;