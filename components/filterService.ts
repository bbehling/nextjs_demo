import { Subject } from "rxjs";
const subject = new Subject();
export const FilterService = {
  sendMessage: (message) => {
    subject.next(message);
  },
  getMessage: () => subject.asObservable(),
};
