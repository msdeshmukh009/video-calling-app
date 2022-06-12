import { useHMSStore, selectIsConnectedToRoom } from "@100mslive/react-sdk";
import { JoiningForm, Conference } from "./components";

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);

  return (
    <main className="bg-gray-800 text-cyan-100 min-h-screen p-2 flex">
      {isConnected ? <Conference /> : <JoiningForm />}
    </main>
  );
}

export default App;
