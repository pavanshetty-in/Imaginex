export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  console.log(`Error Status: ${status}`)
  console.log(`Error Status: ${message}`)
  return err;
};