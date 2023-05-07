import './Alert.css';

function Alert({children, icon, state}) {
  return (
    <div className="inline">
        <div>{icon}</div>
        <div className="children-alert">{children}</div>
    </div>
  );
}

export default Alert;