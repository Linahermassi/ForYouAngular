
export class EventModel {
  event_id: number;
  date_event: Date;
  name_event: string;
  place: string;
  mark: number;

  constructor(
    event_id: number,
    date_event: Date,
    name_event: string,
    place: string,
    mark: number
  ) {
    this.event_id = event_id;
    this.date_event = date_event;
    this.name_event = name_event;
    this.place = place;
    this.mark = mark;
  }
}
  