import { Message } from "./Message";

interface Props {
  message: string;
}

export const UserMessage = ({ message }:Props) => {
  return <Message imgSrc="../user.png" message={message} name="user" />;
};
