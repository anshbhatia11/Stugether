import React from "react";
import Layout from "../../Layout/Layout";
import "./Events.css";


export function Event({
  userImg,
  name,
  username,
  attatchedImg,
  content,
  likes,
  comments,
  shares,
}) {
  return (
    <div className="event">
      <div className="event_img_box">
        <div>
          <img style={{ cursor: "pointer" }} src={userImg} alt="user" />
        </div>
      </div>
      <div className="content_box">
        <div>
          <div style={{ display: "flex" }}>
            <span>{name}</span>
            <div style={{ marginLeft: 10, color: "rgb(112 112 112)" }}>
              @{username}
            </div>
          </div>
          <div style={{ marginTop: 10 }}>{content}</div>
          {attatchedImg !== "" && (
            <div>
              <img src={attatchedImg} alt="" />
            </div>
          )}
        </div>
        <div className="event_action_bar">
          <span>
            <div cursor="pointer" fontSize="14px" style={{ display: "flex" }}>
              comments:
              <div ml="5px" color="rgb(136, 153, 166)">
                {comments}
              </div>
            </div>
          </span>

          <span>
            <div
              fontSize="14px"
              alignItems="center"
              cursor="pointer"
              style={{ display: "flex" }}
            >
              likes:
              <div
                ml="5px"
                color={false ? "rgb(224, 36, 94)" : "rgb(136, 153, 166)"}
              >
                {likes}
              </div>
            </div>
          </span>
          <span>
            <div fontSize="14px" style={{ display: "flex" }}>
              shares:
              <div ml="5px" color="rgb(136, 153, 166)">
                {shares}
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

const dummyData = [
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjS-Sh3mcuEXm-N5YoUYkQbS-yM2J1WqgPw&usqp=CAU",
    name: "Tushar Raj Sharma",
    username: "Tushar_Raj_Sharma",
    content: "Announcing!, Sabrang a cultural fest organized by JKLU",
    attatchedImg: "",
    comments: 0,
    likes: 0,
    shares: 0,
  },
];
const dummyData2 = [
  {
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQAix9JekHX9Gba36J8P5UHvkuHXruA23fg&usqp=CAU",
    name: "Aniket Kundra",
    username: "AK",
    content: "Announcing!, The ART a phtography Event organized by JKLU",
    attatchedImg: "",
    comments: 0,
    likes: 1,
    shares: 0,
  },
  
];


export function Events() {
  return (
    <Layout>
      {dummyData.map((event) => (
        <Event {...event} />
      ))}
      <br />
      {dummyData2.map((event) => (
        <Event {...event} />
      ))}
    </Layout>
  );
}
