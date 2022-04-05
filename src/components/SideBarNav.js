import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
import { db } from '../firebase';

function SideBarNav( { Icon, title, addChannelOption, id } ) {
    const dispath = useDispatch();
    
    const addChannel = () => {
        const channelName = prompt("Please enter a name for this new channel")
        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }
    }

    const selectChannel = () => {
        if (id) {
            dispath(enterRoom({
                roomId: id,
            }))
        }
    }

    return (
    <SideBarNavContainer
        onClick = {addChannelOption ? addChannel : selectChannel}
    >
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (<h3>{title}</h3>) : (
            <SidebarNavChannel>
                <span>#</span>{title}
            </SidebarNavChannel>
        )}
    </SideBarNavContainer>
    )
}

export default SideBarNav

const SideBarNavContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.8;
        background-color: #340e36;
    }

    >h3 {
        font-weight: 500;
    }

    >h3 >span {
        padding: 15px;
    }
`;

const SidebarNavChannel = styled.h3`
    padding: 8px 0;
    font-weight: 300;
`;

