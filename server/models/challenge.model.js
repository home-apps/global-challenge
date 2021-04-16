/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Challenge Schema
 */
var ChallengeSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    owner: {
        type: String
    },
    startDate: Date,
    endDate: Date,
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Complete'],
        default: 'Not Started'
    },
    activities: {
        type: [String],
        enum: ['Walk', 'Run', 'Ride', 'Swim', 'Rowing'],
        default: 'Walk',
    },
    logo: String,
    locations: {
        type: [String]
    },
    previousVersionName: String
}, {strict: false});

ChallengeSchema.statics = {
  load: function (id, cb) {
    this.findOne({ _id : id }).exec(cb);
  }
};

var Team = mongoose.model('Challenge', ChallengeSchema);