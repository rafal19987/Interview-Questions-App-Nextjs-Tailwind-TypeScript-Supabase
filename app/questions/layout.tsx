export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-6">
      {children}
    </div>
  )
}
