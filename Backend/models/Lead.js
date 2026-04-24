import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    parentName: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    studentClass: {
      type: String,
      required: true,
    },
    sendUpdates: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
