import { observable, action, makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/Activity";

export default class ActivityStore {
  activities: Activity[] = [];
  selectedActivity: Activity | null = null;
  editMode = false;
  loading = false;
  initialLoading = false;

  constructor(){
    makeAutoObservable(this);
  }

  loadActivities = async () => {
    this.initialLoading = true;

    try {
      const activities = await agent.Activities.list();

      activities.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
        this.activities.push(activity);
      })
      this.initialLoading = false;
    } catch (error) {
      console.log(error);
      this.initialLoading = false;
    }
  }
}
