const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    msg: err.message || "Something went wrong",
    statusCode: err.statusCode || 500,
  };

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = 400;
  }
  if (err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }
  if (err.name === "CastError") {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  }

  if (process.env.NODE_ENV === "development") {
    return res.status(customError.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
  // return res.status(customError.statusCode).json({ msg: err });
  return res.status(customError.statusCode).json({ Error: customError.msg });
};

export default errorHandlerMiddleware;
