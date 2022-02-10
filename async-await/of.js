const of = async (func) => {
  let data = [];
  try {
    const response = await func();
    data = [null, response];
  } catch(e) {
    data = [e]
  }
  return data;
}

module.exports = of;
