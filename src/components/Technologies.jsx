
function Technologies({ list }) {
    const renderedList = list.map(item => {
        return <li className="margin-right">{item}</li>
    })
  return (
    <div>
        <ul className="inline">
            {renderedList}
        </ul>
    </div>
  );
}

export default Technologies;