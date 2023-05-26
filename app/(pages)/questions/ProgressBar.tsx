const ProgressBar = ({ filled }: { filled: Number }) => {
  return (
    <div className="absolute flex justify-start items-center bottom-1 w-11/12 h-3 mb-1 p-1 rounded-lg bg-[#2B825B]/50">
      <div
        style={{
          width: `${filled}%`,
        }}
        className="h-2 rounded-lg bg-[#3BC387]"
      ></div>
    </div>
  );
};

export default ProgressBar;
