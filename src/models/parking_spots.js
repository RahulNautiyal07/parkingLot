const mongoose = require("mongoose");

var parkingSpotSchema = new mongoose.Schema({
  parkingLotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "parking_lot",
  },
  vehicleType: {
    type: String,
    enum: ["bike", "car", "suv"],
    default: "car",
    required: [true, "No vehicle provided"],
  },
  isReserve: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

var parkingSpotModal = mongoose.model(
  "parking_lot",
  parkingSpotSchema,
  "parking_lots"
);
module.exports = parkingSpotModal;
