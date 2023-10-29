import './Button.scss';

const Button = ({ children, type, onClick }) => {
  return <button onClick={onClick} className='button' type={type}>{children}</button>;
};

export default Button;
