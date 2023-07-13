import './SkillsDetail.css';

function SkillsDetail({ list }) {

  const renderedList = list.map((item)=> <p key={item}>{item}</p> )
  return (
    <div className="skills-detail">
        <ul className="content">
            {/* {list.map((item ) => {return <List keyi={item} content={item} />})} */}
            {renderedList}
            {console.log(renderedList)}
        </ul>
    </div>
  );
}

export default SkillsDetail;