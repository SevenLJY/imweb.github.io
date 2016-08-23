define("components/form/lib/Form.Mixin.jsx",function(require,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _react=require("node_modules/react/react"),_validator=require("components/form/lib/validator"),_validator2=_interopRequireDefault(_validator);exports.default={propTypes:{isChecking:_react.PropTypes.bool,patterns:_react.PropTypes.string,tips:_react.PropTypes.string,validator:_react.PropTypes.func,disabled:_react.PropTypes.bool,name:_react.PropTypes.string},contextTypes:{form:_react.PropTypes.object},getInitialState:function(){var _props=this.props,value=_props.value,defaultValue=_props.defaultValue,isChecking=_props.isChecking,disabled=_props.disabled;return{value:value,defaultValue:defaultValue,isChecking:isChecking,disabled:disabled,isValid:!0,msgs:[]}},getDefaultProps:function(){return{disabled:!1,patterns:"",tips:"",validator:null}},componentWillMount:function(){if(this.context.form){if(!this.props.name)throw new Error("Form field requires a name property when used");this.context.form.attachField(this.props.name,this)}},checkSelf:function(){var _this=this;if(this.state.isChecking){var _props2=this.props,patterns=_props2.patterns,tips=_props2.tips,validator=_props2.validator,msgs=[];return patterns=patterns.split("|"),tips=tips.split("|"),patterns.forEach(function(pattern,i){if(pattern){if(!_validator2.default[pattern])throw new Error("[validator "+pattern+"]not exist.");var data=_this.props["data-"+pattern],flag=_validator2.default[pattern](_this.state.value,data);flag||msgs.push(tips[i])}}),validator?void validator(this.state.value,function(result){result.isValid||(msgs=msgs.concat(result.msgs)),_this.setMsgs(msgs)}):this.setMsgs(msgs)}},getValue:function(){var _state=this.state,value=_state.value,defaultValue=_state.defaultValue;return value||defaultValue},setValue:function(value,notCheck){var _this2=this;this.setState({value:value},function(){notCheck||_this2.checkSelf()})},getMsgs:function(){return this.state.msgs},setMsgs:function(msgs){var isValid=!msgs.length;this.setState({msgs:msgs,isValid:isValid})},isDisabled:function(){return this.state.disabled},setDisabled:function(disabled){this.setState({disabled:disabled})},toggleChecking:function(flag){var isChecking=flag||this.state.isChecking;this.setState({isChecking:isChecking})},isValid:function(){return this.state.isValid}}});