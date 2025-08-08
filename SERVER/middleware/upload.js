import multer from 'multer';

const picture = multer({storage: multer.diskStorage({})})

export default picture