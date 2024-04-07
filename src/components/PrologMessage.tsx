import { Message } from "./Message";

interface Props {
  message: string;
}

export const PrologMessage = ({ message }:Props) => {
  return <Message imgSrc="../swi-logo.png" message={message} name="Prolog" />;
};
