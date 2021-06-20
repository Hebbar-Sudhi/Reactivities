import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/Activity";
import { v4 as uuid } from "uuid";

export default class ActivityStore {
  activityRegister = new Map<string, Activity>();
  selectedActivity: Activity | undefined = undefined;
  editMode = false;
  loading = false;
  initialLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  get activitiesByDate() {
    return Array.from(this.activityRegister.values()).sort(
      (x, y) => Date.parse(x.date) - Date.parse(y.date)
    );
  }

  loadActivities = async () => {
    this.initialLoading = true;
    try {
      const activities = await agent.Activities.list();

      activities.forEach((activity) => {
        this.setActivity(activity);
      });

      this.setInitialLoading(false);
    } catch (error) {
      console.log(error);
      this.setInitialLoading(false);
    }
  };

  loadActivity = async (id: string) => {
    let activity = this.getActivity(id);

    if (activity) {
      this.selectedActivity = activity;
      return activity;
    } else {
      this.setInitialLoading(true);
      try {
        activity = await agent.Activities.details(id);
        this.setActivity(activity);
        runInAction(()=>{
          this.selectedActivity = activity;
        })
        
        this.setInitialLoading(false);
        return activity;
      } catch (error) {
        console.log(error);
        this.setInitialLoading(false);
      }
    }
  };

  private getActivity = (id: string) => {
    return this.activityRegister.get(id);
  };

  private setActivity = (activity: Activity) => {
    activity.date = activity.date.split("T")[0];
    this.activityRegister.set(activity.id, activity);
  };

  setInitialLoading = (state: boolean) => {
    this.initialLoading = state;
  };

  createActivity = async (activity: Activity) => {
    this.loading = true;
    activity.id = uuid();
    try {
      await agent.Activities.create(activity);
      runInAction(() => {
        this.activityRegister.set(activity.id, activity);
        this.selectedActivity = activity;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  updateActivity = async (activity: Activity) => {
    this.loading = true;
    try {
      await agent.Activities.update(activity);
      runInAction(() => {
        this.activityRegister.set(activity.id, activity);
        this.loading = false;
        this.editMode = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  deleteActivity = async (id: string) => {
    this.loading = true;
    try {
      await agent.Activities.delete(id);
      runInAction(() => {
        this.activityRegister.delete(id);
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
