export default function Card(props) {
    return (

        <div className="port-body">
            <h2 className="port-title">{props.name}</h2>
            <img
                className="port-img"
                src={props.img}
                alt="Image describing application"
            />
            <p className="port-text"> {props.description}</p>
            <div className="port-link">
                <a href={props.link} className="btn btn btn-outline-dark">
                    View Live Application
                </a>
                <a
                    href={props.repo} className="btn btn btn-outline-dark">
                    View Repository
                </a>
            </div>
        </div >

    );
}

