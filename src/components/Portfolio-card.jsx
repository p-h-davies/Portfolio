export default function Card(props) {
    return (

        <div className="port-body">
            <h5 className="port-title">{props.name}</h5>
            <img
                className="port-img"
                src={props.img}
                alt="Image describing application"
            />
            <p className="port-text"> {props.description}</p>
            <a href={props.link} className="btn btn-primary">
                View Live Application
            </a>
            <a href={props.repo} className="btn btn-primary">
                View Repository
            </a>
        </div>

    );
}
