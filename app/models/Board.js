export default function BoardModel(mongoose) {
    const boardSchema = mongoose.Schema({
            name: String,
            date: String,
            title: String,
            subject: String,
        }, {timestamps: true})
        
        return mongoose.model('Board', boardSchema)
    }
    