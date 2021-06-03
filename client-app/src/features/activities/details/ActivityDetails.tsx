import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activity: Activity;
  cancelActivity: () => void;
  openForm: (id: string) => void;
}

export default function ActivityDetails({
  activity,
  openForm,
  cancelActivity,
}: Props) {
  return (
    <Card fluid>
      <Image src={`/assests/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            basic
            color="blue"
            content="Edit"
            onClick={() => openForm(activity.id)}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={cancelActivity}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
