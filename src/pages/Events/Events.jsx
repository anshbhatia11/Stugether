import React from "react";
import Layout from "../../Layout/Layout";
import "./Events.css";
import "../Chat/Chat.css";
import ChatInput from "../../components/ChatInput/ChatInput";

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
                    <img
                        style={{ cursor: "pointer" }}
                        src={userImg}
                        alt="user"
                    />
                </div>
            </div>
            <div className="content_box">
                <div>
                    <div style={{ display: "flex" }}>
                        <span>{name}</span>
                        <div
                            style={{
                                marginLeft: 10,
                                color: "rgb(112 112 112)",
                            }}
                        >
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
                        <div
                            cursor="pointer"
                            fontSize="14px"
                            style={{ display: "flex" }}
                        >
                            comments:
                            <div ml="5px" color="rgb(136, 153, 166)">
                                {comments}
                            </div>
                        </div>
                    </span>

                    <span>
                        <div
                            fontSize="14px"
                            // alignItems="center"
                            cursor="pointer"
                            style={{ display: "flex" }}
                        >
                            likes:
                            <div
                                ml="5px"
                                color={
                                    false
                                        ? "rgb(224, 36, 94)"
                                        : "rgb(136, 153, 166)"
                                }
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
        username: "Tushar Raj Sharma",
        content: "Announcing!, Sabrang a cultural fest organized by JKLU",
        attatchedImg: "",
        comments: 0,
        likes: 0,
        shares: 0,
    },
    {
        userImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dE6QiQsU3NmqLmVa16g4hw3sjcMcDEgFYw&usqp=CAU",
        name: "Riya Gupta",
        username: "Ri",
        content: "Announcing!, Sabrang a cultural fest organized by JKLU",
        attatchedImg: "",
        comments: 0,
        likes: 10,
        shares: 0,
    },
    {
        userImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9M0KkRPPB6Zp7HtjtRCGLQ8cyMhR2IjZPA&usqp=CAU",
        name: "Anshul Kundra",
        username: "AKundra",
        content: "Announcing!, Sabrang a cultural fest organized by JKLU",
        attatchedImg: "",
        comments: 0,
        likes: 0,
        shares: 0,
    },
    
];

export function Events() {
    return (
        <Layout>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {dummyData.map((event, index) => (
                    <Event key={index} {...event} />
                ))}
                <div className="chat__input">
                    <ChatInput channelName={"Events"} channelId={"events"} />
                </div>
            </div>
        </Layout>
    );
}
