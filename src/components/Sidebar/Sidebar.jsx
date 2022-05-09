import {
    Add,
    Apps,
    Create,
    EventAvailable,
    Home,
    ExpandMore,
    FiberManualRecord,
    FileCopy,
    Inbox,
    InsertComment,
    PeopleAlt,
    Settings,
    Chat,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";
import SidebarOption from "../SidebarOption/SidebarOption";
import "./Sidebar.css";

function Sidebar({ setSelected }) {
    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        db.collection("channels").onSnapshot((snapshot) => {
            setChannels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            );
        });
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>User Profile</h2>
                    <h3>
                        <FiberManualRecord />
                        {user.displayName}
                    </h3>
                </div>
                <Create />
            </div>
            <SidebarOption Icon={Home} title="Home" id={null} />
            <SidebarOption Icon={EventAvailable} title="Events" id={null} />
            <SidebarOption Icon={PeopleAlt} title="Discussions" id={null} />
            <SidebarOption Icon={Settings} title="Settings" id={null} />
            {/* <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" /> */}
            {/* <SidebarOption Icon={ExpandLess} title="Show less" /> */}
            <hr />
            <SidebarOption Icon={Chat} title="StuGroups" />
            <hr />
            <SidebarOption
                Icon={Add}
                addChannelOption
                title="Create StuGroup"
            />
            {channels.map((channel) => (
                <SidebarOption
                    title={channel.name}
                    id={channel.id}
                    key={channel.id}
                />
            ))}
        </div>
    );
}

export default Sidebar;
