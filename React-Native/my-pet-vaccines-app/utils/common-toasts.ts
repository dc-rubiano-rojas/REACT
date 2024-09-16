import Toast from "react-native-toast-message";
import { ToastType } from "./types";

const showToast = (type = ToastType.success, text1: string, text2: string) => {
  Toast.show({
    type,
    text1,
    text2,
  });
};

export default showToast;
