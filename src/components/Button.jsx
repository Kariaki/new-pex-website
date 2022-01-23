const Button = ({bgColor, color, text, onClick}) => {
  return (
    <button 
    className="btn-small" 
    style={{backgroundColor: `${bgColor}`, color: `${color}`}} onClick={onClick}
    >{text}</button>
  );
};

export default Button;
