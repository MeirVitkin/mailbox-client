
import { EmailLi } from "./components/EmailLi"
import { EmailTitle } from "./components/EmailTitle"
import { InputSearch } from "./components/InputSearch"
import { MsgLi } from "./components/MsgLi"
import { NewMsgBtn } from "./components/NewMsgBtn"
import { SendBtn } from "./components/SendBtn"
const user = { "userId": "602c49ceb02aca8db6f826d", "mail": "user2@example.com" }
const email = [
  {
    "email": {
      "_id": "6602c49eeb02aca8db6f8282",
      "subject": "Meeting with new investors",
      "lastDate": "2024-03-21T10:24:00.000Z",
      "msg": [
        {
          "_id": "6602c49ceb02aca8db6f8274",
          "to": ["user1@example.com"],
          "from": "user2@example.com",
          "date": "2024-03-21T10:00:00.000Z",
          "content": "Hi, I have a new meeting opportunity, and I don’t know how to use it",
          "subject": "Meeting with new investors",
          "__v": 0
        },
        {
          "_id": "6602c49deb02aca8db6f8276",
          "to": ["user2@example.com"],
          "from": "user1@example.com",
          "date": "2024-03-21T10:08:00.000Z",
          "content": "- Hi, I have a new meeting opportunity, and I don’t know how to use it",
          "subject": "Meeting with new investors",
          "__v": 0
        },
        {
          "_id": "6602c49deb02aca8db6f8278",
          "to": ["user1@example.com"],
          "from": "user2@example.com",
          "date": "2024-03-21T10:24:00.000Z",
          "content": "Walla Sababa !!",
          "subject": "Meeting with new investors",
          "__v": 0
        }
      ],
      "__v": 0
    },
    "isSent": true,
    "isRecieved": false,
    "isFavorite": true,
    "isDeleted": false,
    "isRead": true,
    "_id": "6602c49eeb02aca8db6f8287"
  },
  {
    "email": {
      "_id": "6602c49eeb02aca8db6f8284",
      "subject": "Report Request",
      "lastDate": "2024-03-21T07:30:00.000Z",
      "msg": [
        {
          "_id": "6602c49deb02aca8db6f827a",
          "to": ["user2@example.com"],
          "from": "user3@example.com",
          "date": "2024-03-20T09:30:00.000Z",
          "content": "Could you please send me the report? kjns a askd askd asd kaskd kasd kasdjasjd asd jasd jsa dj",
          "subject": "Report Request",
          "__v": 0
        },
        {
          "_id": "6602c49deb02aca8db6f827c",
          "to": ["user3@example.com"],
          "from": "user2@example.com",
          "date": "2024-03-20T10:45:00.000Z",
          "content": "whyyyyy?!?!",
          "subject": "Report Request",
          "__v": 0
        },
        {
          "_id": "6602c49deb02aca8db6f827e",
          "to": ["user2@example.com"],
          "from": "user3@example.com",
          "date": "2024-03-20T10:57:00.000Z",
          "content": "why whyyyyyyy?!?!",
          "subject": "Report Request",
          "__v": 0
        },
        {
          "_id": "6602c49deb02aca8db6f8280",
          "to": ["user3@example.com"],
          "from": "user2@example.com",
          "date": "2024-03-21T07:30:00.000Z",
          "content": "Ok, i'm fired!",
          "subject": "Report Request",
          "__v": 0
        }
      ],
      "__v": 0
    },
    "isSent": true,
    "isRecieved": true,
    "isFavorite": false,
    "isDeleted": false,
    "isRead": false,
    "_id": "6602c49eeb02aca8db6f8288"
  }
]

function App() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <div style={{ width: '372px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ width: '365px' }}> <InputSearch /> </div>
        <div style={{ width: '249px', height: '51px' }}><NewMsgBtn /></div>
        <EmailLi email={email[0]} />
        <EmailLi email={email[1]} />
        <EmailLi email={email[0]} />
        <div style={{ width: '114px', height: '51px' }}> <SendBtn /> </div>
      </div>
      <div style={{ width: '649px', display: 'flex', flexDirection: 'column', gap: '10px',backgroundColor:'#ffff',padding:'10px' }}>
        <div style={{ width: '649px', height: '147px',padding:'10px' }}> <EmailTitle email={email[0].email} /> </div>
        <div style={{ width: '598px' }}>
          {/* {email[0].email.msg.map((msg) => (
            <div key= {msg._id} style={{ width: '598px', height: '65px' }}> <MsgLi  msg={msg} user={user} /></div>
          ))} */}
          {email[1].email.msg.map((msg) => (
            <div key= {msg._id} style={{ width: '598px', height: '65px' }}> <MsgLi  msg={msg} user={user} /></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
