import { useVideo, useAVToggle } from "@100mslive/react-sdk";
import { IoMdMic, IoMdMicOff } from "react-icons/io";

const Peer = ({ peer }) => {
  const { isLocalAudioEnabled, isLocalVideoEnabled } = useAVToggle();
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  });

  return (
    <div className="relative min-w-[20rem] min-h-[15rem] flex justify-center items-center border-2 border-cyan-500 rounded-md">
      <div className="absolute right-2 bottom-2 flex gap-2 items-center">
        {isLocalVideoEnabled ? <span>{peer.name}</span> : null}
        <span>{!isLocalAudioEnabled ? <IoMdMic /> : <IoMdMicOff />}</span>
      </div>

      {isLocalVideoEnabled ? (
        <video ref={videoRef} className="rounded-md max-w-2xl" autoPlay muted playsInline />
      ) : (
        <h2 className="text-2xl">{peer.name}</h2>
      )}
    </div>
  );
};

export { Peer };
