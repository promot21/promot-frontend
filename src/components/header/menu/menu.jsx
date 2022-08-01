import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import MenuContents from "./contents";
import { MenuContainer, NavLink } from "./menu.components";

function MobileMenu() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      {!displayMenu ? (
        <IconButton onClick={() => setDisplayMenu(!displayMenu)}>
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
      ) : (
        <IconButton onClick={() => setDisplayMenu(!displayMenu)}>
          <CloseIcon sx={{ color: "black" }} />
        </IconButton>
      )}
      {displayMenu ? (
        <MenuContainer
          direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={3.5}
          sx={{ width: window.screen.width }}
        >
          {MenuContents.map((data, index) => {
            return (
              <NavLink
                component={Link}
                to={data.url}
                onClick={() => setDisplayMenu(false)}
              >
                {data.text}
              </NavLink>
            );
          })}
        </MenuContainer>
      ) : (
        ""
      )}
    </Box>
  );
}

export default MobileMenu;
