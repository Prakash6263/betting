function notFound(req, res) {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
}

function errorHandler(err, req, res, next) {
  console.error('[ERROR]', err);
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: Object.values(err.errors).map((e) => e.message),
    });
  }
  if (err.code === 11000) {
    return res.status(409).json({ success: false, message: 'Email is already registered.' });
  }
  const status = err.statusCode || 500;
  res.status(status).json({ success: false, message: err.message || 'Server error. Please try again.' });
}

module.exports = { notFound, errorHandler };
