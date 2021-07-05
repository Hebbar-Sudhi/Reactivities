import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import {NavLink} from "react-router-dom";

function NavBar() {

  return (
    <Menu inverted fixed="top" secondary>
      <Container>
        <Menu.Item as={NavLink} to='/' exact header>
          <img
            src="/assests/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to='/activities' name="Activities" />
        <Menu.Item>
          <Button
            as = {NavLink}
            to = '/createActivity'
            style={{background:'#B4DBC0'}}
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default NavBar;
