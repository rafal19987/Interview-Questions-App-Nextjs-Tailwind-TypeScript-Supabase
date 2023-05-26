interface ButtonProps {
  onClick?: () => void;
  text: string;
}

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      className="w-56 h-16 mb-6 rounded-lg bg-[#2B825B]/50 text-[#ACA4B2] text-sm focus:border-[#45e99f] focus:outline-none focus:border-2 hover:bg-[#2B825B] transition-colors duration-100"
      onClick={onClick}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
