interface Props{
    message: string;
    imgSrc: string;
    name: string;
}
export const Message = ({message, imgSrc, name}:Props) => {
  return (
    <div className="message-container">
        <div className="identifier">
            <img src={imgSrc} alt="" width={35}/>
            <span>{name}</span>
        </div>
        <span className="message">{message}</span>
    </div>
  )
}
