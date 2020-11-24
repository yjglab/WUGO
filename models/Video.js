import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now, //현재날짜 반환
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);
// 모듈을 사용하고 있기 때문에 각 파일의 각 'const'는 다른 모든 파일과
// 격리됨. 코드를 컴파일하면 모두 다른 이름을 갖게됨.

export default model;
