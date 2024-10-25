const getCurrentYear = () => {
  const currentYear = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    timeZone: "UTC",
  });

  return currentYear;
};

export default getCurrentYear;
