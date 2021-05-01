const Dragon = require("../dragon");
const { REFRESH_RATE, SECONDS } = require("../config");

// 5 seconds
const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
  constructor() {
    // Set is an [] that every entry has to be unique
    this.accountIds = new Set();
    this.expiration = this.calculateExpiration();
    this.generationId = undefined;
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));

    const msUntilExpiration =
      Math.random() < 0.5
        ? refreshRate - expirationPeriod
        : refreshRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);
  }

  newDragon({ accountId }) {
    if (Date.now() > this.expiration) {
      throw new Error(`This generation expired on ${this.expiration}`);
    }
    if (this.accountIds.has(this.accountId)) {
      throw new Error("You already have a Dragon from this generation");
    }
    this.accountIds.add(accountId);
    console.log("this.accountIds", this.accountIds);
    return new Dragon({ generationId: this.generationId });
  }
}

module.exports = Generation;
