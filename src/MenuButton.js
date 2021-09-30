import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css"

const MenuButtonWrapper = styled.button`
  border: none;
  box-shadow: 0px 0px 1px rgb(50, 50, 50);
  @media only screen and (min-width: 624px) {
    display: none;
  }
`;

function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <svg viewBox="0 0 100 80" width="20" height="20" fill="#373737">
        <rect width="90" height="10" />
        <rect y="30" width="80" height="10" />
        <rect y="60" width="70" height="10" />
      </svg>
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <svg
        className="svg-icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="#000"
      >
        
      </svg>
    </MenuButtonWrapper>
  );
}

export default MenuButton;
