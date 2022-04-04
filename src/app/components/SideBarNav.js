import React from 'react';
import styled from 'styled-components';

function SideBarNav( {Icon, title} ) {
  return (
    <SideBarNavContainer>
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
    </SideBarNavContainer>
  )
}

export default SideBarNav

const SideBarNavContainer = styled.div`

`;

