import {ReplaySubject} from "rxjs";

class Notify {
    #queue = new ReplaySubject(1);

    listen() {
        return this.#queue;
    }

    execute(notification) {
        this.#queue.next(notification);
    }
}

export const notify = new Notify();
