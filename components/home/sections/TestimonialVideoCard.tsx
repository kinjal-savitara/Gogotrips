"use client";
import { Button } from "@/components/ui/button";
import { MapPin, MoreHorizontal, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

function TestimonialVideoCard({
  data,
}: {
  data: {
    id: number;
    name: string;
    location: string;
    video: string;
    desc: string;
  };
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };
  return (
    <div className="relative w-[234px] h-[305px] sm:w-[320px] sm:h-[430px] md:w-[413px] md:h-[538px] rounded-2xl overflow-hidden shadow-[0px_4px_4px_0px_#00000040]">
      {/* Video */}
      <video
        ref={videoRef}
        src={data?.video}
        muted={muted}
        //   poster={thumbnail}
        className="w-full h-full object-fill"
        
      />

      {/* TOP RIGHT CONTROLS */}
      <div className="absolute top-3 right-3 flex gap-2 z-10">
        {/* Mute */}
        <Button variant={"blur"} onClick={toggleMute} className="p-0! size-5 sm:size-7">
          {muted ? (
            <VolumeX className="size-3 sm:size-4" />
          ) : (
            <Volume2 className="size-3 sm:size-4" />
          )}
        </Button>

        {/* Fullscreen */}
        {/* <Button
          variant={"blur"}
          onClick={() => videoRef.current?.requestFullscreen()}
          className="p-0! size-5 sm:size-7"
        >
          <Maximize2 className="size-3 sm:size-4" />
        </Button> */}
        {/* Three Dots */}
        <Button variant={"blur"} className="p-0! size-5 sm:size-7">
          <MoreHorizontal className="size-3 sm:size-4" />
        </Button>
      </div>
 <Button
            variant={"blur"}
            onClick={togglePlay}
            className="p-0! size-8 sm:size-12 rounded-[20px]! border-2 border-white flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 "
          >
            {isPlaying ? (
              <Pause className="size-4 sm:size-5" />
            ) : (
              <Play className="size-4 sm:size-5" />
            )}
          </Button>
      {/* BOTTOM LEFT - NAME + LOCATION */}
      <div className="absolute bottom-13 left-0 right-0 bg-linear-to-t from-0% to-100% from-black/60 to-transparent h-1/2">
        <div className="absolute bottom-3 left-4 text-white z-10">
          <p className="text-[15px] sm:text-lg font-medium">{data?.name}</p>
          <p className="text-[10px] sm:text-[15px] font-light flex items-center gap-1">
            <MapPin size={16} /> {data?.location}
          </p>
          <p className=" text-yellow-400">
  ★★★★☆
</p>
        </div>


        {/* PLAY BUTTON OVERLAY
        <div className="absolute bottom-4 right-4 z-10 ">
          {/* <Button
            variant={"blur"}
            onClick={togglePlay}
            className="p-0! size-8 sm:size-12 rounded-[20px]! "
          >
            {isPlaying ? (
              <Pause className="size-4 sm:size-5" />
            ) : (
              <Play className="size-4 sm:size-5" />
            )}
          </Button> */}
          {/* <button
          onClick={togglePlay}
          className="bg-[rgba(0,0,0,0.45)] backdrop-blur-md p-2.5 rounded-full text-white hover:bg-[rgba(0,0,0,0.65)] transition"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>   </div>  */}
         <div className="absolute -bottom-16  z-10 p-2">
       <p className="text-sm text-white font-light mb-3 leading-relaxed line-clamp-2">
{data?.desc}
</p>

</div>
      </div>
    
    </div>
  );
}

export default TestimonialVideoCard;
