import ConceptItem from './ConceptItem'
import './Concepts.css'

function Concepts(props) {
    const concepts = props.concepts
    return (
        <ul id="concepts">
            {concepts.map((concept) => <ConceptItem title={concept.title} image={concept.image} description={concept.description}/>)}
        </ul>
    )
}

export default Concepts;