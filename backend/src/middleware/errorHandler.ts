export default function errorHandler(error, req, res, next) {
    console.log(error)
        console.log(error.message)
        res.status(404);
        next();
}