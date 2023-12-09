export default function FormTextError(props: any) {
  const { children } = props
  return (
    <div className="text-xs text-red-300">
      {children}
    </div>
  )
}
