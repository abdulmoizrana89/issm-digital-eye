import { useCallback, useEffect } from "react";

import { useSocket } from "./useSocket";
import { socket } from "../config/socket";

const useCategoriesSocket = (id?: string) => {
  const { connect, disconnect } = useSocket();

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, [id]);

  const handleDataReceived = useCallback((...args: any) => {
    console.log("handleDataReceived=> ", args);
  }, []);

  useEffect(() => {
    socket.on("data-received", handleDataReceived);
    return () => {
      socket.off("data-received");
    };
  }, [handleDataReceived]);

  const sendData = useCallback(() => {
    socket.emit("data-send", "hello from client");
  }, []);

  return { sendData };
};

export default useCategoriesSocket;
