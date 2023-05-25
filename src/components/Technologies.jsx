import './Technologies.css';

function Technologies({ list }) {
    const renderedList = list.map((item, i ) => {
        return <li key={i} className="technologies">{item}</li>
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