import multer from 'multer'
import crypto from 'crypto'
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "server-api/uploads");
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12,function (err, name){
           const fn = name.toString("hex")+path.extname(file.originalname)
            cb(null, fn);
        } )
    }
   
});

const fileFilter = (req, file, cb) => {
    // ACCEPT OR REJECT A FILE
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'video/mp4' || file.mimetype === 'audio/ogg'
        || file.mimetype === 'audio/mp3' || file.mimetype === 'audio/x-m4a' || file.mimetype === 'application/octet-stream'
        || file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

export const upload = multer({
     storage: storage,
     limits: {
        fileSize:  1024 * 1024 * 16  
    },
     fileFilter: fileFilter 
});

      


















