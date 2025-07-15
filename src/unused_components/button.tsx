interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, color = "success", onClick }: Props) => {
  return (
    <div>
      <h1>Button</h1>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
