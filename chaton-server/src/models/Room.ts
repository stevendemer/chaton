import mongoose, { Schema } from "mongoose";
import { IProfile } from "./Profile";

export interface IRoom {
  roomName: string;
  profiles?: IProfile[];
  members: number;
}

const roomSchema = new Schema<IRoom>({
  roomName: {
    type: String,
    required: true,
    index: { unique: true },
  },
  profiles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
  members: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
});

const Room = mongoose.model<IRoom>("Room", roomSchema);

export default Room;
