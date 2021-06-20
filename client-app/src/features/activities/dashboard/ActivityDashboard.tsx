import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingIndicator from "../../../app/layout/LoadingIndicator";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";

function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegister } = activityStore;

  useEffect(() => {
    if (activityRegister.size <= 1) loadActivities();
  }, [activityRegister.size, loadActivities]);

  if (activityStore.initialLoading)
    return <LoadingIndicator content="Loading Activities..." />;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
}

export default observer(ActivityDashboard);
