// var a = {
//   a: 1,
//   getContext: function () {
//     console.log('this from a', this);
//   },
// };
// var b = {
//   a: 2,
//   getContext: console.log('this from b', this),
// };

// a.getContext();
// b.getContext;

var a = {
  b: 1,
  getContext: function () {
    console.log('this from a', this);
  },
};
var d = {
  prop: 'here',
};

var b = a.getContext.call(d); //
var c = a.getContext.apply(d);
var g = a.getContext.bind(d); //передає лише посилання на функціюз прив'язаним контекстом, а не викликає її як call and apply

console.log('b', b);
console.log('c', c);
console.log('g', g);
