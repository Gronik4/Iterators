export default class Team {
  constructor(...associates) {
    this.associates = [];
    for (const i of associates) {
      this.associates.push(i);
    }
  }

  iterator() {
    return {
      associ: this.associates,
      next() {
        if (this.associ.length > 0) {
          return { done: false, value: this.associ.shift() };
        }
        return { done: true, value: undefined };
      },
    };
  }
}
