import './Team.css';
function Team({ collaborators, img }) {
    // FIX THE IMG PROBLEM SOON
    const devs = collaborators.map(collaborator => {
        const { name, as } = collaborator;
        return (
            <div className="inline" key={name}>
                <div className="collaborator-img">
                    <img src={img} alt={`${name}'s profile pic`} />
                </div>
                <div className="block">
                    <p className="bold">{name}</p>
                    <p>{as}</p>
                </div>
            </div>
        )
    })
    return <div>{devs}</div>
}

export default Team;


