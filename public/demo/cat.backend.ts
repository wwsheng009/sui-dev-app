
// props object类型 接收父组件设置的组件属性信息
// request object类型 接收请求中的信息,header,method,payload,referer,url
function BeforeRender(request, props) {
  console.log("beforeRender");
  console.log("request",request)
  return {
    k1: "v1",
    name: "ke",
    props,
  };
}

const Constants = {
  k1: "v1",
  k2: "v2",
};
const Helpers = {
  h3: function () {},
  h4: function () {},
};


this.__sui_page = '/cat';
this.__sui_constants = {};
this.__sui_helpers = [];

if (typeof Helpers === 'object') {
	this.__sui_helpers = Object.keys(Helpers);
}

if (typeof Constants === 'object') {
	this.__sui_constants = Constants;
}
