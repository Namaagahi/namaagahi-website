type Props = {
  videoSrc: string
}

export default function Video(props: Props) {
  const { videoSrc } = props
  
  return (
    <section
      className="absolute top-0 left-0 w-full flex items-center justify-center h-screen mb-12 overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src={videoSrc}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
