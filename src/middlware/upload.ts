import multer from "multer";
import path from "path";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "..", "..", "uploads"),
  filename: (_, file, cb) => {
    const fileHash = crypto.randomBytes(6).toString("hex");
    const fileName = `${fileHash}-${file.originalname}`;
    cb(null, fileName);
  },
});

export const upload = multer({ storage });
