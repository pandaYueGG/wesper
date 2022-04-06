import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React from 'react';
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import SideBarNav from './SideBarNav';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/AddAPhotoSharp';

import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection("rooms"))
    const [user] = useAuthState(auth)

    return (
    <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>Yue HQ</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Available
                </h3>
            </SidebarInfo>
            <CreateIcon />
        </SidebarHeader>

        {/* sidebar icons */}
        <SideBarNav Icon={InsertCommentIcon} title="Threads"/>
        <SideBarNav Icon={InboxIcon} title="Mentions & Reactions"/>
        <SideBarNav Icon={DraftsIcon} title="Save items"/>
        <SideBarNav Icon={BookmarkBorderIcon} title="Channel broswer"/>
        <SideBarNav Icon={PeopleAltIcon} title="People & user groups"/>
        <SideBarNav Icon={AppsIcon} title="Apps"/>
        <SideBarNav Icon={FileCopyIcon} title="File browser"/>
        <SideBarNav Icon={ExpandLessIcon} title="Show less"/>
        <hr />
        <SideBarNav Icon={ExpandMoreIcon} title="Channels" />
        <hr />
        <SideBarNav Icon={AddIcon} addChannelOption title="Add Channel" />

        {/* show channel list */}
        {channels?.docs.map((doc) => (
            <SideBarNav 
                key={doc.id}
                id={doc.id}
                title={doc.data().name}
            />
        ))}

    </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--wepser-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    >hr {
        margin-top: 12px;
        margin-bottom: 12px;
        border: 1px solid #413f64;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    >.MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    >h2 {
       font-size: 15px;
       font-weight: 900;
       margin-bottom: 5px;
    }

    >h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    >h3 >.MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;
