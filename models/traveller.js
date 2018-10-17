const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(n => n.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(n => n.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const reducer = (a, journey) => a + journey.distance;
  return this.journeys.reduce(reducer, 0)

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
