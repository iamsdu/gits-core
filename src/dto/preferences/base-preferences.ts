export class BasePreferences {
  toEntries() {
    return Object.entries(this);
  }

  toMap() {
    return new Map(this.toEntries());
  }
}
