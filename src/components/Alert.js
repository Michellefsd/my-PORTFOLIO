import './Alert.css';

function Alert({children, icon, style}) {
  return (
    <div className="inline">
        <div>{icon}</div>
        <div>{children}</div>
    </div>
  );
}

export default Alert;