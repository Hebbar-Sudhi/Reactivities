import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

function NotFound() {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        Oops! Looked everywhere but could not find this.
      </Header>
      <Segment.Inline>
        <Button as={Link} to="/activities" secondary>
          Take me to the Activities!
        </Button>
      </Segment.Inline>
    </Segment>
  );
}

export default NotFound;
