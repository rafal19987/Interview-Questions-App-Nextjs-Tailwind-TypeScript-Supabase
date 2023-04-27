const QuestionsProgressBar = (props: any) => {
  return (
    <div
      style={{
        width: `${props.filled}%`,
      }}
      className="h-2 rounded-lg bg-[#23216D]"
    ></div>
  )
}

export default QuestionsProgressBar
