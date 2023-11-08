import { Toast } from "react-native-toast-message/lib/src/Toast";

interface IProps {
  type: "success" | "error";
  message: string;
}
const ToastMessage = ({ type, message }: IProps) => {
    console.log(type,message)
  Toast.show({ type: "custom", props: { messageType: type, message } });
};
export default ToastMessage;