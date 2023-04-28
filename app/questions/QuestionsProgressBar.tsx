const QuestionsProgressBar = (props: any) => {
  return (
    <div className="absolute flex justify-start items-center bottom-1 w-11/12 h-3 m-1 p-1 rounded-lg bg-[#4F4E8D]">
      <div
        style={{
          width: `${props.filled}%`,
        }}
        className="h-2 rounded-lg bg-[#23216D]"
      ></div>
    </div>
  )
}

export default QuestionsProgressBar
