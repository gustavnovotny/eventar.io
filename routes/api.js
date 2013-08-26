/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {
  "events": [
    {
        "title": "Hospoda",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "type": "pub",
        "place": "U Holubů",
        "dateFrom": Date.now(),
        "dateTo": null,
        "participantsLimit": 15,
        "participants": [ {"name":"Karel", "surname": "Novák", "email": "karelnovak@gmail.com"}]

    },
    {
      "title": "Divadlo",
      "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
    }
  ]
};

// GET

exports.events = function (req, res) {
  var events = [];
  data.events.forEach(function (event, i) {
    events.push({
      id: i,
      title: event.title,
      text: event.text.substr(0, 50) + '...'
    });
  });
  res.json({
    events: events
  });
};

exports.event = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.events.length) {
    res.json({
      event: data.events[id]
    });
  } else {
    res.json(false);
  }
};

// POST

exports.addEvent = function (req, res) {
  data.events.push(req.body);
  res.json(req.body);
};

// PUT

exports.editEvent = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.events.length) {
    data.events[id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
};

// DELETE

exports.deleteEvent = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.events.length) {
    data.events.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};