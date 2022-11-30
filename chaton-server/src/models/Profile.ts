import mongoose, { Schema } from "mongoose";
import { IRoom } from "./Room";

export interface IProfile {
  username: string;
  photoURL?: string;
  rooms?: IRoom[];
}

const profileSchema = new Schema<IProfile>({
  username: {
    type: String,
    required: true,
    index: { unique: true },
  },
  photoURL: {
    type: String,
  },
  rooms: [
    {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
  ],
});

const Profile = mongoose.model<IProfile>("Profile", profileSchema);

export default Profile;
