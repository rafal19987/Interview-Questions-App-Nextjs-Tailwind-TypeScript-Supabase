const Button = (props: any) => {
  return (
    <button
      className="mt-12 w-56 h-16 rounded-lg bg-[#23216D] text-white"
      {...props}
    >
      {props.text.toUpperCase()}
    </button>
  )
}

export default Button
