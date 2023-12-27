import {load} from "@fingerprintjs/botd";
import {useEffect, useState} from "react";

export const useBotDetection = () =>{
  const [botStatus, setBotStatus] = useState<boolean>(true)
  useEffect(() => {
    const detectBot = async () => {
      try {
        const botdPromise = await load()
        const result =  botdPromise.detect()
        setBotStatus(result.bot)
      } catch (e) {
        throw Error(`BOTERROR - ${e}`)
      }
    }
    void detectBot()
  }, [])

  return botStatus
}