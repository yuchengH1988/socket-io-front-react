import { useEffect, useState } from 'react';
import "./App.css";
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3001", {
  path: '/message'
})
const socketNotification = io.connect("http://localhost:3001", {
  path: '/notification'
})

function App() {
  const [room, setRoom] = useState("")
  const [message, setMessage] = useState('')
  const [messageAuthor, setMessageAuthor] = useState('')
  const [messageReceived, setMessageReceived] = useState('')
  const [name, setName] = useState("")
  const [notification, setNotification] = useState("")
  const sendMessage = () => {
    if (room === '') return  alert('Message failed! Please enter your room.')
    socket.emit("send_message", { message, room, name })
  };
  const joinRoom = () => {
    if (room !== '') {
      socket.emit("join_room", room)
    }
  }

  const askNotification = () => {
    socketNotification.emit("active", name)
  }

  useEffect(() => {
    socket.on("received_message", (data) => {
      setMessageReceived(data.message)
      setMessageAuthor(data.name)
    })
    socketNotification.on("received_notification", (data) => {
      setNotification(data)
    })
  }, [])

  return (
    <div className="App">
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value)
        }} />
      <button onClick={joinRoom}>Join Room</button>
      <br></br>
      <input
        placeholder="Name..."
        onChange={(event) => {
          setName(event.target.value)
        }} />
      <button onClick={() => {askNotification()}}>Set Name</button>
      <br></br>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value)
      }}/>
      <button onClick={sendMessage}>Send</button>
      <br></br>
      <h1>Message:</h1>
      {messageAuthor}: {messageReceived}
      <h1>Notification:</h1>
      {notification}
    </div>
  );
}

export default App;
