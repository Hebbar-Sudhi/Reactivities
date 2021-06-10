import React, { useState, useEffect, Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/Activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";
import LoadingIndicator from "./LoadingIndicator";
import { useStore } from "../stores/store";


function App() {
  const {activityStore} = useStore();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] =
    useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);


  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((x) => x.id === id));
  }

  function handleCancelActivity() {
    setSelectedActivity(undefined);
  }

  function handleFromOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleSaveActivity(activity: Activity) {
    setSubmitting(true);

    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([
          ...activities.filter((x) => x.id !== activity.id),
          activity,
        ]);
      });
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(()=>{
        setActivities([...activities, { ...activity}])
      })
    }

    setSelectedActivity(activity);
    setEditMode(false);
    setSubmitting(false);
  }

  function handleDeleteActivity(id: string) {
    setSubmitting(true);

    agent.Activities.delete(id).then(()=>{
      setActivities([...activities.filter(x=>x.id !==id)])
      setSubmitting(false);
    }
    )
  }

  if (activityStore.initialLoading) return <LoadingIndicator content="Loading Activities..." />;
  return (
    <Fragment>
      <NavBar openForm={handleFromOpen} />
      <Container style={{ marginTop: "6em", marginBottom: "6em" }}>
        <ActivityDashboard
          activities={activityStore.activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelActivity={handleCancelActivity}
          deleteActivity={handleDeleteActivity}
          editMode={editMode}
          openForm={handleFromOpen}
          closeForm={handleFormClose}
          saveForm={handleSaveActivity}
          submitting={submitting}
        />
      </Container>
    </Fragment>
  );
}

export default App;
