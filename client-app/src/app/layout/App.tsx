import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import LoadingIndicator from "./LoadingIndicator";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.initialLoading)
    return <LoadingIndicator content="Loading Activities..." />;

  return (
    <>
    <NavBar />
      <Container style={{ marginTop: "6em", marginBottom: "6em" }}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
