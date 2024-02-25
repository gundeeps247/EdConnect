const router = require("express").Router();
const Event = require('../Models/Event');

const moment = require("moment");

router.post("/create-event", async (req, res) => {  
    try {
        const event = new Event(req.body); // Corrected instantiation of Event
        await event.save(); // Corrected variable name to event
        res.sendStatus(201);
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/get-events", async (req, res) => { // Corrected route name to get-events
    try {
        const events = await Event.find({
            start: { $gte: moment(req.query.start).toDate() },
            end: { $lte: moment(req.query.end).toDate() } // Corrected typo in $lte
        });
        res.send(events);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
