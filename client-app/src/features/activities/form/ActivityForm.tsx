import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Header, Segment } from "semantic-ui-react";
import LoadingIndicator from "../../../app/layout/LoadingIndicator";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/Common/Form/MyTextInput";
import MyTextArea from "../../../app/Common/Form/MyTextArea";
import MySelectInput from "../../../app/Common/Form/MySelectInput";
import { categoryOptions } from "../../../app/Common/Options/categoryOptions";
import MyDateInput from "../../../app/Common/Form/MyDateInput";
import { Activity } from "../../../app/models/Activity";

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
  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    category: "",
    description: "",
    date: null,
    city: "",
    venue: "",
  });

  const validationSchema = Yup.object({
    title: Yup.string().required("The activity title is required"),
    description: Yup.string().required("The activity description is required"),
    category: Yup.string().required("The activity category is required"),
    date: Yup.string().required("The activity date is required").nullable(),
    city: Yup.string().required("The activity city is required"),
    venue: Yup.string().required("The activity venue is required"),
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  function handleFormSubmit(activity: Activity) {
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

  if (initialLoading) return <LoadingIndicator content="Loading activity..." />;

  return (
    <Segment clearing style={{ background: "#F2F2F2" }}>
      <Header content='Activity Details' sub color='teal'/>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
            <MyTextInput placeholder="Title" name="title" />

            <MyTextArea rows={3} placeholder="Description" name="description" />

            <MySelectInput
              options={categoryOptions}
              placeholder="Category"
              name="category"
            />

            <MyDateInput
              placeholderText="Date"
              name="date"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />

            <Header content='Location Details' sub color='teal'/>
            <MyTextInput placeholder="City" name="city" />

            <MyTextInput placeholder="Venue" name="venue" />

            <Button
              disabled={isSubmitting || !dirty || !isValid}
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
        )}
      </Formik>
    </Segment>
  );
});
