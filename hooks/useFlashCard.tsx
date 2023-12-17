
import {useDispatch} from "react-redux";
import {show} from "@/stores/flashSlice";

export const useFlashCard = (message: string, type: FlashType = 'success') => {
  const dispatch = useDispatch()
  dispatch(show({message: message, type: type, visible: true}))
  setTimeout(() => {
    show({message: undefined, type: "info", visible: false})
  }, 5000)
}