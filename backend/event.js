var sql = require('./sqlfile.js');

//get event name
exports.getEventName = function (req,res){
    sql.query("SELECT EVENTS.event_name FROM EVENTS WHERE EVENTS.event_id = \'" + req.params.event_id + "\';",
    function(err,rows,field){
        if(err || rows.length == 0){
            res.send("<p1> No matching event name of this event id")
        }
        res.send(rows[0]);
    });
}

//get event time
exports.getEventTime = function (req,res){
    sql.query("SELECT EVENTS.time FROM EVENTS WHERE EVENTS.event_id = \'" + req.params.event_id + "\';",
    function(err,rows,fields){
        if(err || rows.length == 0){
            //logger.error(err.message);
            res.send("<p1> No matching email address for that event id");
        }
        res.send(rows[0]);
    });
}

exports.getEvent = function(req,res){
    sql.query("SELECT * FROM EVENTS WHERE EVENTS.event_id = \'"+ req.params.event_id + '\';',
    function(err,rows,fields){
        if(err || rows.length == 0){
            res.send("<p1> No mathching event for this event id");
        }
        res.send(rows[0]);
    });
}

exports.getEventType = function(req,res){
    sql.query("SELECT EVENT_TYPE.event_type FROM EVENT_TYPE WHERE EVENT_TYPE.event_type_id = EVENTS.event_type AND EVENTS.event_id = \'" + req,params.event_id + '\';',
    function(err,rows,fields){
        if(err || rows.length == 0){
            res.send("<p1> No matching event type for that event id");
        }
        res.send(rows[0]);
    });
}

exports.isOnCampus = function(req,res){
    sql.query("SELECT EVENTS.on_campus FROM EVENTS WHERE EVENTS.event_id \'" + req.params.event_id + "\';",
    function(err,rows,fields){
        if(err || rows.length == 0){
            res.send("<p1> Cannot determine whether this event is on campus or not for that event id");
        }
        res.send(rows[0]);
    });

}

exports.getCreationTime = function(req,res){
    sql.query("SELECT EVENTS.created_at FROM EVENTS WHERE EVENTS.event_id\'" + req.params.event_id + "\';",
    function(err,rows,fields){
        if(err || rows.length == 0){
            res.send("<p1> Cannot find the creation time for that event id");
        }
        res.send(rows[0]);
    });
    
}

exports.getEventLocation = function(req,res){
    sql.query("SELECT EVENTS.location FROM EVENTS WHERE EVENTS.event_id\'" + req.params.event_id + "\';",
    function(err,rows,fields){
        if(err || rows.length == 0){
            res.send("<p1> Cannot find the event location for that event id");
        }
        res.send(rows[0]);
    });
}

//updating informations***************************************

