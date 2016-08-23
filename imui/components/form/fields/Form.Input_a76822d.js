define("components/form/fields/Form.Input.jsx",function(require,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=require("node_modules/react/react"),_react2=_interopRequireDefault(_react),_classnames=require("node_modules/classnames/index"),_classnames2=_interopRequireDefault(_classnames),_FormHoc=require("components/form/lib/Form.Hoc.jsx"),_FormHoc2=_interopRequireDefault(_FormHoc),Input=function(_React$Component){function Input(props){_classCallCheck(this,Input);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Input).call(this,props));return _this.onChange=_this.onChange.bind(_this),_this.onBlur=_this.onBlur.bind(_this),_this.onFocus=_this.onFocus.bind(_this),_this}return _inherits(Input,_React$Component),_createClass(Input,[{key:"onChange",value:function onChange(e){var onChange=this.props.onChange;this.props.setValue(e.target.value),onChange&&onChange()}},{key:"onBlur",value:function onBlur(e){var onBlur=this.props.onBlur;this.props.setValue(e.target.value),this.props.setFocus(!1),onBlur&&onBlur()}},{key:"onFocus",value:function onFocus(){var onFocus=this.props.onFocus;this.props.setFocus(!0),onFocus&&onFocus()}},{key:"render",value:function(){var _props=this.props,prefixCls=(_props.isChecking,_props.setValue,_props.setFocus,_props.prefixCls),disabled=_props.disabled,value=_props.value,others=_objectWithoutProperties(_props,["isChecking","setValue","setFocus","prefixCls","disabled","value"]),allCls=_defineProperty({disabled:disabled},prefixCls,!0);return _react2.default.createElement("input",_extends({},others,{className:_classnames2.default(allCls),value:value,disabled:disabled,onChange:this.onChange,onBlur:this.onBlur,onFocus:this.onFocus}))}}]),Input}(_react2.default.Component);Input.defaultProps={prefixCls:"im-text",isChecking:!0},exports.default=_FormHoc2.default(Input)});