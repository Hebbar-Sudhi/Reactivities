import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingIndicator from "../../../app/layout/LoadingIndicator";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";

export default observer(function ActivityForm() {
  const history = useHistory();
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    initialLoading,
  } = activityStore;

  const { id } = useParams<{ id: string }>();
  const [activity, setActivity] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  function handleSubmit() {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity).then(() =>
        history.push(`/activities/${newActivity.id}`)
      );
    } else {
      updateActivity(activity).then(() =>
        history.push(`/activities/${activity.id}`)
      );
    }
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  if (initialLoading) return <LoadingIndicator content="Loading activity..." />;

  return (
    <Segment clearing style={{background:"#F2F2F2"}}>
      <Form onSubmit={handleSubmit} autoComplete="off" >
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
          loading={loading}
          floated="right"
          type="submit"
          content="Submit"
          style={{ background: "#636B46", color: "white" }}
        />
        <Button
          as={Link}
          to="/activities"
          floated="right"
          type="button"
          content="Cancel"
          style={{ background: "#AF473C", color: "white" }}
        />
      </Form>
    </Segment>
  );
});
