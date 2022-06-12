import { useState, useEffect } from "react";
import { useHMSActions } from "@100mslive/react-sdk";
import axios from "axios";

const JoiningForm = () => {
  const [userName, setUserName] = useState("");

  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      hmsActions.leave();
    };
  }, [hmsActions]);

  const endPoint = "https://prod-in.100ms.live/hmsapi/makecall.app.100ms.live/";

  const getToken = async user_id => {
    const response = await fetch(`${endPoint}api/token`, {
      method: "POST",
      body: JSON.stringify({
        user_id,
        role: "host",
        type: "app",
        room_id: "62a4ff33b873787aa270911b",
      }),
    });
    const { token } = await response.json();
    return token;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const authToken = await getToken();
    hmsActions.join({
      userName,
      authToken,
    });
  };
  return (
    <div className="flex gap-2  m-auto justify-center items-center">
      <div>
        <img
          className="w-full"
          src="/assets/undraw_video_call_re_4p26.svg"
          alt="Video calling illustration"
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center p-2 flex-1">
        <h1 className="text-6xl text-center">Start Making Instant Video Calls</h1>
        <input
          type="text"
          className="focus:outline-none text-gray-800 p-2 rounded-md"
          placeholder="Enter your name"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />

        <button
          type="submit"
          className="bg-cyan-400 hover:opacity-80 p-2 text-xl text-gray-800 rounded-md"
        >
          New Meeting
        </button>
      </form>
    </div>
  );
};

export { JoiningForm };
