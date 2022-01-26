export const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("store:", store);

  console.info("dispatching", action);
  console.groupEnd(action.type);

  return next(action);
};
