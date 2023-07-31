interface SubTitleProps {
  title: string
}
export function SubTitle({ title }: SubTitleProps) {
  return (
    <div className="w-40 h-40 rounded-full bg-blue-900/30 flex justify-center items-center">
      <div className="w-28 h-28 rounded-full bg-blue-950 flex justify-center items-center">
        <h2 className="font-bold text-xl text-blue-500">{title}</h2>
      </div>
    </div>
  )
}
