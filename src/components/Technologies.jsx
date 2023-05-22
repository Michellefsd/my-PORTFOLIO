import './Technologies.css';

function Technologies({ list }) {
    const renderedList = list.map(item => {
        return <li className="technologies">{item}</li>
    })
  return (
    <div>
        <ul className="ul">
            {renderedList}
        </ul>
    </div>
  );
}

export default Technologies;