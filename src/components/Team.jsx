
function Team({ collaborators }) {
    const devs = collaborators.map(collaborator => {
        const { name, as, img } = collaborator;
        return (
            <div className="inline" key={name}>
                <img src={img} alt={`${name}'s profile pic`} />
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


