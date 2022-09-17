var a = {
  a: 1,
  getContext: function () {
    console.log('this from a', this);
  },
};
var b = {
  a: 2,
  getContext: console.log('this from b', this),
};

a.getContext();
b.getContext;
