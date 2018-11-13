export default (d,cb) => {
  if (d && d.payload) {
    const { data, status } = d.payload;
    if (status === 200 && data) {
      return cb(data);
    }
  }
  return cb({});
};
