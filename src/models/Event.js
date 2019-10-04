/* eslint-disable no-underscore-dangle */
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const EventSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, "can't be blank"],
      index: true
    },
    eventType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EventType",
      required: [true, "can't be blank"]
    },
    field: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Field",
      required: [true, "can't be blank"]
    },
    createdAt: { type: mongoose.Schema.Types.Date },
    updatedAt: { type: mongoose.Schema.Types.Date },
    active: { type: mongoose.Schema.Types.Boolean }
  },
  { timestamps: true, _id: true, versionKey: false }
);

EventSchema.virtual("id")
  .get(function geId() {
    return this._id;
  })
  .set(function setId(v) {
    this._id = v;
  });

EventSchema.plugin(uniqueValidator, { message: "is already taken." });

EventSchema.methods.toAuthJSON = function parseToJSON() {
  return {
    id: this._id,
    date: this.date,
    eventType: this.eventType,
    field: this.field,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    active: this.active
  };
};

mongoose.model("Event", EventSchema);
