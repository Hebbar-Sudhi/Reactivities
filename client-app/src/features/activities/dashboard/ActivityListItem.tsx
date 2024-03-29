import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activity: Activity;
}

function ActivityListItem({ activity }: Props) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assests/user.png" />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
              <Item.Description>Hosted by Hebbar</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="calendar alternate outline" />{" "}
          {format(activity.date!, "dd MMM yyyy h:mm aa")}
          <Icon name="map marker alternate" /> {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendees go here...</Segment>
      <Segment clearing>
        <span> {activity.description} </span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          style={{ background: "#416A59", color: "white" }}
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}

export default ActivityListItem;
