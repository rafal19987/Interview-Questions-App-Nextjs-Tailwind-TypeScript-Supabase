const ProgressBar = ({ filled }: { filled: Number }): JSX.Element => {
  return (
    <div className="absolute flex justify-start items-center bottom-1 w-11/12 h-3 mb-1 p-1 rounded-lg bg-[#FFC794]">
      <div
        style={{
          width: `${filled}%`,
        }}
        className="h-2 rounded-lg bg-[#CA894F]"
      ></div>
    </div>
  );
};

export default ProgressBar;
