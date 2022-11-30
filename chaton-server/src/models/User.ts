import mongoose, {
  MiddlewareOptions,
  Mongoose,
  PostMiddlewareFunction,
  Schema,
} from "mongoose";
import { IProfile } from "./Profile";
import * as argon2 from "argon2";

export interface IUser {
  password: string;
  username: string;
  email: string;
  profiles?: IProfile[];
  role: string;
  created: Date;
}

const userSchema = new Schema<IUser>({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    index: { unique: true },
  },
  profiles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", function (next) {
  let user = this;
  if (!user.isModified("password") || !user.isNew) return next();
  try {
    const hash = argon2
      .hash(user.password, { saltLength: 10 })
      .then((value) => {
        this.password = value;
        return next();
      })
      .catch((err) => next(err));
  } catch (error: any) {
    return next(error);
  }
});

userSchema.post("save", function (error: any, doc: Document, next: any) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    next(new Error("There was a duplicate key error !"));
  } else {
    next();
  }
});

userSchema.methods.validatePassword = async function validatePassword(
  data: string
) {
  return argon2.verify(data, this.password);
};

const User = mongoose.model<IUser>("User", userSchema);

export default User;
