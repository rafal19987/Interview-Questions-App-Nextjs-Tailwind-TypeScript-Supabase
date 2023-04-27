const QuestionsProgressBar = (props: any) => {
  return (
    <div
      style={{
        width: `${props.filled}%`,
      }}
      className={` h-2 rounded-lg bg-cyan-500 transition-all`}
    ></div>
  )
}

export default QuestionsProgressBar
