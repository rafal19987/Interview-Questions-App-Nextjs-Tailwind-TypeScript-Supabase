interface ButtonProps {
  onClick?: () => void
  text: string
}

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      className="w-56 h-16 mb-6 rounded-lg bg-[#FF7900]/50 text-white focus:border-[#ff7900] focus:outline-none focus:border-2 hover:bg-[#FF7900] transition-colors duration-200"
      onClick={onClick}
    >
      {text.toUpperCase()}
    </button>
  )
}

export default Button
