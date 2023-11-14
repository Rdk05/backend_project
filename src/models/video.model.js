import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,   //cloudinay url
            required : true
        },
        thumbnail: {
            type: String,   //cloudinay url
            required : true
        },
        title: {
            type: String,   
            required : true
        },
        description: {
            type: String,   
            required : true
        },
        duration: {
            type: Number,  
            required : true
        },
        videoFile: {
            type: Number,   
            required : 0
        },
        isPublished: {
            type: Boolean, 
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoSchema);