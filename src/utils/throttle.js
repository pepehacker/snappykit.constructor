export default (func, limit) => {
  let inThrottle;

  // eslint-disable-next-line
  return function() {
    // eslint-disable-next-line
    const args = arguments;
    const context = this;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => { inThrottle = false }, limit);
    }
  };
};

// export default (callback, ms) => {
//   let isThrottled = false;
//   let savedArgs;
//   let savedThis;

//   const wrapper = () => {
//     if (isThrottled) {
//       // eslint-disable-next-line
//       savedArgs = arguments;
//       savedThis = this;

//       return;
//     }

//     // eslint-disable-next-line
//     callback.apply(this, arguments);

//     isThrottled = true;

//     setTimeout(() => {
//       isThrottled = false;

//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);

//         savedArgs = null;
//         savedThis = null;
//       }
//     }, ms);
//   };

//   return wrapper;
// };
