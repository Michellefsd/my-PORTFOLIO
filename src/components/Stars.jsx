

function Stars({ size, bottom, left }) {

  return (
    <div style={{
      position: "relative", 
      bottom: bottom + "rem", 
      left: left + "rem", 
      borderRadius: "50%", 
      width: size + "rem", 
      height: size + "rem", 
      backgroundColor: "var(--clouds_color)", 
      margin: "0"
  }}></div>
  );
}

export default Stars;