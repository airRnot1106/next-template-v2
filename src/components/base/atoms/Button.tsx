interface ButtonProps {
  content: string;
  onClick: () => void;
}

export const Button = ({ content, onClick }: ButtonProps) => {
  return (
    <button className="btn-primary btn" onClick={onClick}>
      {content}
    </button>
  );
};
