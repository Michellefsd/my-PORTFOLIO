import './Alert.css';

function Alert({children, icon, state}) {
  return (
    <div className="inline">
        <div>{icon}</div>
        <div>{children}</div>
    </div>
  );
}

export default Alert;