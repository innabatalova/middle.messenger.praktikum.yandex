import EventBus from "../utils/EventBus";
import set from "../utils/helpers/set";

export enum StoreEvents {
  Updated = "updated",
}

class Store extends EventBus {
  public state: Record<string, any> = {};

  public getState() {
    return this.state;
  }

  public setState(path: string, value: any) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
