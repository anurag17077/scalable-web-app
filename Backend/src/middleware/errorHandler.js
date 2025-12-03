export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.log("🔥 errorHandler triggered");
  console.log("Error:", err.message);

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export const notFound = (req, res, next) => {
  console.log("❌ notFound middleware triggered");
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
