// import mongoose from 'mongoose';

// const eventsSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   governorate: {
//     type: String,
//     required: true,
//     enum: [
//       "Amman",
//       "Irbid",
//       "Zarqa",
//       "Mafraq",
//       "Ajloun",
//       "Jerash",
//       "Balqa",
//       "Madaba",
//       "Karak",
//       "Tafilah",
//       "Ma'an",
//       "Aqaba",
//     ],
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     enum: ["School", "University", "Community"],
//     required: true,
//   },
//   imageUrl: {
//     type: String,
//   },
//   participants: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Users",
//       validate: [arrayLimit, "{PATH} exceeds the limit of 12 participants"],
//     },
//   ],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });


// function arrayLimit(val) {
//   return val.length <= 12;
// }

// export default mongoose.models.Events || mongoose.model('Events', eventsSchema,"events");


// src/models/Event.js
import mongoose from 'mongoose';

const eventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  governorate: {
    type: String,
    required: true,
    enum: ['Amman', 'Irbid', 'Zarqa', 'Mafraq', 'Ajloun', 'Jerash', 
           'Balqa', 'Madaba', 'Karak', 'Tafilah', 'Ma\'an', 'Aqaba']
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['School', 'University', 'Community'],  
    required: true
  },
  imageUrl: {
    type: String
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Events || mongoose.model('Events', eventsSchema, "events");