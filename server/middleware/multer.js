import multer from 'multer';

// Configure Multer
const storage = multer.diskStorage({
 
  filename: function (req, file, cb) {
    cb(null, file.originalname) // Use the original filename for uploaded files
  }
});

const upload = multer({ storage: storage });

export default upload;
