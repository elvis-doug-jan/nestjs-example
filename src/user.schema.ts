import { Schema } from 'mongoose'

export const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    }
  },{
    timestamps: true,
    versionKey: false
  }
)