import React from 'react';
import { StyledNavContainer, StyledNavItem } from './styles';

const Navigation = ({ setContentLoaded }) => {
  return (
    <StyledNavContainer>
      <StyledNavItem onClick={() => setContentLoaded('about')}>
        ABOUT
      </StyledNavItem>
      <StyledNavItem onClick={() => setContentLoaded('work')}>
        WORK
      </StyledNavItem>
      <StyledNavItem onClick={() => setContentLoaded('contact')}>
        CONTACT
      </StyledNavItem>
    </StyledNavContainer>
  );
};

export default Navigation;
