import React from "react";
import { Segment, List, Label, Item, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDetailedSidebar() {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: "none", background:"#01ABAA", color:"white" }}
        attached="top"
        secondary
        inverted
        
      >
        3 People Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          <Item style={{ position: "relative" }}>
            <Label
              style={{ position: "absolute", background: "#EB6B40", color: "white" }}
              ribbon="right"
            >
              Host
            </Label>
            <Image size="tiny" src={"/assests/user.png"} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Link to={`#`}>Hebbar</Link>
              </Item.Header>
              <Item.Extra style={{ color: "#EEAA7B" }}>Following</Item.Extra>
            </Item.Content>
          </Item>

          <Item style={{ position: "relative" }}>
            <Image size="tiny" src={"/assests/user.png"} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Link to={`#`}>Tom</Link>
              </Item.Header>
              <Item.Extra style={{ color: "#EEAA7B" }}>Following</Item.Extra>
            </Item.Content>
          </Item>

          <Item style={{ position: "relative" }}>
            <Image size="tiny" src={"/assests/user.png"} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <Link to={`#`}>Sally</Link>
              </Item.Header>
            </Item.Content>
          </Item>
        </List>
      </Segment>
    </>
  );
});
