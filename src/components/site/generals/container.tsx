
export default function Container(props: Children) {
  const { children } = props

  return (
    <div className='w-full p-8 dark:bg-white bg-black rounded-md flex flex-col justify-center items-center gap-11 dark:text-black text-white leading-10 text-lg'>
      {children}
    </div>
  )
}
