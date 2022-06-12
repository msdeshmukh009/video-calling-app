import { useHMSStore, selectPeers, useHMSActions, useAVToggle } from "@100mslive/react-sdk";
import { MdOutlineCallEnd } from "react-icons/md";
import { BsCameraVideoFill, BsCameraVideoOffFill } from "react-icons/bs";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { Peer } from "../peer/Peer";

const Conference = () => {
  const peers = useHMSStore(selectPeers);

  const hmsActions = useHMSActions();
  const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo } = useAVToggle();

  const endCall = () => {
    hmsActions.leave();
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-2 flex-wrap items-center justify-center m-auto">
        {peers.map(peer => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        <button
          onClick={toggleAudio}
          className={`${
            !isLocalAudioEnabled ? "bg-gray-600" : "bg-red-700"
          } rounded-[50%] p-3 text-2xl`}
        >
          {isLocalAudioEnabled ? <IoMdMicOff /> : <IoMdMic />}
        </button>
        <button
          onClick={toggleVideo}
          className={`${
            isLocalVideoEnabled ? "bg-gray-600" : "bg-red-700"
          } rounded-[50%] p-3 text-2xl`}
        >
          {isLocalVideoEnabled ? <BsCameraVideoFill /> : <BsCameraVideoOffFill />}
        </button>
        <button onClick={endCall} className="bg-red-700 rounded-[50%] p-3 text-2xl">
          <MdOutlineCallEnd />
        </button>
      </div>
    </div>
  );
};
export { Conference };
