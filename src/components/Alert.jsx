import './Alert.css';

function Alert({children, icon}) {
  return (
    <div className="inline">
        <div>{icon}</div>
        <div className="alert-content">{children}</div>
    </div>
  );
}

export default Alert;