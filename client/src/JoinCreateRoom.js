import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const JoinCreateRoom = ({ uuid, setUser, setRoomJoined }) => {
  const [roomId, setRoomId] = useState(uuid());
  const [name, setName] = useState("");
  const [joinName, setJoinName] = useState("");
  const [joinRoomId, setJoinRoomId] = useState("");

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!name) return toast.dark("Please enter your name!");

    setUser({
      roomId,
      userId: uuid(),
      userName: name,
      host: true,
      presenter: true,
    });
    setRoomJoined(true);
  };
  const handleJoinSubmit = (e) => {
    e.preventDefault();
    if (!joinName) return toast.dark("Please enter your name!");

    setUser({
      roomId: joinRoomId,
      userId: uuid(),
      userName: joinName,
      host: false,
      presenter: false,
    });
    setRoomJoined(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center my-5 font-weight-bold" style={{ fontSize: "40px", color: "blue",fontWeight:"bold" }}>
            Welcome To Real-Time Collaborative Whiteboard
          </h1>
        </div>
      </div>
      <div className="row mx-5 mt-5">
        <div className="col-md-5 p-5 border mx-auto" style={{ border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#e9ecef' }}>
          <h1 className="text-center text-danger mb-4" style={{ fontSize: '30px', fontWeight: '600' }}>Create Room</h1>
          <form onSubmit={handleCreateSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ borderRadius: '5px', borderColor: '#ced4da', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
            <div className="input-group my-2 border align-items-center">
              <input
                type="text"
                className="form-control border-0 outline-0"
                value={roomId}
                readOnly={true}
                style={{
                  boxShadow: "none",
                  zIndex: "0 !important",
                  fontsize: "0.89rem !important",
                }}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-primary  border-0 btn-sm"
                  type="button"
                  onClick={() => setRoomId(uuid())}
                  style={{ fontWeight: "600" }}
                >
                  Generate
                </button>
                &nbsp;&nbsp;
                <CopyToClipboard
                  text={roomId}
                  onCopy={() => toast.success("Room Id Copied To Clipboard!")}
                >
                  <button
                    className="btn btn-outline-dark border-0 btn-sm"
                    type="button"
                    style={{ fontWeight: "600" }}
                  >
                    Copy
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <div className="form-group mt-5">
              <button type="submit" className="form-control btn btn-success">
                Create Room
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-5 p-5 border mx-auto" style={{ border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#e9ecef' }}>
          <h1 className="text-center text-danger mb-4" style={{ fontSize: '30px', fontWeight: '600' }}>Join Room</h1>
          <form onSubmit={handleJoinSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={joinName}
                onChange={(e) => setJoinName(e.target.value)}
                style={{ borderRadius: '5px', borderColor: '#ced4da', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="text"
                className="form-control outline-0"
                value={joinRoomId}
                onChange={(e) => setJoinRoomId(e.target.value)}
                placeholder="Room Id"
                style={{
                  boxShadow: "none",
                }}
              />
            </div>
            <div className="form-group mt-5">
              <button type="submit" className="form-control btn btn-success">
                Join Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinCreateRoom;