
export const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
    server: "FarmSphere API",
    timestamp: new Date().toISOString(),
  });
};
