import mongoose, {Schema } from "mongoose";
import mongooseAggregatePaginate
 from "mongoose-aggregate-paginate-v2";

const videoSchema =new Schema(
{
    videoFiles:{
        type:String, //cloudinary url
        required:true
    },
    thumbnail:{
        type:String, //cloudinary url
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number, //cloudinary url
        required:true
    },
    views:{
    type:Number,
    default:0
    },
    isPublised:{
        type: Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }


},{timestamps:true})



//use the mongoose-aggregate-paginate-v2 before export  

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)