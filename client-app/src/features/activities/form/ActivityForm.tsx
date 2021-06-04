import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  saveForm: (activity: Activity) => void;
  submitting: boolean;
}

export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  saveForm,
  submitting,
}: Props) {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    saveForm(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            value={activity.title}
            name="title"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea
            placeholder="Description"
            value={activity.description}
            name="description"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <input
            placeholder="Category"
            value={activity.category}
            name="category"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Date</label>
          <input
            type="date"
            placeholder="Date"
            value={activity.date}
            name="date"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            placeholder="City"
            value={activity.city}
            name="city"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            placeholder="Venue"
            value={activity.venue}
            name="venue"
            onChange={handleInputChange}
          />
        </Form.Field>
        <Button
          loading={submitting}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          floated="right"
          type="button"
          content="Cancel"
          onClick={closeForm}
        />
      </Form>
    </Segment>
  );
}
