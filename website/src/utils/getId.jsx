const getId = (
  (id = 1) =>
  () =>
    id++
)();

export default getId;
