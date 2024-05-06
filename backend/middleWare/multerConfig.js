const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')  // Files will be saved in the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image') || file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Not an image or PDF! Please upload only images and PDFs.'), false);
    }
};

const upload = multer({ 
    storage: storage, 
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 } // 5 MB upload limit
});

const uploadFiles = upload.fields([{ name: 'images', maxCount: 5 }, { name: 'pdfFiles', maxCount: 5 }]);

module.exports = uploadFiles;
