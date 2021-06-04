import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelActivity: () => void;
  deleteActivity: (id: string) => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  saveForm: (activity: Activity) => void;
  submitting:boolean
}

function ActivityDashboard(props: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList
          activities={props.activities}
          selectActivity={props.selectActivity}
          deleteActivity={props.deleteActivity}
          submitting={props.submitting}
        />
      </Grid.Column>
      <Grid.Column width="6">
        {props.selectedActivity && !props.editMode && (
          <ActivityDetails
            activity={props.selectedActivity}
            cancelActivity={props.cancelActivity}
            openForm={props.openForm}
          />
        )}

        {props.editMode && (
          <ActivityForm
            activity={props.selectedActivity}
            closeForm={props.closeForm}
            saveForm={props.saveForm}
            submitting={props.submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}

export default ActivityDashboard;
