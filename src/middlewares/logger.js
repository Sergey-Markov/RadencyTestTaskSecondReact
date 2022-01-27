export const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("store:", store);
  console.info("store:", store.getState());

  console.info("dispatching", action);
  console.groupEnd(action.type);

  return next(action);
};
