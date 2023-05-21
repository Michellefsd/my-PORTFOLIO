
function Team({ collaborators }) {
collaborators.map(collaborator => {
    const { name, as, img } = collaborator;
    return (
      <div>
          <div key={name}>
              <img src={img} alt={`${name}'s profile pic`} />
              <p>{name}</p>
              <p>{as}</p>
          </div>
      </div>
    )
})
}

export default Team