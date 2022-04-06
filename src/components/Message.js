import React from 'react';
import styled from 'styled-components';

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt=""/>
      <MessageInfo>
        <h4>
            {user}{' '}
            <span>
                {new Date(timestamp?.toDate()).toUTCString()}
            </span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  )
}

export default Message;

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 30px;

    > img {
        padding-right: 10px;
        height: 45px;
        border-radius: 50%;
    }
`;

const MessageInfo = styled.div`
    color: gray;

    >h4 > span {
        font-weight: 300;
        margin-left: 10px;
        font-size: 10px;
    }
`;