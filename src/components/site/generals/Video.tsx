export default function Video({videoSrc}: {videoSrc: string}) {
  return (
    <section
      className="absolute top-0 left-0 w-full flex items-center justify-center h-screen mb-12 overflow-hidden"
    >
      {/* <div
        className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
      >
        Welcome to my site!
      </div> */}
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
