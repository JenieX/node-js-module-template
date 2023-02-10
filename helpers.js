export function sleep(milliSeconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliSeconds);
  });
}

export function getObjType(obj) {
  return Object.prototype.toString.call(obj);
}

export function isThisFunction(obj) {
  const objType = getObjType(obj);
  return (
    objType === '[object Function]' || objType === '[object AsyncFunction]'
  );
}
