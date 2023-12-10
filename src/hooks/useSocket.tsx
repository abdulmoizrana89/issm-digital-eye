import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { socket } from "../config/socket";

const SocketContext = createContext<any>(null);
const { Provider } = SocketContext;

export const useSocket = () => useContext(SocketContext);

const useSocketProvider = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  const connect = useCallback(() => {
    if (!isConnected) {
      socket.connect();
    }
  }, [isConnected]);

  const disconnect = useCallback(() => {
    if (isConnected) {
      socket.disconnect();
    }
  }, [isConnected]);

  return {
    isConnected,
    connect,
    disconnect,
  };
};

export const SocketProvider: React.FC<any> = ({ children }) => {
  const value = useSocketProvider();

  return <Provider value={value}>{children}</Provider>;
};
