export default function MyMessage({message}){

  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }
  
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#B762C1' }}>
      <i>{`${message.sender.username}:`}</i> {`${message.text}`}
    </div>
  );
  
}