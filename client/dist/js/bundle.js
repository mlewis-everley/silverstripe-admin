<<<<<<< HEAD
webpackJsonp([0],{1e3:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"generateHeader",value:function(){return void 0!==this.props.header?this.props.header:(this.props.data,null)}},{key:"generateRows",value:function(){return void 0!==this.props.rows?this.props.rows:(this.props.data,null)}},{key:"render",value:function(){return l.default.createElement("div",{className:"grid-field"},l.default.createElement("table",{className:"table table-hover grid-field__table"},l.default.createElement("thead",null,this.generateHeader()),l.default.createElement("tbody",null,this.generateRows())))}}]),t}(s.Component);u.propTypes={data:l.default.PropTypes.object,header:l.default.PropTypes.object,rows:l.default.PropTypes.array},t.default=u},1001:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=n(36),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"getInputProps",value:function(){return{bsClass:this.props.bsClass,componentClass:"input",className:this.props.className+" "+this.props.extraClass,id:this.props.id,name:this.props.name,type:"hidden",value:this.props.value}}},{key:"render",value:function(){return l.default.createElement(u.FormControl,this.getInputProps())}}]),t}(s.Component);c.propTypes={id:l.default.PropTypes.string,extraClass:l.default.PropTypes.string,name:l.default.PropTypes.string.isRequired,value:l.default.PropTypes.any},c.defaultProps={className:"",extraClass:"",value:""},t.default=c},1002:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=n(943),s=r(a),l=function(e){return i.default.createElement("div",{className:"list-group"},e.items.map(function(e){return i.default.createElement(s.default,e)}))};l.propTypes={items:i.default.PropTypes.array},t.default=l},1003:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return i(t,e),a(t,[{key:"handleClick",value:function(e){this.props.onClick&&this.props.onClick(e,this.props.onClickArg)}},{key:"render",value:function(){var e="list-group-item "+this.props.className;return l.default.createElement("a",{role:"button",tabIndex:0,className:e,onClick:this.handleClick},this.props.children)}}]),t}(s.Component);u.propTypes={onClickArg:l.default.PropTypes.any,onClick:l.default.PropTypes.func},t.default=u},1004:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"getContent",value:function(){return{__html:this.props.value}}},{key:"getInputProps",value:function(){return{className:this.props.className+" "+this.props.extraClass,id:this.props.id,name:this.props.name}}},{key:"render",value:function(){return u.default.createElement("div",a({},this.getInputProps(),{dangerouslySetInnerHTML:this.getContent()}))}}]),t}(l.Component);c.propTypes={id:u.default.PropTypes.string,name:u.default.PropTypes.string.isRequired,extraClass:u.default.PropTypes.string,value:u.default.PropTypes.string},c.defaultProps={extraClass:"",className:""},t.default=c},1005:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=n(36),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleShow=n.handleShow.bind(n),n.handleHide=n.handleHide.bind(n),n.state={showing:!1},n}return i(t,e),a(t,[{key:"getPlacement",value:function(){return this.props.data.placement||"bottom"}},{key:"handleShow",value:function(){this.setState({showing:!0})}},{key:"handleHide",value:function(){this.setState({showing:!1})}},{key:"render",value:function(){var e=this.getPlacement(),t=l.default.createElement(u.Popover,{id:this.props.id+"_Popover",className:"fade in bs-popover-"+e+" "+this.props.popoverClassName,title:this.props.data.popoverTitle},this.props.children),n=["btn","btn-secondary",this.props.className];this.state.showing&&n.push("btn--no-focus"),this.props.title||(n.push("font-icon-dot-3 btn--no-text"),n.push("btn--icon-"+this.props.buttonSize));var r={id:this.props.id,type:"button",className:n.join(" ")};return this.props.data.buttonTooltip&&(r.title=this.props.data.buttonTooltip),l.default.createElement(u.OverlayTrigger,{rootClose:!0,trigger:"click",placement:e,overlay:t,onEnter:this.handleShow,onExited:this.handleHide,container:this.props.container},l.default.createElement("button",r,this.props.title))}}]),t}(s.Component);c.propTypes={id:l.default.PropTypes.string,title:l.default.PropTypes.any,container:l.default.PropTypes.any,className:l.default.PropTypes.string,popoverClassName:l.default.PropTypes.string,buttonSize:l.default.PropTypes.oneOf(["sm","md","large","xl"]),data:l.default.PropTypes.oneOfType([l.default.PropTypes.array,l.default.PropTypes.shape({popoverTitle:l.default.PropTypes.string,buttonTooltip:l.default.PropTypes.string,placement:l.default.PropTypes.oneOf(["top","right","bottom","left"])})])},c.defaultProps={data:{},className:"",popoverClassName:"",buttonSize:"xl"},t.default=c},1006:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(22),d=r(c),f=n(406),p=r(f),h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleBackClick=n.handleBackClick.bind(n),n}return a(t,e),s(t,[{key:"handleBackClick",value:function(e){"function"==typeof this.props.onBack&&(e.preventDefault(),this.props.onBack(e))}},{key:"render",value:function(){var e=null,t=null,n="";this.props.itemLinks&&this.props.itemLinks.preview&&(this.props.itemLinks.preview.Stage?(t=this.props.itemLinks.preview.Stage.href,n=this.props.itemLinks.preview.Stage.type):this.props.itemLinks.preview.Live&&(t=this.props.itemLinks.preview.Live.href,n=this.props.itemLinks.preview.Live.type));var r=null,o=[];this.props.itemLinks&&this.props.itemLinks.edit&&(r=this.props.itemLinks.edit.href,o.push(u.default.createElement("a",{key:"edit",href:r,className:"btn btn-outline-secondary font-icon-edit"},u.default.createElement("span",{className:"btn__title"},d.default._t("Admin.EDIT","Edit"))))),e=this.props.itemId?t?n&&0===n.indexOf("image/")?u.default.createElement("div",{className:"preview__file-container panel--scrollable"},u.default.createElement("img",{alt:t,className:"preview__file--fits-space",src:t})):u.default.createElement("iframe",{className:"flexbox-area-grow preview__iframe",src:t}):u.default.createElement("div",{className:"preview__overlay"},u.default.createElement("h3",{className:"preview__overlay-text"},"There is no preview available for this item.")):u.default.createElement("div",{className:"preview__overlay"},u.default.createElement("h3",{className:"preview__overlay-text"},"No preview available."));var i="function"==typeof this.props.onBack&&u.default.createElement("button",{className:"btn btn-secondary font-icon-left-open-big toolbar__back-button hidden-lg-up",type:"button",onClick:this.handleBackClick},"Back"),a=this.props.moreActions&&this.props.moreActions.length>0?u.default.createElement(p.default,{data:{placement:"top"},id:"campaign-preview-popver"},this.props.moreActions):null;return u.default.createElement("div",{className:"flexbox-area-grow fill-height preview campaign-admin__campaign-preview"},e,u.default.createElement("div",{className:"toolbar toolbar--south"},i,u.default.createElement("div",{className:"btn-toolbar"},o,a)))}}]),t}(l.Component);h.propTypes={itemLinks:u.default.PropTypes.object,itemId:u.default.PropTypes.number,onBack:u.default.PropTypes.func,moreActions:u.default.PropTypes.arrayOf(u.default.PropTypes.element)},t.default=h},1007:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(47),d=r(c),f=n(36),p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n}return a(t,e),s(t,[{key:"getInputProps",value:function(){var e={bsClass:this.props.bsClass,className:this.props.className+" "+this.props.extraClass,id:this.props.id,name:this.props.name,disabled:this.props.disabled,readOnly:this.props.readOnly,value:this.props.value,placeholder:this.props.placeholder,autoFocus:this.props.autoFocus,maxLength:this.props.data&&this.props.data.maxlength};return this.props.attributes&&!Array.isArray(this.props.attributes)&&Object.assign(e,this.props.attributes),this.isMultiline()?Object.assign(e,{componentClass:"textarea",rows:this.props.data.rows,cols:this.props.data.columns}):Object.assign(e,{componentClass:"input",type:this.props.type?this.props.type:null}),this.props.readOnly||Object.assign(e,{onChange:this.handleChange}),e}},{key:"isMultiline",value:function(){return this.props.data&&this.props.data.rows>1}},{key:"handleChange",value:function(e){"function"==typeof this.props.onChange&&this.props.onChange(e,{id:this.props.id,value:e.target.value})}},{key:"render",value:function(){return u.default.createElement(f.FormControl,this.getInputProps())}}]),t}(l.Component);p.propTypes={extraClass:u.default.PropTypes.string,id:u.default.PropTypes.string,name:u.default.PropTypes.string.isRequired,onChange:u.default.PropTypes.func,value:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number]),readOnly:u.default.PropTypes.bool,disabled:u.default.PropTypes.bool,placeholder:u.default.PropTypes.string,type:u.default.PropTypes.string,autoFocus:u.default.PropTypes.bool,attributes:u.default.PropTypes.oneOfType([u.default.PropTypes.object,u.default.PropTypes.array])},p.defaultProps={value:"",extraClass:"",className:"",type:"text",attributes:{}},t.Component=p,t.default=(0,d.default)(p)},1008:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleBackButtonClick=n.handleBackButtonClick.bind(n),n}return i(t,e),a(t,[{key:"handleBackButtonClick",value:function(e){if(void 0!==this.props.onBackButtonClick)return void this.props.onBackButtonClick(e);e.preventDefault()}},{key:"render",value:function(){var e=["btn","btn-secondary","action","font-icon-left-open-big","toolbar__back-button","btn--no-text"],t={className:e.join(" "),onClick:this.handleBackButtonClick,href:"#",type:"button"};return l.default.createElement("div",{className:"toolbar toolbar--north"},l.default.createElement("div",{className:"toolbar__navigation fill-width"},this.props.showBackButton&&l.default.createElement("button",t),this.props.children))}}]),t}(s.Component);u.propTypes={onBackButtonClick:s.PropTypes.func,showBackButton:s.PropTypes.bool,breadcrumbs:s.PropTypes.array},u.defaultProps={showBackButton:!1},t.default=u},1009:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n=t.id,r=e.treeDropdownField.fields[n]?e.treeDropdownField.fields[n]:{tree:{},visible:[],loading:[],failed:[],search:"",selectedValues:[]},o=t.value;return t.data.multiple&&t.value===D&&(o=[]),t.data.multiple||t.value||(o=A),c({},r,{value:o})}function u(e){return{actions:{treeDropdownField:(0,m.bindActionCreators)(P,e)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.findTreeByPath=t.findTreeByID=t.findTreePath=t.SINGLE_EMPTY_VALUE=t.MULTI_EMPTY_VALUE=t.ConnectedTreeDropdownField=t.Component=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),p=r(f),h=n(53),m=n(41),y=n(47),v=r(y),b=n(392),g=r(b),_=n(1932),w=r(_),T=n(980),P=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(T),C=n(952),O=r(C),E=n(256),j=r(E),S=n(759),k=r(S),x=n(36),R=n(83),M=n(953),D="unchanged",A=0,F=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.render=n.render.bind(n),n.renderMenu=n.renderMenu.bind(n),n.renderOption=n.renderOption.bind(n),n.getBreadcrumbs=n.getBreadcrumbs.bind(n),n.getDropdownOptions=n.getDropdownOptions.bind(n),n.getVisibleTree=n.getVisibleTree.bind(n),n.handleBack=n.handleBack.bind(n),n.handleChange=n.handleChange.bind(n),n.handleKeyDown=n.handleKeyDown.bind(n),n.handleNavigate=n.handleNavigate.bind(n),n.handleSearchChange=n.handleSearchChange.bind(n),n.handleSearchReset=n.handleSearchReset.bind(n),n.handleOpen=n.handleOpen.bind(n),n.handleClose=n.handleClose.bind(n),n.callFetch=n.callFetch.bind(n),n.lazyLoad=n.lazyLoad.bind(n),n.filterOptions=n.filterOptions.bind(n),n.state={opened:!1},n.searchTimer=null,n}return s(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this;this.props.readOnly||this.props.disabled||this.loadTree([],this.props.search).then(function(t){if(!e.props.data.multiple&&e.props.value){var n=e.props.findTreePath(t,e.props.value);n&&(n.pop(),e.props.actions.treeDropdownField.setVisible(e.props.id,n))}});var t=this.props.id,n=this.props.data.multiple?this.props.data.valueObjects||[]:[this.props.data.valueObject],r=n.filter(function(e){return e});r.length&&this.props.actions.treeDropdownField.addSelectedValues(t,r)}},{key:"componentWillReceiveProps",value:function(e){if(!this.props.readOnly&&!this.props.disabled){var t=!1,n=[];this.props.search!==e.search&&(t=!0,n=e.visible),e.data.urlTree!==this.props.data.urlTree&&(t=!0),e.data.cacheKey!==this.props.data.cacheKey&&(t=!0),t&&this.loadTree(n,e.search,e)}}},{key:"getVisibleTree",value:function(){return this.props.findTreeByPath(this.props.tree,this.props.visible)}},{key:"getBreadcrumbs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.visible,t=[];if(!e)return t;var n=this.props.tree,r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var l=a.value;if("break"===function(e){return n.children&&(n=n.children.find(function(t){return t.id===e}))?void t.push(n):"break"}(l))break}}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return t}},{key:"getDropdownOptions",value:function(){var e=this.props.value,t=this.getVisibleTree(),n=t?[].concat(o(t.children)):[],r=this.props.selectedValues.filter(function(t){return t.id===e||Array.isArray(e)&&e.find(function(e){return e===t.id})});return!this.state.opened&&this.props.data.showSelectedPath?n=r.map(function(e){return c({},e,{title:e.titlePath||e.title})}):r.length&&(n=[].concat(o(r.filter(function(e){return!n.find(function(t){return t.id===e.id})})),o(n))),n.unshift({id:this.props.data.multiple?"":A,title:this.props.data.hasEmptyDefault?this.props.data.emptyString:null,disabled:!n.length||!this.props.data.hasEmptyDefault}),n}},{key:"getPath",value:function(e){var t=this.props.findTreePath(this.props.tree,e);return this.getBreadcrumbs(t).reduce(function(e,t){return""+e+(t.contextString||"")+t.title+"/"},"")}},{key:"callFetch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props,r=k.default.parse(n.data.urlTree,!0);n.data.showSearch&&t.length&&(r.query.search=t,r.query.flatList="1"),e.length&&(r.query.ID=e[e.length-1]),r.query.format="json",r.search=null;var o=k.default.format(r);return(0,g.default)(o,{credentials:"same-origin"}).then(function(e){return e.json()})}},{key:"lazyLoad",value:function(e){var t=this;if(e.find(function(e){return t.props.loading.indexOf(e)>-1||t.props.failed.indexOf(e)>-1}))return Promise.resolve({});var n=this.props.findTreeByPath(this.props.tree,e);return n&&(0===n.count||n.children.length)?Promise.resolve({}):this.loadTree(e)}},{key:"loadTree",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props;return n.actions.treeDropdownField.beginTreeUpdating(n.id,e),this.callFetch(e,t,n).then(function(t){return n.actions.treeDropdownField.updateTree(n.id,e,t),t}).catch(function(t){if(n.actions.treeDropdownField.updateTreeFailed(n.id,e),"function"==typeof n.onLoadingError)return n.onLoadingError({errors:[{value:t.message,type:"error"}]});throw t})}},{key:"hasSearch",value:function(){return this.props.data.showSearch&&Boolean(this.props.search)}},{key:"filterOptions",value:function(e){var t=this,n=this.getVisibleTree();return e.filter(function(e){if((e.id===A||""===e.id)&&(!t.props.data.hasEmptyDefault||t.props.visible.length||t.hasSearch()))return!1;var r=e.title&&e.title.toLocaleLowerCase(),o=t.props.search.toLocaleLowerCase();return o?r&&r.includes(o):!n||!e.id||n.children.find(function(t){return t.id===e.id})})}},{key:"handleOpen",value:function(){this.setState({opened:!0}),this.handleSearchReset()}},{key:"handleClose",value:function(){this.setState({opened:!1})}},{key:"handleSearchReset",value:function(){clearTimeout(this.searchTimer),this.props.actions.treeDropdownField.setSearch(this.props.id,"")}},{key:"handleSearchChange",value:function(e){var t=this;clearTimeout(this.searchTimer),this.searchTimer=setTimeout(function(){t.props.actions.treeDropdownField.setSearch(t.props.id,e)},500)}},{key:"handleChange",value:function(e){var t=null;if(this.handleSearchReset(),this.props.data.multiple){if(t=D,e&&e.length){var n=e&&e.filter(function(t,n){return e.findIndex(function(e){return e.id===t.id})===n});t=n.map(function(e){return e.id}),this.props.actions.treeDropdownField.addSelectedValues(this.props.id,n)}}else{var r=e?e.id:null,o=this.getVisibleTree()||this.props.tree,i=o.children.find(function(e){return e.id===r});i&&(this.props.data.showSelectedPath&&(i=c({},i,{titlePath:this.getPath(r)})),this.props.actions.treeDropdownField.addSelectedValues(this.props.id,[i])),t=r||A}"function"==typeof this.props.onChange&&this.props.onChange(t)}},{key:"handleNavigate",value:function(e,t){if(e.stopPropagation(),e.preventDefault(),!this.hasSearch()){var n=this.props.findTreePath(this.props.tree,t);n||(n=this.props.visible.slice(0),n.push(t)),this.lazyLoad(n),this.props.actions.treeDropdownField.setVisible(this.props.id,n)}}},{key:"handleKeyDown",value:function(e){if(this.hasSearch())return void(27===e.keyCode&&this.handleSearchReset(e));var t=this.selectField.getFocusedOption();if(t)switch(e.keyCode){case 37:this.handleBack(e);break;case 39:t.count&&this.handleNavigate(e,t.id)}}},{key:"handleBack",value:function(e){if(e.stopPropagation(),e.preventDefault(),!this.hasSearch()){var t=this.props.visible;t.length&&(t=t.slice(0,t.length-1)),this.lazyLoad(t),this.props.actions.treeDropdownField.setVisible(this.props.id,t)}}},{key:"renderMenu",value:function(e){var t=this.getVisibleTree()||{},n=this.props.loading.indexOf(t.id||0)>-1,r=this.props.failed.indexOf(t.id||0)>-1,o=this.getBreadcrumbs();return p.default.createElement(O.default,{loading:n,failed:r,tree:t,breadcrumbs:o,renderMenuOptions:e,onBack:this.handleBack,search:this.hasSearch(),value:this.props.value})}},{key:"renderOption",value:function(e){var t=this,n=null;if(e.count&&!this.hasSearch()){var r=function(n){return t.handleNavigate(n,e.id)};n=p.default.createElement("button",{className:"treedropdownfield__option-button fill-width",onClick:r,onMouseDown:r,onTouchStart:r},p.default.createElement("span",{className:"treedropdownfield__option-count-icon font-icon-right-open-big"}))}var o=function(e){var t=e.children;return p.default.createElement("span",{className:"treedropdownfield__option-title--highlighted"},t)},i=this.props.search.length?(0,R.mapHighlight)(e.title,this.props.search,o):e.title,a=null;return this.hasSearch()&&((a=e.contextString)||!this.props.data.hasEmptyDefault||this.props.visible.length||(a=this.props.data.emptyString)),p.default.createElement("div",{className:"treedropdownfield__option fill-width"},p.default.createElement("div",{className:"treedropdownfield__option-title-box flexbox-area-grow fill-height"},p.default.createElement("span",{className:"treedropdownfield__option-title"},i),a&&p.default.createElement("span",{className:"treedropdownfield__option-context"},a)),n)}},{key:"renderReadOnly",value:function(){var e=this,t={id:this.props.id,readOnly:this.props.readOnly,disabled:this.props.disabled},n=this.props.extraClass?"treedropdownfield "+this.props.extraClass:"treedropdownfield",r=this.props.data.hasEmptyDefault?this.props.data.emptyString:"",o=this.props.selectedValues;if(this.props.data.multiple)r=this.props.value.map(function(e){return o.find(function(t){return t.id===e})||e}).map(function(e){return e.title}).join(", ");else{var i=o.find(function(t){return t.id===e.props.value});r=this.props.value,i&&"string"==typeof i.title&&(r=i.title)}return p.default.createElement("div",{className:n},p.default.createElement("span",{className:"treedropdownfield__title"},r),p.default.createElement(x.FormControl,c({type:"hidden",name:this.props.name,value:this.props.value},t)))}},{key:"render",value:function(){var e=this;if(this.props.readOnly||this.props.disabled)return this.renderReadOnly();var t={id:this.props.id},n=this.props.extraClass?"treedropdownfield "+this.props.extraClass:"treedropdownfield",r=this.getDropdownOptions(),o=this.props.value;this.props.data.multiple&&(o=this.props.value?this.props.selectedValues.filter(function(e){return o.includes(e.id)}):[]);var i=this.props.data.hasEmptyDefault&&!this.props.visible.length?"":null,a=void 0!==this.props.data.showSearch&&this.props.data.showSearch;return p.default.createElement(w.default,{searchable:a,multi:this.props.data.multiple,className:n,name:this.props.name,options:r,inputProps:t,menuRenderer:this.renderMenu,filterOptions:this.filterOptions,optionRenderer:this.renderOption,onChange:this.handleChange,onOpen:this.handleOpen,onClose:this.handleClose,onBlurResetsInput:!0,onInputKeyDown:this.handleKeyDown,onInputChange:this.handleSearchChange,isLoading:Boolean(this.props.loading.length),value:o,resetValue:i,joinValues:!0,ref:function(t){e.selectField=t},placeholder:this.props.data.emptyString,labelKey:"title",valueKey:"id"})}}]),t}(f.Component);F.propTypes={extraClass:f.PropTypes.string,id:f.PropTypes.string,name:f.PropTypes.string.isRequired,onChange:f.PropTypes.func,value:f.PropTypes.oneOfType([f.PropTypes.string,f.PropTypes.number,f.PropTypes.array]),readOnly:f.PropTypes.bool,disabled:f.PropTypes.bool,tree:f.PropTypes.shape(j.default.propTypes),findTreeByPath:f.PropTypes.func,findTreePath:f.PropTypes.func,visible:f.PropTypes.array,loading:f.PropTypes.array,failed:f.PropTypes.array,selectedValues:f.PropTypes.array,data:f.PropTypes.shape({cacheKey:f.PropTypes.string,urlTree:f.PropTypes.string.isRequired,emptyString:f.PropTypes.string,valueObject:f.PropTypes.shape(j.default.propTypes),valueObjects:f.PropTypes.arrayOf(f.PropTypes.shape(j.default.propTypes)),hasEmptyDefault:f.PropTypes.bool,showSearch:f.PropTypes.bool,multiple:f.PropTypes.bool,showSelectedPath:f.PropTypes.bool}),onLoadingError:f.PropTypes.func,search:f.PropTypes.string,actions:f.PropTypes.shape({treeDropdownField:f.PropTypes.object})},F.defaultProps={value:"",extraClass:"",className:"",tree:{},visible:[],loading:[],failed:[],findTreeByPath:M.findTreeByPath,findTreePath:M.findTreePath};var I=(0,h.connect)(l,u)(F);t.Component=F,t.ConnectedTreeDropdownField=I,t.MULTI_EMPTY_VALUE=D,t.SINGLE_EMPTY_VALUE=A,t.findTreePath=M.findTreePath,t.findTreeByID=M.findTreeByID,t.findTreeByPath=M.findTreeByPath,t.default=(0,v.default)(I)},1010:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(22),d=r(c),f=n(4),p=r(f),h=n(256),m=r(h),y=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.render=n.render.bind(n),n.renderOption=n.renderOption.bind(n),n.renderBreadcrumbs=n.renderBreadcrumbs.bind(n),n.handleBack=n.handleBack.bind(n),n}return a(t,e),s(t,[{key:"handleBack",value:function(e){"function"==typeof this.props.onBack?this.props.onBack(e):(e.stopPropagation(),e.preventDefault())}},{key:"renderBreadcrumbs",value:function(){if(0===this.props.breadcrumbs.length)return null;var e=this.props.breadcrumbs.map(function(e){return e.title}).join(" / "),t=this.props.search?"font-icon-search":"font-icon-left-open-big",n=u.default.createElement("button",{className:"treedropdownfield__breadcrumbs-button"},u.default.createElement("span",{className:"icon "+t}));return u.default.createElement("div",{className:"Select-option treedropdownfield__breadcrumbs flexbox-area-grow fill-width",onClick:this.handleBack,role:"button",tabIndex:0},n,u.default.createElement("span",{className:"treedropdownfield__breadcrumbs-crumbs flexbox-area-grow"},e))}},{key:"renderOption",value:function(e,t){if(!this.props.renderMenuOptions)return null;var n=this.props.renderMenuOptions,r=n.focusedOption,o=n.instancePrefix,i=n.onFocus,a=n.onSelect,s=n.optionClassName,l=n.optionComponent,c=n.optionRenderer,d=n.onOptionRef,f=l,h=this.props.value,m=h===e.id;Array.isArray(h)&&(m=h.includes(e.id));var y=r&&e.id===r.id,v=(0,p.default)(s,{treedropdownfield__option:!0,"Select-option":!0,"is-selected":m,"is-focused":y,"is-disabled":e.disabled});return u.default.createElement(f,{className:v,instancePrefix:o,isDisabled:e.disabled,isFocused:y,isSelected:m,key:"option-"+e.id+"-"+t,onFocus:i,onSelect:a,option:e,optionIndex:t,ref:function(e){d(e,y)}},c(e,t))}},{key:"render",value:function(){var e=(0,p.default)([this.props.className,"treedropdownfield__menu"]);if(this.props.loading)return u.default.createElement("div",{className:e},u.default.createElement("div",{className:"Select-option flexbox-area-grow fill-width"},u.default.createElement("span",{className:"Select-loading-zone","aria-hidden":"true"},u.default.createElement("span",{className:"Select-loading"})),u.default.createElement("span",{className:"treedropdownfield__menu-loading flexbox-area-grow"},d.default._t("Admin.TREEDROPDOWN_LOADING","Loading..."))));if(this.props.failed)return u.default.createElement("div",{className:e},u.default.createElement("div",{className:"Select-option"},d.default._t("Admin.TREEDROPDOWN_FAILED","Failed to load")));if(0===this.props.tree.count)return u.default.createElement("div",{className:e},u.default.createElement("div",{className:"Select-option"},d.default._t("Admin.TREEDROPDOWN_NO_CHILDREN","No children")));var t=this.renderBreadcrumbs(),n=this.props.renderMenuOptions&&this.props.renderMenuOptions.options,r=n?n.filter(function(e){return null!==e.title}).map(this.renderOption):null;return u.default.createElement("div",{className:e},t,r)}}]),t}(l.Component);y.propTypes={className:l.PropTypes.string,breadcrumbs:l.PropTypes.arrayOf(l.PropTypes.shape(m.default.propTypes)),loading:l.PropTypes.bool,failed:l.PropTypes.bool,tree:l.PropTypes.shape(m.default.propTypes),renderMenuOptions:l.PropTypes.object,onBack:l.PropTypes.func,search:l.PropTypes.bool,value:l.PropTypes.oneOfType([l.PropTypes.string,l.PropTypes.number,l.PropTypes.array])},t.default=y},1011:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(){return null};o.propTypes={id:r.PropTypes.oneOfType([r.PropTypes.string,r.PropTypes.number]),title:r.PropTypes.string,titlePath:r.PropTypes.string,disabled:r.PropTypes.bool,parentid:r.PropTypes.number,count:r.PropTypes.number,depth:r.PropTypes.number,expanded:r.PropTypes.bool,limited:r.PropTypes.bool,marked:r.PropTypes.bool,opened:r.PropTypes.bool,children:r.PropTypes.array},t.default=o},1012:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=e.identifier,n=e.schema,r=void 0===n?{}:n;return[t,r.schema&&r.schema.name].filter(function(e){return e}).join(".")}function l(e,t){var n=e.form.formSchemas[t.schemaUrl],r=s(c({},t,{schema:n})),o=(0,D.default)((0,I.default)(e),r);return{schema:n,submitting:o&&o.submitting,values:o&&o.values,stateOverrides:n&&n.stateOverride,loading:n&&n.metadata&&n.metadata.loading}}function u(e){return{actions:{schema:(0,v.bindActionCreators)(j,e),reduxForm:(0,v.bindActionCreators)({autofill:T.autofill,initialize:T.initialize},e)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(22),p=r(f),h=n(0),m=r(h),y=n(53),v=n(41),b=n(392),g=r(b),_=n(82),w=r(_),T=n(96),P=n(177),C=r(P),O=n(408),E=n(393),j=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(E),S=n(247),k=r(S),x=n(1925),R=r(x),M=n(752),D=r(M),A=n(38),F=n(394),I=r(F),N=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSubmit=n.handleSubmit.bind(n),n.reduceSchemaErrors=n.reduceSchemaErrors.bind(n),n.handleAutofill=n.handleAutofill.bind(n),n}return a(t,e),d(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentDidUpdate",value:function(e){this.props.schemaUrl!==e.schemaUrl&&this.fetch()}},{key:"getMessages",value:function(e){var t={};return e&&e.fields&&e.fields.forEach(function(e){e.message&&(t[e.name]=e.message)}),t}},{key:"getIdentifier",value:function(){return s(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props)}},{key:"handleSubmit",value:function(e,t,n){var r=this,o=null,i=function(){return n().then(function(e){var t=e;if(t){var n=void 0!==t.state;if(t=r.reduceSchemaErrors(t),r.props.actions.schema.setSchema(r.props.schemaUrl,t,r.getIdentifier()),n){var o=t.schema||r.props.schema.schema,i=(0,C.default)(o,t.state);r.props.actions.reduxForm.initialize(r.getIdentifier(),i)}}return t})};if(!(o="function"==typeof this.props.onSubmit?this.props.onSubmit(e,t,i):i()))throw new Error("Promise was not returned for submitting");return o.then(function(e){if(!e||!e.state)return e;var t=r.getMessages(e.state);if(Object.keys(t).length)throw new T.SubmissionError(t);return e})}},{key:"reduceSchemaErrors",value:function(e){if(!e.errors)return e;var t=c({},e);return t.state||(t=c({},t,{state:this.props.schema.state})),t=c({},t,{state:c({},t.state,{fields:t.state.fields.map(function(t){var n=e.errors.find(function(e){return e.field===t.name});return n&&(n=(0,O.createErrorHtml)([n.value])),c({},t,{message:n})})}),messages:e.errors.filter(function(e){return!e.field})}),delete t.errors,(0,w.default)(t)}},{key:"overrideStateData",value:function(e){if(!this.props.stateOverrides||!e)return e;var t=this.props.stateOverrides.fields,n=e.fields;return t&&n&&(n=n.map(function(e){var n=t.find(function(t){return t.name===e.name});return n?k.default.recursive(!0,e,n):e})),Object.assign({},e,this.props.stateOverrides,{fields:n})}},{key:"callFetch",value:function(e){return(0,g.default)(this.props.schemaUrl,{headers:{"X-FormSchema-Request":e.join(","),Accept:"application/json"},credentials:"same-origin"}).then(function(e){return e.status>=200&&e.status<300?e.json():new Promise(function(t,n){return e.json().then(function(t){n({status:e.status,statusText:e.statusText,json:t})}).catch(function(){n({status:e.status,statusText:e.statusText,json:{}})})})})}},{key:"fetch",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(this.props.loading)return Promise.resolve({});var o=["auto",e&&"schema",n&&"state",r&&"errors"].filter(function(e){return e});return this.props.actions.schema.setSchemaLoading(this.props.schemaUrl,!0),"function"==typeof this.props.onFetchingSchema&&this.props.onFetchingSchema(),this.callFetch(o).then(function(e){if(t.props.actions.schema.setSchemaLoading(t.props.schemaUrl,!1),e.errors?"function"==typeof t.props.onLoadingError&&t.props.onLoadingError(e):"function"==typeof t.props.onLoadingSuccess&&t.props.onLoadingSuccess(),void 0!==e.id&&e.state){var n=Object.assign({},e,{state:t.overrideStateData(e.state)});t.props.actions.schema.setSchema(t.props.schemaUrl,n,s(c({},t.props,{schema:c({},t.props.schema,n)})));var r=e.schema||t.props.schema.schema,o=(0,C.default)(r,n.state);return t.props.actions.reduxForm.initialize(t.getIdentifier(),o,!1,{keepSubmitSucceeded:!0}),n}return e}).catch(function(e){if(t.props.actions.schema.setSchemaLoading(t.props.schemaUrl,!1),"function"==typeof t.props.onLoadingError)return t.props.onLoadingError(t.normaliseError(e));throw e})}},{key:"normaliseError",value:function(e){return e.json&&e.json.errors?e.json:e.status&&e.statusText?{errors:[{code:e.status,value:e.statusText,type:"error"}]}:{errors:[{value:e.message||p.default._t("Admin.UNKNOWN_ERROR","An unknown error has occurred."),type:"error"}]}}},{key:"handleAutofill",value:function(e,t){this.props.actions.reduxForm.autofill(this.getIdentifier(),e,t)}},{key:"render",value:function(){if(!this.props.schema||!this.props.schema.schema||this.props.loading)return null;var e=Object.assign({},this.props,{form:this.getIdentifier(),onSubmitSuccess:this.props.onSubmitSuccess,onSubmit:this.handleSubmit,onAutofill:this.handleAutofill});return m.default.createElement(R.default,e)}}]),t}(h.Component);N.propTypes=Object.assign({},x.basePropTypes,{actions:h.PropTypes.shape({schema:h.PropTypes.object,reduxFrom:h.PropTypes.object}),identifier:h.PropTypes.string.isRequired,schemaUrl:h.PropTypes.string.isRequired,schema:x.schemaPropType,form:h.PropTypes.string,submitting:h.PropTypes.bool,onFetchingSchema:h.PropTypes.func}),t.Component=N,t.default=(0,v.compose)((0,A.inject)(["ReduxForm","ReduxFormField"],function(e,t){return{baseFormComponent:e,baseFieldComponent:t}},function(e){return e.identifier}),(0,y.connect)(l,u))(N)},1013:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{actions:{schema:(0,d.bindActionCreators)(b,e)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.createInsertLinkModal=t.InsertLinkModal=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(41),f=n(53),p=n(774),h=r(p),m=n(1923),y=r(m),v=n(393),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(v),g=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSubmit=n.handleSubmit.bind(n),e.show||e.setOverrides(null),n}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){(e.show&&!this.props.show||!e.show&&this.props.show)&&e.setOverrides(e.show?e:null)}},{key:"getModalProps",value:function(){var e=Object.assign({},this.props,{onSubmit:this.handleSubmit,onHide:this.props.onHide,showErrorMessage:!0});return delete e.onInsert,delete e.sectionConfig,e}},{key:"handleSubmit",value:function(e,t){switch(t){case"action_cancel":this.props.onHide();break;default:this.props.onInsert(e,t)}return Promise.resolve()}},{key:"render",value:function(){var e=this.getModalProps();return c.default.createElement(h.default,e)}}]),t}(u.Component);g.propTypes={show:u.PropTypes.bool,schemaUrl:u.PropTypes.string,onInsert:u.PropTypes.func.isRequired,onHide:u.PropTypes.func.isRequired,setOverrides:u.PropTypes.func.isRequired,actions:u.PropTypes.object,requireLinkText:u.PropTypes.bool,currentPageID:u.PropTypes.number},g.defaultProps={};var _=function(e,t){function n(n,r){var o=n.config.sections.find(function(t){return t.name===e}),i=r.requireLinkText?"?requireLinkText":"";return{sectionConfig:o,schemaUrl:(""+o.form[t].schemaUrl+i).replace(/:pageid/,r.currentPageID)}}return(0,d.compose)((0,f.connect)(n,s),y.default)(g)};t.InsertLinkModal=g,t.createInsertLinkModal=_,t.default=(0,d.compose)((0,f.connect)(function(){return{}},s),y.default)(g)},1014:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{actions:{schema:(0,p.bindActionCreators)(m,e)}}}function s(e){function t(){return{Component:e}}return(0,y.connect)(t,a)(v)}Object.defineProperty(t,"__esModule",{value:!0}),t.ConnectedFileSchemaHandler=t.FileSchemaHandler=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(0),f=function(e){return e&&e.__esModule?e:{default:e}}(d),p=n(41),h=n(393),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),y=n(53),v=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverrides=n.setOverrides.bind(n),n}return i(t,e),c(t,[{key:"componentWillMount",value:function(){this.setOverrides(this.props)}},{key:"componentWillUnmount",value:function(){this.setOverrides()}},{key:"setOverrides",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e){if(e.schemaUrl){var t=Object.assign({},e.fileAttributes);delete t.ID;var n={fields:Object.entries(t).map(function(e){var t=u(e,2);return{name:t[0],value:t[1]}})};this.props.actions.schema.setSchemaStateOverrides(e.schemaUrl,n)}}else{var r=this.props.schemaUrl;r&&this.props.actions.schema.setSchemaStateOverrides(r,null)}}},{key:"render",value:function(){var e=this.props.Component,t=Object.assign({},this.props);return delete t.Component,f.default.createElement(e,l({setOverrides:this.setOverrides},t))}}]),t}(d.Component);v.propTypes={fileAttributes:d.PropTypes.object,Component:d.PropTypes.oneOfType([d.PropTypes.element,d.PropTypes.func]),schemaUrl:d.PropTypes.string,actions:d.PropTypes.object};var b=(0,y.connect)(function(){return{}},a())(v);t.FileSchemaHandler=v,t.ConnectedFileSchemaHandler=b,t.default=s},1016:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){var t=null;if(!(e.status>=200&&e.status<300))throw t=new Error(e.statusText),t.response=e,t;return e}function s(e){var t=null;if(e instanceof FormData||"string"==typeof e)t=e;else{if(!e||"object"!==(void 0===e?"undefined":m(e)))throw new Error("Invalid body type");t=JSON.stringify(e)}return t}function l(e,t){switch(e){case"application/x-www-form-urlencoded":return w.default.stringify(t);case"application/json":case"application/x-json":case"application/x-javascript":case"text/javascript":case"text/x-javascript":case"text/x-json":return JSON.stringify(t);default:throw new Error("Can't encode format: "+e)}}function u(e,t){switch(e){case"application/x-www-form-urlencoded":return w.default.parse(t);case"application/json":case"application/x-json":case"application/x-javascript":case"text/javascript":case"text/x-javascript":case"text/x-json":return JSON.parse(t);default:throw new Error("Can't decode format: "+e)}}function c(e,t){return""===t?e:e.match(/\?/)?e+"&"+t:e+"?"+t}function d(e){return e.text().then(function(t){return u(e.headers.get("Content-Type"),t)})}function f(e,t){return Object.keys(t).reduce(function(n,r){var o=e[r];return!o||!0!==o.remove&&!0!==o.querystring?Object.assign(n,i({},r,t[r])):n},{})}function p(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{setFromData:!1},o=t;return o=c(o,l("application/x-www-form-urlencoded",Object.keys(n).reduce(function(t,o){var a=e[o],s=!0===r.setFromData&&!(a&&!0===a.remove),l=a&&!0===a.querystring&&!0!==a.remove;return s||l?Object.assign(t,i({},o,n[o])):t},{}))),o=Object.keys(e).reduce(function(t,r){var o=e[r].urlReplacement;return o?t.replace(o,n[r]):t},o)}Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=n(392),v=r(y),b=n(1318),g=r(b),_=n(395),w=r(_),T=n(247),P=r(T);g.default.polyfill();var C=function(){function e(){o(this,e),this.fetch=v.default}return h(e,[{key:"createEndpointFetcher",value:function(e){var t=this,n=Object.assign({method:"get",payloadFormat:"application/x-www-form-urlencoded",responseFormat:"application/json",payloadSchema:{},defaultData:{}},e),r={json:"application/json",urlencoded:"application/x-www-form-urlencoded"};return["payloadFormat","responseFormat"].forEach(function(e){r[n[e]]&&(n[e]=r[n[e]])}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=Object.assign({},r,{Accept:n.responseFormat,"Content-Type":n.payloadFormat}),i=P.default.recursive({},n.defaultData,e),a=p(n.payloadSchema,n.url,i,{setFromData:"get"===n.method.toLowerCase()}),s="get"!==n.method.toLowerCase()?l(n.payloadFormat,f(n.payloadSchema,i)):"",u="get"===n.method.toLowerCase()?[a,o]:[a,s,o];return t[n.method.toLowerCase()].apply(t,u).then(d)}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.fetch(e,{method:"get",credentials:"same-origin",headers:t}).then(a)}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={"Content-Type":"application/x-www-form-urlencoded"};return this.fetch(e,{method:"post",credentials:"same-origin",body:s(t),headers:Object.assign({},r,n)}).then(a)}},{key:"put",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.fetch(e,{method:"put",credentials:"same-origin",body:s(t),headers:n}).then(a)}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.fetch(e,{method:"delete",credentials:"same-origin",body:s(t),headers:n}).then(a)}}]),e}(),O=new C;t.default=O},1017:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e)}return o(e,null,[{key:"get",value:function(e){return window.ss.config[e]}},{key:"getAll",value:function(){return window.ss.config}},{key:"getSection",value:function(e){return window.ss.config.sections.find(function(t){return t.name===e})}},{key:"getCurrentSection",value:function(){}}]),e}();t.default=i},1018:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return c.default.parse(e.replace(/^\?/,""))}function i(e){var t=null,n="";return e<1024?(t=e,n="bytes"):e<10240?(t=Math.round(e/1024*10)/10,n="KB"):e<1048576?(t=Math.round(e/1024),n="KB"):e<10485760?(t=Math.round(e/1048576*10)/10,n="MB"):e<1073741824&&(t=Math.round(e/1048576),n="MB"),(t||0===t)&&n||(t=Math.round(e/1073741824*10)/10,n="GB"),isNaN(t)?l.default._t("Admin.NO_SIZE","N/A"):t+" "+n}function a(e){return/[.]/.exec(e)?e.replace(/^.+[.]/,""):""}Object.defineProperty(t,"__esModule",{value:!0}),t.decodeQuery=o,t.fileSize=i,t.getFileExtension=a;var s=n(22),l=r(s),u=n(395),c=r(u)},1019:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadComponent=t.inject=t.withInjector=t.provideContext=t.provideInjector=void 0;var o=n(258),i=r(o),a=n(412),s=r(a),l=n(259),u=r(l),c=n(410),d=r(c),f=n(411),p=r(f),h=n(184),m=r(h);t.provideInjector=i.default,t.provideContext=s.default,t.withInjector=u.default,t.inject=d.default,t.loadComponent=p.default,t.default=m.default},1020:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this.reset()}return o(e,[{key:"reset",value:function(){var e=this;this.childRoutes=[],this.rootRoute={path:"/",getChildRoutes:function(t,n){n(null,e.childRoutes)}}}},{key:"updateRootRoute",value:function(e){this.rootRoute=Object.assign({},this.rootRoute,e)}},{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=this.findChildRoute(t),r=Object.assign({},{childRoutes:[]},e),o=r.childRoutes[r.childRoutes.length-1];o&&"**"===o.path||(o={path:"**"},r.childRoutes.push(o));var i=n.findIndex(function(t){return t.path===e.path});i>=0?n[i]=r:n.unshift(r)}},{key:"findChildRoute",value:function(e){var t=this.childRoutes;return e&&e.forEach(function(e){var n=t.find(function(t){return t.path===e});if(!n)throw new Error("Parent path "+e+" could not be found.");t=n.childRoutes}),t}},{key:"getRootRoute",value:function(){return this.rootRoute}},{key:"getChildRoutes",value:function(){return this.childRoutes}},{key:"remove",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=this.findChildRoute(t),r=n.findIndex(function(t){return t.path===e});return r<0?null:n.splice(r,1)[0]}}]),e}();window.ss=window.ss||{},window.ss.routeRegister=window.ss.routeRegister||new i,t.default=window.ss.routeRegister},1021:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=u.default.getAbsoluteBase(),n=d.default.resolve(t,e);return 0!==n.indexOf(t)?n:n.substring(t.length-1)}function i(e){return new u.default.Route(e).match(u.default.current,{})}function a(){return u.default.absoluteBaseURL}function s(e){u.default.absoluteBaseURL=e;var t=document.createElement("a");t.href=e;var n=t.pathname;n=n.replace(/\/$/,""),n.match(/^[^\/]/)&&(n="/"+n),u.default.base(n)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1929),u=r(l),c=n(759),d=r(c);u.default.oldshow||(u.default.oldshow=u.default.show),u.default.setAbsoluteBase=s.bind(u.default),u.default.getAbsoluteBase=a.bind(u.default),u.default.resolveURLToBase=o.bind(u.default),u.default.show=function(e){return function(t,n,r,o){return e(u.default.resolveURLToBase(t),n,r,o)}}(u.default.oldshow),u.default.routeAppliesToCurrentLocation=i,window.ss=window.ss||{},window.ss.router=window.ss.router||u.default,t.default=window.ss.router},1022:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=n(22),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(e){return e.toString().slice(1,-1)},s=a(/((?:[,\s]+(?:[a-z0-9\-_]+)=(?:(?:[a-z0-9\-_]+)|(?:\d+\.\d+)|(?:'[^']*')|(?:"[^"]*")))*)/),l=/[,\s]+([a-z0-9\-_]+)=(?:([a-z0-9\-_]+)|(\d+\.\d+)|(?:'([^']*)')|(?:"([^"]*)"))/,u=a(/\[%s/),c=a(/\[\s*\/\s*%s\s*]/),d=a(/((?:.|\n|)*?)/),f=a(/\s*/),p={match:function(e,t,n){var r=i.default.sprintf(u,e),o=""+r+s+f+"\\]";t&&(o=""+o+d+i.default.sprintf(c,e));var a=new RegExp(o,"i"),l=a.exec(n);return l?{name:e,wrapped:t,properties:this.parseProperties(l[1]),original:l[0],content:t?l[2]:null}:null},parseProperties:function(e){for(var t=e,n={},r=t.match(l);r;){var o=r[1]||"",i=r[2]||r[3]||r[4]||r[5]||"";o&&(n[o]=i);var a=t.indexOf(r[0]);t=t.substr(a+r[0].length),r=t.match(l)}return n},serialise:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?{sep:",",quote:"",replacer:/[^a-z0-9\-_.]/gi}:{sep:" ",quote:'"',replacer:/"/g},o=Object.entries(e.properties).map(function(e){var t=r(e,2),o=t[0],i=t[1];return i?""+n.sep+o+"="+n.quote+(""+i).replace(n.replacer,"")+n.quote:null}).filter(function(e){return null!==e}).join("");return e.wrapped?"["+e.name+o+"]"+e.content+"[/"+e.name+"]":"["+e.name+o+"]"}};t.default=p},1023:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=null,u=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return clearTimeout(l),e}return i(t,e),a(t,[{key:"render",value:function(){return null}}]),t}(s.Component);u.propTypes={},t.default=u},1024:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){r(this,e),this.actions={},this.editorCommandsToUrlTestsMap={},this.defaultCommand="sslinkexternal"}return i(e,[{key:"addAction",value:function(e,t){var n=t.priority||50;return this.actions[e]=this.getActions(e).concat([o({},t,{priority:n})]),this}},{key:"getActions",value:function(e){return this.actions[e]||[]}},{key:"getSortedActions",value:function(e){return this.getActions(e).sort(function(e,t){return e.priority!==t.priority?e.priority<t.priority:e.text.toLocaleLowerCase()>t.text.toLocaleLowerCase()})}},{key:"addCommandWithUrlTest",value:function(e,t){return this.editorCommandsToUrlTestsMap[e]=t,this}},{key:"setDefaultCommand",value:function(e){return this.defaultCommand=e,this}},{key:"getDefaultCommand",value:function(){return this.defaultCommand}},{key:"getEditorCommandFromUrl",value:function(e){var t=this,n=this.getDefaultCommand(),r=Object.keys(this.editorCommandsToUrlTestsMap),o=r.find(function(n){return t.editorCommandsToUrlTestsMap[n]&&t.editorCommandsToUrlTestsMap[n].test(e)});return o&&(n=o),n}}]),e}();window.ss=window.ss||{},window.ss.tinymceactions=window.ss.tinymceactions||new a,t.default=window.ss.tinymceactions},1025:function(e,t,n){"use strict";function r(e){var t=Number(e);return null!==e&&t>=0&&t<10?[i.default._t("Admin.WRITTEN_NUMBER_ZERO","zero"),i.default._t("Admin.WRITTEN_NUMBER_ONE","one"),i.default._t("Admin.WRITTEN_NUMBER_TWO","two"),i.default._t("Admin.WRITTEN_NUMBER_THREE","three"),i.default._t("Admin.WRITTEN_NUMBER_FOUR","four"),i.default._t("Admin.WRITTEN_NUMBER_FIVE","five"),i.default._t("Admin.WRITTEN_NUMBER_SIX","six"),i.default._t("Admin.WRITTEN_NUMBER_SEVEN","seven"),i.default._t("Admin.WRITTEN_NUMBER_EIGHT","eight"),i.default._t("Admin.WRITTEN_NUMBER_NINE","nine")][t]:t?String(t):null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(22),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},1026:function(e,t,n){"use strict";function r(e){return e.form&&e.form.formState||{}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},1027:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(o){if(!t.payload.fieldId)throw new Error("Invalid fieldId");var i=e.fields||{},s=i[t.payload.fieldId]?e.fields[t.payload.fieldId]:n;return(0,a.default)(Object.assign({},e,{fields:Object.assign({},i,r({},t.payload.fieldId,Object.assign({},s,o(s))))}))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(82),a=function(e){return e&&e.__esModule?e:{default:e}}(i)},1028:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return void 0===t?e:l.default.recursive(!0,e,t)}function i(e,t){return e?e.reduce(function(e,n){return e||i(n.children,t)},e.find(function(e){return e.name===t})):null}function a(e,t){return t?t.fields.reduce(function(t,n){var o=i(e.fields,n.name);return o?"Structural"===o.type||!0===o.readOnly?t:Object.assign({},t,r({},o.name,n.value)):t},{}):{}}Object.defineProperty(t,"__esModule",{value:!0}),t.schemaMerge=o,t.findField=i,t.default=a;var s=n(247),l=function(e){return e&&e.__esModule?e:{default:e}}(s)},1029:function(e,t,n){"use strict";function r(e){return{type:i.default.SET_BREADCRUMBS,payload:{breadcrumbs:e}}}Object.defineProperty(t,"__esModule",{value:!0}),t.setBreadcrumbs=r;var o=n(413),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},1030:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={FETCH_RECORDS_REQUEST:"FETCH_RECORDS_REQUEST",FETCH_RECORDS_FAILURE:"FETCH_RECORDS_FAILURE",FETCH_RECORDS_SUCCESS:"FETCH_RECORDS_SUCCESS",FETCH_RECORD_REQUEST:"FETCH_RECORD_REQUEST",FETCH_RECORD_FAILURE:"FETCH_RECORD_FAILURE",FETCH_RECORD_SUCCESS:"FETCH_RECORD_SUCCESS",DELETE_RECORD_REQUEST:"DELETE_RECORD_REQUEST",DELETE_RECORD_FAILURE:"DELETE_RECORD_FAILURE",DELETE_RECORD_SUCCESS:"DELETE_RECORD_SUCCESS"}},1031:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return Object.keys(t).reduce(function(e,n){return e.replace(":"+n,t[n])},e)}function i(e,t,n){var r={recordType:e},i={Accept:"text/json"},a=t.toLowerCase();return function(t){t({type:d.default.FETCH_RECORDS_REQUEST,payload:r});var s="get"===a?[o(n,r),i]:[o(n,r),{},i];return u.default[a].apply(u.default,s).then(function(e){return e.json()}).then(function(n){t({type:d.default.FETCH_RECORDS_SUCCESS,payload:{recordType:e,data:n}})}).catch(function(n){throw t({type:d.default.FETCH_RECORDS_FAILURE,payload:{error:n,recordType:e}}),n})}}function a(e,t,n){var r={recordType:e},i={Accept:"text/json"},a=t.toLowerCase();return function(t){t({type:d.default.FETCH_RECORD_REQUEST,payload:r});var s="get"===a?[o(n,r),i]:[o(n,r),{},i];return u.default[a].apply(u.default,s).then(function(e){return e.json()}).then(function(n){t({type:d.default.FETCH_RECORD_SUCCESS,payload:{recordType:e,data:n}})}).catch(function(n){throw t({type:d.default.FETCH_RECORD_FAILURE,payload:{error:n,recordType:e}}),n})}}function s(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a={recordType:e,id:t},s=n.toLowerCase(),l="get"===s?[o(r,a),i]:[o(r,a),{},i];return function(n){return n({type:d.default.DELETE_RECORD_REQUEST,payload:a}),u.default[s].apply(u.default,l).then(function(){n({type:d.default.DELETE_RECORD_SUCCESS,payload:{recordType:e,id:t}})}).catch(function(r){throw n({type:d.default.DELETE_RECORD_FAILURE,payload:{error:r,recordType:e,id:t}}),r})}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchRecords=i,t.fetchRecord=a,t.deleteRecord=s;var l=n(772),u=r(l),c=n(417),d=r(c)},1032:function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];return{type:l.default.SET_SCHEMA,payload:a({},t,{id:e,name:n})}}function o(e,t){return{type:l.default.SET_SCHEMA_STATE_OVERRIDES,payload:{id:e,stateOverride:t}}}function i(e,t){return{type:l.default.SET_SCHEMA_LOADING,payload:{id:e,loading:t}}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.setSchema=r,t.setSchemaStateOverrides=o,t.setSchemaLoading=i;var s=n(418),l=function(e){return e&&e.__esModule?e:{default:e}}(s)},1033:function(e,t,n){"use strict";function r(e){return{type:a.default.ADD_FORM_CHANGED,meta:{form:e}}}function o(e){return{type:a.default.REMOVE_FORM_CHANGED,meta:{form:e}}}Object.defineProperty(t,"__esModule",{value:!0}),t.addFormChanged=r,t.removeFormChanged=o;var i=n(420),a=function(e){return e&&e.__esModule?e:{default:e}}(i)},153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={injector:r.PropTypes.shape({get:r.PropTypes.func,context:r.PropTypes.string,validate:r.PropTypes.func})}},175:function(e,t){e.exports=modernizr},176:function(e,t){e.exports=moment},177:function(e,t){e.exports=schemaFieldValues},184:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(972),i=r(o),a=n(970),s=r(a),l=n(973),u=r(l),c=n(971),d=r(c),f=(0,i.default)();f.register("component",(0,s.default)()),f.register("reducer",(0,u.default)()),f.register("form",(0,d.default)()),t.default=f},1922:function(e,t){e.exports=ApolloClient},1923:function(e,t){e.exports=FileSchemaModalHandler},1924:function(e,t){e.exports=FormAction},1925:function(e,t){e.exports=FormBuilder},1926:function(e,t){e.exports=FormBuilderLoader},1927:function(e,t){e.exports=GridField},1928:function(e,t){e.exports=LiteralField},1929:function(e,t){e.exports=Page},1930:function(e,t){e.exports=ReactRouteRegister},1931:function(e,t){e.exports=ReactRouter},1932:function(e,t){e.exports=ReactSelect},1933:function(e,t){e.exports=RecordsActions},1934:function(e,t){e.exports=ReduxThunk},1935:function(e,t){e.exports=Router},1936:function(e,t){e.exports=reduxFieldReducer},1937:function(e,t){e.exports=validator},1938:function(e,t){},22:function(e,t){e.exports=i18n},247:function(e,t){e.exports=merge},248:function(module,exports,__webpack_require__){"use strict";(function(jQuery){function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_jquery=__webpack_require__(12),_jquery2=_interopRequireDefault(_jquery),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(26),_reactDom2=_interopRequireDefault(_reactDom),_IframeDialog=__webpack_require__(941),_IframeDialog2=_interopRequireDefault(_IframeDialog);__webpack_require__(396),_jquery2.default.noConflict(),window.ss=window.ss||{},window.ss.debounce=function(e,t,n){var r,o,i,a=function(){r=null,n||e.apply(o,i)};return function(){var s=n&&!r;o=this,i=arguments,clearTimeout(r),r=setTimeout(a,t),s&&e.apply(o,i)}},(0,_jquery2.default)(window).bind("resize.leftandmain",function(e){(0,_jquery2.default)(".cms-container").trigger("windowresize")}),_jquery2.default.entwine.warningLevel=_jquery2.default.entwine.WARN_LEVEL_BESTPRACTISE,_jquery2.default.entwine("ss",function($){$(window).on("message",function(e){var t,n=e.originalEvent,r=null;try{r="object"===_typeof(n.data)?n.data:JSON.parse(n.data)}catch(e){}if(r&&$.path.parseUrl(window.location.href).domain===$.path.parseUrl(n.origin).domain)switch(t=$(void 0===r.target?window:r.target),r.type){case"event":t.trigger(r.event,r.data);break;case"callback":t[r.callback].call(t,r.data)}});var positionLoadingSpinner=function(){var e=$(".ss-loading-screen .loading-animation"),t=($(window).height()-e.height())/2;e.css("top",t+120),e.show()},applyChosen=function e(t){t.is(":visible")?t.addClass("has-chosen").chosen({allow_single_deselect:!0,disable_search_threshold:20,display_disabled_options:!0,width:"100%"}):setTimeout(function(){t.show(),e(t)},500)},isSameUrl=function(e,t){var n=$("base").attr("href");e=$.path.isAbsoluteUrl(e)?e:$.path.makeUrlAbsolute(e,n),t=$.path.isAbsoluteUrl(t)?t:$.path.makeUrlAbsolute(t,n);var r=$.path.parseUrl(e),o=$.path.parseUrl(t);return r.pathname.replace(/\/*$/,"")==o.pathname.replace(/\/*$/,"")&&r.search==o.search},ajaxCompleteEvent=window.ss.debounce(function(){$(window).trigger("ajaxComplete")},1e3,!0);$(window).bind("resize",positionLoadingSpinner).trigger("resize"),$(document).ajaxComplete(function(e,t,n){var r=document.URL,o=t.getResponseHeader("X-ControllerURL"),i=n.url,a=null!==t.getResponseHeader("X-Status")?t.getResponseHeader("X-Status"):t.statusText,s=t.status<200||t.status>399?"bad":"good",l=["OK","success","HTTP/2.0 200"];if(null===o||isSameUrl(r,o)&&isSameUrl(i,o)||window.ss.router.show(o,{id:(new Date).getTime()+String(Math.random()).replace(/\D/g,""),pjax:t.getResponseHeader("X-Pjax")?t.getResponseHeader("X-Pjax"):n.headers["X-Pjax"]}),t.getResponseHeader("X-Reauthenticate"))return void $(".cms-container").showLoginDialog();0!==t.status&&a&&-1===$.inArray(a,l)&&statusMessage(decodeURIComponent(a),s),ajaxCompleteEvent(this)}),$(".cms-container").entwine({StateChangeXHR:null,FragmentXHR:{},StateChangeCount:0,LayoutOptions:{minContentWidth:940,minPreviewWidth:400,mode:"content"},onadd:function(){if($.browser.msie&&parseInt($.browser.version,10)<8)return $(".ss-loading-screen").append('<p class="ss-loading-incompat-warning"><span class="notice">Your browser is not compatible with the CMS interface. Please use Internet Explorer 8+, Google Chrome or Mozilla Firefox.</span></p>').css("z-index",$(".ss-loading-screen").css("z-index")+1),$(".loading-animation").remove(),void this._super();this.redraw(),$(".ss-loading-screen").hide(),$("body").removeClass("loading"),$(window).unbind("resize",positionLoadingSpinner),this.restoreTabState(),this._super()},onwindowresize:function(){this.redraw()},"from .cms-panel":{ontoggle:function(){this.redraw()}},"from .cms-container":{onaftersubmitform:function(){this.redraw()}},updateLayoutOptions:function(e){var t=this.getLayoutOptions(),n=!1;for(var r in e)t[r]!==e[r]&&(t[r]=e[r],n=!0);n&&this.redraw()},clearViewMode:function(){this.removeClass("cms-container--split-mode"),this.removeClass("cms-container--preview-mode"),this.removeClass("cms-container--content-mode")},splitViewMode:function(){this.updateLayoutOptions({mode:"split"})},contentViewMode:function(){this.updateLayoutOptions({mode:"content"})},previewMode:function(){this.updateLayoutOptions({mode:"preview"})},RedrawSuppression:!1,redraw:function(){this.getRedrawSuppression()||(window.debug&&console.log("redraw",this.attr("class"),this.get(0)),this.setProperMode()||(this.find(".cms-panel-layout").redraw(),this.find(".cms-content-fields[data-layout-type]").redraw(),this.find(".cms-edit-form[data-layout-type]").redraw(),this.find(".cms-preview").redraw(),this.find(".cms-content").redraw()))},setProperMode:function(){var e=this.getLayoutOptions(),t=e.mode;this.clearViewMode();var n=this.find(".cms-content"),r=this.find(".cms-preview");if(n.css({"min-width":0}),r.css({"min-width":0}),n.width()+r.width()>=e.minContentWidth+e.minPreviewWidth)n.css({"min-width":e.minContentWidth}),r.css({"min-width":e.minPreviewWidth}),r.trigger("enable");else if(r.trigger("disable"),"split"==t)return r.trigger("forcecontent"),!0;return this.addClass("cms-container--"+t+"-mode"),!1},checkCanNavigate:function(e){var t=this._findFragments(e||["Content"]),n=t.find(":data(changetracker)").add(t.filter(":data(changetracker)")),r=!0;return!n.length||(n.each(function(){$(this).confirmUnsavedChanges()||(r=!1)}),r)},loadPanel:function(e){var t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}),n=arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:document.URL;this.checkCanNavigate(t.pjax?t.pjax.split(","):["Content"])&&(this.saveTabState(),t.__forceReferer=r,n&&(t.__forceReload=1+Math.random()),window.ss.router.show(e,t))},reloadCurrentPanel:function(){this.loadPanel(document.URL,null,null,!0)},submitForm:function(e,t,n,r){var o=this;t||(t=this.find(".btn-toolbar :submit[name=action_save]")),t||(t=this.find(".btn-toolbar :submit:first")),e.trigger("beforesubmitform"),this.trigger("submitform",{form:e,button:t}),$(t).addClass("btn--loading loading"),$(t).is("button")&&($(t).data("original-text",$(t).text()),$(t).append($('<div class="btn__loading-icon"><span class="btn__circle btn__circle--1" /><span class="btn__circle btn__circle--2" /><span class="btn__circle btn__circle--3" /></div>')),$(t).css($(t).outerWidth()+"px"));var i=e.validate(),a=function(){$(t).removeClass("btn--loading loading"),$(t).find(".btn__loading-icon").remove(),$(t).css("width","auto"),$(t).text($(t).data("original-text"))};void 0===i||i||(statusMessage("Validation failed.","bad"),a());var s=e.serializeArray();return s.push({name:$(t).attr("name"),value:"1"}),s.push({name:"BackURL",value:document.URL.replace(/\/$/,"")}),this.saveTabState(),jQuery.ajax(jQuery.extend({headers:{"X-Pjax":"CurrentForm,Breadcrumbs"},url:e.attr("action"),data:s,type:"POST",complete:function(){a()},success:function(t,r,i){a(),e.removeClass("changed"),n&&n(t,r,i);var l=o.handleAjaxResponse(t,r,i);l&&l.filter("form").trigger("aftersubmitform",{status:r,xhr:i,formData:s})}},r)),!1},LastState:null,PauseState:!1,handleStateChange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.history.state;if(!this.getPauseState()){this.getStateChangeXHR()&&this.getStateChangeXHR().abort();var n=this,r=t.pjax||"Content",o={},i=r.split(","),a=this._findFragments(i);if(this.setStateChangeCount(this.getStateChangeCount()+1),!this.checkCanNavigate()){var s=this.getLastState();return this.setPauseState(!0),s&&s.path?window.ss.router.show(s.path):window.ss.router.back(),void this.setPauseState(!1)}if(this.setLastState(t),a.length<i.length&&(r="Content",i=["Content"],a=this._findFragments(i)),this.trigger("beforestatechange",{state:t,element:a}),o["X-Pjax"]=r,void 0!==t.__forceReferer){var l=t.__forceReferer;try{l=decodeURI(l)}catch(e){}finally{o["X-Backurl"]=encodeURI(l)}}a.addClass("loading");var u=$.ajax({headers:o,url:t.path||document.URL}).done(function(e,r,o){var i=n.handleAjaxResponse(e,r,o,t);n.trigger("afterstatechange",{data:e,status:r,xhr:o,element:i,state:t})}).always(function(){n.setStateChangeXHR(null),a.removeClass("loading")});return this.setStateChangeXHR(u),u}},loadFragment:function(e,t){var n,r=this,o={},i=$("base").attr("href"),a=this.getFragmentXHR();return void 0!==a[t]&&null!==a[t]&&(a[t].abort(),a[t]=null),e=$.path.isAbsoluteUrl(e)?e:$.path.makeUrlAbsolute(e,i),o["X-Pjax"]=t,n=$.ajax({headers:o,url:e,success:function(e,t,n){var o=r.handleAjaxResponse(e,t,n,null);r.trigger("afterloadfragment",{data:e,status:t,xhr:n,elements:o})},error:function(e,t,n){r.trigger("loadfragmenterror",{xhr:e,status:t,error:n})},complete:function(){var e=r.getFragmentXHR();void 0!==e[t]&&null!==e[t]&&(e[t]=null)}}),a[t]=n,n},handleAjaxResponse:function(e,t,n,r){var o,i,a,s;if(n.getResponseHeader("X-Reload")&&n.getResponseHeader("X-ControllerURL")){var l=$("base").attr("href"),u=n.getResponseHeader("X-ControllerURL"),o=$.path.isAbsoluteUrl(u)?u:$.path.makeUrlAbsolute(u,l);return void(document.location.href=o)}if(e){var c=n.getResponseHeader("X-Title");c&&(document.title=decodeURIComponent(c.replace(/\+/g," ")));var d,f={};n.getResponseHeader("Content-Type").match(/^((text)|(application))\/json[ \t]*;?/i)?f=e:(a=document.createDocumentFragment(),jQuery.clean([e],document,a,[]),s=$(jQuery.merge([],a.childNodes)),i="Content",s.is("form")&&!s.is("[data-pjax-fragment~=Content]")&&(i="CurrentForm"),f[i]=s),this.setRedrawSuppression(!0);try{$.each(f,function(e,t){var n=$("[data-pjax-fragment]").filter(function(){return-1!=$.inArray(e,$(this).data("pjaxFragment").split(" "))}),r=$(t);if(d?d.add(r):d=r,r.find(".cms-container").length)throw'Content loaded via ajax is not allowed to contain tags matching the ".cms-container" selector to avoid infinite loops';var o=n.attr("style"),i=(n.parent(),["east","west","center","north","south","column-hidden"]),a=n.attr("class"),s=[];a&&(s=$.grep(a.split(" "),function(e){return $.inArray(e,i)>=0})),r.removeClass(i.join(" ")).addClass(s.join(" ")),o&&r.attr("style",o);var l=r.find("style").detach();l.length&&$(document).find("head").append(l),n.replaceWith(r)});var p=d.filter("form");p.hasClass("cms-tabset")&&p.removeClass("cms-tabset").addClass("cms-tabset")}finally{this.setRedrawSuppression(!1)}return this.redraw(),this.restoreTabState(r&&void 0!==r.tabState?r.tabState:null),d}},_findFragments:function(e){return $("[data-pjax-fragment]").filter(function(){var t,n=$(this).data("pjaxFragment").split(" ");for(t in e)if(-1!=$.inArray(e[t],n))return!0;return!1})},refresh:function(){$(window).trigger("statechange"),$(this).redraw()},saveTabState:function(){if(void 0!==window.sessionStorage&&null!==window.sessionStorage){var e=[],t=this._tabStateUrl();if(this.find(".cms-tabset,.ss-tabset").each(function(t,n){var r=$(n).attr("id");r&&$(n).data("tabs")&&($(n).data("ignoreTabState")||$(n).getIgnoreTabState()||e.push({id:r,selected:$(n).tabs("option","selected")}))}),e){var n="tabs-"+t;try{window.sessionStorage.setItem(n,JSON.stringify(e))}catch(e){if(e.code===DOMException.QUOTA_EXCEEDED_ERR&&0===window.sessionStorage.length)return;throw e}}}},restoreTabState:function(e){var t=this,n=this._tabStateUrl(),r=void 0!==window.sessionStorage&&window.sessionStorage,o=r?window.sessionStorage.getItem("tabs-"+n):null,i=!!o&&JSON.parse(o);this.find(".cms-tabset, .ss-tabset").each(function(){var n,r,o=$(this),a=o.attr("id"),s=o.children("ul").children("li.ss-tabs-force-active");o.data("tabs")&&(o.tabs("refresh"),s.length?n=s.first().index():e&&e[a]?(r=o.find(e[a].tabSelector),r.length&&(n=r.index())):i&&$.each(i,function(e,t){a==t.id&&(n=t.selected)}),null!==n&&(o.tabs("option","active",n),t.trigger("tabstaterestored")))})},clearTabState:function(e){if(void 0!==window.sessionStorage){var t=window.sessionStorage;if(e)t.removeItem("tabs-"+e);else for(var n=0;n<t.length;n++)t.key(n).match(/^tabs-/)&&t.removeItem(t.key(n))}},clearCurrentTabState:function(){this.clearTabState(this._tabStateUrl())},_tabStateUrl:function(){return window.location.href.replace(/\?.*/,"").replace(/#.*/,"").replace($("base").attr("href"),"")},showLoginDialog:function(){var e=$(".leftandmain__login-dialog");e.length&&e.destroy(),e=$('<div class="leftandmain__login-dialog" />'),$("body").append(e),e.open()}}),$(".leftandmain__login-dialog").entwine({destroy:function(){this.close(),this.remove()},close:function(){this.renderModal(!1)},open:function(){this.renderModal(!0)},renderModal:function(e){var t=$("body").data("member-tempid"),n=$.path.addSearchParams("CMSSecurity/login",{tempid:t,BackURL:window.location.href});_reactDom2.default.render(_react2.default.createElement(_IframeDialog2.default,{title:i18n._t("Admin.CMS_LOGIN_TITLE","Login"),className:"login-dialog",bodyClassName:"login-dialog__body",iframeId:"login-dialog-iframe",iframeClassName:"login-dialog__body__iframe",show:e,url:n}),this[0])},reauthenticate:function(e){void 0!==e.SecurityID&&$(":input[name=SecurityID]").val(e.SecurityID),void 0!==e.TempID&&$("body").data("member-tempid",e.TempID),this.close()}}),$("form.loading,.cms-content.loading,.cms-content-fields.loading,.cms-content-view.loading").entwine({onmatch:function(){this.append('<div class="cms-content-loading-overlay ui-widget-overlay-light"></div><div class="cms-content-loading-spinner"></div>'),this._super()},onunmatch:function(){this.find(".cms-content-loading-overlay,.cms-content-loading-spinner").remove(),this._super()}}),$(".cms .cms-panel-link").entwine({onclick:function(e){if($(this).hasClass("external-link"))return void e.stopPropagation();var t=this.attr("href"),n=t&&!t.match(/^#/)?t:this.data("href"),r={pjax:this.data("pjaxTarget")};$(".cms-container").loadPanel(n,null,r),e.preventDefault()}}),$(".cms .ss-ui-button-ajax").entwine({onclick:function onclick(e){$(this).removeClass("ui-button-text-only"),$(this).addClass("ss-ui-button-loading ui-button-text-icons");var loading=$(this).find(".ss-ui-loading-icon");loading.length<1&&(loading=$("<span></span>").addClass("ss-ui-loading-icon ui-button-icon-primary ui-icon"),$(this).prepend(loading)),loading.show();var href=this.attr("href"),url=href||this.data("href");jQuery.ajax({url:url,complete:function complete(xmlhttp,status){var msg=xmlhttp.getResponseHeader("X-Status")?xmlhttp.getResponseHeader("X-Status"):xmlhttp.responseText;try{void 0!==msg&&null!==msg&&eval(msg)}catch(e){}loading.hide(),$(".cms-container").refresh(),$(this).removeClass("ss-ui-button-loading ui-button-text-icons"),$(this).addClass("ui-button-text-only")},dataType:"html"}),e.preventDefault()}}),$(".cms .ss-ui-dialog-link").entwine({UUID:null,onmatch:function(){this._super(),this.setUUID((new Date).getTime())},onunmatch:function(){this._super()},onclick:function(){this._super();var e="ss-ui-dialog-"+this.getUUID(),t=$("#"+e);t.length||(t=$('<div class="ss-ui-dialog" id="'+e+'" />'),$("body").append(t));var n=this.data("popupclass")?this.data("popupclass"):"";return t.ssdialog({iframeUrl:this.attr("href"),autoOpen:!0,dialogExtraClass:n}),!1}}),$(".cms .field.date input.text").entwine({onmatch:function(){var e=$(this).parents(".field.date:first"),t=e.data();if(!t.showcalendar)return void this._super();t.showOn="button",t.locale&&$.datepicker.regional[t.locale]&&(t=$.extend(t,$.datepicker.regional[t.locale],{})),this.prop("disabled")||this.prop("readonly")||$(this).datepicker(t),this._super()},onunmatch:function(){this._super()}}),$(".cms .field.dropdown select, .cms .field select[multiple], .form__fieldgroup-item select.dropdown").entwine({onmatch:function(){if(this.is(".no-chosen"))return void this._super();this.data("placeholder")||this.data("placeholder"," "),this.removeClass("has-chosen").chosen("destroy"),this.siblings(".chosen-container").remove(),applyChosen(this),this._super()},onunmatch:function(){this._super()}}),$(".cms-panel-layout").entwine({redraw:function(){window.debug&&console.log("redraw",this.attr("class"),this.get(0))}}),$(".cms .grid-field:not([cms-loading-ignore-url-params])").entwine({showDetailView:function(e){var t=window.location.search.replace(/^\?/,"");t&&(e=$.path.addSearchParams(e,t)),$(".cms-container").loadPanel(e)}}),$(".cms-search-form").entwine({onsubmit:function(e){var t,n;return t=this.find(":input:not(:submit)").filter(function(){return $.grep($(this).fieldValue(),function(e){return e}).length}),n=this.attr("action"),t.length&&(n=$.path.addSearchParams(n,t.serialize().replace("+","%20"))),this.closest(".cms-container").loadPanel(n,"",{},!0),!1}}),$(".cms-search-form button[type=reset], .cms-search-form input[type=reset]").entwine({onclick:function(e){e.preventDefault();var t=$(this).parents("form");t.clearForm(),t.find(".dropdown select").prop("selectedIndex",0).trigger("chosen:updated"),t.submit()}}),window._panelDeferredCache={},$(".cms-panel-deferred").entwine({onadd:function(){this._super(),this.redraw()},onremove:function(){window.debug&&console.log("saving",this.data("url"),this),this.data("deferredNoCache")||(window._panelDeferredCache[this.data("url")]=this.html()),this._super()},redraw:function(){window.debug&&console.log("redraw",this.attr("class"),this.get(0));var e=this,t=this.data("url");if(!t)throw'Elements of class .cms-panel-deferred need a "data-url" attribute';this._super(),this.data("deferredNoCache")||void 0===window._panelDeferredCache[t]?(this.addClass("loading"),$.ajax({url:t,complete:function(){e.removeClass("loading")},success:function(t,n,r){e.html(t)}})):this.html(window._panelDeferredCache[t])}}),$(".cms-tabset").entwine({onadd:function(){this.redrawTabs(),this._super()},onremove:function(){this.data("tabs")&&this.tabs("destroy"),this._super()},redrawTabs:function(){this.rewriteHashlinks();var e=(this.attr("id"),this.find("ul:first .ui-tabs-active"));this.data("tabs")||this.tabs({active:-1!=e.index()?e.index():0,beforeLoad:function(e,t){return!1},beforeActivate:function(e,t){var n=t.oldTab.find(".cms-panel-link");if(n&&1===n.length)return!1},activate:function(e,t){var n=$(this).closest("form").find(".btn-toolbar");$(t.newTab).closest("li").hasClass("readonly")?n.fadeOut():n.show()}}),this.trigger("afterredrawtabs")},rewriteHashlinks:function(){$(this).find("ul a").each(function(){if($(this).attr("href")){var e=$(this).attr("href").match(/#.*/);e&&$(this).attr("href",document.location.href.replace(/#.*/,"")+e[0])}})}}),$("#filters-button").entwine({onmatch:function(){this._super(),this.data("collapsed",!0),this.data("animating",!1)},onunmatch:function(){this._super()},showHide:function(){var e=this,t=$(".cms-content-filters").first(),n=this.data("collapsed");n?(this.addClass("active"),t.css("display","block")):(this.removeClass("active"),t.css("display","")),e.data("collapsed",!n)},onclick:function(){this.showHide()}})});var statusMessage=function(e,t){e=jQuery("<div/>").text(e).html(),jQuery.noticeAdd({text:e,type:t,stayTime:5e3,inEffect:{left:"0",opacity:"show"}})}}).call(exports,__webpack_require__(12))},249:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(12),i=r(o),a=n(22),s=r(a),l=n(176),u=r(l),c=n(175),d=r(c);n(149),i.default.entwine("ss",function(e){e("input[type=date]").entwine({onadd:function(){if(!d.default.inputtypes.date&&!(this.prop("disabled")||this.prop("readonly")||this.hasClass("hasDatepicker"))){var t=e("<input/>",{type:"hidden",name:this.attr("name"),value:this.val()});this.parent().append(t),this.removeAttr("name"),u.default.locale(this.attr("lang"));var n=this.val(),r="";if(n){var o=(0,u.default)(n);o.isValid()&&(r=o.format("L"))}this.val(r);var i=s.default.inject(s.default._t("Admin.FormatExample","Example: {format}"),{format:(0,u.default)().endOf("month").format("L")});this.attr("placeholder",i),this.updateValue()}},onchange:function(){this.updateValue()},updateValue:function(){var e=this.val(),t="";if(e)for(var n=["L","YYYY-MM-DD"],r=0;r<n.length;r++){var o=n[r],i=(0,u.default)(e,o);if(i.isValid()){t=i.format("YYYY-MM-DD");break}}this.parent().find("input[type=hidden]").val(t)}})})},253:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},u=n(0),c=r(u),d=n(47),f=r(d),p=n(407),h=n(176),m=r(h),y=n(175),v=r(y),b=n(22),g=r(b),_=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){return l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this)}},{key:"hasNativeSupport",value:function(){return v.default.inputtypes.date}},{key:"getInputProps",value:function(){var e=g.default.inject(g.default._t("Admin.FormatExample","Example: {format}"),{format:(0,m.default)().endOf("month").format("L")}),n={},r=this.props.value;return r=!this.props.data.html5||this.hasNativeSupport()&&this.props.data.html5?this.props.value:this.getLocalisedValue(),Object.assign(n,l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getInputProps",this).call(this),{type:this.props.data.html5?"date":"text",defaultValue:r,placeholder:e}),delete n.value,n}},{key:"getLocalisedValue",value:function(){return this.convertToLocalised(this.props.value)}},{key:"isMultiline",value:function(){return!1}},{key:"handleChange",value:function(e){var t=e.target.value,n="";n=!this.props.data.html5||this.hasNativeSupport()&&this.props.data.html5?t:this.convertToIso(t),"function"==typeof this.props.onChange&&this.triggerChange(n)}},{key:"triggerChange",value:function(e){this.props.onChange(e)}},{key:"convertToIso",value:function(e){m.default.locale(this.props.lang);var t="";if(e){var n=(0,m.default)(e,["L","YYYY-MM-DD"]);n.isValid()&&(t=n.format("YYYY-MM-DD"))}return t}},{key:"convertToLocalised",value:function(e){m.default.locale(this.props.lang);var t="";if(e){var n=(0,m.default)(e);n.isValid()&&(t=n.format("L"))}return t}}]),t}(p.Component);_.propTypes={lang:c.default.PropTypes.string,data:c.default.PropTypes.shape({html5:c.default.PropTypes.boolean})},_.defaultProps={data:{}},t.Component=_,t.default=(0,f.default)(_)},254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e){var t="grid-field__row "+e.className;return o.default.createElement("tr",{tabIndex:0,className:t},e.children)};t.default=i},255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(83),d=r(c),f=n(36),p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n}return a(t,e),s(t,[{key:"getInputProps",value:function(){var e=[this.props.className,this.props.extraClass,"form-check"];return this.props.value&&e.push("checked"),(this.props.readOnly||this.props.disabled)&&(e.push("disabled"),this.props.disabled&&e.push("option-field--disabled")),{id:this.props.id,name:this.props.name,disabled:this.props.disabled||this.props.readOnly,readOnly:this.props.readOnly,className:e.join(" "),onChange:this.handleChange,checked:!!this.props.value,value:1}}},{key:"handleChange",value:function(e){if(this.props.readOnly||this.props.disabled)return void e.preventDefault();"function"==typeof this.props.onChange?this.props.onChange(e,{id:this.props.id,value:e.target.checked?1:0}):"function"==typeof this.props.onClick&&this.props.onClick(e,{id:this.props.id,value:e.target.checked?1:0})}},{key:"render",value:function(){var e=null!==this.props.leftTitle?this.props.leftTitle:this.props.title,t=null;switch(this.props.type){case"checkbox":t=f.Checkbox;break;case"radio":t=f.Radio;break;default:throw new Error("Invalid OptionField type: "+this.props.type)}var n="string"==typeof e?{react:u.default.createElement("span",null,e)}:e;return(0,d.default)(t,n,this.getInputProps())}}]),t}(l.Component);p.propTypes={type:u.default.PropTypes.oneOf(["checkbox","radio"]),leftTitle:u.default.PropTypes.any,title:u.default.PropTypes.any,extraClass:u.default.PropTypes.string,id:u.default.PropTypes.string,name:u.default.PropTypes.string,onChange:u.default.PropTypes.func,value:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number,u.default.PropTypes.bool]),readOnly:u.default.PropTypes.bool,disabled:u.default.PropTypes.bool},p.defaultProps={extraClass:"",className:"",type:"radio",leftTitle:null},t.default=p},256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(){return null};o.propTypes={id:r.PropTypes.oneOfType([r.PropTypes.string,r.PropTypes.number]),title:r.PropTypes.string,titlePath:r.PropTypes.string,disabled:r.PropTypes.bool,parentid:r.PropTypes.number,count:r.PropTypes.number,depth:r.PropTypes.number,expanded:r.PropTypes.bool,limited:r.PropTypes.bool,marked:r.PropTypes.bool,opened:r.PropTypes.bool,children:r.PropTypes.array},t.default=o},257:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return Array.isArray(e)?e:Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(409),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=n(41),d=function(){return{middlewareRegistries:{},services:{},factories:{},factoryCache:{},initialised:!1,isProtected:function(){if(this.initialised)throw new Error("Cannot mutate DI container after it has been initialised")},get:function(e,t){if(!this.initialised)throw new Error("\n      Injector.get(): Attempted to access DI layer before it was initialised.\n      Did you forget to invoke Injector.load()?");var n=this.factories[e];if(!n)throw new Error("Injector.get(): Component "+e+" does not exist");return n(t)},customise:function(e,t,n){this.isProtected();var r=t.split("."),a=i(r),l=a[0],c=a.slice(1),d=this.middlewareRegistries[l];d||(d=new u.default,this.middlewareRegistries=s({},this.middlewareRegistries,o({},l,d))),d.add(e,n,c)},load:function(){var e=this;this.isProtected(),this.factories=Object.entries(this.services).reduce(function(t,n){var r=a(n,2),i=r[0],u=r[1],c=e.middlewareRegistries[i];return c?(c.sort(),s({},t,o({},i,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.GLOBAL_CONTEXT,n=i+"__"+t;if(!e.factoryCache[n]){var r=c.getMatchesForContext(t);e.factoryCache[n]=e.getFactory(i,r)}return e.factoryCache[n]}))):s({},t,o({},i,function(){return u}))},{}),this.initialised=!0},register:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.force;if(this.isProtected(),this.services[e]&&!0!==r)throw new Error("\n      Tried to register service "+e+" more than once. This practice is discouraged. Consider\n      using Injector.update() to enhance the service rather than override it completely.\n      Otherwise, invoke the register() function with { force: true } as the third argument.\n     ");this.services=s({},this.services,o({},e,t))},registerMany:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.force;this.isProtected();var r=Object.keys(e),o=Object.keys(this.services).filter(function(e){return r.includes(e)});if(o.length&&!0!==n){var i=o.join(", ");throw new Error("\n      Tried to register services ("+i+") more than once. This practice is discouraged. Consider\n      using Injector.update() to enhance the service rather than override it completely.\n      Otherwise, invoke the register() function with { force: true } as the third argument.\n     ")}this.services=s({},this.services,e)},transform:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.isProtected(),t(this.createTransformer(e,n))},createTransformer:function(e,t){var n=this;return function(r,o){n.customise(s({name:e},t),r,o)}},getFactory:function(e,t){var n=this.services[e],o=t.map(function(e){return e.factory});return c.compose.apply(void 0,r(o))(n)}}};t.default=d},258:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.default,n=function(n){function r(){return o(this,r),i(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return a(r,n),l(r,[{key:"getChildContext",value:function(){var e=t.component,n=t.form;return{injector:{get:e.get.bind(e),validate:n.getValidation.bind(n)}}}},{key:"render",value:function(){return c.default.createElement(e,this.props)}}]),r}(u.Component);return n.childContextTypes=h.default,n}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(184),f=r(d),p=n(153),h=r(p);t.default=s},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(153),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(e){return e.contextTypes=r({},e.contextTypes,i.default),e.displayName="withInjector(\n    "+(e.displayName||e.name||"Component")+"\n  )",e};t.default=a},36:function(e,t){e.exports=ReactBootstrap},38:function(e,t){e.exports=Injector},391:function(e,t){e.exports=FormAlert},392:function(e,t){e.exports=IsomorphicFetch},393:function(e,t){e.exports=SchemaActions},394:function(e,t){e.exports=getFormState},395:function(e,t){e.exports=qs},396:function(e,t,n){"use strict";(function(e){var t=n(12),r=function(e){return e&&e.__esModule?e:{default:e}}(t);n(150),r.default.widget("ssui.ssdialog",r.default.ui.dialog,{options:{iframeUrl:"",reloadOnOpen:!0,dialogExtraClass:"",modal:!0,bgiframe:!0,autoOpen:!1,autoPosition:!0,minWidth:500,maxWidth:800,minHeight:300,maxHeight:700,widthRatio:.8,heightRatio:.8,resizable:!1},_create:function(){r.default.ui.dialog.prototype._create.call(this);var e=this,t=(0,r.default)('<iframe marginWidth="0" marginHeight="0" frameBorder="0" scrolling="auto"></iframe>');t.bind("load",function(n){"about:blank"!=(0,r.default)(this).attr("src")&&(t.addClass("loaded").show(),e._resizeIframe(),e.uiDialog.removeClass("loading"))}).hide(),this.options.dialogExtraClass&&this.uiDialog.addClass(this.options.dialogExtraClass),this.element.append(t),this.options.iframeUrl&&this.element.css("overflow","hidden")},open:function(){r.default.ui.dialog.prototype.open.call(this);var e=this,t=this.element.children("iframe");!this.options.iframeUrl||t.hasClass("loaded")&&!this.options.reloadOnOpen||(t.hide(),t.attr("src",this.options.iframeUrl),this.uiDialog.addClass("loading")),(0,r.default)(window).bind("resize.ssdialog",function(){e._resizeIframe()})},close:function(){r.default.ui.dialog.prototype.close.call(this),this.uiDialog.unbind("resize.ssdialog"),(0,r.default)(window).unbind("resize.ssdialog")},_resizeIframe:function(){var t,n,o={},i=this.element.children("iframe");this.options.widthRatio&&(t=(0,r.default)(window).width()*this.options.widthRatio,this.options.minWidth&&t<this.options.minWidth?o.width=this.options.minWidth:this.options.maxWidth&&t>this.options.maxWidth?o.width=this.options.maxWidth:o.width=t),this.options.heightRatio&&(n=(0,r.default)(window).height()*this.options.heightRatio,this.options.minHeight&&n<this.options.minHeight?o.height=this.options.minHeight:this.options.maxHeight&&n>this.options.maxHeight?o.height=this.options.maxHeight:o.height=n),e.isEmptyObject(o)||(this._setOptions(o),i.attr("width",o.width-parseFloat(this.element.css("paddingLeft"))-parseFloat(this.element.css("paddingRight"))),i.attr("height",o.height-parseFloat(this.element.css("paddingTop"))-parseFloat(this.element.css("paddingBottom"))),this.options.autoPosition&&this._setOption("position",this.options.position))}}),r.default.widget("ssui.titlebar",{_create:function(){this.originalTitle=this.element.attr("title");var e=this.options,t=e.title||this.originalTitle||"&nbsp;",n=r.default.ui.dialog.getTitleId(this.element);this.element.parent().addClass("ui-dialog");var o=this.element.addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix");if(e.closeButton){var i=(0,r.default)('<a href="#"/>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){i.addClass("ui-state-hover")},function(){i.removeClass("ui-state-hover")}).focus(function(){i.addClass("ui-state-focus")}).blur(function(){i.removeClass("ui-state-focus")}).mousedown(function(e){e.stopPropagation()}).appendTo(o);(this.uiDialogTitlebarCloseText=(0,r.default)("<span/>")).addClass("ui-icon ui-icon-closethick").text(e.closeText).appendTo(i)}(0,r.default)("<span/>").addClass("ui-dialog-title").attr("id",n).html(t).prependTo(o),o.find("*").add(o).disableSelection()},destroy:function(){this.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),this.originalTitle&&this.element.attr("title",this.originalTitle)}}),r.default.extend(r.default.ssui.titlebar,{version:"0.0.1",options:{title:"",closeButton:!1,closeText:"close"},uuid:0,getTitleId:function(e){return"ui-dialog-title-"+(e.attr("id")||++this.uuid)}})}).call(t,n(12))},404:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(83),d=r(c),f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"getLegend",value:function(){return"fieldset"===this.props.data.tag&&this.props.data.legend?(0,d.default)("legend",this.props.data.legend):null}},{key:"getClassName",value:function(){return this.props.className+" "+this.props.extraClass}},{key:"render",value:function(){var e=this.getLegend(),t=this.props.data.tag||"div",n=this.getClassName();return u.default.createElement(t,{className:n},e,this.props.children)}}]),t}(l.Component);f.propTypes={data:u.default.PropTypes.oneOfType([u.default.PropTypes.array,u.default.PropTypes.shape({tag:u.default.PropTypes.string,legend:u.default.PropTypes.string})]),extraClass:u.default.PropTypes.string},f.defaultProps={className:"",extraClass:""},t.default=f},405:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=n(22),s=r(a),l=n(4),u=r(l),c=n(391),d=r(c),f=function(e){var t=e.itemName,n=e.name,r=e.value;return i.default.createElement("div",{className:(0,u.default)(t,"not-found-component")},i.default.createElement(d.default,{value:s.default.inject(s.default._t("Admin.NOT_FOUND_COMPONENT","The component here ({component}) failed to load, there is a chance that you may lose data when saving due to this."),{component:t})}),n&&"string"==typeof r?i.default.createElement("input",{type:"hidden",name:n,value:r}):null)};f.propTypes={itemName:o.PropTypes.string.isRequired,name:o.PropTypes.string,value:o.PropTypes.any},t.default=f},406:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=n(36),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleShow=n.handleShow.bind(n),n.handleHide=n.handleHide.bind(n),n.state={showing:!1},n}return i(t,e),a(t,[{key:"getPlacement",value:function(){return this.props.data.placement||"bottom"}},{key:"handleShow",value:function(){this.setState({showing:!0})}},{key:"handleHide",value:function(){this.setState({showing:!1})}},{key:"render",value:function(){var e=this.getPlacement(),t=l.default.createElement(u.Popover,{id:this.props.id+"_Popover",className:"fade in bs-popover-"+e+" "+this.props.popoverClassName,title:this.props.data.popoverTitle},this.props.children),n=["btn","btn-secondary",this.props.className];this.state.showing&&n.push("btn--no-focus"),this.props.title||(n.push("font-icon-dot-3 btn--no-text"),n.push("btn--icon-"+this.props.buttonSize));var r={id:this.props.id,type:"button",className:n.join(" ")};return this.props.data.buttonTooltip&&(r.title=this.props.data.buttonTooltip),l.default.createElement(u.OverlayTrigger,{rootClose:!0,trigger:"click",placement:e,overlay:t,onEnter:this.handleShow,onExited:this.handleHide,container:this.props.container},l.default.createElement("button",r,this.props.title))}}]),t}(s.Component);c.propTypes={id:l.default.PropTypes.string,title:l.default.PropTypes.any,container:l.default.PropTypes.any,className:l.default.PropTypes.string,popoverClassName:l.default.PropTypes.string,buttonSize:l.default.PropTypes.oneOf(["sm","md","large","xl"]),data:l.default.PropTypes.oneOfType([l.default.PropTypes.array,l.default.PropTypes.shape({popoverTitle:l.default.PropTypes.string,buttonTooltip:l.default.PropTypes.string,placement:l.default.PropTypes.oneOf(["top","right","bottom","left"])})])},c.defaultProps={data:{},className:"",popoverClassName:"",buttonSize:"xl"},t.default=c},407:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(47),d=r(c),f=n(36),p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n}return a(t,e),s(t,[{key:"getInputProps",value:function(){var e={bsClass:this.props.bsClass,className:this.props.className+" "+this.props.extraClass,id:this.props.id,name:this.props.name,disabled:this.props.disabled,readOnly:this.props.readOnly,value:this.props.value,placeholder:this.props.placeholder,autoFocus:this.props.autoFocus,maxLength:this.props.data&&this.props.data.maxlength};return this.props.attributes&&!Array.isArray(this.props.attributes)&&Object.assign(e,this.props.attributes),this.isMultiline()?Object.assign(e,{componentClass:"textarea",rows:this.props.data.rows,cols:this.props.data.columns}):Object.assign(e,{componentClass:"input",type:this.props.type?this.props.type:null}),this.props.readOnly||Object.assign(e,{onChange:this.handleChange}),e}},{key:"isMultiline",value:function(){return this.props.data&&this.props.data.rows>1}},{key:"handleChange",value:function(e){"function"==typeof this.props.onChange&&this.props.onChange(e,{id:this.props.id,value:e.target.value})}},{key:"render",value:function(){return u.default.createElement(f.FormControl,this.getInputProps())}}]),t}(l.Component);p.propTypes={extraClass:u.default.PropTypes.string,id:u.default.PropTypes.string,name:u.default.PropTypes.string.isRequired,onChange:u.default.PropTypes.func,value:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number]),readOnly:u.default.PropTypes.bool,disabled:u.default.PropTypes.bool,placeholder:u.default.PropTypes.string,type:u.default.PropTypes.string,autoFocus:u.default.PropTypes.bool,attributes:u.default.PropTypes.oneOfType([u.default.PropTypes.object,u.default.PropTypes.array])},p.defaultProps={value:"",extraClass:"",className:"",type:"text",attributes:{}},t.Component=p,t.default=(0,d.default)(p)},408:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.createErrorBlock=t.createErrorHtml=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(e){return{type:"error",value:{react:e.map(function(e,t){return s.default.createElement("span",{key:t,className:"form__validation-message"},e)})}}},u=function(e){return Object.entries(e).reduce(function(e,t){var n=i(t,2),a=n[0],s=n[1];if(!s||!s.length)return e;var u=Array.isArray(s)?s:[s];return o({},e,r({},a,l(u)))},{})};t.default=u,t.createErrorHtml=l,t.createErrorBlock=u},409:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.GLOBAL_CONTEXT=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1870),s=function(e){return e&&e.__esModule?e:{default:e}}(a),l=["before","after"],u=function(e){l.forEach(function(t){if(void 0!==e[t]&&"string"!=typeof e[t]&&!Array.isArray(e[t]))throw new Error("Middleware key "+t+" must be a string or array")})},c=function(e){var t=null;return l.forEach(function(n){if(e[n].includes("*")){if(e[n].length>1)throw new Error("\n          Key "+n+" on "+e.name+' should only specify one key \n          if using the "*" wildcard\n        ');if(t)throw new Error("\n          Cannot specify a "+n+" rule on "+e.name+" if a wildcard \n          has been specified\n        ");t=n}}),t},d=function(){function e(){r(this,e),this._middlewares=[],this._contextCache={}}return i(e,[{key:"sort",value:function(){var e=this,t=["__HEAD__","__TAIL__"],n=[t],r=[];return this._middlewares.forEach(function(e){var t=e.name,r=c(e);"after"===r?n.push(["__TAIL__",t]):"before"===r?n.push([t,"__HEAD__"]):(n.push([t,"__TAIL__"]),n.push(["__HEAD__",t]),e.before.forEach(function(e){n.push([t,e])}),e.after.forEach(function(e){n.push([e,t])}))}),(0,s.default)(n).filter(function(e){return!t.includes(e)}).forEach(function(t){r=r.concat(e._middlewares.filter(function(e){return e.name===t}))}),this._middlewares=r,this}},{key:"add",value:function(e,t,n){u(e),this._contextCache={};var r=n;r&&r.length?Array.isArray(r)||(r=[r]):r=["__GLOBAL__"];var i=o({},e,{factory:t,context:r});return l.forEach(function(t){Array.isArray(e[t])?i[t]=e[t]:i[t]=e[t]?[e[t]]:[]}),l.every(function(e){return!i[e].length})&&(i.after=["__HEAD__"],i.before=["__TAIL__"]),this._middlewares.push(i),this}},{key:"getMatchesForContext",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"__GLOBAL__";if(!this._contextCache[e]){var t=e.split(".");this._contextCache[e]=this._middlewares.filter(function(e){return"__GLOBAL__"===e.context[0]||e.context.every(function(e,n){return"*"===e||t[n]===e})})}return this._contextCache[e]}}]),e}();t.GLOBAL_CONTEXT="__GLOBAL__",t.default=d},410:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=n(0),f=r(d),p=n(153),h=r(p),m=function(e,t){return t},y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m;return function(r){if(e&&!Array.isArray(e))throw new Error("\n      withInjector() passed an argument for dependencies that is "+("undefined"==typeof deps?"undefined":c(deps))+". \n      Must be an array of named dependencies.\n    ");if(t&&"function"!=typeof t)throw new Error("\n      Second parameter of inject() [mapDependenciesToProps] must be a function, taking the resolved\n      dependencies as enumerated arguments, and returning a map of prop names to dependencies.\n    ");if("function"!=typeof n)throw new Error("\n      Third parameter of inject() [getContext] must be a function, taking the component's props\n      and current inject context as parameters, and returning a string representing the Injector\n      context to use throughout the component.\n    ");var p=function(d){function p(e,t){i(this,p);var r=a(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,e,t));return r.state={context:n(e,t.injector.context)},r}return s(p,d),u(p,[{key:"getChildContext",value:function(){return{injector:l({},this.context.injector,{context:this.state.context})}}},{key:"componentWillReceiveProps",value:function(e,t){var r=n(e,t.injector.context);r!==this.state.context&&this.setState({context:r})}},{key:"render",value:function(){var n=this,i={};if(e){var a=this.context.injector.get,s=e.map(function(e){return a(e,n.state.context)});if(t?i=t.apply(void 0,o(s)):e.forEach(function(e,t){i[e]=s[t]}),!i||"object"!==(void 0===i?"undefined":c(i)))throw new Error("\n            mapDepedenciesToProps parameter passed to inject()\n            should return an object that maps prop names to dependencies\n          ")}var u=l({},i,this.props);return f.default.createElement(r,u)}}]),p}(d.Component);return p.contextTypes=h.default,p.childContextTypes=h.default,p}};t.default=y},411:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(775),f=n(258),p=r(f),h=n(259),m=r(h),y=n(184),v=r(y),b=n(405),g=r(b),_=n(153),w=r(_),T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2],r=function(n){function r(e){o(this,r);var t=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={target:null,error:!1},t}return a(r,n),l(r,[{key:"getChildContext",value:function(){var e=t&&t.context;return e?{injector:s({},this.context.injector,{context:e})}:this.context}},{key:"componentWillMount",value:function(){var n=this;v.default.ready(function(){if("string"==typeof e){var r=!0,o=null;try{o=n.context.injector.get(e,t&&t.context),r=!1}catch(e){throw n.setState({target:o,error:r}),e}return void n.setState({target:o,error:r})}n.setState({target:e})})}},{key:"render",value:function(){var n=this.state.target;if(this.state.error){var r=g.default;try{r=this.context.injector.get("NotFoundComponent")}catch(e){}return c.default.createElement(r,s({},this.props,{itemName:e}))}if(n){if(t){var o=s({},window.ss,t),i=o.store,a=o.apolloClient;return c.default.createElement(d.ApolloProvider,{store:i,client:a},c.default.createElement(n,this.props))}return c.default.createElement(n,this.props)}return null}}]),r}(u.Component);return r.contextTypes=w.default,r.childContextTypes=w.default,(n||p.default)((0,m.default)(r))};t.default=T},412:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(153),f=r(d),p=function(e){return function(t){var n=function(n){function r(){return o(this,r),i(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return a(r,n),l(r,[{key:"getChildContext",value:function(){return{injector:s({},this.context.injector,{context:e})}}},{key:"render",value:function(){return c.default.createElement(t,this.props)}}]),r}(u.Component);return n.contextTypes=f.default,n.childContextTypes=f.default,n}};t.default=p},413:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={SET_BREADCRUMBS:"SET_BREADCRUMBS"}},414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={SET_CONFIG:"SET_CONFIG"}},415:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={TOGGLE_MENU:"TOGGLE_MENU",OPEN_MENU:"OPEN_MENU",CLOSE_MENU:"CLOSE_MENU"}},416:function(e,t,n){"use strict";function r(){return{type:s.default.TOGGLE_MENU,payload:null}}function o(){return{type:s.default.OPEN_MENU,payload:null}}function i(){return{type:s.default.CLOSE_MENU,payload:null}}Object.defineProperty(t,"__esModule",{value:!0}),t.toggleMobileMenu=r,t.openMobileMenu=o,t.closeMobileMenu=i;var a=n(415),s=function(e){return e&&e.__esModule?e:{default:e}}(a)},417:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={FETCH_RECORDS_REQUEST:"FETCH_RECORDS_REQUEST",FETCH_RECORDS_FAILURE:"FETCH_RECORDS_FAILURE",FETCH_RECORDS_SUCCESS:"FETCH_RECORDS_SUCCESS",FETCH_RECORD_REQUEST:"FETCH_RECORD_REQUEST",FETCH_RECORD_FAILURE:"FETCH_RECORD_FAILURE",FETCH_RECORD_SUCCESS:"FETCH_RECORD_SUCCESS",DELETE_RECORD_REQUEST:"DELETE_RECORD_REQUEST",DELETE_RECORD_FAILURE:"DELETE_RECORD_FAILURE",DELETE_RECORD_SUCCESS:"DELETE_RECORD_SUCCESS"}},418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={SET_SCHEMA:"SET_SCHEMA",SET_SCHEMA_STATE_OVERRIDES:"SET_SCHEMA_STATE_OVERRIDES",SET_SCHEMA_LOADING:"SET_SCHEMA_LOADING"};t.default=r},419:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={TREEFIELD_SET_VISIBLE:"TREEDROPDOWNFIELD_SET_VISIBLE",TREEFIELD_UPDATED_TREE:"TREEDROPDOWNFIELD_UPDATED_TREE",TREEFIELD_UPDATING_TREE:"TREEDROPDOWNFIELD_UPDATING_TREE",TREEFIELD_UPDATE_FAILED:"TREEFIELD_UPDATE_FAILED",TREEFIELD_SET_SEARCH:"TREEFIELD_SET_SEARCH",TREEFIELD_ADD_SELECTED_VALUES:"TREEFIELD_ADD_SELECTED_VALUES"}},420:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={ADD_FORM_CHANGED:"ADD_FORM_CHANGED",REMOVE_FORM_CHANGED:"REMOVE_FORM_CHANGED"}},47:function(e,t){e.exports=FieldHolder},772:function(e,t){e.exports=Backend},773:function(e,t){e.exports=Config},774:function(e,t){e.exports=FormBuilderModal},775:function(e,t){e.exports=ReactApollo},776:function(e,t){e.exports=ReactRouterRedux},777:function(e,t){e.exports=TreeDropdownField},778:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=p.default.get("absoluteBaseUrl"),t=(0,m.default)(e),n=t.reducer();(0,b.default)(),(0,_.default)({apollo:n});var r=[d.default,t.middleware()],o=p.default.get("debugging"),i=u.applyMiddleware.apply(void 0,r);o&&(i=(0,T.default)(i));var s=i(u.createStore);window.ss.apolloClient=t;var c=new a.default(null,t);(0,C.default)(),l.default.ready(function(){var e=(0,u.combineReducers)(l.default.reducer.getAll()),t=s(e,{});t.dispatch((0,y.setConfig)(p.default.getAll())),l.default.reducer.setStore(t),window.ss.store=t,c.setStore(t),c.start(window.location.pathname),window.jQuery&&window.jQuery("body").addClass("js-react-boot").addClass("js-injector-boot")}),window.setTimeout(function(){return l.default.load()},0)}var i=n(919),a=r(i),s=n(38),l=r(s),u=n(41),c=n(1934),d=r(c),f=n(773),p=r(f),h=n(922),m=r(h),y=n(975),v=n(923),b=r(v),g=n(924),_=r(g),w=n(920),T=r(w),P=n(921),C=r(P);window.ss=window.ss||{},window.onload=o},780:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this.defaultLocale="en_US",this.currentLocale=this.detectLocale(),this.lang={}}return o(e,[{key:"setLocale",value:function(e){this.currentLocale=e}},{key:"getLocale",value:function(){return null!==this.currentLocale?this.currentLocale:this.defaultLocale}},{key:"_t",value:function(e,t,n,r){var o=t||"";if(!this.lang)return o;for(var i=this.getLocale(),a=[i,i.replace(/_[\w]+/i,""),this.defaultLocale,this.defaultLocale.replace(/_[\w]+/i,"")],s=0;s<a.length;s++){var l=a[s];if(this.lang[l]&&this.lang[l][e])return this.lang[l][e]}return o}},{key:"addDictionary",value:function(e,t){void 0===this.lang[e]&&(this.lang[e]={});for(var n in t)this.lang[e][n]=t[n]}},{key:"getDictionary",value:function(e){return this.lang[e]}},{key:"stripStr",value:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}},{key:"stripStrML",value:function(e){for(var t=e.split("\n"),n=0;n<t.length;n+=1)t[n]=stripStr(t[n]);return stripStr(t.join(" "))}},{key:"sprintf",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(0===n.length)return e;var o=new RegExp("(.?)(%s)","g"),i=0;return e.replace(o,function(e,t,r,o,a){return"%"===t?e:t+n[i++]})}},{key:"inject",value:function(e,t){var n=new RegExp("{([A-Za-z0-9_]*)}","g");return e.replace(n,function(e,n,r,o){return t[n]?t[n]:e})}},{key:"detectLocale",value:function(){var t,n;if(!(t=document.body.getAttribute("lang")))for(var r=document.getElementsByTagName("meta"),o=0;o<r.length;o++)r[o].attributes["http-equiv"]&&"content-language"==r[o].attributes["http-equiv"].nodeValue.toLowerCase()&&(t=r[o].attributes.content.nodeValue);t||(t=this.defaultLocale);var i=t.match(/([^-|_]*)[-|_](.*)/);if(2==t.length){for(var a in e.lang)if(a.substr(0,2).toLowerCase()==t.toLowerCase()){n=a;break}}else i&&(n=i[1].toLowerCase()+"_"+i[2].toUpperCase());return n}},{key:"addEvent",value:function(e,t,n,r){return e.addEventListener?(e.addEventListener(t,n,r),!0):e.attachEvent?e.attachEvent("on"+t,n):void console.log("Handler could not be attached")}}]),e}(),a=new i;window.ss=void 0!==window.ss?window.ss:{},window.ss.i18n=window.i18n=a,t.default=a},781:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(22),i=r(o),a=n(12),s=r(a),l=n(0),u=r(l),c=n(26),d=r(c),f=n(38),p=(0,f.loadComponent)("FormBuilderModal");s.default.entwine("ss",function(e){e(".cms-content-actions .add-to-campaign-action,#add-to-campaign__action").entwine({onclick:function(){var t=e("#add-to-campaign__dialog-wrapper");return t.length||(t=e('<div id="add-to-campaign__dialog-wrapper" />'),e("body").append(t)),t.open(),!1}}),e(".add-to-campaign-modal .add-to-campaign-modal__nav-link").entwine({onclick:function(t){t.preventDefault();var n=e(t.target);window.location=n.attr("href")}}),e("#add-to-campaign__dialog-wrapper").entwine({onunmatch:function(){this._clearModal()},open:function(){this._renderModal(!0)},close:function(){this._renderModal(!1)},_renderModal:function(t){var n=this,r=function(){return n.close()},o=function(){return n._handleSubmitModal.apply(n,arguments)},a=e("form.cms-edit-form :input[name=ID]").val(),s=window.ss.store,l=s.getState().config.sections.find(function(e){return"SilverStripe\\CMS\\Controllers\\CMSPageEditController"===e.name}),c=l.form.AddToCampaignForm.schemaUrl+"/"+a,f=i.default._t("Admin.ADD_TO_CAMPAIGN","Add to campaign");d.default.render(u.default.createElement(p,{title:f,show:t,onSubmit:o,onHide:r,schemaUrl:c,bodyClassName:"modal__dialog",className:"add-to-campaign-modal",responseClassBad:"modal__response modal__response--error",responseClassGood:"modal__response modal__response--good",identifier:"Admin.AddToCampaign"}),this[0])},_clearModal:function(){d.default.unmountComponentAtNode(this[0])},_handleSubmitModal:function(e,t,n){return n()}})})},782:function(e,t,n){"use strict";var r=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(r);(0,o.default)(document).on("click",".confirmedpassword .showOnClick a",function(){var e=(0,o.default)(".showOnClickContainer",(0,o.default)(this).parent());return e.toggle("fast",function(){e.find('input[type="hidden"]').val(e.is(":visible")?1:0)}),!1})},783:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(12),i=r(o),a=n(22),s=r(a),l=n(176),u=r(l),c=n(175),d=r(c);n(149),i.default.entwine("ss",function(e){e("input[type=datetime-local]").entwine({onadd:function(){if(!d.default.inputtypes["datetime-local"]&&!(this.prop("disabled")||this.prop("readonly")||this.hasClass("hasDatepicker"))){var t=e("<input/>",{type:"hidden",name:this.attr("name"),value:this.val()});this.parent().append(t),this.removeAttr("name"),u.default.locale(this.attr("lang"));var n=this.val(),r="";if(n){var o=(0,u.default)(n);o.isValid()&&(r=o.format("L LT"))}this.val(r);var i=s.default.inject(s.default._t("Admin.FormatExample","Example: {format}"),{format:(0,u.default)().endOf("month").format("L LT")});this.attr("placeholder",i),this.updateValue()}},onchange:function(){this.updateValue()},updateValue:function(){var e=this.val(),t="";if(e){var n=(0,u.default)(e,["L LT",u.default.ISO_8601]);n.isValid()&&(t=n.format("YYYY-MM-DDTHH:mm:ss"))}this.parent().find("input[type=hidden]").val(t)}})})},784:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(12),i=r(o),a=n(22),s=r(a);n(150),n(149),i.default.entwine("ss",function(e){e(".grid-field").entwine({onmatch:function(){this.needsColumnFix()&&(this.fixColumns(),this.injectSearchButton(!1))},reload:function(t,n){var r=this,o=this.closest("form"),i=this.find(":input:focus").attr("name"),a=o.find(":input").serializeArray();t||(t={}),t.data||(t.data=[]),t.data=t.data.concat(a),window.location.search&&(t.data=window.location.search.replace(/^\?/,"")+"&"+e.param(t.data)),o.addClass("loading"),e.ajax(e.extend({},{headers:{"X-Pjax":"CurrentField"},type:"POST",url:this.data("url"),dataType:"html",success:function(a){if(r.empty().append(e(a).children()),i&&r.find(':input[name="'+i+'"]').focus(),r.find(".grid-field__filter-header").length){var s="show"===t.data[0].filter;r.needsColumnFix()&&r.fixColumns(),r.injectSearchButton(s)}o.removeClass("loading"),n&&n.apply(this,arguments),r.trigger("reload",r),r.trigger("change")},error:function(e){alert(s.default._t("Admin.ERRORINTRANSACTION")),o.removeClass("loading")}},t))},showDetailView:function(e){window.location.href=e},getItems:function(){return this.find(".ss-gridfield-item")},setState:function(e,t){var n=this.getState();n[e]=t,this.find(':input[name="'+this.data("name")+'[GridState]"]').val(JSON.stringify(n))},getState:function(){return JSON.parse(this.find(':input[name="'+this.data("name")+'[GridState]"]').val())},needsColumnFix:function(){return this.find(".grid-field__filter-header").length&&!this.find(".grid-field__col-compact").length&&!this.find("th.col-Actions").length},fixColumns:function(t){this.find(".sortable-header").append('<th class="main col-Actions" />'),this.find("tbody tr").each(function(){e(this).find("td:last").attr("colspan",2)});var n=e('<th class="extra" />');e(".grid-field__filter-header th:last .action").each(function(){e(this).detach(),n.append(e(this))}),e(".grid-field__filter-header").append(n)},injectSearchButton:function(e){var t;e?(t='<span class="non-sortable"></span>',this.addClass("show-filter").find(".grid-field__filter-header").show()):(t='<button type="button" title="Open search and filter" name="showFilter" class="btn btn-secondary font-icon-search btn--no-text btn--icon-large grid-field__filter-open"></button>',this.removeClass("show-filter").find(".grid-field__filter-header").hide()),this.find(".sortable-header th:last").html(t)}}),e(".grid-field *").entwine({getGridField:function(){return this.closest(".grid-field")}}),e(".grid-field :button[name=showFilter]").entwine({onclick:function(e){this.closest(".grid-field__table").find(".grid-field__filter-header").show().find(":input:first").focus(),this.closest(".grid-field").addClass("show-filter"),this.parent().html('<span class="non-sortable"></span>'),e.preventDefault()}}),e(".grid-field .ss-gridfield-item").entwine({onclick:function(t){if(e(t.target).closest(".action").length)return this._super(t),!1;var n=this.find(".edit-link");n.length&&this.getGridField().showDetailView(n.prop("href"))},onmouseover:function(){this.find(".edit-link").length&&this.css("cursor","pointer")},onmouseout:function(){this.css("cursor","default")}}),e(".grid-field .action.action_import:button").entwine({onclick:function(e){e.preventDefault(),this.openmodal()},onmatch:function(){this._super(),"open"===this.data("state")&&this.openmodal()},onunmatch:function(){this._super()},openmodal:function(){var t=e(this.data("target")),n=e(this.data("modal"));t.length<1?(t=n,t.appendTo(document.body)):t.innerHTML=n.innerHTML;var r=e(".modal-backdrop");r.length<1&&(r=e('<div class="modal-backdrop fade"></div>'),r.appendTo(document.body)),t.find("[data-dismiss]").on("click",function(){r.removeClass("show"),t.removeClass("show"),setTimeout(function(){r.remove()},150)}),setTimeout(function(){r.addClass("show"),t.addClass("show")},0)}}),e(".grid-field .action:button").entwine({onclick:function(e){var t="show";if(this.is(":disabled"))return void e.preventDefault();!this.hasClass("ss-gridfield-button-close")&&this.closest(".grid-field").hasClass("show-filter")||(t="hidden"),this.getGridField().reload({data:[{name:this.attr("name"),value:this.val(),filter:t}]}),e.preventDefault()},actionurl:function(){var t=this.closest(":button"),n=this.getGridField(),r=this.closest("form"),o=r.find(":input.gridstate").serialize(),i=r.find('input[name="SecurityID"]').val();o+="&"+encodeURIComponent(t.attr("name"))+"="+encodeURIComponent(t.val()),i&&(o+="&SecurityID="+encodeURIComponent(i)),window.location.search&&(o=window.location.search.replace(/^\?/,"")+"&"+o);var a=-1==n.data("url").indexOf("?")?"?":"&";return e.path.makeUrlAbsolute(n.data("url")+a+o,e("base").attr("href"))}}),e(".grid-field .add-existing-autocompleter").entwine({onbuttoncreate:function(){var e=this;this.toggleDisabled(),this.find('input[type="text"]').on("keyup",function(){e.toggleDisabled()})},onunmatch:function(){this.find('input[type="text"]').off("keyup")},toggleDisabled:function(){var e=this.find(".ss-ui-button"),t=this.find('input[type="text"]'),n=""!==t.val(),r=e.is(":disabled");(n&&r||!n&&!r)&&e.attr("disabled",!r)}}),e(".grid-field .grid-field__col-compact .action.gridfield-button-delete, .cms-edit-form .btn-toolbar button.action.action-delete").entwine({onclick:function(e){if(!confirm(s.default._t("Admin.DELETECONFIRMMESSAGE")))return e.preventDefault(),!1;this._super(e)}}),e(".grid-field .grid-print-button.action:button").entwine({UUID:null,onmatch:function(){this._super(),this.setUUID((new Date).getTime())},onunmatch:function(){this._super()},onclick:function(e){var t=this.actionurl();return window.open(t),e.preventDefault(),!1}}),e(".ss-gridfield-print-iframe").entwine({onmatch:function(){this._super(),this.hide().bind("load",function(){this.focus(),(this.contentWindow||this).print()})},onunmatch:function(){this._super()}}),e(".grid-field .action.no-ajax, .grid-field .no-ajax .action:button").entwine({onclick:function(e){return window.location.href=this.actionurl(),e.preventDefault(),!1}}),e(".grid-field .action-detail").entwine({onclick:function(){return this.getGridField().showDetailView(e(this).prop("href")),!1}}),e(".grid-field[data-selectable]").entwine({getSelectedItems:function(){return this.find(".ss-gridfield-item.ui-selected")},getSelectedIDs:function(){return e.map(this.getSelectedItems(),function(t){return e(t).data("id")})}}),e(".grid-field[data-selectable] .ss-gridfield-items").entwine({onadd:function(){this._super(),this.selectable()},onremove:function(){this._super(),this.data("selectable")&&this.selectable("destroy")}}),e(".grid-field .grid-field__filter-header :input").entwine({onmatch:function(){var e=this.closest(".extra").find(".ss-gridfield-button-filter"),t=this.closest(".extra").find(".ss-gridfield-button-reset");this.val()&&(e.addClass("filtered"),t.addClass("filtered")),this._super()},onunmatch:function(){this._super()},onkeydown:function(e){if(!this.closest(".ss-gridfield-button-reset").length){var t=this.closest(".extra").find(".ss-gridfield-button-filter"),n=this.closest(".extra").find(".ss-gridfield-button-reset");if("13"==e.keyCode){var r=this.closest(".grid-field__filter-header").find(".ss-gridfield-button-filter"),o="show";return!this.hasClass("ss-gridfield-button-close")&&this.closest(".grid-field").hasClass("show-filter")||(o="hidden"),this.getGridField().reload({data:[{name:r.attr("name"),value:r.val(),filter:o}]}),!1}t.addClass("hover-alike"),n.addClass("hover-alike")}}}),e(".grid-field .relation-search").entwine({onfocusin:function(t){this.autocomplete({source:function(t,n){var r=e(this.element);e(this.element).closest("form"),e.ajax({headers:{"X-Pjax":"Partial"},dataType:"json",type:"GET",url:e(r).data("searchUrl"),data:encodeURIComponent(r.attr("name"))+"="+encodeURIComponent(r.val()),success:n,error:function(e){alert(s.default._t("Admin.ERRORINTRANSACTION","An error occured while fetching data from the server\n Please try again later."))}})},select:function(t,n){var r=e('<input type="hidden" name="relationID" class="action_gridfield_relationfind no-change-track" />');r.val(n.item.id),e(this).closest(".grid-field").find(".action_gridfield_relationfind").replaceWith(r),e(this).closest(".grid-field").find(".action_gridfield_relationadd").removeAttr("disabled")}})}}),e(".grid-field .pagination-page-number input").entwine({onkeydown:function(t){if(13==t.keyCode){var n=parseInt(e(this).val(),10),r=e(this).getGridField();return r.setState("GridFieldPaginator",{currentPage:n}),r.reload(),!1}}})})},785:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _jquery=__webpack_require__(12),_jquery2=_interopRequireDefault(_jquery),ss=void 0!==window.ss?window.ss:{};ss.editorWrappers={},ss.editorWrappers.tinyMCE=function(){var editorID;return{init:function(e){editorID=e,this.create()},destroy:function(){tinymce.EditorManager.execCommand("mceRemoveEditor",!1,editorID)},getInstance:function(){return tinymce.EditorManager.get(editorID)},onopen:function(){},onclose:function(){},getConfig:function(){var e="#"+editorID,t=(0,_jquery2.default)(e).data("config"),n=this;return t.selector=e,t.setup=function(e){e.on("change",function(){n.save()})},t},save:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.getInstance();t.save(),e.silent||(0,_jquery2.default)(t.getElement()).trigger("change")},create:function(){var e=this.getConfig();void 0!==e.baseURL&&(tinymce.EditorManager.baseURL=e.baseURL),tinymce.init(e)},repaint:function(){},isDirty:function(){return this.getInstance().isDirty()},getContent:function(){return this.getInstance().getContent()},getDOM:function(){return this.getInstance().getElement()},getContainer:function(){return this.getInstance().getContainer()},getSelectedNode:function(){return this.getInstance().selection.getNode()},selectNode:function(e){this.getInstance().selection.select(e)},setContent:function(e,t){this.getInstance().setContent(e,t)},insertContent:function(e,t){this.getInstance().insertContent(e,t)},replaceContent:function(e,t){this.getInstance().execCommand("mceReplaceContent",!1,e,t)},insertLink:function(e,t,n){if(n){var r=this.getInstance().dom.create("a",e,n);this.getInstance().selection.setNode(r)}else this.getInstance().execCommand("mceInsertLink",!1,e,t)},removeLink:function(){this.getInstance().execCommand("unlink",!1)},cleanLink:function cleanLink(href,node){var settings=this.getConfig,cb=settings.urlconverter_callback,cu=tinyMCE.settings.convert_urls;return cb&&(href=eval(cb+"(href, node, true);")),cu&&href.match(new RegExp("^"+tinyMCE.settings.document_base_url+"(.*)$"))&&(href=RegExp.$1),href.match(/^javascript:\s*mctmp/)&&(href=""),href},createBookmark:function(){return this.getInstance().selection.getBookmark()},moveToBookmark:function(e){this.getInstance().selection.moveToBookmark(e),this.getInstance().focus()},blur:function(){this.getInstance().selection.collapse()},addUndo:function(){this.getInstance().undoManager.add()}}},ss.editorWrappers.default=ss.editorWrappers.tinyMCE,_jquery2.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({Editor:null,onadd:function(){var e=this.data("editor")||"default",t=ss.editorWrappers[e]();this.setEditor(t),t.init(this.attr("id")),this._super()},onremove:function(){this.getEditor().destroy(),this._super()},"from .cms-edit-form":{onbeforesubmitform:function(){this.getEditor().save({silent:!0}),this._super()}},openLinkDialog:function(){this.openDialog("link")},openMediaDialog:function(){this.openDialog("media")},openEmbedDialog:function(){this.openDialog("embed")},openDialog:function(t){if("media"===t&&window.InsertMediaModal){var n=e("#insert-media-react__dialog-wrapper");return n.length||(n=e('<div id="insert-media-react__dialog-wrapper" class="insert-link__dialog-wrapper" />'),e("body").append(n)),n.setElement(this),void n.open()}if("embed"===t&&window.InsertEmbedModal){var r=e("#insert-embed-react__dialog-wrapper");return r.length||(r=e('<div id="insert-embed-react__dialog-wrapper" />'),e("body").append(r)),r.setElement(this),void r.open()}throw new Error("Dialog named "+t+" is not available.")}})})},786:function(e,t,n){"use strict";var r=n(12);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.entwine("ss",function(e){e(".ss-tabset.ss-ui-action-tabset").entwine({IgnoreTabState:!0,onadd:function(){this._super(),this.tabs({collapsible:!0,active:!1})},onremove:function(){e(".cms-container").find("iframe").each(function(t,n){try{e(n).contents().off("click.ss-ui-action-tabset")}catch(e){console.warn("Unable to access iframe, possible https mis-match")}}),e(document).off("click.ss-ui-action-tabset"),this._super()},ontabsbeforeactivate:function(e,t){this.riseUp(e,t)},onclick:function(e,t){this.attachCloseHandler(e,t)},attachCloseHandler:function(t,n){var r,o=this,i=e(".cms-container").find("iframe");r=function(t){var n,i;n=e(t.target).closest(".ss-ui-action-tabset .ui-tabs-panel"),e(t.target).closest(o).length||n.length||(o.tabs("option","active",!1),i=e(".cms-container").find("iframe"),i.each(function(t,n){e(n).contents().off("click.ss-ui-action-tabset",r)}),e(document).off("click.ss-ui-action-tabset",r))},e(document).on("click.ss-ui-action-tabset",r),i.length>0&&i.each(function(t,n){e(n).contents().on("click.ss-ui-action-tabset",r)})},riseUp:function(t,n){var r,o,i,a,s,l,u,c,d;return r=e(this).find(".ui-tabs-panel").outerHeight(),o=e(this).find(".ui-tabs-nav").outerHeight(),i=e(window).height()+e(document).scrollTop()-o,a=e(this).find(".ui-tabs-nav").offset().top,s=n.newPanel,l=n.newTab,a+r>=i&&a-r>0?(this.addClass("rise-up"),null!==l.position()&&(u=-s.outerHeight(),c=s.parents(".toolbar--south"),c&&(d=l.offset().top-c.offset().top,u-=d),e(s).css("top",u+"px"))):(this.removeClass("rise-up"),null!==l.position()&&e(s).css("bottom","100%")),!1}}),e(".cms-content-actions .ss-tabset.ss-ui-action-tabset").entwine({ontabsbeforeactivate:function(t,n){this._super(t,n),e(n.newPanel).length>0&&e(n.newPanel).css("left",n.newTab.position().left+"px")}}),e(".cms-actions-row.ss-tabset.ss-ui-action-tabset").entwine({ontabsbeforeactivate:function(t,n){this._super(t,n),e(this).closest(".ss-ui-action-tabset").removeClass("tabset-open tabset-open-last")}}),e(".cms-content-fields .ss-tabset.ss-ui-action-tabset").entwine({ontabsbeforeactivate:function(t,n){this._super(t,n),e(n.newPanel).length>0&&(e(n.newTab).hasClass("last")?(e(n.newPanel).css({left:"auto",right:"0px"}),e(n.newPanel).parent().addClass("tabset-open-last")):(e(n.newPanel).css("left",n.newTab.position().left+"px"),e(n.newTab).hasClass("first")&&(e(n.newPanel).css("left","0px"),e(n.newPanel).parent().addClass("tabset-open"))))}}),e(".cms-tree-view-sidebar .cms-actions-row.ss-tabset.ss-ui-action-tabset").entwine({"from .ui-tabs-nav li":{onhover:function(t){e(t.target).parent().find("li .active").removeClass("active"),e(t.target).find("a").addClass("active")}},ontabsbeforeactivate:function(t,n){this._super(t,n),e(n.newPanel).css({left:"auto",right:"auto"}),e(n.newPanel).length>0&&e(n.newPanel).parent().addClass("tabset-open")}})})},787:function(e,t,n){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}var r=n(12),o=t(r),i=n(22),a=t(i);o.default.entwine("ss.tree",function(t){t("#Form_BatchActionsForm").entwine({Actions:[],getTree:function(){return t(".cms-tree")},fromTree:{oncheck_node:function(e,t){this.serializeFromTree()},onuncheck_node:function(e,t){this.serializeFromTree()}},onmatch:function(){var e=this;e.getTree().bind("load_node.jstree",function(t,n){e.refreshSelected()})},onunmatch:function(){this.getTree().unbind("load_node.jstree")},registerDefault:function(){this.register("publish",function(e){return!!confirm(a.default.inject(a.default._t("Admin.BATCH_PUBLISH_PROMPT","You have {num} page(s) selected.\n\nDo you really want to publish?"),{num:e.length}))&&e}),this.register("unpublish",function(e){return!!confirm(a.default.inject(a.default._t("Admin.BATCH_UNPUBLISH_PROMPT","You have {num} page(s) selected.\n\nDo you really want to unpublish"),{num:e.length}))&&e}),this.register("delete",function(e){return!!confirm(a.default.inject(a.default._t("Admin.BATCH_DELETE_PROMPT","You have {num} page(s) selected.\n\nAre you sure you want to delete these pages?\n\nThese pages and all of their children pages will be deleted and sent to the archive."),{num:e.length}))&&e}),this.register("restore",function(e){return!!confirm(a.default.inject(a.default._t("Admin.BATCH_RESTORE_PROMPT","You have {num} page(s) selected.\n\nDo you really want to restore to stage?\n\nChildren of archived pages will be restored to the root level, unless those pages are also being restored."),{num:e.length}))&&e})},onadd:function(){this.registerDefault(),this._super()},register:function(e,t){this.trigger("register",{type:e,callback:t});var n=this.getActions();n[e]=t,this.setActions(n)},unregister:function(e){this.trigger("unregister",{type:e});var t=this.getActions();t[e]&&delete t[e],this.setActions(t)},refreshSelected:function(n){var r=this,o=this.getTree(),i=this.getIDs(),a=[],s=t(".cms-content-batchactions-button"),l=this.find(":input[name=Action]").val();null==n&&(n=o);for(var u in i)t(t(o).getNodeByID(u)).addClass("selected").attr("selected","selected");if(!l||-1==l||!s.hasClass("active"))return void t(n).find("li").each(function(){t(this).setEnabled(!0)});t(n).find("li").each(function(){a.push(t(this).data("id")),t(this).addClass("treeloading").setEnabled(!1)});var c=t.path.parseUrl(l),d=c.hrefNoSearch+"/applicablepages/";d=t.path.addSearchParams(d,c.search),d=t.path.addSearchParams(d,{csvIDs:a.join(",")}),e.getJSON(d,function(o){e(n).find("li").each(function(){t(this).removeClass("treeloading");var e=t(this).data("id");0==e||t.inArray(e,o)>=0?t(this).setEnabled(!0):(t(this).removeClass("selected").setEnabled(!1),t(this).prop("selected",!1))}),r.serializeFromTree()})},serializeFromTree:function(){var e=this.getTree(),t=e.getSelectedIDs();return this.setIDs(t),!0},setIDs:function(e){this.find(":input[name=csvIDs]").val(e?e.join(","):null)},getIDs:function(){var e=this.find(":input[name=csvIDs]").val();return e?e.split(","):[]},onsubmit:function(n){var r=this,o=this.getIDs(),i=this.getTree(),s=this.getActions();if(!o||!o.length)return alert(a.default._t("Admin.SELECTONEPAGE","Please select at least one page")),n.preventDefault(),!1;var l=this.find(":input[name=Action]").val();if(!l)return n.preventDefault(),!1;var u=l.split("/").filter(function(e){return!!e}).pop();if(s[u]&&(o=s[u].apply(this,[o])),!o||!o.length)return n.preventDefault(),!1;this.setIDs(o),i.find("li").removeClass("failed");var c=this.find(":submit:first");return c.addClass("loading"),e.ajax({url:l,type:"POST",data:this.serializeArray(),complete:function(e,t){c.removeClass("loading"),i.jstree("refresh",-1),r.setIDs([]),r.find(":input[name=Action]").val("").change();var n=e.getResponseHeader("X-Status");n&&statusMessage(decodeURIComponent(n),"success"==t?"good":"bad")},success:function(e,n){var r,o;if(e.modified){var a=[];for(r in e.modified)o=i.getNodeByID(r),i.jstree("set_text",o,e.modified[r].TreeTitle),a.push(o);t(a).effect("highlight")}if(e.deleted)for(r in e.deleted)o=i.getNodeByID(r),o.length&&i.jstree("delete_node",o);if(e.error)for(r in e.error)o=i.getNodeByID(r),t(o).addClass("failed")},dataType:"json"}),n.preventDefault(),!1}}),t(".cms-content-batchactions-button").entwine({onmatch:function(){this._super(),this.updateTree()},onunmatch:function(){this._super()},onclick:function(e){this.updateTree()},updateTree:function(){var e=t(".cms-tree"),n=t("#Form_BatchActionsForm");this._super(),this.data("active")?(e.addClass("multiple"),e.removeClass("draggable"),n.serializeFromTree()):(e.removeClass("multiple"),e.addClass("draggable")),t("#Form_BatchActionsForm").refreshSelected()}}),t("#Form_BatchActionsForm select[name=Action]").entwine({onchange:function(e){t(e.target.form).find(":submit"),t(e.target).val(),t("#Form_BatchActionsForm").refreshSelected(),this.trigger("chosen:updated"),this._super(e)}})})}).call(t,n(12))},788:function(e,t,n){"use strict";var r=n(12);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.entwine("ss",function(e){e(".cms-content").entwine({onadd:function(){this.find(".cms-tabset").redrawTabs(),this._super()},redraw:function(){window.debug&&console.log("redraw",this.attr("class"),this.get(0)),this.add(this.find(".cms-tabset")).redrawTabs(),this.find(".cms-content-header").redraw(),this.find(".cms-content-actions").redraw()}}),e(".cms-content .cms-tree").entwine({onadd:function(){var t=this;this._super(),this.bind("select_node.jstree",function(n,r){var o=r.rslt.obj,i=t.find(":input[name=ID]").val(),a=r.args[2],s=e(".cms-container");if(!a)return!1;if(e(o).hasClass("disabled"))return!1;if(e(o).data("id")!=i){var l=e(o).find("a:first").attr("href");l&&"#"!=l?(l=l.split("?")[0],t.jstree("deselect_all"),t.jstree("uncheck_all"),e.path.isExternal(e(o).find("a:first"))&&(l=l=e.path.makeUrlAbsolute(l,e("base").attr("href"))),document.location.search&&(l=e.path.addSearchParams(l,document.location.search.replace(/^\?/,""))),s.loadPanel(l)):t.removeForm()}})}}),e(".cms-content .cms-content-fields").entwine({redraw:function(){window.debug&&console.log("redraw",this.attr("class"),this.get(0))}}),e(".cms-content .cms-content-actions").entwine({redraw:function(){window.debug&&console.log("redraw",this.attr("class"),this.get(0)),this.height("auto");var e=parseInt(this.css("padding-top"),10),t=parseInt(this.css("padding-bottom"),10);this.height(this.innerHeight()-e-t)}})})},789:function(e,t,n){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}var r=n(12),o=t(r),i=n(22),a=t(i),s=window.onbeforeunload;window.onbeforeunload=function(e){var t=(0,o.default)(".cms-edit-form");return t.trigger("beforesubmitform"),t.is(".changed")&&!t.is(".discardchanges")?a.default._t("Admin.CONFIRMUNSAVEDSHORT"):"function"==typeof s?s():void 0},o.default.entwine("ss",function(e){e(".cms-edit-form").entwine({PlaceholderHtml:"",ChangeTrackerOptions:{ignoreFieldSelector:".no-change-track, .ss-upload :input, .cms-navigator :input"},ValidationErrorShown:!1,onadd:function(){this.attr("autocomplete","off"),this._setupChangeTracker();for(var e in{action:!0,method:!0,enctype:!0,name:!0}){var t=this.find(":input[name=_form_"+e+"]");t&&(this.attr(e,t.val()),t.remove())}this.setValidationErrorShown(!1),this._super()},"from .cms-tabset":{onafterredrawtabs:function(){if(this.hasClass("validationerror")){var t=this.find(".message.validation, .message.required").first().closest(".tab");e(".cms-container").clearCurrentTabState();var n=t.closest(".ss-tabset");n.length||(n=t.closest(".cms-tabset")),n.length?n.tabs("option","active",t.index(".tab")):this.getValidationErrorShown()||(this.setValidationErrorShown(!0),l(ss.i18n._t("Admin.VALIDATIONERROR","Validation Error")))}}},onremove:function(){this.changetracker("destroy"),this._super()},onmatch:function(){this._super()},onunmatch:function(){this._super()},redraw:function(){window.debug&&console.log("redraw",this.attr("class"),this.get(0)),this.add(this.find(".cms-tabset")).redrawTabs(),this.find(".cms-content-header").redraw()},_setupChangeTracker:function(){this.changetracker(this.getChangeTrackerOptions())},confirmUnsavedChanges:function(){if(this.trigger("beforesubmitform"),!this.is(".changed")||this.is(".discardchanges"))return!0;if(this.find(".btn-toolbar :submit.btn--loading.loading").length>0)return!0;var e=confirm(a.default._t("Admin.CONFIRMUNSAVED"));return e&&this.addClass("discardchanges"),e},onsubmit:function(e,t){if("_blank"!=this.prop("target"))return t&&this.closest(".cms-container").submitForm(this,t),!1},validate:function(){return this.trigger("validate",{isValid:!0}),!0},"from .htmleditor":{oneditorinit:function(t){var n=this,r=e(t.target).closest(".field.htmleditor");r.find("textarea.htmleditor").getEditor().getInstance().onClick.add(function(e){n.saveFieldFocus(r.attr("id"))})}},"from .cms-edit-form :input:not(:submit)":{onclick:function(t){this.saveFieldFocus(e(t.target).attr("id"))},onfocus:function(t){this.saveFieldFocus(e(t.target).attr("id"))}},"from .cms-edit-form .treedropdown *":{onfocusin:function(t){var n=e(t.target).closest(".field.treedropdown");this.saveFieldFocus(n.attr("id"))}},"from .cms-edit-form .dropdown .chosen-container a":{onfocusin:function(t){var n=e(t.target).closest(".field.dropdown");this.saveFieldFocus(n.attr("id"))}},"from .cms-container":{ontabstaterestored:function(e){this.restoreFieldFocus()}},saveFieldFocus:function(t){if(void 0!==window.sessionStorage&&null!==window.sessionStorage){var n=e(this).attr("id"),r=[];if(r.push({id:n,selected:t}),r)try{window.sessionStorage.setItem(n,JSON.stringify(r))}catch(e){if(e.code===DOMException.QUOTA_EXCEEDED_ERR&&0===window.sessionStorage.length)return;throw e}}},restoreFieldFocus:function(){if(void 0!==window.sessionStorage&&null!==window.sessionStorage){var t,n,r,o,i,a=this,s=void 0!==window.sessionStorage&&window.sessionStorage,l=s?window.sessionStorage.getItem(this.attr("id")):null,u=!!l&&JSON.parse(l),c=0!==this.find(".ss-tabset").length;if(s&&u.length>0){if(e.each(u,function(n,r){a.is("#"+r.id)&&(t=e("#"+r.selected))}),e(t).length<1)return void this.focusFirstInput();if(n=e(t).closest(".ss-tabset").find(".ui-tabs-nav .ui-tabs-active .ui-tabs-anchor").attr("id"),r="tab-"+e(t).closest(".ss-tabset .ui-tabs-panel").attr("id"),c&&r!==n)return;o=e(t).closest(".togglecomposite"),o.length>0&&o.accordion("activate",o.find(".ui-accordion-header")),i=e(t).position().top,e(t).is(":visible")||(t="#"+e(t).closest(".field").attr("id"),i=e(t).position().top),e(t).focus(),i>e(window).height()/2&&a.find(".cms-content-fields").scrollTop(i)}else this.focusFirstInput()}},focusFirstInput:function(){this.find(':input:not(:submit)[data-skip-autofocus!="true"]').filter(":visible:first").focus()}}),e(".cms-edit-form .btn-toolbar input.action[type=submit], .cms-edit-form .btn-toolbar button.action").entwine({onclick:function(e){return this.is(":disabled")?(e.preventDefault(),!1):!1===this._super(e)||e.defaultPrevented||e.isDefaultPrevented()?void 0:(this.parents("form").trigger("submit",[this]),e.preventDefault(),!1)}}),e(".cms-edit-form .btn-toolbar input.action[type=submit].ss-ui-action-cancel, .cms-edit-form .btn-toolbar button.action.ss-ui-action-cancel").entwine({onclick:function(e){window.history.length>1?window.history.back():this.parents("form").trigger("submit",[this]),e.preventDefault()}}),e(".cms-edit-form .ss-tabset").entwine({onmatch:function(){if(!this.hasClass("ss-ui-action-tabset")){var e=this.find("> ul:first");1==e.children("li").length&&e.hide().parent().addClass("ss-tabset-tabshidden")}this._super()},onunmatch:function(){this._super()}}),e('.cms-edit-form [name="CanViewType"], .cms-edit-form [name="CanEditType"], .cms-edit-form [name="CanCreateTopLevelType"]').entwine({onmatch:function(){"OnlyTheseUsers"===this.val()&&(this.is(":checked")?this.showList(!0):this.hideList(!0))},onchange:function(e){"OnlyTheseUsers"===e.target.value?this.showList():this.hideList()},showList:function(e){var t=this.closest(".field"),n=t.next().filter(".listbox, .treedropdown, .treemultiselect");t.addClass("field--merge-below"),e?n.show().css("overflow","visible"):n.slideDown(function(){n.css("overflow","visible")})},hideList:function(e){var t=this.closest(".field"),n=t.next().filter(".listbox, .treedropdown, .treemultiselect");n.css("overflow","hidden"),e?(n.hide().css("display","none"),t.removeClass("field--merge-below")):n.slideUp(function(){t.removeClass("field--merge-below")})}})});var l=function(t){e.noticeAdd({text:t,type:"error",stayTime:5e3,inEffect:{left:"0",opacity:"show"}})}}).call(t,n(12))},790:function(e,t,n){"use strict";var r=n(12);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.entwine("ss",function(e){e(".cms-description-toggle").entwine({onadd:function(){var e=!1,t=this.prop("id").substr(0,this.prop("id").indexOf("_Holder")),n=this.find(".cms-description-trigger"),r=this.find(".description");this.hasClass("description-toggle-enabled")||(0===n.length&&(n=this.find(".middleColumn").first().after('<label class="right" for="'+t+'"><a class="cms-description-trigger" href="javascript:void(0)"><span class="btn-icon-information"></span></a></label>').next()),this.addClass("description-toggle-enabled"),n.on("click",function(){r[e?"hide":"show"](),e=!e}),r.hide())}})})},791:function(e,t,n){"use strict";var r=n(12);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.entwine("ss",function(e){e(".cms .field.cms-description-tooltip").entwine({onmatch:function(){this._super();var e=this.find(".description");e.length&&(this.attr("title",e.text()).tooltip({content:e.html()}),e.remove())}}),e(".cms .field.cms-description-tooltip :input").entwine({onfocusin:function(e){this.closest(".field").tooltip("open")},onfocusout:function(e){this.closest(".field").tooltip("close")}})})},792:function(e,t,n){"use strict";var r=n(12);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.entwine("ss",function(e){e(".cms-panel.cms-menu").entwine({togglePanel:function(t,n,r){e(".cms-menu__list").children("li").each(function(){t?e(this).children("ul").each(function(){e(this).removeClass("collapsed-flyout"),e(this).data("collapse")&&(e(this).removeData("collapse"),e(this).addClass("collapse"))}):e(this).children("ul").each(function(){e(this).addClass("collapsed-flyout"),e(this).hasClass("collapse"),e(this).removeClass("collapse"),e(this).data("collapse",!0)})}),this.toggleFlyoutState(t),this._super(t,n,r)},toggleFlyoutState:function(t){if(t)e(".collapsed").find("li").show(),e(".cms-menu__list").find(".child-flyout-indicator").hide();else{e(".collapsed-flyout").find("li").each(function(){e(this).hide()});var n=e(".cms-menu__list ul.collapsed-flyout").parent();0===n.children(".child-flyout-indicator").length&&n.append('<span class="child-flyout-indicator"></span>').fadeIn(),n.children(".child-flyout-indicator").fadeIn()}},siteTreePresent:function(){return e("#cms-content-tools-CMSMain").length>0},getPersistedStickyState:function(){var t,n;return void 0!==e.cookie&&void 0!==(n=e.cookie("cms-menu-sticky"))&&null!==n&&(t="true"===n),t},setPersistedStickyState:function(t){void 0!==e.cookie&&e.cookie("cms-menu-sticky",t,{path:"/",expires:31})},getEvaluatedCollapsedState:function(){var t=this.getPersistedCollapsedState(),n=e(".cms-menu").getPersistedStickyState(),r=this.siteTreePresent();return void 0===t?r:t!==r&&n?t:r},onadd:function(){var t=this;setTimeout(function(){t.togglePanel(!t.getEvaluatedCollapsedState(),!1,!1)},0),e(window).on("ajaxComplete",function(e){setTimeout(function(){t.togglePanel(!t.getEvaluatedCollapsedState(),!1,!1)},0)}),this._super()}}),e(".cms-menu__list").entwine({onmatch:function(){this.find("li.current").select(),this.updateItems(),this._super()},onunmatch:function(){this._super()},updateMenuFromResponse:function(e){var t=e.getResponseHeader("X-Controller");if(t){var n=this.find("li#Menu-"+t.replace(/\\/g,"-").replace(/[^a-zA-Z0-9\-_:.]+/,""));n.hasClass("current")||n.select()}this.updateItems()},"from .cms-container":{onafterstatechange:function(e,t){this.updateMenuFromResponse(t.xhr)},onaftersubmitform:function(e,t){this.updateMenuFromResponse(t.xhr)}},"from .cms-edit-form":{onrelodeditform:function(e,t){this.updateMenuFromResponse(t.xmlhttp)}},getContainingPanel:function(){return this.closest(".cms-panel")},fromContainingPanel:{ontoggle:function(t){this.toggleClass("collapsed",e(t.target).hasClass("collapsed")),e(".cms-container").trigger("windowresize"),this.hasClass("collapsed")&&this.find("li.children.opened").removeClass("opened"),this.hasClass("collapsed")||e(".toggle-children.opened").closest("li").addClass("opened")}},updateItems:function(){var t=this.find("#Menu-CMSMain");t[t.is(".current")?"show":"hide"]();var n=e(".cms-content input[name=ID]").val();n&&this.find("li").each(function(){e.isFunction(e(this).setRecordID)&&e(this).setRecordID(n)})}}),e(".cms-menu__list li").entwine({toggleFlyout:function(t){var n=e(this);if(n.children("ul").first().hasClass("collapsed-flyout"))if(t){if(!n.children("ul").first().children("li").first().hasClass("clone")){var r=n.clone();r.addClass("clone").css({}),r.children("ul").first().remove(),r.find("span").not(".text").remove(),r.find("a").first().unbind("click"),n.children("ul").prepend(r)}e(".collapsed-flyout").show(),n.addClass("opened"),n.children("ul").find("li").fadeIn("fast")}else r&&r.remove(),e(".collapsed-flyout").hide(),n.removeClass("opened"),n.find("toggle-children").removeClass("opened"),n.children("ul").find("li").hide()}}),e(".cms-menu__list li").hoverIntent(function(){e(this).toggleFlyout(!0)},function(){e(this).toggleFlyout(!1)}),e(".cms-menu__list .toggle").entwine({onclick:function(t){t.preventDefault(),e(this).toogleFlyout(!0)}}),e(".cms-menu__list li").entwine({onmatch:function(){this.find("ul").length&&this.find("a:first").append('<span class="toggle-children"><span class="toggle-children-icon"></span></span>'),this._super()},onunmatch:function(){this._super()},toggle:function(){this[this.hasClass("opened")?"close":"open"]()},open:function(){var e=this.getMenuItem();e&&e.open(),this.find("li.clone")&&this.find("li.clone").remove(),this.addClass("opened").find("ul").show(),this.find(".toggle-children").addClass("opened")},close:function(){this.removeClass("opened").find("ul").hide(),this.find(".toggle-children").removeClass("opened")},select:function(){var e=this.getMenuItem();if(this.addClass("current").open(),this.siblings().removeClass("current").close(),this.siblings().find("li").removeClass("current"),e){var t=e.siblings();e.addClass("current"),t.removeClass("current").close(),t.find("li").removeClass("current").close()}this.getMenu().updateItems(),this.trigger("select")}}),e(".cms-menu__list *").entwine({getMenu:function(){return this.parents(".cms-menu__list:first")}}),e(".cms-menu__list li *").entwine({getMenuItem:function(){return this.parents("li:first")}}),e(".cms-menu__list li a").entwine({onclick:function(t){var n=e.path.isExternal(this.attr("href"));if(!(t.which>1||n)&&"_blank"!=this.attr("target")){t.preventDefault();var r=this.getMenuItem(),o=this.attr("href");n||(o=e("base").attr("href")+o);var i=r.find("li");i.length?i.first().find("a").click():document.location.href=o,r.select()}}}),e(".cms-menu__list li .toggle-children").entwine({onclick:function(e){return this.closest("li").toggle(),!1}}),e(".cms .profile-link").entwine({onclick:function(){return e(".cms-container").loadPanel(this.attr("href")),e(".cms-menu__list li").removeClass("current").close(),!1}}),e(".cms-menu .sticky-toggle").entwine({onadd:function(){var t=!!e(".cms-menu").getPersistedStickyState();this.toggleCSS(t),this.toggleIndicator(t),this._super()},toggleCSS:function(e){this[e?"addClass":"removeClass"]("active")},toggleIndicator:function(e){this.next(".sticky-status-indicator").text(e?"fixed":"auto")},onclick:function(){var e=this.closest(".cms-menu"),t=e.getPersistedCollapsedState(),n=e.getPersistedStickyState(),r=void 0===n?!this.hasClass("active"):!n;void 0===t?e.setPersistedCollapsedState(e.hasClass("collapsed")):void 0!==t&&!1===r&&e.clearPersistedCollapsedState(),e.setPersistedStickyState(r),this.toggleCSS(r),this.toggleIndicator(r),this._super()}})})},793:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(12),i=r(o),a=n(946),s=r(a),l=n(416),u=n(26),c=r(u);i.default.entwine("ss",function(e){e(".js-react-boot").entwine({onmatch:function(){var t=e(".cms-mobile-menu-toggle-wrapper");t.length>0&&c.default.render(React.createElement(s.default,{store:window.ss.store,controls:"cms-menu"}),t[0]);var n=window.ss.store,r=e(".cms-menu"),o=e(".cms-menu-mobile-overlay");n.subscribe(function(){var e=n.getState(),t=e.mobileMenu.isOpen;r.toggleClass("cms-menu--open",t).attr("aria-expanded",t),o.attr("aria-expanded",t)})}}),e(".cms-menu-mobile-overlay").entwine({onclick:function(){window.ss.store.dispatch((0,l.closeMobileMenu)())}})})},794:function(e,t,n){"use strict";var r=n(12);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.entwine("ss",function(e){e.entwine.warningLevel=e.entwine.WARN_LEVEL_BESTPRACTISE,e(".cms-panel").entwine({WidthExpanded:null,WidthCollapsed:null,canSetCookie:function(){return void 0!==e.cookie&&void 0!==this.attr("id")},getPersistedCollapsedState:function(){var t,n;return this.canSetCookie()&&void 0!==(n=e.cookie("cms-panel-collapsed-"+this.attr("id")))&&null!==n&&(t="true"===n),t},setPersistedCollapsedState:function(t){this.canSetCookie()&&e.cookie("cms-panel-collapsed-"+this.attr("id"),t,{path:"/",expires:31})},clearPersistedCollapsedState:function(){this.canSetCookie()&&e.cookie("cms-panel-collapsed-"+this.attr("id"),"",{path:"/",expires:-1})},getInitialCollapsedState:function(){var e=this.getPersistedCollapsedState();return void 0===e&&(e=this.hasClass("collapsed")),e},onadd:function(){var t,n;if(!this.find(".cms-panel-content").length)throw new Exception('Content panel for ".cms-panel" not found');this.find(".cms-panel-toggle").length||(n=e("<div class='toolbar toolbar--south cms-panel-toggle'></div>").append('<a class="toggle-expand" href="#" data-toggle="tooltip" title="'+i18n._t("Admin.EXPANDPANEL","Expand Panel")+'"><span>&raquo;</span></a>').append('<a class="toggle-collapse" href="#" data-toggle="tooltip" title="'+i18n._t("Admin.COLLAPSEPANEL","Collapse Panel")+'"><span>&laquo;</span></a>'),this.append(n)),this.setWidthExpanded(this.find(".cms-panel-content").innerWidth()),t=this.find(".cms-panel-content-collapsed"),this.setWidthCollapsed(t.length?t.innerWidth():this.find(".toggle-expand").innerWidth()),this.togglePanel(!this.getInitialCollapsedState(),!0,!1),this._super()},togglePanel:function(e,t,n){var r,o;t||(this.trigger("beforetoggle.sspanel",e),this.trigger(e?"beforeexpand":"beforecollapse")),this.toggleClass("collapsed",!e),r=e?this.getWidthExpanded():this.getWidthCollapsed(),this.width(r),o=this.find(".cms-panel-content-collapsed"),o.length&&(this.find(".cms-panel-content")[e?"show":"hide"](),this.find(".cms-panel-content-collapsed")[e?"hide":"show"]()),!1!==n&&this.setPersistedCollapsedState(!e),this.trigger("toggle",e),this.trigger(e?"expand":"collapse")},expandPanel:function(e){(e||this.hasClass("collapsed"))&&this.togglePanel(!0)},collapsePanel:function(e){!e&&this.hasClass("collapsed")||this.togglePanel(!1)}}),e(".cms-panel.collapsed .cms-panel-toggle").entwine({onclick:function(e){this.expandPanel(),e.preventDefault()}}),e(".cms-panel *").entwine({getPanel:function(){return this.parents(".cms-panel:first")}}),e(".cms-panel .toggle-expand").entwine({onclick:function(e){e.preventDefault(),e.stopPropagation(),this.getPanel().expandPanel(),this._super(e)}}),e(".cms-panel .toggle-collapse").entwine({onclick:function(e){e.preventDefault(),e.stopPropagation(),this.getPanel().collapsePanel(),this._super(e)}}),e(".cms-content-tools.collapsed").entwine({onclick:function(e){this.expandPanel(),this._super(e)}})})},795:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(12),i=r(o),a=n(22),s=r(a);i.default.entwine("ss.preview",function(e){e(".cms-preview").entwine({AllowedStates:["StageLink","LiveLink","ArchiveLink"],CurrentStateName:null,CurrentSizeName:"auto",IsPreviewEnabled:!1,DefaultMode:"split",Sizes:{auto:{width:"100%",height:"100%"},mobile:{width:"335px",height:"568px"},mobileLandscape:{width:"583px",height:"320px"},tablet:{width:"783px",height:"1024px"},tabletLandscape:{width:"1039px",height:"768px"},desktop:{width:"1024px",height:"800px"}},changeState:function(t,n){var r=this,o=this._getNavigatorStates();return!1!==n&&e.each(o,function(e,n){r.saveState("state",t)}),this.setCurrentStateName(t),this._loadCurrentState(),this.redraw(),this},changeMode:function(t,n){var r=e(".cms-container").entwine(".ss");if("split"==t)r.splitViewMode(),this.setIsPreviewEnabled(!0),this._loadCurrentState();else if("content"==t)r.contentViewMode(),this.setIsPreviewEnabled(!1);else{if("preview"!=t)throw"Invalid mode: "+t;r.previewMode(),this.setIsPreviewEnabled(!0),this._loadCurrentState()}return!1!==n&&this.saveState("mode",t),this.redraw(),this},changeSize:function(e){return this.getSizes(),this.setCurrentSizeName(e),this.removeClass("auto desktop tablet mobile").addClass(e),this.saveState("size",e),this.redraw(),this},redraw:function(){window.debug&&console.log("redraw",this.attr("class"),this.get(0));var t=this.getCurrentStateName();t&&this.find(".cms-preview-states").changeVisibleState(t);var n=e(".cms-container").entwine(".ss").getLayoutOptions();return n&&e(".preview-mode-selector").changeVisibleMode(n.mode),this.getCurrentSizeName()&&this.find(".preview-size-selector").changeVisibleSize(this.getCurrentSizeName()),this},saveState:function(e,t){this._supportsLocalStorage()&&window.localStorage.setItem("cms-preview-state-"+e,t)},loadState:function(e){if(this._supportsLocalStorage())return window.localStorage.getItem("cms-preview-state-"+e)},disablePreview:function(){return this.setPendingURL(null),this._loadUrl("about:blank"),this._block(),this.changeMode("content",!1),this.setIsPreviewEnabled(!1),this},enablePreview:function(){return this.getIsPreviewEnabled()||(this.setIsPreviewEnabled(!0),e.browser.msie&&e.browser.version.slice(0,3)<=7?this.changeMode("content"):this.changeMode(this.getDefaultMode(),!1)),this},getOrAppendFontFixStyleElement:function(){var t=e("#FontFixStyleElement");return t.length||(t=e('<style type="text/css" id="FontFixStyleElement" disabled="disabled">:before,:after{content:none !important}</style>').appendTo("head")),t},onadd:function(){var t=this,n=this.find("iframe");n.addClass("center"),n.bind("load",function(){t._adjustIframeForPreview(),t._loadCurrentPage(),e(this).removeClass("loading")}),e.browser.msie&&8===parseInt(e.browser.version,10)&&n.bind("readystatechange",function(e){"interactive"==n[0].readyState&&(t.getOrAppendFontFixStyleElement().removeAttr("disabled"),setTimeout(function(){t.getOrAppendFontFixStyleElement().attr("disabled","disabled")},0))}),this._unblock(),this.disablePreview(),this._super()},_supportsLocalStorage:function(){var e,t,n=new Date;try{return(e=window.localStorage).setItem(n,n),t=e.getItem(n)==n,e.removeItem(n),t&&e}catch(e){console.warn("localStorge is not available due to current browser / system settings.")}},onforcecontent:function(){this.changeMode("content",!1)},onenable:function(){var t=e(".preview-mode-selector");t.removeClass("split-disabled"),t.find(".disabled-tooltip").hide()},ondisable:function(){var t=e(".preview-mode-selector");t.addClass("split-disabled"),t.find(".disabled-tooltip").show()},_block:function(){return this.find(".preview-note").show(),this.find(".cms-preview-overlay").show(),this},_unblock:function(){return this.find(".preview-note").hide(),this.find(".cms-preview-overlay").hide(),this},_initialiseFromContent:function(){var t,n;return e(".cms-previewable").length?(t=this.loadState("mode"),n=this.loadState("size"),this._moveNavigator(),t&&"content"==t||(this.enablePreview(),this._loadCurrentState()),this.redraw(),t&&this.changeMode(t),n&&this.changeSize(n)):this.disablePreview(),this},"from .cms-container":{onafterstatechange:function(e,t){t.xhr.getResponseHeader("X-ControllerURL")||this._initialiseFromContent()}},PendingURL:null,oncolumnvisibilitychanged:function(){var e=this.getPendingURL();e&&!this.is(".column-hidden")&&(this.setPendingURL(null),this._loadUrl(e),this._unblock())},"from .cms-container .cms-edit-form":{onaftersubmitform:function(){this._initialiseFromContent()}},_loadUrl:function(e){return this.find("iframe").addClass("loading").attr("src",e),this},_getNavigatorStates:function(){return e.map(this.getAllowedStates(),function(t){var n=e(".cms-preview-states .state-name[data-name="+t+"]");return n.length?{name:t,url:n.attr("href"),active:n.hasClass("active")}:null})},_loadCurrentState:function(){if(!this.getIsPreviewEnabled())return this;var t=this._getNavigatorStates(),n=this.getCurrentStateName(),r=null;t&&(r=e.grep(t,function(e,t){return n===e.name||!n&&e.active}));var o=null;if(r[0]?o=r[0].url:t.length?(this.setCurrentStateName(t[0].name),o=t[0].url):this.setCurrentStateName(null),o){var i=o.split("#"),a=i.shift().split(/[?&]/),s=a.shift();a.push("CMSPreview=1"),i=i.length?"#"+i.join("#"):"",o=s+"?"+a.join("&")+i}return this.is(".column-hidden")?(this.setPendingURL(o),this._loadUrl("about:blank"),this._block()):(this.setPendingURL(null),o?(this._loadUrl(o),this._unblock()):this._block()),this},_moveNavigator:function(){var t=e(".cms-preview .cms-preview-controls");e(".cms-edit-form .cms-navigator").length&&t.length?t.html(e(".cms-edit-form .cms-navigator").detach()):this._block()},_loadCurrentPage:function(){if(this.getIsPreviewEnabled()){var t;e(".cms-container");try{t=this.find("iframe")[0].contentDocument}catch(e){console.warn("Unable to access iframe, possible https mis-match")}if(t){var n=e(t).find("meta[name=x-page-id]").attr("content"),r=e(t).find("meta[name=x-cms-edit-link]").attr("content"),o=e(".cms-content");n&&o.find(":input[name=ID]").val()!=n&&e(".cms-container").entwine(".ss").loadPanel(r)}}},_adjustIframeForPreview:function(){var e,t=this.find("iframe")[0];if(t){try{e=t.contentDocument}catch(e){console.warn("Unable to access iframe, possible https mis-match")}if(e){for(var n=e.getElementsByTagName("A"),r=0;r<n.length;r++){var o=n[r].getAttribute("href");o&&o.match(/^http:\/\//)&&n[r].setAttribute("target","_blank")}var i=e.getElementById("SilverStripeNavigator");i&&(i.style.display="none");var a=e.getElementById("SilverStripeNavigatorMessage");a&&(a.style.display="none"),this.trigger("afterIframeAdjustedForPreview",[e])}}}}),e(".cms-edit-form").entwine({onadd:function(){this._super(),e(".cms-preview")._initialiseFromContent()}}),e(".cms-preview-states").entwine({changeVisibleState:function(e){this.find('[data-name="'+e+'"]').addClass("active").siblings().removeClass("active")}}),e(".cms-preview-states .state-name").entwine({onclick:function(t){if(1==t.which){var n=e(this).attr("data-name");this.addClass("active").siblings().removeClass("active"),e(".cms-preview").changeState(n),t.preventDefault()}}}),e(".preview-mode-selector").entwine({changeVisibleMode:function(e){this.find("select").val(e).trigger("chosen:updated")._addIcon()}}),e(".preview-mode-selector select").entwine({onchange:function(t){this._super(t),t.preventDefault();var n=e(this).val();e(".cms-preview").changeMode(n)}}),e(".cms-container--content-mode").entwine({onmatch:function(){e(".cms-preview .result-selected").hasClass("font-icon-columns")&&statusMessage(s.default._t("Admin.DISABLESPLITVIEW","Screen too small to show site preview in split mode"),"error"),this._super()}}),e(".preview-size-selector").entwine({changeVisibleSize:function(e){this.find("select").val(e).trigger("chosen:updated")._addIcon()}}),e(".preview-size-selector select").entwine({onchange:function(t){t.preventDefault();var n=e(this).val();e(".cms-preview").changeSize(n)}}),e(".preview-selector select.preview-dropdown").entwine({"onchosen:ready":function(){this._super(),this._addIcon()},_addIcon:function(){var e=this.find(":selected"),t=e.attr("data-icon"),n=this.parent().find(".chosen-container a.chosen-single"),r=n.attr("data-icon");return void 0!==r&&n.removeClass(r),n.addClass(t),n.attr("data-icon",t),this}}),e(".preview-mode-selector .chosen-drop li:last-child").entwine({onmatch:function(){e(".preview-mode-selector").hasClass("split-disabled")?this.parent().append('<div class="disabled-tooltip"></div>'):this.parent().append('<div class="disabled-tooltip" style="display: none;"></div>')}}),e(".preview-device-outer").entwine({onclick:function(){this.parent(".preview__device").toggleClass("rotate")}})})},796:function(e,t,n){"use strict";var r=n(12);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.entwine("ss.tree",function(e){e(".cms-tree").entwine({Hints:null,IsUpdatingTree:!1,IsLoaded:!1,onadd:function(){if(this._super(),!e.isNumeric(this.data("jstree_instance_id"))){var t=this.attr("data-hints");t&&this.setHints(e.parseJSON(t));var n=this;this.jstree(this.getTreeConfig()).bind("loaded.jstree",function(t,r){n.setIsLoaded(!0),r.inst._set_settings({html_data:{ajax:{url:n.data("urlTree"),data:function(t){var r=n.data("searchparams")||[];return r=e.grep(r,function(e,t){return"ID"!=e.name&&"value"!=e.name}),r.push({name:"ID",value:e(t).data("id")?e(t).data("id"):0}),r.push({name:"ajax",value:1}),r}}}}),n.updateFromEditForm(),n.css("visibility","visible"),r.inst.hide_checkboxes()}).bind("before.jstree",function(t,r){if("start_drag"==r.func&&(!n.hasClass("draggable")||n.hasClass("multiselect")))return t.stopImmediatePropagation(),!1;if(e.inArray(r.func,["check_node","uncheck_node"])){var o=e(r.args[0]).parents("li:first"),i=o.find("li:not(.disabled)");if(o.hasClass("disabled")&&0==i)return t.stopImmediatePropagation(),!1}}).bind("move_node.jstree",function(t,r){if(!n.getIsUpdatingTree()){var o=r.rslt.o,i=r.rslt.np,a=(r.inst._get_parent(o),e(i).data("id")||0),s=e(o).data("id"),l=e.map(e(o).siblings().andSelf(),function(t){return e(t).data("id")});e.ajax({url:e.path.addSearchParams(n.data("urlSavetreenode"),n.data("extraParams")),type:"POST",data:{ID:s,ParentID:a,SiblingIDs:l},success:function(){e(".cms-edit-form :input[name=ID]").val()==s&&e(".cms-edit-form :input[name=ParentID]").val(a),n.updateNodesFromServer([s])},statusCode:{403:function(){e.jstree.rollback(r.rlbk)}}})}}).bind("select_node.jstree check_node.jstree uncheck_node.jstree",function(t,n){e(document).triggerHandler(t,n)})}},onremove:function(){this.jstree("destroy"),this._super()},"from .cms-container":{onafterstatechange:function(e){this.updateFromEditForm()}},"from .cms-container form":{onaftersubmitform:function(t){var n=e(".cms-edit-form :input[name=ID]").val();this.updateNodesFromServer([n])}},getTreeConfig:function(){var t=this;return{core:{initially_open:["record-0"],animation:0,html_titles:!0},html_data:{},ui:{select_limit:1,initially_select:[this.find(".current").attr("id")]},crrm:{move:{check_move:function(n){var r=e(n.o),o=e(n.np),i=n.ot.get_container()[0]==n.np[0],a=r.getClassname(),s=o.getClassname(),l=t.getHints(),u=[],c=s||"Root",d=l&&void 0!==l[c]?l[c]:null;return d&&r.attr("class").match(/VirtualPage-([^\s]*)/)&&(a=RegExp.$1),d&&(u=void 0!==d.disallowedChildren?d.disallowedChildren:[]),!(0===r.data("id")||r.hasClass("status-archived")||i&&"inside"!=n.p||o.hasClass("nochildren")||u.length&&-1!=e.inArray(a,u))}}},dnd:{drop_target:!1,drag_target:!1},checkbox:{two_state:!0},themes:{theme:"apple",url:e("body").data("frameworkpath")+"/admin/thirdparty/jstree/themes/apple/style.css"},plugins:["html_data","ui","dnd","crrm","themes","checkbox"]}},search:function(e,t){e?this.data("searchparams",e):this.removeData("searchparams"),this.jstree("refresh",-1,t)},getNodeByID:function(e){return this.find("*[data-id="+e+"]")},createNode:function(t,n,r){var o=this,i=void 0!==n.ParentID&&o.getNodeByID(n.ParentID),a=e(t),s={data:""};a.hasClass("jstree-open")?s.state="open":a.hasClass("jstree-closed")&&(s.state="closed"),this.jstree("create_node",i.length?i:-1,"last",s,function(e){for(var t=e.attr("class"),n=0;n<a[0].attributes.length;n++){var o=a[0].attributes[n];e.attr(o.name,o.value)}e.addClass(t).html(a.html()),r(e)})},updateNode:function(t,n,r){var o=e(n),i=!!r.NextID&&this.getNodeByID(r.NextID),a=!!r.PrevID&&this.getNodeByID(r.PrevID),s=!!r.ParentID&&this.getNodeByID(r.ParentID);e.each(["id","style","class","data-pagetype"],function(e,n){t.attr(n,o.attr(n))});var l=t.children("ul").detach();t.html(o.html()).append(l),i&&i.length?this.jstree("move_node",t,i,"before"):a&&a.length?this.jstree("move_node",t,a,"after"):this.jstree("move_node",t,s.length?s:-1)},updateFromEditForm:function(){var t,n=e(".cms-edit-form :input[name=ID]").val();n?(t=this.getNodeByID(n),t.length?(this.jstree("deselect_all"),this.jstree("select_node",t)):this.updateNodesFromServer([n])):this.jstree("deselect_all")},updateNodesFromServer:function(t){if(!this.getIsUpdatingTree()&&this.getIsLoaded()){var n=this,r=!1;this.setIsUpdatingTree(!0),n.jstree("save_selected");var o=function(e){n.getNodeByID(e.data("id")).not(e).remove(),n.jstree("deselect_all"),n.jstree("select_node",e)};n.jstree("open_node",this.getNodeByID(0)),n.jstree("save_opened"),n.jstree("save_selected"),e.ajax({url:e.path.addSearchParams(this.data("urlUpdatetreenodes"),"ids="+t.join(",")),dataType:"json",success:function(t,i){e.each(t,function(e,t){var i=n.getNodeByID(e);if(!t)return void n.jstree("delete_node",i);i.length?(n.updateNode(i,t.html,t),setTimeout(function(){o(i)},500)):(r=!0,t.ParentID&&!n.find("li[data-id="+t.ParentID+"]").length?n.jstree("load_node",-1,function(){newNode=n.find("li[data-id="+e+"]"),o(newNode)}):n.createNode(t.html,t,function(e){o(e)}))}),r||(n.jstree("deselect_all"),n.jstree("reselect"),n.jstree("reopen"))},complete:function(){n.setIsUpdatingTree(!1)}})}}}),e(".cms-tree.multiple").entwine({onmatch:function(){this._super(),this.jstree("show_checkboxes")},onunmatch:function(){this._super(),this.jstree("uncheck_all"),this.jstree("hide_checkboxes")},getSelectedIDs:function(){return e(this).jstree("get_checked").not(".disabled").map(function(){return e(this).data("id")}).get()}}),e(".cms-tree li").entwine({setEnabled:function(e){this.toggleClass("disabled",!e)},getClassname:function(){var e=this.attr("class").match(/class-([^\s]*)/i);return e?e[1]:""},getID:function(){return this.data("id")}})})},797:function(e,t,n){"use strict";var r=n(12);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.entwine("ss",function(e){e(".TreeDropdownField").entwine({"from .cms-container form":{onaftersubmitform:function(e){this.find(".tree-holder").empty(),this._super()}}})})},798:function(e,t,n){"use strict";var r=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(r);n(248),o.default.entwine("ss",function(e){e(".cms-content-tools #Form_SearchForm").entwine({onsubmit:function(e){this.trigger("beforeSubmit")}}),e(".importSpec").entwine({onmatch:function(){this.find("div.details").hide(),this.find("a.detailsLink").click(function(){return e("#"+e(this).attr("href").replace(/.*#/,"")).slideToggle(),!1}),this._super()},onunmatch:function(){this._super()}}),e(".cms .btn.clear-search").entwine({onclick:function(e){e.preventDefault(),this.parents(".cms-container").loadPanel(this.attr("href"),"",{},!0,!1)}})})},799:function(e,t,n){"use strict";var r=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(r);n(248),n(958);var i=function(e){var t=(0,o.default)((0,o.default)(this).contents()).find(".message");if(t&&t.html()){var n=(0,o.default)(window.parent.document).find("#Form_EditForm_Members").get(0);n&&n.refresh();var r=(0,o.default)(window.parent.document).find(".cms-tree").get(0);r&&r.reload()}};(0,o.default)("#MemberImportFormIframe, #GroupImportFormIframe").entwine({onadd:function(){this._super(),(0,o.default)(this).bind("load",i)}}),o.default.entwine("ss",function(e){e(".permissioncheckboxset .checkbox[value=ADMIN]").entwine({onmatch:function(){this.toggleCheckboxes(),this._super()},onunmatch:function(){this._super()},onclick:function(e){this.toggleCheckboxes()},toggleCheckboxes:function(){var t=this.parents(".field:eq(0)").find(".checkbox").not(this);this.is(":checked")?t.each(function(){e(this).data("SecurityAdmin.oldChecked",e(this).is(":checked")),e(this).data("SecurityAdmin.oldDisabled",e(this).is(":disabled")),e(this).prop("disabled",!0),e(this).prop("checked",!0)}):t.each(function(){e(this).prop("checked",e(this).data("SecurityAdmin.oldChecked")),e(this).prop("disabled",e(this).data("SecurityAdmin.oldDisabled"))})}})})},800:function(e,t,n){"use strict";var r=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(r);(0,o.default)(document).ready(function(){(0,o.default)("ul.SelectionGroup input.selector, ul.selection-group input.selector").live("click",function(){var e=(0,o.default)(this).closest("li");e.addClass("selected");var t=e.prevAll("li.selected");t.length&&t.removeClass("selected");var n=e.nextAll("li.selected");n.length&&n.removeClass("selected"),(0,o.default)(this).focus()})})},801:function(e,t,n){"use strict";var r=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(r);n(150),n(397),n(149),o.default.entwine("ss",function(e){e(".ss-tabset").entwine({IgnoreTabState:!1,onadd:function(){var e=window.location.hash;this.redrawTabs(),""!==e&&this.openTabFromURL(e),this._super()},onremove:function(){this.data("tabs")&&this.tabs("destroy"),this._super()},redrawTabs:function(){this.rewriteHashlinks(),this.tabs()},openTabFromURL:function(t){var n;e.each(this.find(".ui-tabs-anchor"),function(){if(-1!==this.href.indexOf(t)&&1===e(t).length)return n=e(this),!1}),void 0!==n&&e(document).ready("ajaxComplete",function(){n.click()})},rewriteHashlinks:function(){e(this).find("ul a").each(function(){if(e(this).attr("href")){var t=e(this).attr("href").match(/#.*/);t&&e(this).attr("href",document.location.href.replace(/#.*/,"")+t[0])}})}}),e(".ui-tabs-active .ui-tabs-anchor").entwine({onmatch:function(){this.addClass("nav-link active")},onunmatch:function(){this.removeClass("active")}})})},802:function(e,t,n){"use strict";var r=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(r);n(150),o.default.entwine("ss",function(e){e(".ss-toggle").entwine({onadd:function(){this._super(),this.accordion({heightStyle:"content",collapsible:!0,active:!this.hasClass("ss-toggle-start-closed")&&0})},onremove:function(){this.data("accordion")&&this.accordion("destroy"),this._super()},getTabSet:function(){return this.closest(".ss-tabset")},fromTabSet:{ontabsshow:function(){this.accordion("resize")}}})})},803:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(12),a=r(i),s=n(0),l=r(s),u=n(26),c=r(u),d=n(177),f=n(777),p=n(38);a.default.entwine("ss",function(e){e(".js-injector-boot .TreeDropdownField").entwine({Value:null,Timer:null,Component:null,onmatch:function(){this._super();var e=this.closest(".cms-content").attr("id"),t=e?{context:e}:{},n=(0,p.loadComponent)("TreeDropdownField",t);this.setComponent(n);var r=this.data("state")||{},o=this.data("schema")||{};o.data&&o.data.multiple?this.setValue(r.value&&r.value!==f.MULTI_EMPTY_VALUE?r.value.map(function(e){return Number(e)}):[]):this.setValue(r.value?Number(r.value):""),this.refresh()},onunmatch:function(){this._super();var e=this[0];e&&c.default.unmountComponentAtNode(e)},refresh:function(){var e=this,t=this.getAttributes(),n=function(t){e.setValue(t),e.refresh(),clearTimeout(e.getTimer());var n=setTimeout(function(){e.find("input").trigger("change")},0);e.setTimer(n)},r=this.getComponent();c.default.render(l.default.createElement(r,o({},t,{onChange:n,value:this.getValue(),noHolder:!0})),this[0])},getAttributes:function(){var e=this.data("state"),t=this.data("schema");return(0,d.schemaMerge)(t,e)}})})},804:function(e,t,n){"use strict";var r=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=((0,o.default)(window),(0,o.default)("html"),(0,o.default)("head"),{urlParseRE:/^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,parseUrl:function(e){if("object"===o.default.type(e))return e;var t=i.urlParseRE.exec(e||"")||[];return{href:t[0]||"",hrefNoHash:t[1]||"",hrefNoSearch:t[2]||"",domain:t[3]||"",protocol:t[4]||"",doubleSlash:t[5]||"",authority:t[6]||"",username:t[8]||"",password:t[9]||"",host:t[10]||"",hostname:t[11]||"",port:t[12]||"",pathname:t[13]||"",directory:t[14]||"",filename:t[15]||"",search:t[16]||"",hash:t[17]||""}},makePathAbsolute:function(e,t){if(e&&"/"===e.charAt(0))return e;e=e||"",t=t?t.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"";for(var n=t?t.split("/"):[],r=e.split("/"),o=0;o<r.length;o++){var i=r[o];switch(i){case".":break;case"..":n.length&&n.pop();break;default:n.push(i)}}return"/"+n.join("/")},isSameDomain:function(e,t){return i.parseUrl(e).domain===i.parseUrl(t).domain},isRelativeUrl:function(e){return""===i.parseUrl(e).protocol},isAbsoluteUrl:function(e){return""!==i.parseUrl(e).protocol},makeUrlAbsolute:function(e,t){if(!i.isRelativeUrl(e))return e;var n=i.parseUrl(e),r=i.parseUrl(t),o=n.protocol||r.protocol,a=n.protocol?n.doubleSlash:n.doubleSlash||r.doubleSlash,s=n.authority||r.authority,l=""!==n.pathname;return o+a+s+i.makePathAbsolute(n.pathname||r.filename,r.pathname)+(n.search||!l&&r.search||"")+n.hash},addSearchParams:function(e,t){var n=i.parseUrl(e),t="string"==typeof t?i.convertSearchToArray(t):t,r=o.default.extend(i.convertSearchToArray(n.search),t);return n.hrefNoSearch+"?"+o.default.param(r)+(n.hash||"")},getSearchParams:function(e){var t=i.parseUrl(e);return i.convertSearchToArray(t.search)},convertSearchToArray:function(e){var t,n,r,o={};for(e=e.replace(/^\?/,""),t=e?e.split("&"):[],n=0;n<t.length;n++)r=t[n].split("="),o[decodeURIComponent(r[0])]=decodeURIComponent(r[1]);return o},convertUrlToDataUrl:function(e){var t=i.parseUrl(e);return i.isEmbeddedPage(t)?t.hash.split(dialogHashKey)[0].replace(/^#/,""):i.isSameDomain(t,document)?t.hrefNoHash.replace(document.domain,""):e},get:function(e){return void 0===e&&(e=location.hash),i.stripHash(e).replace(/[^\/]*\.[^\/*]+$/,"")},getFilePath:function(e){var t="&"+o.default.mobile.subPageUrlKey;return e&&e.split(t)[0].split(dialogHashKey)[0]},set:function(e){location.hash=e},isPath:function(e){return/\//.test(e)},clean:function(e){return e.replace(document.domain,"")},stripHash:function(e){return e.replace(/^#/,"")},cleanHash:function(e){return i.stripHash(e.replace(/\?.*$/,"").replace(dialogHashKey,""))},isExternal:function(e){var t=i.parseUrl(e);return!(!t.protocol||t.domain===document.domain)},hasProtocol:function(e){return/^(:?\w+:)/.test(e)}});o.default.path=i},808:function(e,t,n){(function(t){e.exports=t.Accordion=n(983)}).call(t,n(3))},809:function(e,t,n){(function(t){e.exports=t.AccordionBlock=n(984)}).call(t,n(3))},811:function(e,t,n){(function(t){e.exports=t.Backend=n(1016)}).call(t,n(3))},812:function(e,t,n){(function(t){e.exports=t.Badge=n(985)}).call(t,n(3))},813:function(e,t,n){(function(t){e.exports=t.Breadcrumb=n(986)}).call(t,n(3))},814:function(e,t,n){(function(t){e.exports=t.BreadcrumbsActions=n(1029)}).call(t,n(3))},815:function(e,t,n){(function(t){e.exports=t.Config=n(1017)}).call(t,n(3))},816:function(e,t,n){(function(t){e.exports=t.DataFormat=n(1018)}).call(t,n(3))},818:function(e,t,n){(function(t){e.exports=t.FieldHolder=n(987)}).call(t,n(3))},819:function(e,t,n){(function(t){e.exports=t.FileSchemaModalHandler=n(1014)}).call(t,n(3))},82:function(e,t){e.exports=DeepFreezeStrict},820:function(e,t,n){(function(t){e.exports=t.Focusedzone=n(988)}).call(t,n(3))},821:function(e,t,n){(function(t){e.exports=t.Form=n(989)}).call(t,n(3))},822:function(e,t,n){(function(t){e.exports=t.FormAction=n(991)}).call(t,n(3))},823:function(e,t,n){(function(t){e.exports=t.FormAlert=n(992)}).call(t,n(3))},824:function(e,t,n){(function(t){e.exports=t.FormBuilder=n(993)}).call(t,n(3))},825:function(e,t,n){(function(t){e.exports=t.FormBuilderLoader=n(1012)}).call(t,n(3))},826:function(e,t,n){(function(t){e.exports=t.FormBuilderModal=n(994)}).call(t,n(3))},827:function(e,t,n){(function(t){e.exports=t.FormConstants=n(990)}).call(t,n(3))},83:function(e,t,n){"use strict";function r(e,t,n){for(var r=0,o=e,i=[],a=t.toLocaleLowerCase();-1!==r;)if(-1!==(r=o.toLocaleLowerCase().indexOf(a))){var s=r+t.length,u=o.substring(0,r),c=o.substring(r,s),d=o.substring(s);u.length&&i.push(u),i.push(n?l.default.createElement(n,{key:i.length/2},c):c),o=d}return i.push(o),i}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t&&void 0!==t.react)return l.default.createElement(e,n,t.react);if(t&&void 0!==t.html){if(null!==t.html){var r={__html:t.html};return l.default.createElement(e,a({},n,{dangerouslySetInnerHTML:r}))}return null}var o=null;if((o=t&&void 0!==t.text?t.text:t)&&"object"===(void 0===o?"undefined":i(o)))throw new Error("Unsupported string value "+JSON.stringify(o));return null!==o&&void 0!==o?l.default.createElement(e,n,o):null}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.mapHighlight=r,t.default=o;var s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s)},830:function(e,t,n){(function(t){e.exports=t.GridField=n(995)}).call(t,n(3))},831:function(e,t,n){(function(t){e.exports=t.GridFieldCell=n(996)}).call(t,n(3))},832:function(e,t,n){(function(t){e.exports=t.GridFieldHeader=n(997)}).call(t,n(3))},833:function(e,t,n){(function(t){e.exports=t.GridFieldHeaderCell=n(998)}).call(t,n(3))},834:function(e,t,n){(function(t){e.exports=t.GridFieldRow=n(999)}).call(t,n(3))},835:function(e,t,n){(function(t){e.exports=t.GridFieldTable=n(1e3)}).call(t,n(3))},836:function(e,t,n){(function(t){e.exports=t.HiddenField=n(1001)}).call(t,n(3))},837:function(e,t,n){(function(t){e.exports=t.Injector=n(1019)}).call(t,n(3))},838:function(e,t,n){(function(t){e.exports=t.InsertLinkModal=n(1013)}).call(t,n(3))},840:function(e,t,n){(function(t){e.exports=t.ListGroup=n(1002)}).call(t,n(3))},841:function(e,t,n){(function(t){e.exports=t.ListGroupItem=n(1003)}).call(t,n(3))},842:function(e,t,n){(function(t){e.exports=t.LiteralField=n(1004)}).call(t,n(3))},844:function(e,t,n){(function(t){e.exports=t.PopoverField=n(1005)}).call(t,n(3))},845:function(e,t,n){(function(t){e.exports=t.Preview=n(1006)}).call(t,n(3))},855:function(e,t,n){(function(t){e.exports=t.ReactRouteRegister=n(1020)}).call(t,n(3))},859:function(e,t,n){(function(t){e.exports=t.RecordsActionTypes=n(1030)}).call(t,n(3))},860:function(e,t,n){(function(t){e.exports=t.RecordsActions=n(1031)}).call(t,n(3))},864:function(e,t,n){(function(t){e.exports=t.Router=n(1021)}).call(t,n(3))},865:function(e,t,n){(function(t){e.exports=t.SchemaActions=n(1032)}).call(t,n(3))},866:function(e,t,n){(function(t){e.exports=t.ShortcodeSerialiser=n(1022)}).call(t,n(3))},867:function(e,t,n){(function(t){e.exports=t.SilverStripeComponent=n(1023)}).call(t,n(3))},869:function(e,t,n){(function(t){e.exports=t.TextField=n(1007)}).call(t,n(3))},870:function(e,t,n){(function(t){e.exports=t.TinyMCEActionRegistrar=n(1024)}).call(t,n(3))},871:function(e,t,n){(function(t){e.exports=t.Toolbar=n(1008)}).call(t,n(3))},872:function(e,t,n){(function(t){e.exports=t.TreeDropdownField=n(1009)}).call(t,n(3))},873:function(e,t,n){(function(t){e.exports=t.TreeDropdownFieldMenu=n(1010)}).call(t,n(3))},874:function(e,t,n){(function(t){e.exports=t.TreeDropdownFieldNode=n(1011)}).call(t,n(3))},875:function(e,t,n){(function(t){e.exports=t.UnsavedFormsActions=n(1033)}).call(t,n(3))},877:function(e,t,n){(function(t){e.exports=t.formatWrittenNumber=n(1025)}).call(t,n(3))},878:function(e,t,n){(function(t){e.exports=t.getFormState=n(1026)}).call(t,n(3))},885:function(e,t,n){(function(t){e.exports=t.reduxFieldReducer=n(1027)}).call(t,n(3))},886:function(e,t,n){(function(t){e.exports=t.schemaFieldValues=n(1028)}).call(t,n(3))},919:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(12),s=r(a),l=n(0),u=r(l),c=n(26),d=r(c),f=n(1931),p=n(308),h=r(p),m=n(304),y=r(m),v=n(773),b=r(v),g=n(1935),_=r(g),w=n(1930),T=r(w),P=n(954),C=r(P),O=n(776),E=n(775),j=n(22),S=r(j),k=n(96),x=n(394),R=r(x),M=function(){function e(t,n){o(this,e),this.store=t,this.client=n;var r=b.default.get("absoluteBaseUrl");_.default.setAbsoluteBase(r),this.handleBeforeRoute=this.handleBeforeRoute.bind(this),this.handleBeforeUnload=this.handleBeforeUnload.bind(this)}return i(e,[{key:"setStore",value:function(e){this.store=e}},{key:"setClient",value:function(e){this.client=e}},{key:"start",value:function(e){this.matchesReactRoute(e)?this.initReactRouter():this.initLegacyRouter()}},{key:"matchesReactRoute",value:function(e){var t=b.default.get("sections"),n=_.default.resolveURLToBase(e).replace(/\/$/,"");return!!t.find(function(e){var t=_.default.resolveURLToBase(e.url).replace(/\/$/,"");return!!e.reactRouter&&n.match(t)})}},{key:"initReactRouter",value:function(){T.default.updateRootRoute({component:C.default});var e=(0,O.syncHistoryWithStore)((0,f.useRouterHistory)((0,h.default)(y.default))({basename:b.default.get("baseUrl")}),this.store);e.listenBeforeUnload(this.handleBeforeUnload),e.listenBefore(this.handleBeforeRoute),d.default.render(u.default.createElement(E.ApolloProvider,{store:this.store,client:this.client},u.default.createElement(f.Router,{history:e,routes:T.default.getRootRoute()})),document.getElementsByClassName("cms-content")[0])}},{key:"initLegacyRouter",value:function(){var e=this,t=b.default.get("sections"),n=this.store;(0,_.default)("*",function(t,r){var o=S.default._t("Admin.CONFIRMUNSAVED","Are you sure you want to navigate away from this page?\n\n\n          WARNING: Your changes have not been saved.\n\n\n          Press OK to continue, or Cancel to stay on the current page.");e.shouldConfirmBeforeUnload()&&!window.confirm(o)||(t.store=n,r())});var r=null;t.forEach(function(e){var t=_.default.resolveURLToBase(e.url);t=t.replace(/\/$/,""),t+="(/*?)?",(0,_.default)(t,function(e,t){if("complete"!==document.readyState||e.init)return void t();r||(r=window.location.pathname);var n=e.state&&e.state.__forceReload;(e.path!==r||n)&&(r=e.path.replace(/#.*$/,""),(0,s.default)(".cms-container").entwine("ss").handleStateChange(null,e.state))})});var o=window.onbeforeunload;window.onbeforeunload=function(){return e.shouldConfirmBeforeUnload()?S.default._t("Admin.CONFIRMUNSAVEDSHORT","WARNING: Your changes have not been saved."):"function"==typeof o?o():void 0},_.default.start()}},{key:"shouldConfirmBeforeUnload",value:function(){var e=this.store.getState(),t=e.unsavedForms||[],n=e.form.formSchemas;return t.filter(function(t){var r=Object.values(n).find(function(e){return e.name===t.name});return!!(r&&r.state&&r.state.notifyUnsavedChanges)&&(0,k.isDirty)(t.name,R.default)(e)}).length>0}},{key:"handleBeforeUnload",value:function(){if(this.shouldConfirmBeforeUnload())return S.default._t("Admin.CONFIRMUNSAVEDSHORT","WARNING: Your changes have not been saved.")}},{key:"handleBeforeRoute",value:function(){if(this.shouldConfirmBeforeUnload())return S.default._t("Admin.CONFIRMUNSAVED","Are you sure you want to navigate away\n          from this page?\n\nWARNING: Your changes have not been saved.\n\n\n          Press OK to continue, or Cancel to stay on the current page.")}}]),e}();t.default=M},920:function(e,t,n){"use strict";function r(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,n=window.__REDUX_DEVTOOLS_EXTENSION__||window.devToolsExtension;return"function"==typeof t?t(e):"function"==typeof n?(0,o.compose)(e,n()):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(41)},921:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(38),s=r(a),l=n(964),u=r(l),c=n(4),d=r(c),f=n(177),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.extraClass?e.extraClass.split(" ").reduce(function(e,t){return i({},e,o({},t,!0))},{}):{};"string"==typeof e.data.pristineClass&&(n[e.data.pristineClass]=t),"string"==typeof e.data.dirtyClass&&(n[e.data.dirtyClass]=!t);var r=t?e.data.pristineTitle:e.data.dirtyTitle,a=t?e.data.pristineIcon:e.data.dirtyIcon;return i({},e,{title:r||e.title,icon:a||e.icon,extraClass:(0,d.default)(n)})},h=function(){s.default.transform("form-action-changed",function(e){e.form.alterSchema("*",function(e){return e.mutateField("action_save",function(t){var n=e.isPristine();return p(t,n)}),e.mutateField("action_publish",function(t){var n=t.data.isPublished&&!t.data.isModified&&e.isPristine();return p(t,n)}),e.getState()})}),s.default.transform("schema-validation",function(e){e.form.addValidation("*",function(e,t,n){var r=new u.default(e),a=Object.keys(e).reduce(function(e,t){var a=(0,f.findField)(n.fields,t),s=r.validateFieldSchema(a),l=s.valid,u=s.errors;return l?e:i({},e,o({},t,u))},{});return t.addErrors(a),t.getState()})})};t.default=h},922:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,i.createNetworkInterface)({uri:e+"graphql/",opts:{credentials:"same-origin",headers:{accept:"application/json"}}}),n=new a.default({shouldBatch:!0,addTypename:!0,dataIdFromObject:function(e){return e.id>=0&&e.__typename?e.__typename+":"+e.id:null},networkInterface:t});return t.use([{applyMiddleware:function(e,t){var n=(0,s.printRequest)(e.request);e.options.headers=Object.assign({},e.options.headers,{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}),e.options.body=u.default.stringify(Object.assign({},n,{variables:JSON.stringify(n.variables)})),t()}}]),n}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1922),a=r(i),s=n(183),l=n(395),u=r(l);t.default=o},923:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(96),i=n(38),a=r(i),s=n(407),l=r(s),u=n(939),c=r(u),d=n(253),f=r(d),p=n(951),h=r(p),m=n(929),y=r(m),v=n(927),b=r(v),g=n(928),_=r(g),w=n(947),T=r(w),P=n(1927),C=r(P),O=n(948),E=r(O),j=n(406),S=r(j),k=n(938),x=r(k),R=n(1928),M=r(R),D=n(940),A=r(D),F=n(944),I=r(F),N=n(404),L=r(N),U=n(942),B=r(U),H=n(950),V=r(H),$=n(949),q=r($),G=n(1924),z=r(G),W=n(930),X=r(W),K=n(777),Y=r(K),Q=n(774),J=r(Q),Z=n(405),ee=r(Z),te=n(931),ne=r(te),re=n(955),oe=r(re);t.default=function(){a.default.component.registerMany({TextField:l.default,HiddenField:c.default,DateField:f.default,TimeField:h.default,DatetimeField:y.default,CheckboxField:b.default,CheckboxSetField:_.default,OptionsetField:T.default,GridField:C.default,FieldGroup:X.default,SingleSelectField:E.default,PopoverField:S.default,HeaderField:x.default,LiteralField:M.default,HtmlReadonlyField:A.default,LookupField:I.default,CompositeField:L.default,Tabs:V.default,TabItem:q.default,FormAction:z.default,LabelField:B.default,TreeDropdownField:Y.default,ReduxForm:oe.default,ReduxFormField:o.Field,Form:ne.default,FormBuilderModal:J.default,NotFoundComponent:ee.default})}},924:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(38),a=r(i),s=n(41),l=n(96),u=n(776),c=n(976),d=r(c),f=n(979),p=r(f),h=n(978),m=r(h),y=n(974),v=r(y),b=n(981),g=r(b),_=n(977),w=r(_),T=n(982),P=r(T),C=n(969),O=r(C);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,s.combineReducers)({formState:l.reducer,formSchemas:p.default});a.default.reducer.registerMany(o({config:d.default,form:t,records:m.default,breadcrumbs:v.default,routing:u.routerReducer,treeDropdownField:g.default,mobileMenu:w.default,unsavedForms:P.default},e)),a.default.transform("admin",function(e){e.reducer("form",O.default)})}},925:function(e,t,n){"use strict";n(780),n(867),n(811),n(886),n(823),n(837),n(885),n(878),n(844),n(818),n(821),n(827),n(822),n(865),n(824),n(825),n(826),n(819),n(838),n(860),n(830),n(831),n(832),n(833),n(834),n(835),n(808),n(809),n(836),n(840),n(841),n(869),n(842),n(871),n(813),n(874),n(873),n(872),n(814),n(859),n(875),n(812),n(845),n(820),n(815),n(816),n(855),n(864),n(870),n(866),n(877),n(804),n(396),n(248),n(786),n(794),n(796),n(788),n(789),n(792),n(793),n(795),n(787),n(791),n(790),n(797),n(781),n(799),n(798),n(782),n(800),n(249),n(802),n(803),n(249),n(783),n(785),n(801),n(784),n(778)},927:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(0),a=r(i),s=n(255),l=r(s),u=n(47),c=r(u),d=function(e){var t=(0,c.default)(l.default);return a.default.createElement(t,o({},e,{type:"checkbox",hideLabels:!0}))};t.default=d},928:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(255),d=r(c),f=n(47),p=r(f),h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getItemKey=n.getItemKey.bind(n),n.getOptionProps=n.getOptionProps.bind(n),n.handleChange=n.handleChange.bind(n),n.getValues=n.getValues.bind(n),n}return a(t,e),s(t,[{key:"getItemKey",value:function(e,t){return this.props.id+"-"+(e.value||"empty"+t)}},{key:"getValues",value:function(){var e=this.props.value;return Array.isArray(e)||!e&&"string"!=typeof e&&"number"!=typeof e||(e=[e]),e?e.map(function(e){return""+e}):[]}},{key:"getOptionProps",value:function(e,t){var n=this.getValues(),r=this.getItemKey(e,t);return{key:r,id:r,name:this.props.name,className:this.props.itemClass,disabled:e.disabled||this.props.disabled,readOnly:this.props.readOnly,onChange:this.handleChange,value:n.indexOf(""+e.value)>-1,title:e.title,type:"checkbox"}}},{key:"handleChange",value:function(e,t){var n=this;if("function"==typeof this.props.onChange){var r=this.getValues(),o=this.props.source.filter(function(e,o){return n.getItemKey(e,o)===t.id?1===t.value:r.indexOf(""+e.value)>-1}).map(function(e){return""+e.value});this.props.onChange(o)}}},{key:"render",value:function(){var e=this;return this.props.source?u.default.createElement("div",null,this.props.source.map(function(t,n){return u.default.createElement(d.default,e.getOptionProps(t,n))})):null}}]),t}(l.Component);h.propTypes={className:u.default.PropTypes.string,extraClass:u.default.PropTypes.string,itemClass:u.default.PropTypes.string,id:u.default.PropTypes.string,name:u.default.PropTypes.string.isRequired,source:u.default.PropTypes.arrayOf(u.default.PropTypes.shape({value:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number]),title:u.default.PropTypes.any,disabled:u.default.PropTypes.bool})),onChange:u.default.PropTypes.func,value:u.default.PropTypes.any,readOnly:u.default.PropTypes.bool,disabled:u.default.PropTypes.bool},h.defaultProps={extraClass:"",className:"",value:[]},t.Component=h,t.default=(0,p.default)(h)},929:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},u=n(0),c=r(u),d=n(47),f=r(d),p=n(253),h=n(176),m=r(h),y=n(175),v=r(y),b=n(22),g=r(b),_=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"getInputProps",value:function(){var e=g.default.inject(g.default._t("Admin.FormatExample","Example: {format}"),{format:(0,m.default)().endOf("month").format("L LT")});return Object.assign({},l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getInputProps",this).call(this),{type:this.props.data.html5?"datetime-local":"text",placeholder:e})}},{key:"isMultiline",value:function(){return!1}},{key:"hasNativeSupport",value:function(){return v.default.inputtypes["datetime-local"]}},{key:"triggerChange",value:function(e){/^\d{4}-\d\d-\d\dT\d\d:\d\d$/.test(e)?this.props.onChange(e+":00"):this.props.onChange(e)}},{key:"convertToLocalised",value:function(e){m.default.locale(this.props.lang);var t="";if(e){var n=(0,m.default)(e);n.isValid()&&(t=n.format("L LT"))}return t}},{key:"convertToIso",value:function(e){m.default.locale(this.props.lang);var t="";if(e){var n=(0,m.default)(e,["L LT",m.default.ISO_8601]);n.isValid()&&(t=n.format("YYYY-MM-DDTHH:mm:ss"))}return t}}]),t}(p.Component);_.propTypes={lang:c.default.PropTypes.string,data:c.default.PropTypes.shape({html5:c.default.PropTypes.boolean})},_.defaultProps={data:{}},t.Component=_,t.default=(0,f.default)(_)},930:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},u=n(404),c=r(u),d=n(47),f=r(d),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"getClassName",value:function(){return"field-group-component "+l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getClassName",this).call(this)}}]),t}(c.default);t.Component=p,t.default=(0,f.default)(p)},931:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(391),f=r(d),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"componentDidMount",value:function(){if(this.props.autoFocus&&this.form){var e=this.form.querySelector("input, select, textarea");e&&e.focus()}}},{key:"renderMessages",value:function(){return Array.isArray(this.props.messages)?this.props.messages.map(function(e,t){return c.default.createElement(f.default,s({key:t,className:t?"":"message-box--panel-top"},e))}):null}},{key:"render",value:function(){var e=this,t=!1!==this.props.valid,n=this.props.mapFieldsToComponents(this.props.fields),r=this.props.mapActionsToComponents(this.props.actions),o=this.renderMessages(),i=["form"];!1===t&&i.push("form--invalid"),this.props.attributes&&this.props.attributes.className&&i.push(this.props.attributes.className);var a=s({},this.props.attributes,{onSubmit:this.props.handleSubmit,className:i.join(" ")});return c.default.createElement("form",s({},a,{ref:function(t){e.form=t}}),n&&c.default.createElement("fieldset",null,o,this.props.afterMessages,n),r&&r.length?c.default.createElement("div",{className:"btn-toolbar",role:"group"},r):null)}}]),t}(u.Component);p.propTypes={autoFocus:u.PropTypes.bool,valid:u.PropTypes.bool,actions:u.PropTypes.array,afterMessages:u.PropTypes.node,attributes:u.PropTypes.shape({action:u.PropTypes.string.isRequired,className:u.PropTypes.string,encType:u.PropTypes.string,id:u.PropTypes.string,method:u.PropTypes.string.isRequired}),fields:u.PropTypes.array.isRequired,handleSubmit:u.PropTypes.func,mapActionsToComponents:u.PropTypes.func.isRequired,mapFieldsToComponents:u.PropTypes.func.isRequired,messages:u.PropTypes.arrayOf(u.PropTypes.shape({extraClass:u.PropTypes.string,value:u.PropTypes.any,type:u.PropTypes.string}))},t.default=p},932:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={CSRF_HEADER:"X-SecurityID"}},933:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return i(t,e),a(t,[{key:"handleClick",value:function(e){this.props.onClick(e,this.props.record.ID)}},{key:"render",value:function(){return l.default.createElement("button",{className:"grid-field__icon-action font-icon-"+this.props.icon+" btn--icon-large",onClick:this.handleClick})}}]),t}(s.Component);u.PropTypes={Click:l.default.PropTypes.func.isRequired},t.default=u},934:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),d=r(c),f=n(4),p=r(f),h=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleDrillDown=n.handleDrillDown.bind(n),n}return s(t,e),u(t,[{key:"handleDrillDown",value:function(e){"function"==typeof this.props.onDrillDown&&this.props.onDrillDown(e)}},{key:"render",value:function(){var e=["grid-field__cell",this.props.className],t=this.props,n=(t.onDrillDown,o(t,["onDrillDown"]));return d.default.createElement("td",l({},n,{className:(0,p.default)(e),onClick:this.handleDrillDown}))}}]),t}(c.Component);h.PropTypes={className:d.default.PropTypes.string,onDrillDown:d.default.PropTypes.func},t.default=h},935:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=n(254),s=r(a),l=function(e){return i.default.createElement(s.default,null,e.children)};t.default=l},936:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e){return o.default.createElement("th",null,e.children)};t.default=i},937:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"generateHeader",value:function(){return void 0!==this.props.header?this.props.header:(this.props.data,null)}},{key:"generateRows",value:function(){return void 0!==this.props.rows?this.props.rows:(this.props.data,null)}},{key:"render",value:function(){return l.default.createElement("div",{className:"grid-field"},l.default.createElement("table",{className:"table table-hover grid-field__table"},l.default.createElement("thead",null,this.generateHeader()),l.default.createElement("tbody",null,this.generateRows())))}}]),t}(s.Component);u.propTypes={data:l.default.PropTypes.object,header:l.default.PropTypes.object,rows:l.default.PropTypes.array},t.default=u},938:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"getInputProps",value:function(){return{className:this.props.className+" "+this.props.extraClass,id:this.props.id}}},{key:"render",value:function(){var e="h"+(this.props.data.headingLevel||3);return l.default.createElement("div",{className:"field"},l.default.createElement(e,this.getInputProps(),this.props.data.title))}}]),t}(s.Component);u.propTypes={extraClass:l.default.PropTypes.string,id:l.default.PropTypes.string,data:l.default.PropTypes.oneOfType([l.default.PropTypes.array,l.default.PropTypes.shape({headingLevel:l.default.PropTypes.number,title:l.default.PropTypes.string})]).isRequired},u.defaultProps={className:"",extraClass:""},t.default=u},939:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=n(36),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"getInputProps",value:function(){return{bsClass:this.props.bsClass,componentClass:"input",className:this.props.className+" "+this.props.extraClass,id:this.props.id,name:this.props.name,type:"hidden",value:this.props.value}}},{key:"render",value:function(){return l.default.createElement(u.FormControl,this.getInputProps())}}]),t}(s.Component);c.propTypes={id:l.default.PropTypes.string,extraClass:l.default.PropTypes.string,name:l.default.PropTypes.string.isRequired,value:l.default.PropTypes.any},c.defaultProps={className:"",extraClass:"",value:""},t.default=c},940:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(47),f=r(d),p=n(36),h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getContent=n.getContent.bind(n),n}return a(t,e),l(t,[{key:"getContent",value:function(){return{__html:this.props.value}}},{key:"getInputProps",value:function(){return{bsClass:this.props.bsClass,componentClass:this.props.componentClass,className:this.props.className+" "+this.props.extraClass,id:this.props.id,name:this.props.name}}},{key:"render",value:function(){return c.default.createElement(p.FormControl.Static,s({},this.getInputProps(),{dangerouslySetInnerHTML:this.getContent()}))}}]),t}(u.Component);h.propTypes={id:c.default.PropTypes.string,name:c.default.PropTypes.string.isRequired,extraClass:c.default.PropTypes.string,value:c.default.PropTypes.string},h.defaultProps={extraClass:"",className:""},t.Component=h,t.default=(0,f.default)(h)},941:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=n(36),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"renderHeader",value:function(){var e=this.props.title;return e?l.default.createElement(u.Modal.Header,null,l.default.createElement(u.Modal.Title,null,e)):null}},{key:"render",value:function(){return l.default.createElement(u.Modal,{show:this.props.show,onHide:this.props.onHide,className:this.props.className,dialogClassName:this.props.dialogClassName},this.renderHeader(),l.default.createElement(u.Modal.Body,{className:this.props.bodyClassName},l.default.createElement("iframe",{id:this.props.iframeId,className:this.props.iframeClassName,src:this.props.url,frameBorder:0})))}}]),t}(s.Component);c.propTypes={url:s.PropTypes.string.isRequired,onHide:s.PropTypes.func,show:s.PropTypes.bool,title:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.bool]),dialogClassName:s.PropTypes.string,iframeId:s.PropTypes.string,iframeClassName:s.PropTypes.string,className:s.PropTypes.string,bodyClassName:s.PropTypes.string},c.defaultProps={show:!1,title:null},t.default=c},942:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e){var t=e.id,n=e.className,r=e.title,i=e.extraClass,a=e.data,s=a&&a.target,l=n+" "+i;return o.default.createElement("label",{id:t,className:l,htmlFor:s},r)};i.propTypes={id:r.PropTypes.number,className:r.PropTypes.string,extraClass:r.PropTypes.string,title:r.PropTypes.node,data:r.PropTypes.shape({target:r.PropTypes.string})},i.defaultProps={className:"",extraClass:""},t.default=i},943:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return i(t,e),a(t,[{key:"handleClick",value:function(e){this.props.onClick&&this.props.onClick(e,this.props.onClickArg)}},{key:"render",value:function(){var e="list-group-item "+this.props.className;return l.default.createElement("a",{role:"button",tabIndex:0,className:e,onClick:this.handleClick},this.props.children)}}]),t}(s.Component);u.propTypes={onClickArg:l.default.PropTypes.any,onClick:l.default.PropTypes.func},t.default=u},944:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(36),d=n(47),f=r(d),p=n(22),h=r(p),m=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getValueCSV=n.getValueCSV.bind(n),n}return a(t,e),s(t,[{key:"getValueCSV",value:function(){var e=this,t=this.props.value;if(!Array.isArray(t)&&(t||"string"==typeof t||"number"==typeof t)){var n=this.props.source.find(function(e){return e.value===t});return n?n.title:""}return t&&t.length?t.map(function(t){var n=e.props.source.find(function(e){return e.value===t});return n&&n.title}).filter(function(e){return(""+e).length}).join(", "):""}},{key:"getFieldProps",value:function(){return{id:this.props.id,name:this.props.name,className:this.props.className+" "+this.props.extraClass}}},{key:"render",value:function(){if(!this.props.source)return null;var e="('"+h.default._t("Admin.NONE","None")+"')";return u.default.createElement(c.FormControl.Static,this.getFieldProps(),this.getValueCSV()||e)}}]),t}(l.Component);m.propTypes={extraClass:u.default.PropTypes.string,id:u.default.PropTypes.string,name:u.default.PropTypes.string.isRequired,source:u.default.PropTypes.arrayOf(u.default.PropTypes.shape({value:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number]),title:u.default.PropTypes.any,disabled:u.default.PropTypes.bool})),value:u.default.PropTypes.any},m.defaultProps={extraClass:"",className:"",value:[]},t.Component=m,t.default=(0,f.default)(m)},945:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(4),d=r(c),f=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleClick=e.handleClick.bind(e),e}return a(t,e),s(t,[{key:"handleClick",value:function(e){e.preventDefault(),"function"==typeof this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=(0,d.default)({"cms-mobile-menu-toggle":!0,"cms-mobile-menu-toggle--open":this.props.isOpen});return u.default.createElement("button",{className:e,href:"#toggle-mobile-menu",onClick:this.handleClick,"aria-controls":this.props.controls,"aria-expanded":Boolean(this.props.isOpen)},u.default.createElement("span",null),u.default.createElement("span",null),u.default.createElement("span",null),u.default.createElement("span",null))}}]),t}(l.Component);f.propTypes={isOpen:l.PropTypes.bool.isRequired,onClick:l.PropTypes.func.isRequired,controls:l.PropTypes.string},f.defaultProps={controls:""},t.default=f},946:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(416),o=n(53),i=n(945),a=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=(0,o.connect)(function(e){return{isOpen:e.mobileMenu.isOpen}},function(e){return{onClick:function(){e((0,r.toggleMobileMenu)())}}})(a.default)},947:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(255),d=r(c),f=n(47),p=r(f),h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getItemKey=n.getItemKey.bind(n),n.getOptionProps=n.getOptionProps.bind(n),n.handleChange=n.handleChange.bind(n),n}return a(t,e),s(t,[{key:"getItemKey",value:function(e,t){var n=e.value||"empty"+t;return this.props.id+"-"+n}},{key:"getOptionProps",value:function(e,t){var n=this.getItemKey(e,t);return{key:n,id:n,name:this.props.name,className:this.props.itemClass+" option-val--"+e.value,disabled:e.disabled||this.props.disabled,readOnly:this.props.readOnly,onChange:this.handleChange,value:""+this.props.value==""+e.value,title:e.title,type:"radio"}}},{key:"handleChange",value:function(e,t){var n=this;if("function"==typeof this.props.onChange&&1===t.value){var r=this.props.source.find(function(e,r){return n.getItemKey(e,r)===t.id});this.props.onChange(r.value)}}},{key:"render",value:function(){var e=this;return this.props.source?u.default.createElement("div",null,this.props.source.map(function(t,n){return u.default.createElement(d.default,e.getOptionProps(t,n))})):null}}]),t}(l.Component);h.propTypes={extraClass:u.default.PropTypes.string,itemClass:u.default.PropTypes.string,id:u.default.PropTypes.string,name:u.default.PropTypes.string.isRequired,source:u.default.PropTypes.arrayOf(u.default.PropTypes.shape({value:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number]),title:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number]),disabled:u.default.PropTypes.bool})),onChange:u.default.PropTypes.func,value:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number]),readOnly:u.default.PropTypes.bool,disabled:u.default.PropTypes.bool},h.defaultProps={extraClass:"",className:"",itemClass:""},t.Component=h,t.default=(0,p.default)(h)},948:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(47),d=r(c),f=n(22),p=r(f),h=n(36),m=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n}return a(t,e),s(t,[{key:"getReadonlyField",value:function(){var e=this,t=this.props.source&&this.props.source.find(function(t){return t.value===e.props.value});return t="string"==typeof t?t:this.props.value,u.default.createElement(h.FormControl.Static,this.getInputProps(),t)}},{key:"getSelectField",value:function(){var e=this,t=this.props.source?this.props.source.slice():[];return this.props.data.hasEmptyDefault&&!t.find(function(e){return!e.value})&&t.unshift({value:"",title:this.props.data.emptyString,disabled:!1}),u.default.createElement(h.FormControl,this.getInputProps(),t.map(function(t,n){var r=e.props.name+"-"+(t.value||"empty"+n);return u.default.createElement("option",{key:r,value:t.value,disabled:t.disabled},t.title)}))}},{key:"getInputProps",value:function(){var e={bsClass:this.props.bsClass,className:this.props.className+" "+this.props.extraClass+" no-chosen",id:this.props.id,name:this.props.name,disabled:this.props.disabled};return this.props.readOnly||Object.assign(e,{onChange:this.handleChange,value:this.props.value,componentClass:"select"}),e}},{key:"handleChange",value:function(e){"function"==typeof this.props.onChange&&this.props.onChange(e,{id:this.props.id,value:e.target.value})}},{key:"render",value:function(){return this.props.readOnly?this.getReadonlyField():this.getSelectField()}}]),t}(l.Component);m.propTypes={id:u.default.PropTypes.string,name:u.default.PropTypes.string.isRequired,onChange:u.default.PropTypes.func,value:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number]),readOnly:u.default.PropTypes.bool,disabled:u.default.PropTypes.bool,source:u.default.PropTypes.arrayOf(u.default.PropTypes.shape({value:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number]),title:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number]),disabled:u.default.PropTypes.bool})),data:u.default.PropTypes.oneOfType([u.default.PropTypes.array,u.default.PropTypes.shape({hasEmptyDefault:u.default.PropTypes.bool,emptyString:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.number])})])},m.defaultProps={source:[],extraClass:"",className:"",data:{emptyString:p.default._t("Boolean.ANY","Any")}},t.Component=m,t.default=(0,d.default)(m)},949:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=n(36),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"getTabProps",value:function(){var e=this.props;return{eventKey:e.name,className:e.className+" "+e.extraClass,disabled:e.disabled,bsClass:e.bsClass,onEnter:e.onEnter,onEntering:e.onEntering,onEntered:e.onEntered,onExit:e.onExit,onExiting:e.onExiting,onExited:e.onExited,animation:e.animation,unmountOnExit:e.unmountOnExit}}},{key:"render",value:function(){var e=this.getTabProps();return l.default.createElement(u.Tab.Pane,e,this.props.children)}}]),t}(s.Component);c.propTypes={name:l.default.PropTypes.string.isRequired,extraClass:l.default.PropTypes.string,tabClassName:l.default.PropTypes.string},c.defaultProps={className:"",extraClass:""},t.default=c},950:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=n(36),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"getContainerProps",value:function(){var e=this.props,t=e.activeKey,n=e.onSelect,r=e.className,o=e.extraClass,i=e.id;return{activeKey:t,className:r+" "+o,defaultActiveKey:this.getDefaultActiveKey(),onSelect:n,id:i}}},{key:"getDefaultActiveKey",value:function(){var e=this,t=null;if("string"==typeof this.props.defaultActiveKey){var n=l.default.Children.toArray(this.props.children).find(function(t){return t.props.name===e.props.defaultActiveKey});n&&(t=n.props.name)}return"string"!=typeof t&&l.default.Children.forEach(this.props.children,function(e){"string"!=typeof t&&(t=e.props.name)}),t}},{key:"renderTab",value:function(e){return null===e.props.title?null:l.default.createElement(u.NavItem,{eventKey:e.props.name,disabled:e.props.disabled,className:e.props.tabClassName},e.props.title)}},{key:"renderNav",value:function(){var e=l.default.Children.map(this.props.children,this.renderTab);return e.length<=1?null:l.default.createElement(u.Nav,{bsStyle:this.props.bsStyle,role:"tablist"},e)}},{key:"render",value:function(){var e=this.getContainerProps(),t=this.renderNav();return l.default.createElement(u.Tab.Container,e,l.default.createElement("div",{className:"wrapper"},t,l.default.createElement(u.Tab.Content,{animation:this.props.animation},this.props.children)))}}]),t}(s.Component);c.propTypes={id:l.default.PropTypes.string.isRequired,defaultActiveKey:l.default.PropTypes.string,extraClass:l.default.PropTypes.string},c.defaultProps={bsStyle:"tabs",className:"",extraClass:""},t.default=c},951:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},u=n(0),c=r(u),d=n(47),f=r(d),p=n(253),h=n(176),m=r(h),y=n(175),v=r(y),b=n(22),g=r(b),_=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"getInputProps",value:function(){var e=g.default.inject(g.default._t("Admin.FormatExample","Example: {format}"),{format:(0,m.default)().endOf("month").format("LT")}),n={};return Object.assign(n,l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getInputProps",this).call(this)),Object.assign(n,{type:this.props.data.html5?"time":"text",placeholder:e}),n}},{key:"isMultiline",value:function(){return!1}},{key:"hasNativeSupport",value:function(){return v.default.inputtypes.time}},{key:"convertToLocalised",value:function(e){var t="";if(e){var n=(0,m.default)(e,"HH:mm:ss");n.isValid()&&(t=n.format("LT"))}return t}},{key:"convertToIso",value:function(e){var t="";if(e){var n=(0,m.default)(e,"LT");n.isValid()&&(t=n.format("HH:mm:ss"))}return t}}]),t}(p.Component);_.propTypes={lang:c.default.PropTypes.string,data:c.default.PropTypes.shape({html5:c.default.PropTypes.boolean})},_.defaultProps={data:{}},t.Component=_,t.default=(0,f.default)(_)},952:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(22),d=r(c),f=n(4),p=r(f),h=n(256),m=r(h),y=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.render=n.render.bind(n),n.renderOption=n.renderOption.bind(n),n.renderBreadcrumbs=n.renderBreadcrumbs.bind(n),n.handleBack=n.handleBack.bind(n),n}return a(t,e),s(t,[{key:"handleBack",value:function(e){"function"==typeof this.props.onBack?this.props.onBack(e):(e.stopPropagation(),e.preventDefault())}},{key:"renderBreadcrumbs",value:function(){if(0===this.props.breadcrumbs.length)return null;var e=this.props.breadcrumbs.map(function(e){return e.title}).join(" / "),t=this.props.search?"font-icon-search":"font-icon-left-open-big",n=u.default.createElement("button",{className:"treedropdownfield__breadcrumbs-button"},u.default.createElement("span",{className:"icon "+t}));return u.default.createElement("div",{className:"Select-option treedropdownfield__breadcrumbs flexbox-area-grow fill-width",onClick:this.handleBack,role:"button",tabIndex:0},n,u.default.createElement("span",{className:"treedropdownfield__breadcrumbs-crumbs flexbox-area-grow"},e))}},{key:"renderOption",value:function(e,t){if(!this.props.renderMenuOptions)return null;var n=this.props.renderMenuOptions,r=n.focusedOption,o=n.instancePrefix,i=n.onFocus,a=n.onSelect,s=n.optionClassName,l=n.optionComponent,c=n.optionRenderer,d=n.onOptionRef,f=l,h=this.props.value,m=h===e.id;Array.isArray(h)&&(m=h.includes(e.id));var y=r&&e.id===r.id,v=(0,p.default)(s,{treedropdownfield__option:!0,"Select-option":!0,"is-selected":m,"is-focused":y,"is-disabled":e.disabled});return u.default.createElement(f,{className:v,instancePrefix:o,isDisabled:e.disabled,isFocused:y,isSelected:m,key:"option-"+e.id+"-"+t,onFocus:i,onSelect:a,option:e,optionIndex:t,ref:function(e){d(e,y)}},c(e,t))}},{key:"render",value:function(){var e=(0,p.default)([this.props.className,"treedropdownfield__menu"]);if(this.props.loading)return u.default.createElement("div",{className:e},u.default.createElement("div",{className:"Select-option flexbox-area-grow fill-width"},u.default.createElement("span",{className:"Select-loading-zone","aria-hidden":"true"},u.default.createElement("span",{className:"Select-loading"})),u.default.createElement("span",{className:"treedropdownfield__menu-loading flexbox-area-grow"},d.default._t("Admin.TREEDROPDOWN_LOADING","Loading..."))));if(this.props.failed)return u.default.createElement("div",{className:e},u.default.createElement("div",{className:"Select-option"},d.default._t("Admin.TREEDROPDOWN_FAILED","Failed to load")));if(0===this.props.tree.count)return u.default.createElement("div",{className:e},u.default.createElement("div",{className:"Select-option"},d.default._t("Admin.TREEDROPDOWN_NO_CHILDREN","No children")));var t=this.renderBreadcrumbs(),n=this.props.renderMenuOptions&&this.props.renderMenuOptions.options,r=n?n.filter(function(e){return null!==e.title}).map(this.renderOption):null;return u.default.createElement("div",{className:e},t,r)}}]),t}(l.Component);y.propTypes={className:l.PropTypes.string,breadcrumbs:l.PropTypes.arrayOf(l.PropTypes.shape(m.default.propTypes)),loading:l.PropTypes.bool,failed:l.PropTypes.bool,tree:l.PropTypes.shape(m.default.propTypes),renderMenuOptions:l.PropTypes.object,onBack:l.PropTypes.func,search:l.PropTypes.bool,value:l.PropTypes.oneOfType([l.PropTypes.string,l.PropTypes.number,l.PropTypes.array])},t.default=y},953:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findTreeByPath=function e(t,n){if(!t||0===Object.keys(t).length)return null;if(0===n.length)return t;var r=n.slice(0),o=r.shift(),i=t.children.find(function(e){return e.id===o});return i?e(i,r):null},t.findTreePath=function e(t,n){if(!n)return[];if(!t||0===Object.keys(t).length)return null;if(t.id===n)return[t.id];if(!t.children)return null;var r=!0,o=!1,i=void 0;try{for(var a,s=t.children[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var l=a.value,u=e(l,n);if(null!==u)return t.id&&u.unshift(t.id),u}}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return null}},954:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=n(38),a=function(e){return o.default.createElement("div",{className:"app"},e.children)};t.default=(0,i.provideInjector)(a)},955:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(0),a=r(i),s=n(96),l=n(38),u=n(394),c=r(u),d=function(e){var t=e.formComponent,n=o({},e);return delete n.formComponent,a.default.createElement(t,n)};d.propTypes={formComponent:a.default.PropTypes.func.isRequired};var f=(0,l.inject)(["Form"],function(e){return{formComponent:e}})(d);t.default=(0,s.reduxForm)({getFormState:c.default})(f)},958:function(e,t,n){"use strict";var r=n(12);(function(e){return e&&e.__esModule?e:{default:e}})(r).default.entwine("ss",function(e){e(".permissioncheckboxset .valADMIN input").entwine({onmatch:function(){this._super()},onunmatch:function(){this._super()},onclick:function(e){this.toggleCheckboxes()},toggleCheckboxes:function(){var t=e(this).parents(".field:eq(0)").find(".checkbox").not(this);e(this).is(":checked")?t.each(function(){e(this).data("SecurityAdmin.oldChecked",e(this).attr("checked")),e(this).data("SecurityAdmin.oldDisabled",e(this).attr("disabled")),e(this).attr("disabled","disabled"),e(this).attr("checked","checked")}):t.each(function(){var t=e(this).data("SecurityAdmin.oldChecked"),n=e(this).data("SecurityAdmin.oldDisabled");null!==t&&e(this).attr("checked",t),null!==n&&e(this).attr("disabled",n)})}}),e(".permissioncheckboxset .valCMS_ACCESS_LeftAndMain input").entwine({getCheckboxesExceptThisOne:function(){return e(this).parents(".field:eq(0)").find("li").filter(function(t){var n=e(this).attr("class");return!!n&&n.match(/CMS_ACCESS_/)}).find(".checkbox").not(this)},onmatch:function(){this.toggleCheckboxes(),this._super()},onunmatch:function(){this._super()},onclick:function(e){this.toggleCheckboxes()},toggleCheckboxes:function(){var t=this.getCheckboxesExceptThisOne();e(this).is(":checked")?t.each(function(){e(this).data("PermissionCheckboxSetField.oldChecked",e(this).is(":checked")),e(this).data("PermissionCheckboxSetField.oldDisabled",e(this).is(":disabled")),e(this).prop("disabled","disabled"),e(this).prop("checked","checked")}):t.each(function(){e(this).prop("checked",e(this).data("PermissionCheckboxSetField.oldChecked")),e(this).prop("disabled",e(this).data("PermissionCheckboxSetField.oldDisabled"))})}})})},96:function(e,t){e.exports=ReduxForm},963:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadComponent=t.inject=t.withInjector=t.provideContext=t.provideInjector=void 0;var o=n(258),i=r(o),a=n(412),s=r(a),l=n(259),u=r(l),c=n(410),d=r(c),f=n(411),p=r(f),h=n(184),m=r(h);t.provideInjector=i.default,t.provideContext=s.default,t.withInjector=u.default,t.inject=d.default,t.loadComponent=p.default,t.default=m.default},964:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1937),l=r(s),u=n(22),c=r(u),d=function(){function e(t){o(this,e),this.setValues(t)}return a(e,[{key:"setValues",value:function(e){this.values=e}},{key:"getFieldValue",value:function(e){var t=this.values[e];return"string"!=typeof t&&(t=void 0===t||null===t||!1===t?"":t.toString()),t}},{key:"validateValue",value:function(e,t,n){if(""===e)return"required"!==t;switch(t){case"equals":var r=this.getFieldValue(n.field);return l.default.equals(e,r);case"numeric":return l.default.isNumeric(e);case"date":return l.default.isDate(e);case"alphanumeric":return l.default.isAlphanumeric(e);case"alpha":return l.default.isAlpha(e);case"regex":return l.default.matches(e,n.pattern);case"max":return e.length<=n.length;case"email":return l.default.isEmail(e);default:return console.warn("Unknown validation rule used: '"+t+"'"),!1}}},{key:"validateFieldSchema",value:function(e){return this.validateField(e.name,e.validation,null!==e.leftTitle?e.leftTitle:e.title,e.customValidationMessage)}},{key:"getMessage",value:function(e,t){var n=t.title,r="string"==typeof t.message?t.message:c.default._t("Admin.VALIDATOR_MESSAGE_"+e.toUpperCase(),c.default._t("Admin.VALIDATOR_MESSAGE_DEFAULT","{name} is not a valid value."));return c.default.inject(r,{name:n})}},{key:"validateField",value:function(e,t,n,r){var o=this,a={valid:!0,errors:[]};if(!t)return a;var s=this.getFieldValue(e);if(""===s&&t.required){var l=Object.assign({title:""!==n?n:e},t.required);return{valid:!1,errors:[r||this.getMessage("required",l)]}}return Object.entries(t).forEach(function(t){var r=i(t,2),l=r[0],u=r[1],c=Object.assign({title:e},{title:n},u);if("required"!==l&&!o.validateValue(s,l,c)){var d=o.getMessage(l,c);a.valid=!1,a.errors.push(d)}}),r&&!a.valid&&(a.errors=[r]),a}}]),e}();t.default=d},966:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t={};return e&&e.split(" ").forEach(function(e){""!==e&&(t[e]=!0)}),t};t.default=r},967:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),u=r(l),c=n(966),d=r(c),f=n(753),p=r(f),h=n(96),m=n(177),y=function(e){return e},v=function(){function e(t,n){i(this,e);var r=t.state||{},s=r.fields||[];this.schema=a({},t,{state:a({},r,{fields:[].concat(o(s))})}),this.mockGlobalState=(0,p.default)({},t.name,n)}return s(e,[{key:"getFieldByName",value:function(e){var t=a({fields:[],actions:[]},this.schema.schema),n=[].concat(o(t.fields),o(t.actions)),r=(0,m.findField)(n,e),i=this.schema.state.fields.find(function(t){return t.name===e});return(0,m.schemaMerge)(r,i)}},{key:"mutateField",value:function(e,t){var n=this.schema.state.fields||[],r=n.findIndex(function(t){return t.name===e});if(r<0)return this;var i=[].concat(o(n)),a=this.getFieldByName(e);return i[r]=(0,m.schemaMerge)(a,t(a)),this.schema.state.fields=i,this}},{key:"updateField",value:function(e,t){return this.mutateField(e,function(e){return a({},e,t)})}},{key:"updateFields",value:function(e){var t=this;return Object.keys(e).forEach(function(n){t.updateField(n,e[n])}),this}},{key:"setFieldComponent",value:function(e,t){return this.updateField(e,{component:t})}},{key:"setFieldClass",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.mutateField(e,function(e){var r=(0,d.default)(e.extraClass);return r[t]=n,a({},e,{extraClass:(0,u.default)(r)})})}},{key:"addFieldClass",value:function(e,t){return this.setFieldClass(e,t,!0)}},{key:"removeFieldClass",value:function(e,t){return this.setFieldClass(e,t,!1)}},{key:"getValues",value:function(){return(0,h.getFormValues)(this.schema.name,y)(this.mockGlobalState)||{}}},{key:"getValue",value:function(e){return this.getValues()[e]}},{key:"isDirty",value:function(){return(0,h.isDirty)(this.schema.name,y)(this.mockGlobalState)}},{key:"isPristine",value:function(){return(0,h.isPristine)(this.schema.name,y)(this.mockGlobalState)}},{key:"isValid",value:function(){return(0,h.isValid)(this.schema.name,y)(this.mockGlobalState)}},{key:"isInvalid",value:function(){return(0,h.isInvalid)(this.schema.name,y)(this.mockGlobalState)}},{key:"getState",value:function(){return this.schema}}]),e}();t.default=v},968:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){o(this,e),this.values=t,this.errorMap={}}return a(e,[{key:"addError",value:function(e,t){if(!this.fieldExists(e))throw new Error("Tried to add error to non-existent field: "+e);return this.errorMap[e]||(this.errorMap[e]=[]),this.errorMap[e]=[].concat(r(this.errorMap[e]),[t]),this}},{key:"addErrors",value:function(e){var t=this;return Object.entries(e).forEach(function(e){var n=i(e,1),r=n[0],o=i(e,2),a=o[1];Array.isArray(a)||(a=[a]),a.forEach(function(e){return t.addError(r,e)})}),this}},{key:"clearErrors",value:function(e){if(!this.fieldExists(e))throw new Error("Tried to clear errors for non-existent field: "+e);return delete this.errorMap[e],this}},{key:"hasError",value:function(e){return this.fieldExists(e)&&!!this.getErrors(e).length}},{key:"fieldExists",value:function(e){return Object.keys(this.values).includes(e)}},{key:"getErrors",value:function(e){if(!this.fieldExists(e))throw new Error("Tried to get errors for non-existent field: "+e);return this.errorMap[e]||[]}},{key:"reset",value:function(){this.errorMap={}}},{key:"getState",value:function(){return this.errorMap}}]),e}();t.default=s},969:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(963),s=r(a),l=n(752),u=r(l),c=n(753),d=r(c),f=n(96),p=[f.actionTypes.REGISTER_FIELD,f.actionTypes.DESTROY],h=function(e){return function(){return function(t,n){var r=e(t,n),a=n.meta&&n.meta.form;if(!a||p.includes(n.type))return r;var l=s.default.form.getSchema(a);if(!l)return r;var c=(0,u.default)(r.formState,a);if(!c)return r;var f=i({},r),h=Object.entries(r.formSchemas).filter(function(e){return o(e,2)[1].name===a});return h.length?(h.forEach(function(e){var t=o(e,2),n=t[0],r=t[1],i=l(r,c);if(!i.state||!Array.isArray(i.state.fields))throw new Error("\n      One more calls to alterSchema did not return a properly formed schema state\n      object. Check your calls to Injector.transform() which could affect '"+n+"'.\n    ");f=(0,d.default)(f,"formSchemas."+n+".state",i.state)}),f):r}}};t.default=h},970:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(257),a=function(e){return e&&e.__esModule?e:{default:e}}(i),s=function(e,t){return[e.displayName||e.name||"Component"].concat(r(t)).reduce(function(e,t){return t+"("+e+")"})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,a.default)();return o({},e,{get:function(t,n){for(var o,i=arguments.length,a=Array(i>2?i-2:0),s=2;s<i;s++)a[s-2]=arguments[s];var l=(o=e.get).call.apply(o,[this,t,n].concat(r(a)));if(l.displayName&&l.displayName.match(/\]$/))return l;var u=l.displayName||l.name||"Component",c=n?"["+n+"]":"";return l.displayName=""+u+c,l},createTransformer:function(e,t){var n=this;return function(r,i,a){n.customise(o({name:e},t,{displayName:a}),r,i)}},getFactory:function(t,n){var r=e.getFactory.call(this,t,n),o=n.map(function(e){return e.displayName||e.name});return r.displayName=s(this.services[t],o),r}})};t.default=l},971:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.VALIDATION_MIDDLEWARE_SERVICE=t.SCHEMA_MIDDLEWARE_SERVICE=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(257),l=r(s),u=n(967),c=r(u),d=n(968),f=r(d),p=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,l.default)();return a({},t,{services:(e={},i(e,"FormSchemaMiddleware",function(e){return e}),i(e,"FormValidationMiddleware",function(e){return arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}}),e),register:function(){throw new Error("\n      Attempted to register a service on Injector.form. This container accepts only two\n      services by design (FormSchemaMiddleware and FormValidationMiddleware) \n      for updating form schema and adding validation, respectively. Consider using a more\n      generic container, e.g. Injector.reducer.\n    ")},registerMany:function(){this.register()},getSchema:function(e){for(var n,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return(n=t.get).call.apply(n,[this,"FormSchemaMiddleware",e].concat(o(i)))},getValidation:function(e){for(var n,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return(n=t.get).call.apply(n,[this,"FormValidationMiddleware",e].concat(o(i)))},createTransformer:function(e,n){var r=this,o=function(o){return function(i,s){return t.customise.call(r,a({name:e},n),o+"."+i,s)}};return{alterSchema:o("FormSchemaMiddleware"),addValidation:o("FormValidationMiddleware")}},getFactory:function(e,t){var n=t.map(function(e){return e.factory});if("FormSchemaMiddleware"===e)return this.getSchemaReducer(n);if("FormValidationMiddleware"===e)return this.getValidationReducer(n);throw new Error("Invalid service for form injector: "+e)},getSchemaReducer:function(e){return function(t,n){return e.reduce(function(e,t){var r=new c.default(e,n),o=t(r);return a({},e,o)},t)}},getValidationReducer:function(e){return function(t,n){var r=new f.default(t);return e.forEach(function(e){return e(t,r,n)}),r.getState()}}})};t.SCHEMA_MIDDLEWARE_SERVICE="FormSchemaMiddleware",t.VALIDATION_MIDDLEWARE_SERVICE="FormValidationMiddleware",t.default=p},972:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){return{services:{},initialised:!1,callbacks:[],register:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.force;if(this.initialised)throw new Error("Cannot mutate DI container after it has been initialised");if(this.services[e]&&!0!==r)throw new Error("\n      Tried to register service "+e+" more than once. This practice is discouraged. Consider\n      using Injector.update() to enhance the service rather than override it completely.\n      Otherwise, invoke the register() function with { force: true } as the third argument.\n     ");if(void 0!==this[e]&&!this.services[e])throw new Error("\n      Tried to register service "+e+" which is a reserved keyword. This would affect the behaviour\n      of this API class, so it is forbidden to register with Injector.\n      ");var o=["load","createTransformer","get","register"];if(!o.every(function(e){return"function"==typeof t[e]}))throw new Error("\n      Tried to register service "+e+" that is not a valid object, Injector requires an object\n      which contains the following methods: "+o.join(", ")+"\n      ");this.services[e]=t,this[e]=t},load:function(){if(this.initialised)throw new Error("Cannot mutate DI container after it has been initialised");Object.values(this.services).forEach(function(e){return e.load()}),this.initialised=!0,this.callbacks.forEach(function(e){e()}),this.callbacks=[]},transform:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.initialised)throw new Error("Cannot mutate DI container after it has been initialised");t(Object.entries(this.services).reduce(function(t,r){var s=a(r,2),l=s[0],u=s[1];return i({},t,o({},l,u.createTransformer(e,n)))},{}))},ready:function(e){if("function"!=typeof e)throw new Error("Callback provided is not a function");if(this.initialised)return void e();this.callbacks=[].concat(r(this.callbacks),[e])}}};t.default=s},973:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(257),l=r(s),u=n(409),c=r(u),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,l.default)();return a({},e,{store:null,setStore:function(e){this.store=e},customise:function(e,t,n){var r=this;this.isProtected();var i=this.middlewareRegistries[t];i||(i=new c.default,this.middlewareRegistries=a({},this.middlewareRegistries,o({},t,i)));var s=function(e){var t=r.store&&r.store.getState;return n(e)(t)};i.add(e,s)},getAll:function(){return this.initialised?Object.entries(this.factories).reduce(function(e,t){var n=i(t,2),r=n[0],s=n[1];return a({},e,o({},r,s()))},{}):Object.entries(this.services).reduce(function(e,t){var n=i(t,2),r=n[0],s=n[1];return a({},e,o({},r,s))},{})}})};t.default=d},974:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case l.default.SET_BREADCRUMBS:return(0,a.default)(Object.assign([],t.payload.breadcrumbs));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(82),a=r(i),s=n(413),l=r(s),u=(0,a.default)([]);t.default=o},975:function(e,t,n){"use strict";function r(e){return{type:i.default.SET_CONFIG,payload:{config:e}}}Object.defineProperty(t,"__esModule",{value:!0}),t.setConfig=r;var o=n(414),i=function(e){return e&&e.__esModule?e:{default:e}}(o)},976:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case l.default.SET_CONFIG:return(0,a.default)(Object.assign({},e,t.payload.config));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(82),a=r(i),s=n(414),l=r(s);t.default=o},977:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;switch(arguments[1].type){case u.default.TOGGLE_MENU:return(0,s.default)(i({},e,{isOpen:!e.isOpen}));case u.default.OPEN_MENU:return(0,s.default)(i({},e,{isOpen:!0}));case u.default.CLOSE_MENU:return(0,s.default)(i({},e,{isOpen:!1}));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(82),s=r(a),l=n(415),u=r(l),c={isOpen:!1};t.default=o},978:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments[1];switch(t.type){case d.default.FETCH_RECORDS_SUCCESS:var n=t.payload.recordType;if(!n)throw new Error("Undefined record type");var r=t.payload.data._embedded[n]||[];return(0,u.default)(s({},e,i({},n,r)));case d.default.FETCH_RECORD_SUCCESS:var a=t.payload.recordType,l=t.payload.data;if(!a)throw new Error("Undefined record type");if(!l)throw new Error("Undefined record data given");var c=e[a]||[];return c.find(function(e){return e.ID===l.ID})?(0,u.default)(s({},e,i({},a,c.map(function(e){return e.ID===l.ID?l:e})))):(0,u.default)(s({},e,i({},a,[].concat(o(c),[l]))));case d.default.DELETE_RECORD_SUCCESS:var p=t.payload.recordType;if(!p)throw new Error("Undefined record type");var h=e[p].filter(function(e){return e.ID!==t.payload.id});return(0,u.default)(s({},e,i({},p,h)));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(82),u=r(l),c=n(417),d=r(c),f={};t.default=a},979:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(t.type){case c.default.SET_SCHEMA:var n=e[t.payload.id]||{};return(0,l.default)(a({},e,o({},t.payload.id,a({},n,t.payload))));case c.default.SET_SCHEMA_STATE_OVERRIDES:var r=e[t.payload.id]||{},i=t.payload.stateOverride;return i&&i.fields?(0,l.default)(a({},e,o({},t.payload.id,a({},r,{stateOverride:i})))):e;case c.default.SET_SCHEMA_LOADING:var s=e[t.payload.id]||{},u=s.metadata||{};return(0,l.default)(a({},e,o({},t.payload.id,a({},s,{metadata:a({},u,{loading:t.payload.loading})}))));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=i;var s=n(82),l=r(s),u=n(418),c=r(u),d=(0,l.default)({})},980:function(e,t,n){"use strict";function r(e,t){return{type:c.default.TREEFIELD_SET_VISIBLE,payload:{fieldId:e,path:t}}}function o(e,t){return{type:c.default.TREEFIELD_UPDATING_TREE,payload:{fieldId:e,path:t}}}function i(e,t,n){return{type:c.default.TREEFIELD_UPDATED_TREE,payload:{fieldId:e,path:t,tree:n}}}function a(e,t){return{type:c.default.TREEFIELD_UPDATE_FAILED,payload:{fieldId:e,path:t}}}function s(e,t){return{type:c.default.TREEFIELD_SET_SEARCH,payload:{fieldId:e,search:t}}}function l(e,t){return{type:c.default.TREEFIELD_ADD_SELECTED_VALUES,payload:{fieldId:e,values:t}}}Object.defineProperty(t,"__esModule",{value:!0}),t.setVisible=r,t.beginTreeUpdating=o,t.updateTree=i,t.updateTreeFailed=a,t.setSearch=s,t.addSelectedValues=l;var u=n(419),c=function(e){return e&&e.__esModule?e:{default:e}}(u)},981:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e){return Array.isArray(e)?e:Array.from(e)}function a(e,t,n){if(0===t.length)return n;var r=i(t),o=r[0],s=r.slice(1);return e.children?(0,d.default)(u({},e,{children:e.children.map(function(e){return e.id===o?a(e,s,n):e})})):e}function s(e){return e.length?e[e.length-1]:0}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=(0,p.default)(e,t,v),r=function(e,t){return e.filter(function(e){return e!==t})},i=function(e,t){return e.find(function(e){return e===t})?e:[].concat(o(e),[t]).sort()};switch(t.type){case m.default.TREEFIELD_SET_VISIBLE:return n(function(){return{visible:t.payload.path}});case m.default.TREEFIELD_UPDATING_TREE:return n(function(e){return{loading:i(e.loading,s(t.payload.path)),failed:r(e.failed,s(t.payload.path))}});case m.default.TREEFIELD_UPDATED_TREE:return n(function(e){return{tree:a(e.tree,t.payload.path,t.payload.tree),loading:r(e.loading,s(t.payload.path)),failed:r(e.failed,s(t.payload.path))}});case m.default.TREEFIELD_UPDATE_FAILED:return n(function(e){return{loading:r(e.loading,s(t.payload.path)),failed:i(e.failed,s(t.payload.path))}});case m.default.TREEFIELD_SET_SEARCH:return n(function(e){return u({},e,{search:t.payload.search})});case m.default.TREEFIELD_ADD_SELECTED_VALUES:var l=t.payload.values||[];return n(function(e){return u({},e,{selectedValues:[].concat(o(e.selectedValues.filter(function(e){return!l.find(function(t){return t.id===e.id})})),o(l)).sort(function(e,t){return e.id-t.id})})});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=l;var c=n(82),d=r(c),f=n(1936),p=r(f),h=n(419),m=r(h),y=(0,d.default)({fields:{}}),v=(0,d.default)({visible:[],tree:{},loading:[],failed:[],search:"",selectedValues:[]})},982:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=t.meta&&t.meta.form;switch(t.type){case c.default.ADD_FORM_CHANGED:case l.actionTypes.CHANGE:return(0,s.default)([].concat(o(e.filter(function(e){return e.name!==n})),[{name:n}]));case c.default.REMOVE_FORM_CHANGED:case l.actionTypes.STOP_SUBMIT:return(0,s.default)([].concat(o(e.filter(function(e){return e.name!==n}))));case l.actionTypes.DESTROY:return(0,s.default)([].concat(o(e.filter(function(e){return!n.includes(e.name)}))));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(82),s=r(a),l=n(96),u=n(420),c=r(u);t.default=i},983:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e){return o.default.createElement("div",{className:"accordion",role:"tablist","aria-multiselectable":"true"},e.children)};t.default=i},984:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e){var t=e.groupid+"_Header",n=e.groupid+"_Items",r=n.replace(/\\/g,"_"),i=t.replace(/\\/g,"_"),a={id:r,"aria-expanded":!0,className:"list-group list-group-flush collapse show",role:"tabpanel","aria-labelledby":t};return o.default.createElement("div",{className:"accordion__block"},o.default.createElement("a",{className:"accordion__title","data-toggle":"collapse",href:"#"+r,"aria-expanded":"true","aria-controls":n,id:i,role:"tab"},e.title),o.default.createElement("div",a,e.children))};t.default=i},985:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(4),d=r(c),f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){if(!this.props.status)return null;var e=(0,d.default)(this.props.className,"badge badge-"+this.props.status+" badge-pill");return u.default.createElement("span",{className:e},this.props.message)}}]),t}(l.PureComponent);f.propTypes={message:l.PropTypes.node,status:l.PropTypes.oneOf(["default","info","success","warning","danger","primary","secondary"]),className:l.PropTypes.string},f.defaultProps={status:"default"},t.default=f},986:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{crumbs:e.breadcrumbs}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=n(53),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),s(t,[{key:"getLastCrumb",value:function(){return this.props.crumbs&&this.props.crumbs[this.props.crumbs.length-1]}},{key:"renderBreadcrumbs",value:function(){return this.props.crumbs?this.props.crumbs.slice(0,-1).map(function(e){return u.default.createElement("li",{key:e.text,className:"breadcrumb__item"},u.default.createElement("a",{className:"breadcrumb__item-title",href:e.href,onClick:e.onClick},e.text))}):null}},{key:"renderLastCrumb",value:function(){var e=this.getLastCrumb();if(!e)return null;var t=["breadcrumb__icon"];return e.icon&&t.push(e.icon.className),u.default.createElement("div",{className:"breadcrumb__item breadcrumb__item--last"},u.default.createElement("h2",{className:"breadcrumb__item-title"},e.text,e.icon&&u.default.createElement("span",{className:t.join(" "),role:"button",tabIndex:0,onClick:e.icon.onClick})))}},{key:"render",value:function(){return u.default.createElement("div",{className:"breadcrumb__container fill-height flexbox-area-grow"},this.props.crumbs&&this.props.crumbs.length>1&&u.default.createElement("div",{className:"breadcrumb__list-container"},u.default.createElement("ol",{className:"breadcrumb"},this.renderBreadcrumbs())),this.renderLastCrumb())}}]),t}(l.Component);d.propTypes={crumbs:l.PropTypes.arrayOf(l.PropTypes.shape({onClick:l.PropTypes.func,text:l.PropTypes.string,icon:l.PropTypes.shape({className:l.PropTypes.string,onClick:l.PropTypes.func,action:function(e){if(e.action)throw new Error("action: no longer used")}})}))},t.Component=d,t.default=(0,c.connect)(a)(d)},987:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=function(t){function n(){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,t),u(n,[{key:"getMessage",value:function(){var e=null;this.props.message&&this.props.message.value&&(e=this.props.message);var t=this.props.meta;return t&&t.error&&t.touched&&(!e||t.dirty)&&(e=t.error),e}},{key:"getHolderProps",value:function(){var e=["field",this.props.extraClass];return this.props.readOnly&&e.push("readonly"),{bsClass:this.props.bsClass,bsSize:this.props.bsSize,validationState:this.props.validationState,className:e.join(" "),controlId:this.props.id,id:this.props.holderId}}},{key:"renderDescription",value:function(){return null===this.props.description?null:(0,h.default)("div",this.props.description,{className:"form__field-description"})}},{key:"renderMessage",value:function(){var e=this.getMessage();if(!e)return null;var t=(0,y.default)(["form__field-message","form__field-message--"+e.type]),n=(0,h.default)("div",e.value);return d.default.createElement("div",{className:t},n)}},{key:"renderLeftTitle",value:function(){var e=null!==this.props.leftTitle?this.props.leftTitle:this.props.title;return!e||this.props.hideLabels?null:(0,h.default)(f.ControlLabel,e,{className:"form__field-label"})}},{key:"renderRightTitle",value:function(){return!this.props.rightTitle||this.props.hideLabels?null:(0,h.default)(f.ControlLabel,this.props.rightTitle,{className:"form__field-label"})}},{key:"renderField",value:function(){var t=Boolean(this.getMessage()),n=l({},this.props,{extraClass:(0,y.default)(this.props.extraClass,{"is-invalid":t})}),r=d.default.createElement(e,n),o=this.props.data.prefix,i=this.props.data.suffix;return o||i?d.default.createElement(f.InputGroup,null,o&&d.default.createElement(f.InputGroup.Addon,null,o),r,i&&d.default.createElement(f.InputGroup.Addon,null,i)):r}},{key:"render",value:function(){return this.props.noHolder?this.renderField():d.default.createElement(f.FormGroup,this.getHolderProps(),this.renderLeftTitle(),d.default.createElement("div",{className:"form__field-holder"},this.renderField(),this.renderMessage(),this.renderDescription()),this.renderRightTitle())}}]),n}(c.Component);return t.propTypes={leftTitle:c.PropTypes.any,rightTitle:c.PropTypes.any,title:c.PropTypes.any,extraClass:c.PropTypes.string,holderId:c.PropTypes.string,id:c.PropTypes.string,name:c.PropTypes.string,description:c.PropTypes.any,hideLabels:c.PropTypes.bool,message:c.PropTypes.shape({extraClass:c.PropTypes.string,value:c.PropTypes.any,type:c.PropTypes.string}),data:c.PropTypes.oneOfType([c.PropTypes.array,c.PropTypes.shape({prefix:c.PropTypes.string,suffix:c.PropTypes.string})])},t.defaultProps={className:"",extraClass:"",leftTitle:null,rightTitle:null,title:"",description:null,hideLabels:!1,noHolder:!1,message:null,data:{}},t}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),d=r(c),f=n(36),p=n(83),h=r(p),m=n(4),y=r(m);t.default=s},988:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.wasClicked=!1,n.handleElementClick=n.handleElementClick.bind(n),n.handleDocumentClick=n.handleDocumentClick.bind(n),n}return i(t,e),a(t,[{key:"componentDidMount",value:function(){this.container.addEventListener("click",this.handleElementClick),document.addEventListener("click",this.handleDocumentClick)}},{key:"componentWillUnmount",value:function(){this.container.removeEventListener("click",this.handleElementClick),document.removeEventListener("click",this.handleDocumentClick)}},{key:"handleElementClick",value:function(){this.wasClicked=!0}},{key:"handleDocumentClick",value:function(){this.wasClicked||this.props.onClickOut(),this.wasClicked=!1}},{key:"render",value:function(){var e=this;return l.default.createElement("div",{className:this.props.className,ref:function(t){e.container=t}},this.props.children)}}]),t}(s.Component);u.propTypes={children:s.PropTypes.any,className:s.PropTypes.string,onClickOut:s.PropTypes.func.isRequired},u.defaultProps={className:""},t.default=u},989:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),d=n(391),f=r(d),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"componentDidMount",value:function(){if(this.props.autoFocus&&this.form){var e=this.form.querySelector("input, select, textarea");e&&e.focus()}}},{key:"renderMessages",value:function(){return Array.isArray(this.props.messages)?this.props.messages.map(function(e,t){return c.default.createElement(f.default,s({key:t,className:t?"":"message-box--panel-top"},e))}):null}},{key:"render",value:function(){var e=this,t=!1!==this.props.valid,n=this.props.mapFieldsToComponents(this.props.fields),r=this.props.mapActionsToComponents(this.props.actions),o=this.renderMessages(),i=["form"];!1===t&&i.push("form--invalid"),this.props.attributes&&this.props.attributes.className&&i.push(this.props.attributes.className);var a=s({},this.props.attributes,{onSubmit:this.props.handleSubmit,className:i.join(" ")});return c.default.createElement("form",s({},a,{ref:function(t){e.form=t}}),n&&c.default.createElement("fieldset",null,o,this.props.afterMessages,n),r&&r.length?c.default.createElement("div",{className:"btn-toolbar",role:"group"},r):null)}}]),t}(u.Component);p.propTypes={autoFocus:u.PropTypes.bool,valid:u.PropTypes.bool,actions:u.PropTypes.array,afterMessages:u.PropTypes.node,attributes:u.PropTypes.shape({action:u.PropTypes.string.isRequired,className:u.PropTypes.string,encType:u.PropTypes.string,id:u.PropTypes.string,method:u.PropTypes.string.isRequired}),fields:u.PropTypes.array.isRequired,handleSubmit:u.PropTypes.func,mapActionsToComponents:u.PropTypes.func.isRequired,mapFieldsToComponents:u.PropTypes.func.isRequired,messages:u.PropTypes.arrayOf(u.PropTypes.shape({extraClass:u.PropTypes.string,value:u.PropTypes.any,type:u.PropTypes.string}))},t.default=p},990:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={CSRF_HEADER:"X-SecurityID"}},991:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(83),d=r(c),f=n(4),p=r(f),h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return a(t,e),s(t,[{key:"getButtonProps",value:function(){return Object.assign({},void 0===this.props.attributes?{}:this.props.attributes,{id:this.props.id,name:this.props.name,className:this.getButtonClasses(),disabled:this.props.disabled,onClick:this.handleClick})}},{key:"getButtonClasses",value:function(){var e={btn:!0,"btn--no-text":"string"!=typeof this.props.title,"btn--loading":this.props.loading,disabled:this.props.disabled},t=this.getButtonStyle();t&&(e["btn-"+t]=!0);var n=this.getIcon();return n&&(e["font-icon-"+n]=!0),"string"==typeof this.props.extraClass&&(e[this.props.extraClass]=!0),(0,p.default)(e)}},{key:"getButtonStyle",value:function(){return void 0!==this.props.data.buttonStyle?this.props.data.buttonStyle:void 0!==this.props.buttonStyle?this.props.buttonStyle:this.props.extraClass.split(" ").find(function(e){return e.indexOf("btn-")>-1})?null:this.isPrimary()?"primary":"secondary"}},{key:"getIcon",value:function(){return this.props.icon||this.props.data.icon||null}},{key:"getLoadingIcon",value:function(){return this.props.loading?u.default.createElement("div",{className:"btn__loading-icon"},u.default.createElement("span",{className:"btn__circle btn__circle--1"}),u.default.createElement("span",{className:"btn__circle btn__circle--2"}),u.default.createElement("span",{className:"btn__circle btn__circle--3"})):null}},{key:"isPrimary",value:function(){var e=this.props.extraClass.split(" ");return"action_save"===this.props.name||e.find(function(e){return"ss-ui-action-constructive"===e})}},{key:"handleClick",value:function(e){"function"==typeof this.props.onClick&&this.props.onClick(e,this.props.name||this.props.id)}},{key:"render",value:function(){var e=this.props.title;return u.default.createElement("button",this.getButtonProps(),this.getLoadingIcon(),(0,d.default)("span",e,{className:"btn__title"}))}}]),t}(l.Component);h.propTypes={id:u.default.PropTypes.string,name:u.default.PropTypes.string,onClick:u.default.PropTypes.func,title:u.default.PropTypes.string,type:u.default.PropTypes.string,loading:u.default.PropTypes.bool,icon:u.default.PropTypes.string,disabled:u.default.PropTypes.bool,data:u.default.PropTypes.oneOfType([u.default.PropTypes.array,u.default.PropTypes.shape({buttonStyle:u.default.PropTypes.string})]),extraClass:u.default.PropTypes.string,attributes:u.default.PropTypes.object},h.defaultProps={title:"",icon:"",extraClass:"",attributes:{},data:{},disabled:!1},t.default=h},992:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(36),d=n(83),f=r(d),p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleDismiss=n.handleDismiss.bind(n),n.state={visible:!0},n}return a(t,e),s(t,[{key:"getMessageStyle",value:function(){switch(this.props.type){case"good":case"success":return"success";case"info":return"info";case"warn":case"warning":return"warning";default:return"danger"}}},{key:"getMessageProps",value:function(){return{className:["message-box","message-box--"+(this.props.type||"no-type"),this.props.className,this.props.extraClass].join(" "),bsStyle:this.props.bsStyle||this.getMessageStyle(),bsClass:this.props.bsClass,onDismiss:this.props.closeLabel?this.handleDismiss:null,closeLabel:this.props.closeLabel}}},{key:"handleDismiss",value:function(){"function"==typeof this.props.onDismiss?this.props.onDismiss():this.setState({visible:!1})}},{key:"render",value:function(){if("boolean"!=typeof this.props.visible&&this.state.visible||this.props.visible){var e=(0,f.default)("div",this.props.value);if(e)return u.default.createElement(c.Alert,this.getMessageProps(),e)}return null}}]),t}(l.Component);p.propTypes={extraClass:l.PropTypes.string,value:l.PropTypes.any,type:l.PropTypes.string,onDismiss:l.PropTypes.func,closeLabel:l.PropTypes.string,visible:l.PropTypes.bool},p.defaultProps={extraClass:"",className:""},t.default=p},993:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.schemaPropType=t.basePropTypes=t.Component=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),d=r(c),f=n(247),p=r(f),h=n(177),m=r(h),y=n(408),v=n(772),b=r(v),g=n(38),_=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.schema.schema;return n.state={submittingAction:null},n.submitApi=b.default.createEndpointFetcher({url:r.attributes.action,method:r.attributes.method}),n.mapActionsToComponents=n.mapActionsToComponents.bind(n),n.mapFieldsToComponents=n.mapFieldsToComponents.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.handleAction=n.handleAction.bind(n),n.buildComponent=n.buildComponent.bind(n),n.validateForm=n.validateForm.bind(n),n}return s(t,e),u(t,[{key:"getComponentForDataType",value:function(e,t){var n=this,r=this.props.identifier,o=function(e){return n.context.injector.get(e,r+"."+t)};switch(e){case"String":case"Text":return o("TextField");case"Date":return o("DateField");case"Time":return o("TimeField");case"Datetime":return o("DatetimeField");case"Hidden":return o("HiddenField");case"SingleSelect":return o("SingleSelectField");case"Custom":return o("GridField");case"Structural":return o("CompositeField");case"Boolean":return o("CheckboxField");case"MultiSelect":return o("CheckboxSetField");default:return null}}},{key:"validateForm",value:function(e){if("function"==typeof this.props.validate)return this.props.validate(e);if(!this.props.schema||!this.props.schema.schema)return{};var t=this.context.injector.validate(this.props.identifier),n={};return t&&(n=t(e,this.props.schema.schema)||{}),(0,y.createErrorBlock)(n)}},{key:"buildComponent",value:function(e){var t=l({},e,e.input,{container:this});delete t.input;var n=this.props.identifier,r=t.name,o=null!==t.schemaComponent?this.context.injector.get(t.schemaComponent,n+"."+r):this.getComponentForDataType(t.schemaType,r);if(null===o)return null;if(null!==t.schemaComponent&&void 0===o)throw Error("Component not found in injector: "+t.schemaComponent);var i=this.props.createFn;return"function"==typeof i?i(o,t):d.default.createElement(o,l({key:t.id},t))}},{key:"mapFieldsToComponents",value:function(e){var t=this,n=this.props.baseFieldComponent;return e.map(function(e){var r=e;return e.children&&(r=Object.assign({},e,{children:t.mapFieldsToComponents(e.children)})),r=Object.assign({onAutofill:t.props.onAutofill,formid:t.props.form},r),"Structural"===e.schemaType||!0===e.readOnly?t.buildComponent(r):d.default.createElement(n,l({key:r.id},r,{component:t.buildComponent}))})}},{key:"handleAction",value:function(e){"function"==typeof this.props.onAction&&this.props.onAction(e,this.props.values),e.isPropagationStopped()||this.setState({submittingAction:e.currentTarget.name})}},{key:"handleSubmit",value:function(e){var t=this,n=this.state.submittingAction?this.state.submittingAction:this.props.schema.schema.actions[0].name,r=Object.assign({},e,o({},n,1)),i=this.props.responseRequestedSchema.join(),a={"X-Formschema-Request":i,"X-Requested-With":"XMLHttpRequest"},s=function(e){return t.submitApi(e||r,a).then(function(e){return t.setState({submittingAction:null}),e}).catch(function(e){throw t.setState({submittingAction:null}),e})};return"function"==typeof this.props.onSubmit?this.props.onSubmit(r,n,s):s()}},{key:"mapActionsToComponents",value:function(e){var t=this;return e.map(function(e){var n=Object.assign({},e);return e.children?n.children=t.mapActionsToComponents(e.children):(n.onClick=t.handleAction,t.props.submitting&&t.state.submittingAction===e.name&&(n.loading=!0)),t.buildComponent(n)})}},{key:"normalizeFields",value:function(e,t){var n=this;return e.map(function(e){var r=t&&t.fields?t.fields.find(function(t){return t.id===e.id}):{},o=p.default.recursive(!0,(0,h.schemaMerge)(e,r),{schemaComponent:r&&r.component?r.component:e.component});return e.children&&(o.children=n.normalizeFields(e.children,t)),o})}},{key:"render",value:function(){var e=this.props.schema.schema,t=this.props.schema.state,n=this.props.baseFormComponent,r=l({},e.attributes,{className:e.attributes.class,encType:e.attributes.enctype,noValidate:!0});delete r.class,delete r.enctype;var o=this.props,i=o.asyncValidate,a=o.onSubmitFail,s=o.onSubmitSuccess,u=o.shouldAsyncValidate,c=o.touchOnBlur,f=o.touchOnChange,p=o.persistentSubmitErrors,h=o.form,y=o.afterMessages,v=o.autoFocus,b={form:h,afterMessages:y,fields:this.normalizeFields(e.fields,t),actions:this.normalizeFields(e.actions,t),attributes:r,data:e.data,initialValues:(0,m.default)(e,t),onSubmit:this.handleSubmit,valid:t&&t.valid,messages:t&&Array.isArray(t.messages)?t.messages:[],mapActionsToComponents:this.mapActionsToComponents,mapFieldsToComponents:this.mapFieldsToComponents,asyncValidate:i,onSubmitFail:a,onSubmitSuccess:s,shouldAsyncValidate:u,touchOnBlur:c,touchOnChange:f,persistentSubmitErrors:p,validate:this.validateForm,autoFocus:v};return d.default.createElement(n,b)}}]),t}(c.Component),w=c.PropTypes.shape({id:c.PropTypes.string,schema:c.PropTypes.shape({attributes:c.PropTypes.shape({class:c.PropTypes.string,enctype:c.PropTypes.string}),fields:c.PropTypes.array.isRequired}),state:c.PropTypes.shape({fields:c.PropTypes.array}),loading:c.PropTypes.boolean,stateOverride:c.PropTypes.shape({fields:c.PropTypes.array})}),T={createFn:c.PropTypes.func,onSubmit:c.PropTypes.func,onAction:c.PropTypes.func,asyncValidate:c.PropTypes.func,onSubmitFail:c.PropTypes.func,onSubmitSuccess:c.PropTypes.func,shouldAsyncValidate:c.PropTypes.func,touchOnBlur:c.PropTypes.bool,touchOnChange:c.PropTypes.bool,persistentSubmitErrors:c.PropTypes.bool,validate:c.PropTypes.func,values:c.PropTypes.object,submitting:c.PropTypes.bool,baseFormComponent:c.PropTypes.func.isRequired,baseFieldComponent:c.PropTypes.func.isRequired,responseRequestedSchema:c.PropTypes.arrayOf(c.PropTypes.oneOf(["schema","state","errors","auto"])),identifier:function(e,t,n){return/^[A-Za-z0-9_.]+$/.test(e[t])?null:new Error("\n        Invalid identifier supplied to "+n+". Must be a set of\n        dot-separated alphanumeric strings.\n      ")}};_.propTypes=Object.assign({},T,{form:c.PropTypes.string.isRequired,schema:w.isRequired,autoFocus:c.PropTypes.bool}),_.defaultProps={responseRequestedSchema:["auto"],autoFocus:!1},t.Component=_,t.basePropTypes=T,t.schemaPropType=w,t.default=(0,g.withInjector)(_)},994:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(22),d=r(c),f=n(36),p=n(1926),h=r(p),m=n(83),y=r(m),v=function(){return null},b=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSubmit=n.handleSubmit.bind(n),n.handleHide=n.handleHide.bind(n),n.clearResponse=n.clearResponse.bind(n),n.handleLoadingError=n.handleLoadingError.bind(n),n}return a(t,e),s(t,[{key:"getForm",value:function(){return this.props.schemaUrl?u.default.createElement(h.default,{schemaUrl:this.props.schemaUrl,onSubmit:this.handleSubmit,onAction:this.props.onAction,onLoadingError:this.handleLoadingError,identifier:this.props.identifier}):null}},{key:"getResponse",value:function(){if(!this.state||!this.state.response)return null;var e="";return e=this.state.error?this.props.responseClassBad:this.props.responseClassGood,u.default.createElement("div",{className:e},(0,y.default)("span",{html:this.state.response}))}},{key:"clearResponse",value:function(){this.setState({response:null})}},{key:"handleLoadingError",value:function(e){var t=this.props.onLoadingError!==v;if(this.props.showErrorMessage||!t){var n=e.errors&&e.errors[0];this.setState({response:n.value,error:!0})}t&&this.props.onLoadingError(e)}},{key:"handleHide",value:function(){this.clearResponse(),"function"==typeof this.props.onHide&&this.props.onHide()}},{key:"handleSubmit",value:function(e,t,n){var r=this;this.clearResponse();var o=null;if(!(o="function"==typeof this.props.onSubmit?this.props.onSubmit(e,t,n):n()))throw new Error("Promise was not returned for submitting");return o.then(function(e){return e&&r.setState({response:e.message,error:!1}),e}).catch(function(e){e.then(function(e){r.setState({response:e,error:!0})})}),o}},{key:"renderHeader",value:function(){return!1!==this.props.title?u.default.createElement(f.Modal.Header,{closeButton:!0},u.default.createElement(f.Modal.Title,null,this.props.title)):"function"==typeof this.props.onHide?u.default.createElement("button",{type:"button",className:"close form-builder-modal__close-button",onClick:this.handleHide,"aria-label":d.default._t("Admin.CLOSE","Close")},u.default.createElement("span",{"aria-hidden":"true"},"×")):null}},{key:"render",value:function(){var e=this.getForm(),t=this.getResponse();return u.default.createElement(f.Modal,{show:this.props.show,onHide:this.handleHide,className:this.props.className,dialogClassName:this.props.dialogClassName,bsSize:this.props.bsSize},this.renderHeader(),u.default.createElement(f.Modal.Body,{className:this.props.bodyClassName},t,e,this.props.children))}}]),t}(l.Component);b.propTypes={show:u.default.PropTypes.bool,title:u.default.PropTypes.oneOfType([u.default.PropTypes.string,u.default.PropTypes.bool]),className:u.default.PropTypes.string,bodyClassName:u.default.PropTypes.string,onHide:u.default.PropTypes.func,schemaUrl:u.default.PropTypes.string,onSubmit:u.default.PropTypes.func,onAction:u.default.PropTypes.func,responseClassGood:u.default.PropTypes.string,responseClassBad:u.default.PropTypes.string,identifier:u.default.PropTypes.string,showErrorMessage:u.default.PropTypes.bool,onLoadingError:u.default.PropTypes.func},b.defaultProps={showErrorMessage:!1,onLoadingError:v,show:!1,title:null,responseClassGood:"alert alert-success",responseClassBad:"alert alert-danger"},t.default=b},995:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n=t.data&&t.data.recordType;return{config:e.config,records:n&&e.records[n]?e.records[n]:A}}function l(e){return{actions:(0,h.bindActionCreators)(R,e)}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),d=r(c),f=n(22),p=r(f),h=n(41),m=n(53),y=n(937),v=r(y),b=n(935),g=r(b),_=n(936),w=r(_),T=n(254),P=r(T),C=n(934),O=r(C),E=n(933),j=r(E),S=n(932),k=r(S),x=n(1933),R=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(x),M=n(83),D=r(M),A=[],F=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.deleteRecord=n.deleteRecord.bind(n),n.editRecord=n.editRecord.bind(n),n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props.data;this.props.actions.fetchRecords(e.recordType,e.collectionReadEndpoint.method,e.collectionReadEndpoint.url)}},{key:"createRowActions",value:function(e){return d.default.createElement(O.default,{className:"grid-field__cell--actions",key:"Actions"},d.default.createElement(j.default,{icon:"cog",onClick:this.editRecord,record:e}),d.default.createElement(j.default,{icon:"cancel",onClick:this.deleteRecord,record:e}))}},{key:"createCell",value:function(e,t){var n=this.props.data.onDrillDown,r={className:n?"grid-field__cell--drillable":"",onDrillDown:n?function(t){return n(t,e)}:null,key:""+t.name,width:t.width},o=t.field.split(".").reduce(function(e,t){return e[t]},e);return(0,D.default)(O.default,o,r)}},{key:"createRow",value:function(e){var t=this,n={className:this.props.data.onDrillDown?"grid-field__row--drillable":"",key:""+e.ID},r=this.props.data.columns.map(function(n){return t.createCell(e,n)}),o=this.createRowActions(e);return d.default.createElement(P.default,n,r,o)}},{key:"deleteRecord",value:function(e,t){e.preventDefault();var n={};n[k.default.CSRF_HEADER]=this.props.config.SecurityID,confirm(p.default._t("CampaignAdmin.DELETECAMPAIGN","Are you sure you want to delete this record?"))&&this.props.actions.deleteRecord(this.props.data.recordType,t,this.props.data.itemDeleteEndpoint.method,this.props.data.itemDeleteEndpoint.url,n)}},{key:"editRecord",value:function(e,t){e.preventDefault(),this.props.data&&"function"==typeof this.props.data.onEditRecord&&this.props.data.onEditRecord(e,t)}},{key:"render",value:function(){var e=this;if(this.props.records===A)return d.default.createElement("div",null,p.default._t("CampaignAdmin.LOADING","Loading..."));if(!this.props.records.length)return d.default.createElement("div",null,p.default._t("CampaignAdmin.NO_RECORDS","No campaigns created yet."));var t=d.default.createElement("th",{key:"holder",className:"grid-field__action-placeholder"}),n=this.props.data.columns.map(function(e){return d.default.createElement(w.default,{key:e.name},e.name)}),r=d.default.createElement(g.default,null,n.concat(t)),o=this.props.records.map(function(t){return e.createRow(t)});return d.default.createElement(v.default,{header:r,rows:o})}}]),t}(c.Component);F.propTypes={data:d.default.PropTypes.shape({recordType:d.default.PropTypes.string.isRequired,headerColumns:d.default.PropTypes.array,collectionReadEndpoint:d.default.PropTypes.object,onDrillDown:d.default.PropTypes.func,onEditRecord:d.default.PropTypes.func})},t.default=(0,m.connect)(s,l)(F)},996:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),d=r(c),f=n(4),p=r(f),h=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleDrillDown=n.handleDrillDown.bind(n),n}return s(t,e),u(t,[{key:"handleDrillDown",value:function(e){"function"==typeof this.props.onDrillDown&&this.props.onDrillDown(e)}},{key:"render",value:function(){var e=["grid-field__cell",this.props.className],t=this.props,n=(t.onDrillDown,o(t,["onDrillDown"]));return d.default.createElement("td",l({},n,{className:(0,p.default)(e),onClick:this.handleDrillDown}))}}]),t}(c.Component);h.PropTypes={className:d.default.PropTypes.string,onDrillDown:d.default.PropTypes.func},t.default=h},997:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=n(254),s=r(a),l=function(e){return i.default.createElement(s.default,null,e.children)};t.default=l},998:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e){return o.default.createElement("th",null,e.children)};t.default=i},999:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e){var t="grid-field__row "+e.className;return o.default.createElement("tr",{tabIndex:0,className:t},e.children)};t.default=i}},[925]);
=======
webpackJsonp([0],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _redux = __webpack_require__(41);

var _reactRedux = __webpack_require__(55);

var _GridFieldTable = __webpack_require__(942);

var _GridFieldTable2 = _interopRequireDefault(_GridFieldTable);

var _GridFieldHeader = __webpack_require__(940);

var _GridFieldHeader2 = _interopRequireDefault(_GridFieldHeader);

var _GridFieldHeaderCell = __webpack_require__(941);

var _GridFieldHeaderCell2 = _interopRequireDefault(_GridFieldHeaderCell);

var _GridFieldRow = __webpack_require__(256);

var _GridFieldRow2 = _interopRequireDefault(_GridFieldRow);

var _GridFieldCell = __webpack_require__(939);

var _GridFieldCell2 = _interopRequireDefault(_GridFieldCell);

var _GridFieldAction = __webpack_require__(938);

var _GridFieldAction2 = _interopRequireDefault(_GridFieldAction);

var _FormConstants = __webpack_require__(937);

var _FormConstants2 = _interopRequireDefault(_FormConstants);

var _RecordsActions = __webpack_require__(1944);

var actions = _interopRequireWildcard(_RecordsActions);

var _castStringToElement = __webpack_require__(85);

var _castStringToElement2 = _interopRequireDefault(_castStringToElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotYetLoaded = [];

var GridField = function (_Component) {
  _inherits(GridField, _Component);

  function GridField(props) {
    _classCallCheck(this, GridField);

    var _this = _possibleConstructorReturn(this, (GridField.__proto__ || Object.getPrototypeOf(GridField)).call(this, props));

    _this.deleteRecord = _this.deleteRecord.bind(_this);
    _this.editRecord = _this.editRecord.bind(_this);
    return _this;
  }

  _createClass(GridField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var data = this.props.data;

      this.props.actions.fetchRecords(data.recordType, data.collectionReadEndpoint.method, data.collectionReadEndpoint.url);
    }
  }, {
    key: 'createRowActions',
    value: function createRowActions(record) {
      return _react2.default.createElement(
        _GridFieldCell2.default,
        { className: 'grid-field__cell--actions', key: 'Actions' },
        _react2.default.createElement(_GridFieldAction2.default, {
          icon: 'cog',
          onClick: this.editRecord,
          record: record
        }),
        _react2.default.createElement(_GridFieldAction2.default, {
          icon: 'cancel',
          onClick: this.deleteRecord,
          record: record
        })
      );
    }
  }, {
    key: 'createCell',
    value: function createCell(record, column) {
      var handleDrillDown = this.props.data.onDrillDown;
      var cellProps = {
        className: handleDrillDown ? 'grid-field__cell--drillable' : '',
        onDrillDown: handleDrillDown ? function (event) {
          return handleDrillDown(event, record);
        } : null,
        key: '' + column.name,
        width: column.width
      };
      var val = column.field.split('.').reduce(function (a, b) {
        return a[b];
      }, record);
      return (0, _castStringToElement2.default)(_GridFieldCell2.default, val, cellProps);
    }
  }, {
    key: 'createRow',
    value: function createRow(record) {
      var _this2 = this;

      var rowProps = {
        className: this.props.data.onDrillDown ? 'grid-field__row--drillable' : '',
        key: '' + record.ID
      };
      var cells = this.props.data.columns.map(function (column) {
        return _this2.createCell(record, column);
      });
      var rowActions = this.createRowActions(record);

      return _react2.default.createElement(
        _GridFieldRow2.default,
        rowProps,
        cells,
        rowActions
      );
    }
  }, {
    key: 'deleteRecord',
    value: function deleteRecord(event, id) {
      event.preventDefault();
      var headers = {};
      headers[_FormConstants2.default.CSRF_HEADER] = this.props.config.SecurityID;

      if (!confirm(_i18n2.default._t('CampaignAdmin.DELETECAMPAIGN', 'Are you sure you want to delete this record?'))) {
        return;
      }

      this.props.actions.deleteRecord(this.props.data.recordType, id, this.props.data.itemDeleteEndpoint.method, this.props.data.itemDeleteEndpoint.url, headers);
    }
  }, {
    key: 'editRecord',
    value: function editRecord(event, id) {
      event.preventDefault();

      if (!this.props.data) {
        return;
      }
      if (typeof this.props.data.onEditRecord === 'function') {
        this.props.data.onEditRecord(event, id);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.props.records === NotYetLoaded) {
        return _react2.default.createElement(
          'div',
          null,
          _i18n2.default._t('CampaignAdmin.LOADING', 'Loading...')
        );
      }

      if (!this.props.records.length) {
        return _react2.default.createElement(
          'div',
          null,
          _i18n2.default._t('CampaignAdmin.NO_RECORDS', 'No campaigns created yet.')
        );
      }

      var actionPlaceholder = _react2.default.createElement('th', { key: 'holder', className: 'grid-field__action-placeholder' });
      var headerCells = this.props.data.columns.map(function (column) {
        return _react2.default.createElement(
          _GridFieldHeaderCell2.default,
          { key: column.name },
          column.name
        );
      });
      var header = _react2.default.createElement(
        _GridFieldHeader2.default,
        null,
        headerCells.concat(actionPlaceholder)
      );
      var rows = this.props.records.map(function (record) {
        return _this3.createRow(record);
      });

      return _react2.default.createElement(_GridFieldTable2.default, { header: header, rows: rows });
    }
  }]);

  return GridField;
}(_react.Component);

GridField.propTypes = {
  data: _react2.default.PropTypes.shape({
    recordType: _react2.default.PropTypes.string.isRequired,
    headerColumns: _react2.default.PropTypes.array,
    collectionReadEndpoint: _react2.default.PropTypes.object,
    onDrillDown: _react2.default.PropTypes.func,
    onEditRecord: _react2.default.PropTypes.func
  })
};

function mapStateToProps(state, ownProps) {
  var recordType = ownProps.data && ownProps.data.recordType;
  return {
    config: state.config,
    records: recordType && state.records[recordType] ? state.records[recordType] : NotYetLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GridField);

/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridFieldCell = function (_Component) {
  _inherits(GridFieldCell, _Component);

  function GridFieldCell(props) {
    _classCallCheck(this, GridFieldCell);

    var _this = _possibleConstructorReturn(this, (GridFieldCell.__proto__ || Object.getPrototypeOf(GridFieldCell)).call(this, props));

    _this.handleDrillDown = _this.handleDrillDown.bind(_this);
    return _this;
  }

  _createClass(GridFieldCell, [{
    key: 'handleDrillDown',
    value: function handleDrillDown(event) {
      if (typeof this.props.onDrillDown === 'function') {
        this.props.onDrillDown(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classNames = ['grid-field__cell', this.props.className];

      var _props = this.props,
          onDrillDown = _props.onDrillDown,
          props = _objectWithoutProperties(_props, ['onDrillDown']);

      return _react2.default.createElement('td', _extends({}, props, {
        className: (0, _classnames2.default)(classNames),
        onClick: this.handleDrillDown
      }));
    }
  }]);

  return GridFieldCell;
}(_react.Component);

GridFieldCell.PropTypes = {
  className: _react2.default.PropTypes.string,
  onDrillDown: _react2.default.PropTypes.func
};

exports.default = GridFieldCell;

/***/ }),

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GridFieldRow = __webpack_require__(256);

var _GridFieldRow2 = _interopRequireDefault(_GridFieldRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridFieldHeader = function GridFieldHeader(props) {
  return _react2.default.createElement(
    _GridFieldRow2.default,
    null,
    props.children
  );
};

exports.default = GridFieldHeader;

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridFieldHeaderCell = function GridFieldHeaderCell(props) {
  return _react2.default.createElement(
    'th',
    null,
    props.children
  );
};

exports.default = GridFieldHeaderCell;

/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridFieldRow = function GridFieldRow(props) {
  var className = 'grid-field__row ' + props.className;
  return _react2.default.createElement(
    'tr',
    { tabIndex: 0, className: className },
    props.children
  );
};

exports.default = GridFieldRow;

/***/ }),

/***/ 1005:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridFieldTable = function (_Component) {
  _inherits(GridFieldTable, _Component);

  function GridFieldTable() {
    _classCallCheck(this, GridFieldTable);

    return _possibleConstructorReturn(this, (GridFieldTable.__proto__ || Object.getPrototypeOf(GridFieldTable)).apply(this, arguments));
  }

  _createClass(GridFieldTable, [{
    key: 'generateHeader',
    value: function generateHeader() {
      if (typeof this.props.header !== 'undefined') {
        return this.props.header;
      }

      if (typeof this.props.data !== 'undefined') {}

      return null;
    }
  }, {
    key: 'generateRows',
    value: function generateRows() {
      if (typeof this.props.rows !== 'undefined') {
        return this.props.rows;
      }

      if (typeof this.props.data !== 'undefined') {}

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'grid-field' },
        _react2.default.createElement(
          'table',
          { className: 'table table-hover grid-field__table' },
          _react2.default.createElement(
            'thead',
            null,
            this.generateHeader()
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.generateRows()
          )
        )
      );
    }
  }]);

  return GridFieldTable;
}(_react.Component);

GridFieldTable.propTypes = {
  data: _react2.default.PropTypes.object,
  header: _react2.default.PropTypes.object,
  rows: _react2.default.PropTypes.array
};

exports.default = GridFieldTable;

/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HiddenField = function (_Component) {
  _inherits(HiddenField, _Component);

  function HiddenField() {
    _classCallCheck(this, HiddenField);

    return _possibleConstructorReturn(this, (HiddenField.__proto__ || Object.getPrototypeOf(HiddenField)).apply(this, arguments));
  }

  _createClass(HiddenField, [{
    key: 'getInputProps',
    value: function getInputProps() {
      return {
        bsClass: this.props.bsClass,
        componentClass: 'input',
        className: this.props.className + ' ' + this.props.extraClass,
        id: this.props.id,
        name: this.props.name,
        type: 'hidden',
        value: this.props.value
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactBootstrapSs.FormControl, this.getInputProps());
    }
  }]);

  return HiddenField;
}(_react.Component);

HiddenField.propTypes = {
  id: _react2.default.PropTypes.string,
  extraClass: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  value: _react2.default.PropTypes.any
};

HiddenField.defaultProps = {
  className: '',
  extraClass: '',
  value: ''
};

exports.default = HiddenField;

/***/ }),

/***/ 1007:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListGroupItem = __webpack_require__(948);

var _ListGroupItem2 = _interopRequireDefault(_ListGroupItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListGroup = function ListGroup(props) {
  return _react2.default.createElement(
    'div',
    { className: 'list-group' },
    props.items.map(function (item) {
      return _react2.default.createElement(_ListGroupItem2.default, item);
    })
  );
};

ListGroup.propTypes = {
  items: _react2.default.PropTypes.array
};

exports.default = ListGroup;

/***/ }),

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGroupItem = function (_Component) {
  _inherits(ListGroupItem, _Component);

  function ListGroupItem(props) {
    _classCallCheck(this, ListGroupItem);

    var _this = _possibleConstructorReturn(this, (ListGroupItem.__proto__ || Object.getPrototypeOf(ListGroupItem)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ListGroupItem, [{
    key: "handleClick",
    value: function handleClick(event) {
      if (this.props.onClick) {
        this.props.onClick(event, this.props.onClickArg);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = "list-group-item " + this.props.className;
      return _react2.default.createElement(
        "a",
        { role: "button", tabIndex: 0, className: className, onClick: this.handleClick },
        this.props.children
      );
    }
  }]);

  return ListGroupItem;
}(_react.Component);

ListGroupItem.propTypes = {
  onClickArg: _react2.default.PropTypes.any,
  onClick: _react2.default.PropTypes.func
};

exports.default = ListGroupItem;

/***/ }),

/***/ 1009:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LiteralField = function (_Component) {
  _inherits(LiteralField, _Component);

  function LiteralField() {
    _classCallCheck(this, LiteralField);

    return _possibleConstructorReturn(this, (LiteralField.__proto__ || Object.getPrototypeOf(LiteralField)).apply(this, arguments));
  }

  _createClass(LiteralField, [{
    key: 'getContent',
    value: function getContent() {
      return { __html: this.props.value };
    }
  }, {
    key: 'getInputProps',
    value: function getInputProps() {
      return {
        className: this.props.className + ' ' + this.props.extraClass,
        id: this.props.id,
        name: this.props.name
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', _extends({}, this.getInputProps(), {
        dangerouslySetInnerHTML: this.getContent()
      }));
    }
  }]);

  return LiteralField;
}(_react.Component);

LiteralField.propTypes = {
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  extraClass: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string
};

LiteralField.defaultProps = {
  extraClass: '',
  className: ''
};

exports.default = LiteralField;

/***/ }),

/***/ 1010:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopoverField = function (_Component) {
  _inherits(PopoverField, _Component);

  function PopoverField(props) {
    _classCallCheck(this, PopoverField);

    var _this = _possibleConstructorReturn(this, (PopoverField.__proto__ || Object.getPrototypeOf(PopoverField)).call(this, props));

    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);

    _this.state = {
      showing: false
    };
    return _this;
  }

  _createClass(PopoverField, [{
    key: 'getPlacement',
    value: function getPlacement() {
      var placement = this.props.data.placement;
      return placement || 'bottom';
    }
  }, {
    key: 'handleShow',
    value: function handleShow() {
      this.setState({
        showing: true
      });
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      this.setState({
        showing: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var placement = this.getPlacement();
      var overlay = _react2.default.createElement(
        _reactBootstrapSs.Popover,
        {
          id: this.props.id + '_Popover',
          className: 'fade in bs-popover-' + placement + ' ' + this.props.popoverClassName,
          title: this.props.data.popoverTitle
        },
        this.props.children
      );

      var buttonClasses = ['btn', 'btn-secondary', this.props.className];
      if (this.state.showing) {
        buttonClasses.push('btn--no-focus');
      }

      if (!this.props.title) {
        buttonClasses.push('font-icon-dot-3 btn--no-text');
        buttonClasses.push('btn--icon-' + this.props.buttonSize);
      }

      var buttonProps = {
        id: this.props.id,
        type: 'button',
        className: buttonClasses.join(' ')
      };
      if (this.props.data.buttonTooltip) {
        buttonProps.title = this.props.data.buttonTooltip;
      }

      return _react2.default.createElement(
        _reactBootstrapSs.OverlayTrigger,
        {
          rootClose: true,
          trigger: 'click',
          placement: placement,
          overlay: overlay,
          onEnter: this.handleShow,
          onExited: this.handleHide,
          container: this.props.container
        },
        _react2.default.createElement(
          'button',
          buttonProps,
          this.props.title
        )
      );
    }
  }]);

  return PopoverField;
}(_react.Component);

PopoverField.propTypes = {
  id: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.any,
  container: _react2.default.PropTypes.any,
  className: _react2.default.PropTypes.string,
  popoverClassName: _react2.default.PropTypes.string,
  buttonSize: _react2.default.PropTypes.oneOf(['sm', 'md', 'large', 'xl']),
  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
    popoverTitle: _react2.default.PropTypes.string,
    buttonTooltip: _react2.default.PropTypes.string,
    placement: _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  })])
};

PopoverField.defaultProps = {
  data: {},
  className: '',
  popoverClassName: '',
  buttonSize: 'xl'
};

exports.default = PopoverField;

/***/ }),

/***/ 1011:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _PopoverField = __webpack_require__(410);

var _PopoverField2 = _interopRequireDefault(_PopoverField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = function (_Component) {
  _inherits(Preview, _Component);

  function Preview(props) {
    _classCallCheck(this, Preview);

    var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

    _this.handleBackClick = _this.handleBackClick.bind(_this);
    return _this;
  }

  _createClass(Preview, [{
    key: 'handleBackClick',
    value: function handleBackClick(event) {
      if (typeof this.props.onBack === 'function') {
        event.preventDefault();
        this.props.onBack(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var body = null;
      var previewUrl = null;
      var previewType = '';

      if (this.props.itemLinks && this.props.itemLinks.preview) {
        if (this.props.itemLinks.preview.Stage) {
          previewUrl = this.props.itemLinks.preview.Stage.href;
          previewType = this.props.itemLinks.preview.Stage.type;
        } else if (this.props.itemLinks.preview.Live) {
          previewUrl = this.props.itemLinks.preview.Live.href;
          previewType = this.props.itemLinks.preview.Live.type;
        }
      }

      var editUrl = null;
      var editKey = 'edit';
      var toolbarButtons = [];
      if (this.props.itemLinks && this.props.itemLinks.edit) {
        editUrl = this.props.itemLinks.edit.href;
        toolbarButtons.push(_react2.default.createElement(
          'a',
          { key: editKey, href: editUrl, className: 'btn btn-outline-secondary font-icon-edit' },
          _react2.default.createElement(
            'span',
            { className: 'btn__title' },
            _i18n2.default._t('Admin.EDIT', 'Edit')
          )
        ));
      }

      if (!this.props.itemId) {
        body = _react2.default.createElement(
          'div',
          { className: 'preview__overlay' },
          _react2.default.createElement(
            'h3',
            { className: 'preview__overlay-text' },
            'No preview available.'
          )
        );
      } else if (!previewUrl) {
        body = _react2.default.createElement(
          'div',
          { className: 'preview__overlay' },
          _react2.default.createElement(
            'h3',
            { className: 'preview__overlay-text' },
            'There is no preview available for this item.'
          )
        );
      } else if (previewType && previewType.indexOf('image/') === 0) {
        body = _react2.default.createElement(
          'div',
          { className: 'preview__file-container panel--scrollable' },
          _react2.default.createElement('img', { alt: previewUrl, className: 'preview__file--fits-space', src: previewUrl })
        );
      } else {
        body = _react2.default.createElement('iframe', { className: 'flexbox-area-grow preview__iframe', src: previewUrl });
      }

      var backButton = typeof this.props.onBack === 'function' && _react2.default.createElement(
        'button',
        {
          className: 'btn btn-secondary font-icon-left-open-big toolbar__back-button hidden-lg-up',
          type: 'button',
          onClick: this.handleBackClick
        },
        'Back'
      );

      var moreActions = this.props.moreActions && this.props.moreActions.length > 0 ? _react2.default.createElement(
        _PopoverField2.default,
        { data: { placement: 'top' }, id: 'campaign-preview-popver' },
        this.props.moreActions
      ) : null;

      return _react2.default.createElement(
        'div',
        { className: 'flexbox-area-grow fill-height preview campaign-admin__campaign-preview' },
        body,
        _react2.default.createElement(
          'div',
          { className: 'toolbar toolbar--south' },
          backButton,
          _react2.default.createElement(
            'div',
            { className: 'btn-toolbar' },
            toolbarButtons,
            moreActions
          )
        )
      );
    }
  }]);

  return Preview;
}(_react.Component);

Preview.propTypes = {
  itemLinks: _react2.default.PropTypes.object,
  itemId: _react2.default.PropTypes.number,
  onBack: _react2.default.PropTypes.func,
  moreActions: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
};

exports.default = Preview;

/***/ }),

/***/ 1012:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextField = function (_Component) {
  _inherits(TextField, _Component);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(TextField, [{
    key: 'getInputProps',
    value: function getInputProps() {
      var props = {
        bsClass: this.props.bsClass,
        className: this.props.className + ' ' + this.props.extraClass,
        id: this.props.id,
        name: this.props.name,
        disabled: this.props.disabled,
        readOnly: this.props.readOnly,
        value: this.props.value,
        placeholder: this.props.placeholder,
        autoFocus: this.props.autoFocus,
        maxLength: this.props.data && this.props.data.maxlength
      };

      if (this.props.attributes && !Array.isArray(this.props.attributes)) {
        Object.assign(props, this.props.attributes);
      }

      if (this.isMultiline()) {
        Object.assign(props, {
          componentClass: 'textarea',
          rows: this.props.data.rows,
          cols: this.props.data.columns
        });
      } else {
        Object.assign(props, {
          componentClass: 'input',
          type: this.props.type ? this.props.type : null
        });
      }

      if (!this.props.readOnly) {
        Object.assign(props, {
          onChange: this.handleChange
        });
      }

      return props;
    }
  }, {
    key: 'isMultiline',
    value: function isMultiline() {
      return this.props.data && this.props.data.rows > 1;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(event, { id: this.props.id, value: event.target.value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactBootstrapSs.FormControl, this.getInputProps());
    }
  }]);

  return TextField;
}(_react.Component);

TextField.propTypes = {
  extraClass: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  onChange: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  readOnly: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string,
  autoFocus: _react2.default.PropTypes.bool,
  attributes: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array])
};

TextField.defaultProps = {
  value: '',
  extraClass: '',
  className: '',
  type: 'text',
  attributes: {}
};

exports.Component = TextField;
exports.default = (0, _FieldHolder2.default)(TextField);

/***/ }),

/***/ 1013:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toolbar = function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar(props) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));

    _this.handleBackButtonClick = _this.handleBackButtonClick.bind(_this);
    return _this;
  }

  _createClass(Toolbar, [{
    key: 'handleBackButtonClick',
    value: function handleBackButtonClick(event) {
      if (typeof this.props.onBackButtonClick !== 'undefined') {
        this.props.onBackButtonClick(event);
        return;
      }

      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var buttonClassNames = ['btn', 'btn-secondary', 'action', 'font-icon-left-open-big', 'toolbar__back-button', 'btn--no-text'];
      var backButtonProps = {
        className: buttonClassNames.join(' '),
        onClick: this.handleBackButtonClick,
        href: '#',
        type: 'button'
      };

      return _react2.default.createElement(
        'div',
        { className: 'toolbar toolbar--north' },
        _react2.default.createElement(
          'div',
          { className: 'toolbar__navigation fill-width' },
          this.props.showBackButton && _react2.default.createElement('button', backButtonProps),
          this.props.children
        )
      );
    }
  }]);

  return Toolbar;
}(_react.Component);

Toolbar.propTypes = {
  onBackButtonClick: _react.PropTypes.func,
  showBackButton: _react.PropTypes.bool,
  breadcrumbs: _react.PropTypes.array
};

Toolbar.defaultProps = {
  showBackButton: false
};

exports.default = Toolbar;

/***/ }),

/***/ 1014:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findTreeByPath = exports.findTreeByID = exports.findTreePath = exports.SINGLE_EMPTY_VALUE = exports.MULTI_EMPTY_VALUE = exports.ConnectedTreeDropdownField = exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(55);

var _redux = __webpack_require__(41);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _isomorphicFetch = __webpack_require__(396);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactSelect = __webpack_require__(1943);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _TreeDropdownFieldActions = __webpack_require__(985);

var treeDropdownFieldActions = _interopRequireWildcard(_TreeDropdownFieldActions);

var _TreeDropdownFieldMenu = __webpack_require__(957);

var _TreeDropdownFieldMenu2 = _interopRequireDefault(_TreeDropdownFieldMenu);

var _TreeDropdownFieldNode = __webpack_require__(258);

var _TreeDropdownFieldNode2 = _interopRequireDefault(_TreeDropdownFieldNode);

var _url = __webpack_require__(764);

var _url2 = _interopRequireDefault(_url);

var _reactBootstrapSs = __webpack_require__(37);

var _castStringToElement = __webpack_require__(85);

var _treeUtils = __webpack_require__(958);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SEARCH_DELAY = 500;
var MULTI_EMPTY_VALUE = 'unchanged';

var SINGLE_EMPTY_VALUE = 0;

var TreeDropdownField = function (_Component) {
  _inherits(TreeDropdownField, _Component);

  function TreeDropdownField(props) {
    _classCallCheck(this, TreeDropdownField);

    var _this = _possibleConstructorReturn(this, (TreeDropdownField.__proto__ || Object.getPrototypeOf(TreeDropdownField)).call(this, props));

    _this.render = _this.render.bind(_this);
    _this.renderMenu = _this.renderMenu.bind(_this);
    _this.renderOption = _this.renderOption.bind(_this);

    _this.getBreadcrumbs = _this.getBreadcrumbs.bind(_this);
    _this.getDropdownOptions = _this.getDropdownOptions.bind(_this);
    _this.getVisibleTree = _this.getVisibleTree.bind(_this);

    _this.handleBack = _this.handleBack.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleNavigate = _this.handleNavigate.bind(_this);
    _this.handleSearchChange = _this.handleSearchChange.bind(_this);
    _this.handleSearchReset = _this.handleSearchReset.bind(_this);
    _this.handleOpen = _this.handleOpen.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);

    _this.callFetch = _this.callFetch.bind(_this);
    _this.lazyLoad = _this.lazyLoad.bind(_this);
    _this.filterOptions = _this.filterOptions.bind(_this);

    _this.state = {
      opened: false
    };

    _this.searchTimer = null;
    return _this;
  }

  _createClass(TreeDropdownField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.props.readOnly && !this.props.disabled) {
        this.loadTree([], this.props.search).then(function (treeData) {
          if (!_this2.props.data.multiple && _this2.props.value) {
            var newPath = _this2.props.findTreePath(treeData, _this2.props.value);
            if (newPath) {
              newPath.pop();
              _this2.props.actions.treeDropdownField.setVisible(_this2.props.id, newPath);
            }
          }
        });
      }

      var id = this.props.id;
      var values = this.props.data.multiple ? this.props.data.valueObjects || [] : [this.props.data.valueObject];
      var selected = values.filter(function (item) {
        return item;
      });

      if (selected.length) {
        this.props.actions.treeDropdownField.addSelectedValues(id, selected);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.readOnly || this.props.disabled) {
        return;
      }

      var reload = false;
      var visible = [];

      if (this.props.search !== nextProps.search) {
        reload = true;
        visible = nextProps.visible;
      }

      if (nextProps.data.urlTree !== this.props.data.urlTree) {
        reload = true;
      }

      if (nextProps.data.cacheKey !== this.props.data.cacheKey) {
        reload = true;
      }

      if (reload) {
        this.loadTree(visible, nextProps.search, nextProps);
      }
    }
  }, {
    key: 'getVisibleTree',
    value: function getVisibleTree() {
      return this.props.findTreeByPath(this.props.tree, this.props.visible);
    }
  }, {
    key: 'getBreadcrumbs',
    value: function getBreadcrumbs() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.visible;

      var breadcrumbs = [];

      if (!path) {
        return breadcrumbs;
      }

      var node = this.props.tree;

      var _loop = function _loop(next) {
        if (!node.children) {
          return 'break';
        }
        node = node.children.find(function (child) {
          return child.id === next;
        });
        if (!node) {
          return 'break';
        }
        breadcrumbs.push(node);
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var next = _step.value;

          var _ret = _loop(next);

          if (_ret === 'break') break;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return breadcrumbs;
    }
  }, {
    key: 'getDropdownOptions',
    value: function getDropdownOptions() {
      var value = this.props.value;
      var node = this.getVisibleTree();
      var options = node ? [].concat(_toConsumableArray(node.children)) : [];

      var selectedOptions = this.props.selectedValues.filter(function (selected) {
        return selected.id === value || Array.isArray(value) && value.find(function (item) {
          return item === selected.id;
        });
      });

      if (!this.state.opened && this.props.data.showSelectedPath) {
        options = selectedOptions.map(function (selected) {
          return _extends({}, selected, {
            title: selected.titlePath || selected.title
          });
        });
      } else if (selectedOptions.length) {
        options = [].concat(_toConsumableArray(selectedOptions.filter(function (selected) {
          return !options.find(function (item) {
            return item.id === selected.id;
          });
        })), _toConsumableArray(options));
      }

      options.unshift({
        id: this.props.data.multiple ? '' : SINGLE_EMPTY_VALUE,
        title: this.props.data.hasEmptyDefault ? this.props.data.emptyString : null,
        disabled: !options.length || !this.props.data.hasEmptyDefault
      });

      return options;
    }
  }, {
    key: 'getPath',
    value: function getPath(id) {
      var treePath = this.props.findTreePath(this.props.tree, id);
      var breadcrumbs = this.getBreadcrumbs(treePath);

      return breadcrumbs.reduce(function (prev, path) {
        return '' + prev + (path.contextString || '') + path.title + '/';
      }, '');
    }
  }, {
    key: 'callFetch',
    value: function callFetch(path) {
      var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props;

      var fetchURL = _url2.default.parse(props.data.urlTree, true);
      if (props.data.showSearch && search.length) {
        fetchURL.query.search = search;
        fetchURL.query.flatList = '1';
      }
      if (path.length) {
        fetchURL.query.ID = path[path.length - 1];
      }
      fetchURL.query.format = 'json';
      fetchURL.search = null;
      var fetchURLString = _url2.default.format(fetchURL);
      return (0, _isomorphicFetch2.default)(fetchURLString, {
        credentials: 'same-origin'
      }).then(function (response) {
        return response.json();
      });
    }
  }, {
    key: 'lazyLoad',
    value: function lazyLoad(path) {
      var _this3 = this;

      var foundPrev = path.find(function (pathNode) {
        return _this3.props.loading.indexOf(pathNode) > -1 || _this3.props.failed.indexOf(pathNode) > -1;
      });
      if (foundPrev) {
        return Promise.resolve({});
      }

      var foundTree = this.props.findTreeByPath(this.props.tree, path);

      if (foundTree && (foundTree.count === 0 || foundTree.children.length)) {
        return Promise.resolve({});
      }

      return this.loadTree(path);
    }
  }, {
    key: 'loadTree',
    value: function loadTree(path) {
      var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props;

      props.actions.treeDropdownField.beginTreeUpdating(props.id, path);

      return this.callFetch(path, search, props).then(function (treeData) {
        props.actions.treeDropdownField.updateTree(props.id, path, treeData);

        return treeData;
      }).catch(function (error) {
        props.actions.treeDropdownField.updateTreeFailed(props.id, path);
        if (typeof props.onLoadingError === 'function') {
          return props.onLoadingError({
            errors: [{
              value: error.message,
              type: 'error'
            }]
          });
        }
        throw error;
      });
    }
  }, {
    key: 'hasSearch',
    value: function hasSearch() {
      return this.props.data.showSearch && Boolean(this.props.search);
    }
  }, {
    key: 'filterOptions',
    value: function filterOptions(options) {
      var _this4 = this;

      var parent = this.getVisibleTree();

      return options.filter(function (option) {
        if ((option.id === SINGLE_EMPTY_VALUE || option.id === '') && (!_this4.props.data.hasEmptyDefault || _this4.props.visible.length || _this4.hasSearch())) {
          return false;
        }
        var title = option.title && option.title.toLocaleLowerCase();

        var search = _this4.props.search.toLocaleLowerCase();

        return search ? title && title.includes(search) : !parent || !option.id || parent.children.find(function (child) {
          return child.id === option.id;
        });
      });
    }
  }, {
    key: 'handleOpen',
    value: function handleOpen() {
      this.setState({ opened: true });

      this.handleSearchReset();
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ opened: false });
    }
  }, {
    key: 'handleSearchReset',
    value: function handleSearchReset() {
      clearTimeout(this.searchTimer);
      this.props.actions.treeDropdownField.setSearch(this.props.id, '');
    }
  }, {
    key: 'handleSearchChange',
    value: function handleSearchChange(value) {
      var _this5 = this;

      clearTimeout(this.searchTimer);

      this.searchTimer = setTimeout(function () {
        _this5.props.actions.treeDropdownField.setSearch(_this5.props.id, value);
      }, SEARCH_DELAY);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {
      var mappedValue = null;

      this.handleSearchReset();
      if (this.props.data.multiple) {
        mappedValue = MULTI_EMPTY_VALUE;

        if (value && value.length) {
          var uniqueValues = value && value.filter(function (item, index) {
            return value.findIndex(function (next) {
              return next.id === item.id;
            }) === index;
          });
          mappedValue = uniqueValues.map(function (item) {
            return item.id;
          });

          this.props.actions.treeDropdownField.addSelectedValues(this.props.id, uniqueValues);
        }
      } else {
        var id = value ? value.id : null;
        var tree = this.getVisibleTree() || this.props.tree;
        var object = tree.children.find(function (item) {
          return item.id === id;
        });
        if (object) {
          if (this.props.data.showSelectedPath) {
            object = _extends({}, object, {
              titlePath: this.getPath(id)
            });
          }
          this.props.actions.treeDropdownField.addSelectedValues(this.props.id, [object]);
        }

        mappedValue = id || SINGLE_EMPTY_VALUE;
      }

      if (typeof this.props.onChange === 'function') {
        this.props.onChange(mappedValue);
      }
    }
  }, {
    key: 'handleNavigate',
    value: function handleNavigate(event, id) {
      event.stopPropagation();
      event.preventDefault();

      if (this.hasSearch()) {
        return;
      }

      var path = this.props.findTreePath(this.props.tree, id);
      if (!path) {
        path = this.props.visible.slice(0);
        path.push(id);
      }

      this.lazyLoad(path);
      this.props.actions.treeDropdownField.setVisible(this.props.id, path);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      if (this.hasSearch()) {
        if (event.keyCode === 27) {
          this.handleSearchReset(event);
        }
        return;
      }

      var focused = this.selectField.getFocusedOption();
      if (!focused) {
        return;
      }

      switch (event.keyCode) {
        case 37:
          this.handleBack(event);
          break;
        case 39:
          if (focused.count) {
            this.handleNavigate(event, focused.id);
          }
          break;
        default:
          break;
      }
    }
  }, {
    key: 'handleBack',
    value: function handleBack(event) {
      event.stopPropagation();
      event.preventDefault();

      if (this.hasSearch()) {
        return;
      }

      var path = this.props.visible;

      if (path.length) {
        path = path.slice(0, path.length - 1);
      }

      this.lazyLoad(path);
      this.props.actions.treeDropdownField.setVisible(this.props.id, path);
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu(renderMenuOptions) {
      var visibleTree = this.getVisibleTree() || {};
      var loading = this.props.loading.indexOf(visibleTree.id || 0) > -1;
      var failed = this.props.failed.indexOf(visibleTree.id || 0) > -1;
      var breadcrumbs = this.getBreadcrumbs();

      return _react2.default.createElement(_TreeDropdownFieldMenu2.default, {
        loading: loading,
        failed: failed,
        tree: visibleTree,
        breadcrumbs: breadcrumbs,
        renderMenuOptions: renderMenuOptions,
        onBack: this.handleBack,
        search: this.hasSearch(),
        value: this.props.value
      });
    }
  }, {
    key: 'renderOption',
    value: function renderOption(tree) {
      var _this6 = this;

      var button = null;
      if (tree.count && !this.hasSearch()) {
        var handleNavigate = function handleNavigate(event) {
          return _this6.handleNavigate(event, tree.id);
        };
        button = _react2.default.createElement(
          'button',
          {
            className: 'treedropdownfield__option-button fill-width',
            onClick: handleNavigate,
            onMouseDown: handleNavigate,
            onTouchStart: handleNavigate
          },
          _react2.default.createElement('span', { className: 'treedropdownfield__option-count-icon font-icon-right-open-big' })
        );
      }

      var Highlight = function Highlight(_ref) {
        var children = _ref.children;
        return _react2.default.createElement(
          'span',
          { className: 'treedropdownfield__option-title--highlighted' },
          children
        );
      };
      var title = this.props.search.length ? (0, _castStringToElement.mapHighlight)(tree.title, this.props.search, Highlight) : tree.title;

      var subtitle = null;
      if (this.hasSearch()) {
        subtitle = tree.contextString;

        if (!subtitle && this.props.data.hasEmptyDefault && !this.props.visible.length) {
          subtitle = this.props.data.emptyString;
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'treedropdownfield__option fill-width' },
        _react2.default.createElement(
          'div',
          { className: 'treedropdownfield__option-title-box flexbox-area-grow fill-height' },
          _react2.default.createElement(
            'span',
            { className: 'treedropdownfield__option-title' },
            title
          ),
          subtitle && _react2.default.createElement(
            'span',
            { className: 'treedropdownfield__option-context' },
            subtitle
          )
        ),
        button
      );
    }
  }, {
    key: 'renderReadOnly',
    value: function renderReadOnly() {
      var _this7 = this;

      var inputProps = {
        id: this.props.id,
        readOnly: this.props.readOnly,
        disabled: this.props.disabled
      };
      var className = this.props.extraClass ? 'treedropdownfield ' + this.props.extraClass : 'treedropdownfield';
      var title = this.props.data.hasEmptyDefault ? this.props.data.emptyString : '';
      var selected = this.props.selectedValues;

      if (this.props.data.multiple) {
        var values = this.props.value.map(function (value) {
          return selected.find(function (item) {
            return item.id === value;
          }) || value;
        });

        title = values.map(function (value) {
          return value.title;
        }).join(', ');
      } else {
        var value = selected.find(function (item) {
          return item.id === _this7.props.value;
        });
        title = this.props.value;

        if (value && typeof value.title === 'string') {
          title = value.title;
        }
      }

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'span',
          { className: 'treedropdownfield__title' },
          title
        ),
        _react2.default.createElement(_reactBootstrapSs.FormControl, _extends({
          type: 'hidden',
          name: this.props.name,
          value: this.props.value
        }, inputProps))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      if (this.props.readOnly || this.props.disabled) {
        return this.renderReadOnly();
      }

      var inputProps = {
        id: this.props.id
      };
      var className = this.props.extraClass ? 'treedropdownfield ' + this.props.extraClass : 'treedropdownfield';
      var options = this.getDropdownOptions();
      var value = this.props.value;

      if (this.props.data.multiple) {
        value = this.props.value ? this.props.selectedValues.filter(function (item) {
          return value.includes(item.id);
        }) : [];
      }

      var resetValue = this.props.data.hasEmptyDefault && !this.props.visible.length ? '' : null;
      var showSearch = typeof this.props.data.showSearch !== 'undefined' ? this.props.data.showSearch : false;

      return _react2.default.createElement(_reactSelect2.default, {
        searchable: showSearch,
        multi: this.props.data.multiple,
        className: className,
        name: this.props.name,
        options: options,
        inputProps: inputProps,
        menuRenderer: this.renderMenu,
        filterOptions: this.filterOptions,
        optionRenderer: this.renderOption,
        onChange: this.handleChange,
        onOpen: this.handleOpen,
        onClose: this.handleClose,
        onBlurResetsInput: true,
        onInputKeyDown: this.handleKeyDown,
        onInputChange: this.handleSearchChange,
        isLoading: Boolean(this.props.loading.length),
        value: value,
        resetValue: resetValue,
        joinValues: true,
        ref: function ref(select) {
          _this8.selectField = select;
        },
        placeholder: this.props.data.emptyString,
        labelKey: 'title',
        valueKey: 'id'
      });
    }
  }]);

  return TreeDropdownField;
}(_react.Component);

TreeDropdownField.propTypes = {
  extraClass: _react.PropTypes.string,
  id: _react.PropTypes.string,
  name: _react.PropTypes.string.isRequired,
  onChange: _react.PropTypes.func,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.array]),
  readOnly: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  tree: _react.PropTypes.shape(_TreeDropdownFieldNode2.default.propTypes),
  findTreeByPath: _react.PropTypes.func,
  findTreePath: _react.PropTypes.func,
  visible: _react.PropTypes.array,
  loading: _react.PropTypes.array,
  failed: _react.PropTypes.array,
  selectedValues: _react.PropTypes.array,
  data: _react.PropTypes.shape({
    cacheKey: _react.PropTypes.string,
    urlTree: _react.PropTypes.string.isRequired,
    emptyString: _react.PropTypes.string,
    valueObject: _react.PropTypes.shape(_TreeDropdownFieldNode2.default.propTypes),
    valueObjects: _react.PropTypes.arrayOf(_react.PropTypes.shape(_TreeDropdownFieldNode2.default.propTypes)),
    hasEmptyDefault: _react.PropTypes.bool,
    showSearch: _react.PropTypes.bool,
    multiple: _react.PropTypes.bool,
    showSelectedPath: _react.PropTypes.bool
  }),
  onLoadingError: _react.PropTypes.func,
  search: _react.PropTypes.string,
  actions: _react.PropTypes.shape({
    treeDropdownField: _react.PropTypes.object
  })
};

TreeDropdownField.defaultProps = {
  value: '',
  extraClass: '',
  className: '',
  tree: {},
  visible: [],
  loading: [],
  failed: [],
  findTreeByPath: _treeUtils.findTreeByPath,
  findTreePath: _treeUtils.findTreePath
};

function mapStateToProps(state, ownProps) {
  var id = ownProps.id;
  var field = state.treeDropdownField.fields[id] ? state.treeDropdownField.fields[id] : {
    tree: {},
    visible: [],
    loading: [],
    failed: [],
    search: '',
    selectedValues: []
  };

  var value = ownProps.value;

  if (ownProps.data.multiple && ownProps.value === MULTI_EMPTY_VALUE) {
    value = [];
  }

  if (!ownProps.data.multiple && !ownProps.value) {
    value = SINGLE_EMPTY_VALUE;
  }

  return _extends({}, field, { value: value });
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      treeDropdownField: (0, _redux.bindActionCreators)(treeDropdownFieldActions, dispatch)
    }
  };
}

var ConnectedTreeDropdownField = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TreeDropdownField);

exports.Component = TreeDropdownField;
exports.ConnectedTreeDropdownField = ConnectedTreeDropdownField;
exports.MULTI_EMPTY_VALUE = MULTI_EMPTY_VALUE;
exports.SINGLE_EMPTY_VALUE = SINGLE_EMPTY_VALUE;
exports.findTreePath = _treeUtils.findTreePath;
exports.findTreeByID = _treeUtils.findTreeByID;
exports.findTreeByPath = _treeUtils.findTreeByPath;
exports.default = (0, _FieldHolder2.default)(ConnectedTreeDropdownField);

/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _TreeDropdownFieldNode = __webpack_require__(258);

var _TreeDropdownFieldNode2 = _interopRequireDefault(_TreeDropdownFieldNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeDropdownFieldMenu = function (_Component) {
  _inherits(TreeDropdownFieldMenu, _Component);

  function TreeDropdownFieldMenu(props) {
    _classCallCheck(this, TreeDropdownFieldMenu);

    var _this = _possibleConstructorReturn(this, (TreeDropdownFieldMenu.__proto__ || Object.getPrototypeOf(TreeDropdownFieldMenu)).call(this, props));

    _this.render = _this.render.bind(_this);
    _this.renderOption = _this.renderOption.bind(_this);
    _this.renderBreadcrumbs = _this.renderBreadcrumbs.bind(_this);
    _this.handleBack = _this.handleBack.bind(_this);
    return _this;
  }

  _createClass(TreeDropdownFieldMenu, [{
    key: 'handleBack',
    value: function handleBack(event) {
      if (typeof this.props.onBack === 'function') {
        this.props.onBack(event);
      } else {
        event.stopPropagation();
        event.preventDefault();
      }
    }
  }, {
    key: 'renderBreadcrumbs',
    value: function renderBreadcrumbs() {
      if (this.props.breadcrumbs.length === 0) {
        return null;
      }

      var breadcrumbs = this.props.breadcrumbs.map(function (item) {
        return item.title;
      }).join(' / ');
      var icon = this.props.search ? 'font-icon-search' : 'font-icon-left-open-big';
      var button = _react2.default.createElement(
        'button',
        { className: 'treedropdownfield__breadcrumbs-button' },
        _react2.default.createElement('span', { className: 'icon ' + icon })
      );

      return _react2.default.createElement(
        'div',
        {
          className: 'Select-option treedropdownfield__breadcrumbs flexbox-area-grow fill-width',
          onClick: this.handleBack,
          role: 'button',
          tabIndex: 0
        },
        button,
        _react2.default.createElement(
          'span',
          { className: 'treedropdownfield__breadcrumbs-crumbs flexbox-area-grow' },
          breadcrumbs
        )
      );
    }
  }, {
    key: 'renderOption',
    value: function renderOption(tree, index) {
      if (!this.props.renderMenuOptions) {
        return null;
      }
      var _props$renderMenuOpti = this.props.renderMenuOptions,
          focusedOption = _props$renderMenuOpti.focusedOption,
          instancePrefix = _props$renderMenuOpti.instancePrefix,
          onFocus = _props$renderMenuOpti.onFocus,
          onSelect = _props$renderMenuOpti.onSelect,
          optionClassName = _props$renderMenuOpti.optionClassName,
          optionComponent = _props$renderMenuOpti.optionComponent,
          optionRenderer = _props$renderMenuOpti.optionRenderer,
          onOptionRef = _props$renderMenuOpti.onOptionRef;

      var Option = optionComponent;
      var value = this.props.value;

      var isSelected = value === tree.id;
      if (Array.isArray(value)) {
        isSelected = value.includes(tree.id);
      }
      var isFocused = focusedOption && tree.id === focusedOption.id;
      var optionClass = (0, _classnames2.default)(optionClassName, {
        treedropdownfield__option: true,
        'Select-option': true,
        'is-selected': isSelected,
        'is-focused': isFocused,
        'is-disabled': tree.disabled
      });

      return _react2.default.createElement(
        Option,
        {
          className: optionClass,
          instancePrefix: instancePrefix,
          isDisabled: tree.disabled,
          isFocused: isFocused,
          isSelected: isSelected,
          key: 'option-' + tree.id + '-' + index,
          onFocus: onFocus,
          onSelect: onSelect,
          option: tree,
          optionIndex: index,
          ref: function ref(_ref) {
            onOptionRef(_ref, isFocused);
          }
        },
        optionRenderer(tree, index)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)([this.props.className, 'treedropdownfield__menu']);

      if (this.props.loading) {
        return _react2.default.createElement(
          'div',
          { className: classes },
          _react2.default.createElement(
            'div',
            { className: 'Select-option flexbox-area-grow fill-width' },
            _react2.default.createElement(
              'span',
              { className: 'Select-loading-zone', 'aria-hidden': 'true' },
              _react2.default.createElement('span', { className: 'Select-loading' })
            ),
            _react2.default.createElement(
              'span',
              { className: 'treedropdownfield__menu-loading flexbox-area-grow' },
              _i18n2.default._t('Admin.TREEDROPDOWN_LOADING', 'Loading...')
            )
          )
        );
      }
      if (this.props.failed) {
        return _react2.default.createElement(
          'div',
          { className: classes },
          _react2.default.createElement(
            'div',
            { className: 'Select-option' },
            _i18n2.default._t('Admin.TREEDROPDOWN_FAILED', 'Failed to load')
          )
        );
      }
      if (this.props.tree.count === 0) {
        return _react2.default.createElement(
          'div',
          { className: classes },
          _react2.default.createElement(
            'div',
            { className: 'Select-option' },
            _i18n2.default._t('Admin.TREEDROPDOWN_NO_CHILDREN', 'No children')
          )
        );
      }

      var breadcrumbs = this.renderBreadcrumbs();
      var options = this.props.renderMenuOptions && this.props.renderMenuOptions.options;

      var children = options ? options.filter(function (option) {
        return option.title !== null;
      }).map(this.renderOption) : null;

      return _react2.default.createElement(
        'div',
        { className: classes },
        breadcrumbs,
        children
      );
    }
  }]);

  return TreeDropdownFieldMenu;
}(_react.Component);

TreeDropdownFieldMenu.propTypes = {
  className: _react.PropTypes.string,
  breadcrumbs: _react.PropTypes.arrayOf(_react.PropTypes.shape(_TreeDropdownFieldNode2.default.propTypes)),
  loading: _react.PropTypes.bool,
  failed: _react.PropTypes.bool,
  tree: _react.PropTypes.shape(_TreeDropdownFieldNode2.default.propTypes),
  renderMenuOptions: _react.PropTypes.object,
  onBack: _react.PropTypes.func,
  search: _react.PropTypes.bool,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.array])
};

exports.default = TreeDropdownFieldMenu;

/***/ }),

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var TreeDropdownFieldNode = function TreeDropdownFieldNode() {
  return null;
};

TreeDropdownFieldNode.propTypes = {
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  title: _react.PropTypes.string,
  titlePath: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  parentid: _react.PropTypes.number,
  count: _react.PropTypes.number,
  depth: _react.PropTypes.number,
  expanded: _react.PropTypes.bool,
  limited: _react.PropTypes.bool,
  marked: _react.PropTypes.bool,
  opened: _react.PropTypes.bool,
  children: _react.PropTypes.array
};

exports.default = TreeDropdownFieldNode;

/***/ }),

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(55);

var _redux = __webpack_require__(41);

var _isomorphicFetch = __webpack_require__(396);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _deepFreezeStrict = __webpack_require__(84);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _reduxForm = __webpack_require__(97);

var _schemaFieldValues = __webpack_require__(179);

var _schemaFieldValues2 = _interopRequireDefault(_schemaFieldValues);

var _createErrorBlock = __webpack_require__(412);

var _SchemaActions = __webpack_require__(397);

var schemaActions = _interopRequireWildcard(_SchemaActions);

var _merge = __webpack_require__(249);

var _merge2 = _interopRequireDefault(_merge);

var _FormBuilder = __webpack_require__(1936);

var _FormBuilder2 = _interopRequireDefault(_FormBuilder);

var _getIn = __webpack_require__(757);

var _getIn2 = _interopRequireDefault(_getIn);

var _Injector = __webpack_require__(39);

var _getFormState = __webpack_require__(398);

var _getFormState2 = _interopRequireDefault(_getFormState);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createFormIdentifierFromProps(_ref) {
  var identifier = _ref.identifier,
      _ref$schema = _ref.schema,
      schema = _ref$schema === undefined ? {} : _ref$schema;

  return [identifier, schema.schema && schema.schema.name].filter(function (id) {
    return id;
  }).join('.');
}

var FormBuilderLoader = function (_Component) {
  _inherits(FormBuilderLoader, _Component);

  function FormBuilderLoader(props) {
    _classCallCheck(this, FormBuilderLoader);

    var _this = _possibleConstructorReturn(this, (FormBuilderLoader.__proto__ || Object.getPrototypeOf(FormBuilderLoader)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.reduceSchemaErrors = _this.reduceSchemaErrors.bind(_this);
    _this.handleAutofill = _this.handleAutofill.bind(_this);
    return _this;
  }

  _createClass(FormBuilderLoader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetch();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.schemaUrl !== prevProps.schemaUrl) {
        this.fetch();
      }
    }
  }, {
    key: 'getMessages',
    value: function getMessages(state) {
      var messages = {};

      if (state && state.fields) {
        state.fields.forEach(function (field) {
          if (field.message) {
            messages[field.name] = field.message;
          }
        });
      }
      return messages;
    }
  }, {
    key: 'getIdentifier',
    value: function getIdentifier() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      return createFormIdentifierFromProps(props);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(data, action, submitFn) {
      var _this2 = this;

      var promise = null;

      var newSubmitFn = function newSubmitFn() {
        return submitFn().then(function (formSchema) {
          var schema = formSchema;
          if (schema) {
            var explicitUpdatedState = typeof schema.state !== 'undefined';

            schema = _this2.reduceSchemaErrors(schema);
            _this2.props.actions.schema.setSchema(_this2.props.schemaUrl, schema, _this2.getIdentifier());

            if (explicitUpdatedState) {
              var schemaRef = schema.schema || _this2.props.schema.schema;
              var formData = (0, _schemaFieldValues2.default)(schemaRef, schema.state);
              _this2.props.actions.reduxForm.initialize(_this2.getIdentifier(), formData);
            }
          }
          return schema;
        });
      };

      if (typeof this.props.onSubmit === 'function') {
        promise = this.props.onSubmit(data, action, newSubmitFn);
      } else {
        promise = newSubmitFn();
      }

      if (!promise) {
        throw new Error('Promise was not returned for submitting');
      }

      return promise.then(function (formSchema) {
        if (!formSchema || !formSchema.state) {
          return formSchema;
        }
        var messages = _this2.getMessages(formSchema.state);

        if (Object.keys(messages).length) {
          throw new _reduxForm.SubmissionError(messages);
        }
        return formSchema;
      });
    }
  }, {
    key: 'reduceSchemaErrors',
    value: function reduceSchemaErrors(schema) {
      if (!schema.errors) {
        return schema;
      }

      var reduced = _extends({}, schema);
      if (!reduced.state) {
        reduced = _extends({}, reduced, {
          state: this.props.schema.state
        });
      }

      reduced = _extends({}, reduced, {
        state: _extends({}, reduced.state, {
          fields: reduced.state.fields.map(function (field) {
            var message = schema.errors.find(function (error) {
              return error.field === field.name;
            });
            if (message) {
              message = (0, _createErrorBlock.createErrorHtml)([message.value]);
            }
            return _extends({}, field, {
              message: message
            });
          })
        }),

        messages: schema.errors.filter(function (error) {
          return !error.field;
        })
      });

      delete reduced.errors;
      return (0, _deepFreezeStrict2.default)(reduced);
    }
  }, {
    key: 'overrideStateData',
    value: function overrideStateData(state) {
      if (!this.props.stateOverrides || !state) {
        return state;
      }
      var fieldOverrides = this.props.stateOverrides.fields;
      var fields = state.fields;
      if (fieldOverrides && fields) {
        fields = fields.map(function (field) {
          var fieldOverride = fieldOverrides.find(function (override) {
            return override.name === field.name;
          });

          return fieldOverride ? _merge2.default.recursive(true, field, fieldOverride) : field;
        });
      }

      return Object.assign({}, state, this.props.stateOverrides, { fields: fields });
    }
  }, {
    key: 'callFetch',
    value: function callFetch(headerValues) {
      return (0, _isomorphicFetch2.default)(this.props.schemaUrl, {
        headers: {
          'X-FormSchema-Request': headerValues.join(','),
          Accept: 'application/json'
        },
        credentials: 'same-origin'
      }).then(function (response) {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }
        return new Promise(function (resolve, reject) {
          return response.json().then(function (json) {
            reject({
              status: response.status,
              statusText: response.statusText,
              json: json
            });
          }).catch(function () {
            reject({
              status: response.status,
              statusText: response.statusText,
              json: {}
            });
          });
        });
      });
    }
  }, {
    key: 'fetch',
    value: function fetch() {
      var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var _this3 = this;

      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var errors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (this.props.loading) {
        return Promise.resolve({});
      }

      var headerValues = ['auto', schema && 'schema', state && 'state', errors && 'errors'].filter(function (header) {
        return header;
      });

      this.props.actions.schema.setSchemaLoading(this.props.schemaUrl, true);

      if (typeof this.props.onFetchingSchema === 'function') {
        this.props.onFetchingSchema();
      }

      return this.callFetch(headerValues).then(function (formSchema) {
        _this3.props.actions.schema.setSchemaLoading(_this3.props.schemaUrl, false);

        if (formSchema.errors) {
          if (typeof _this3.props.onLoadingError === 'function') {
            _this3.props.onLoadingError(formSchema);
          }
        } else if (typeof _this3.props.onLoadingSuccess === 'function') {
          _this3.props.onLoadingSuccess();
        }

        if (typeof formSchema.id !== 'undefined' && formSchema.state) {
          var overriddenSchema = Object.assign({}, formSchema, {
            state: _this3.overrideStateData(formSchema.state)
          });

          _this3.props.actions.schema.setSchema(_this3.props.schemaUrl, overriddenSchema, createFormIdentifierFromProps(_extends({}, _this3.props, {
            schema: _extends({}, _this3.props.schema, overriddenSchema)
          })));

          var schemaData = formSchema.schema || _this3.props.schema.schema;
          var formData = (0, _schemaFieldValues2.default)(schemaData, overriddenSchema.state);

          _this3.props.actions.reduxForm.initialize(_this3.getIdentifier(), formData, false, { keepSubmitSucceeded: true });

          return overriddenSchema;
        }
        return formSchema;
      }).catch(function (error) {
        _this3.props.actions.schema.setSchemaLoading(_this3.props.schemaUrl, false);
        if (typeof _this3.props.onLoadingError === 'function') {
          return _this3.props.onLoadingError(_this3.normaliseError(error));
        }

        throw error;
      });
    }
  }, {
    key: 'normaliseError',
    value: function normaliseError(error) {
      if (error.json && error.json.errors) {
        return error.json;
      }

      if (error.status && error.statusText) {
        return {
          errors: [{
            code: error.status,
            value: error.statusText,
            type: 'error'
          }]
        };
      }

      var message = error.message || _i18n2.default._t('Admin.UNKNOWN_ERROR', 'An unknown error has occurred.');
      return {
        errors: [{
          value: message,
          type: 'error'
        }]
      };
    }
  }, {
    key: 'handleAutofill',
    value: function handleAutofill(field, value) {
      this.props.actions.reduxForm.autofill(this.getIdentifier(), field, value);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.schema || !this.props.schema.schema || this.props.loading) {
        return null;
      }

      var props = Object.assign({}, this.props, {
        form: this.getIdentifier(),
        onSubmitSuccess: this.props.onSubmitSuccess,
        onSubmit: this.handleSubmit,
        onAutofill: this.handleAutofill
      });

      return _react2.default.createElement(_FormBuilder2.default, props);
    }
  }]);

  return FormBuilderLoader;
}(_react.Component);

FormBuilderLoader.propTypes = Object.assign({}, _FormBuilder.basePropTypes, {
  actions: _react.PropTypes.shape({
    schema: _react.PropTypes.object,
    reduxFrom: _react.PropTypes.object
  }),
  identifier: _react.PropTypes.string.isRequired,
  schemaUrl: _react.PropTypes.string.isRequired,
  schema: _FormBuilder.schemaPropType,
  form: _react.PropTypes.string,
  submitting: _react.PropTypes.bool,
  onFetchingSchema: _react.PropTypes.func
});

function mapStateToProps(state, ownProps) {
  var schema = state.form.formSchemas[ownProps.schemaUrl];
  var identifier = createFormIdentifierFromProps(_extends({}, ownProps, { schema: schema }));
  var reduxFormState = (0, _getIn2.default)((0, _getFormState2.default)(state), identifier);

  var submitting = reduxFormState && reduxFormState.submitting;
  var values = reduxFormState && reduxFormState.values;

  var stateOverrides = schema && schema.stateOverride;
  var loading = schema && schema.metadata && schema.metadata.loading;
  return { schema: schema, submitting: submitting, values: values, stateOverrides: stateOverrides, loading: loading };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      schema: (0, _redux.bindActionCreators)(schemaActions, dispatch),
      reduxForm: (0, _redux.bindActionCreators)({ autofill: _reduxForm.autofill, initialize: _reduxForm.initialize }, dispatch)
    }
  };
}

exports.Component = FormBuilderLoader;
exports.default = (0, _redux.compose)((0, _Injector.inject)(['ReduxForm', 'ReduxFormField'], function (Form, Field) {
  return {
    baseFormComponent: Form,
    baseFieldComponent: Field
  };
}, function (_ref2) {
  var identifier = _ref2.identifier;
  return identifier;
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(FormBuilderLoader);

/***/ }),

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInsertLinkModal = exports.InsertLinkModal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(41);

var _reactRedux = __webpack_require__(55);

var _FormBuilderModal = __webpack_require__(779);

var _FormBuilderModal2 = _interopRequireDefault(_FormBuilderModal);

var _fileSchemaModalHandler = __webpack_require__(1934);

var _fileSchemaModalHandler2 = _interopRequireDefault(_fileSchemaModalHandler);

var _SchemaActions = __webpack_require__(397);

var schemaActions = _interopRequireWildcard(_SchemaActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertLinkModal = function (_Component) {
  _inherits(InsertLinkModal, _Component);

  function InsertLinkModal(props) {
    _classCallCheck(this, InsertLinkModal);

    var _this = _possibleConstructorReturn(this, (InsertLinkModal.__proto__ || Object.getPrototypeOf(InsertLinkModal)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    if (!props.show) {
      props.setOverrides(null);
    }
    return _this;
  }

  _createClass(InsertLinkModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.show && !this.props.show || !props.show && this.props.show) {
        props.setOverrides(props.show ? props : null);
      }
    }
  }, {
    key: 'getModalProps',
    value: function getModalProps() {
      var props = Object.assign({}, this.props, {
        onSubmit: this.handleSubmit,
        onHide: this.props.onHide,
        showErrorMessage: true
      });
      delete props.onInsert;
      delete props.sectionConfig;

      return props;
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(data, action) {
      switch (action) {
        case 'action_cancel':
          {
            this.props.onHide();
            break;
          }
        default:
          {
            this.props.onInsert(data, action);
          }
      }

      return Promise.resolve();
    }
  }, {
    key: 'render',
    value: function render() {
      var modalProps = this.getModalProps();
      return _react2.default.createElement(_FormBuilderModal2.default, modalProps);
    }
  }]);

  return InsertLinkModal;
}(_react.Component);

InsertLinkModal.propTypes = {
  show: _react.PropTypes.bool,
  schemaUrl: _react.PropTypes.string,
  onInsert: _react.PropTypes.func.isRequired,
  onHide: _react.PropTypes.func.isRequired,
  setOverrides: _react.PropTypes.func.isRequired,
  actions: _react.PropTypes.object,
  requireLinkText: _react.PropTypes.bool,
  currentPageID: _react.PropTypes.number
};

InsertLinkModal.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      schema: (0, _redux.bindActionCreators)(schemaActions, dispatch)
    }
  };
}

var createInsertLinkModal = function createInsertLinkModal(sectionConfigKey, formName) {
  function mapStateToProps(state, ownProps) {
    var sectionConfig = state.config.sections.find(function (section) {
      return section.name === sectionConfigKey;
    });
    var requireTextFieldUrl = ownProps.requireLinkText ? '?requireLinkText' : '';

    var schemaUrl = ('' + sectionConfig.form[formName].schemaUrl + requireTextFieldUrl).replace(/:pageid/, ownProps.currentPageID);

    return {
      sectionConfig: sectionConfig,
      schemaUrl: schemaUrl
    };
  }

  return (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _fileSchemaModalHandler2.default)(InsertLinkModal);
};

exports.InsertLinkModal = InsertLinkModal;
exports.createInsertLinkModal = createInsertLinkModal;
exports.default = (0, _redux.compose)((0, _reactRedux.connect)(function () {
  return {};
}, mapDispatchToProps), _fileSchemaModalHandler2.default)(InsertLinkModal);

/***/ }),

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectedFileSchemaHandler = exports.FileSchemaHandler = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(41);

var _SchemaActions = __webpack_require__(397);

var schemaActions = _interopRequireWildcard(_SchemaActions);

var _reactRedux = __webpack_require__(55);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileSchemaHandler = function (_Component) {
  _inherits(FileSchemaHandler, _Component);

  function FileSchemaHandler(props) {
    _classCallCheck(this, FileSchemaHandler);

    var _this = _possibleConstructorReturn(this, (FileSchemaHandler.__proto__ || Object.getPrototypeOf(FileSchemaHandler)).call(this, props));

    _this.setOverrides = _this.setOverrides.bind(_this);
    return _this;
  }

  _createClass(FileSchemaHandler, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setOverrides(this.props);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setOverrides();
    }
  }, {
    key: 'setOverrides',
    value: function setOverrides() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!props) {
        var schemaUrl = this.props.schemaUrl;
        if (schemaUrl) {
          this.props.actions.schema.setSchemaStateOverrides(schemaUrl, null);
        }
      } else if (props.schemaUrl) {
        var attrs = Object.assign({}, props.fileAttributes);

        delete attrs.ID;

        var overrides = {
          fields: Object.entries(attrs).map(function (field) {
            var _field = _slicedToArray(field, 2),
                name = _field[0],
                value = _field[1];

            return { name: name, value: value };
          })
        };

        this.props.actions.schema.setSchemaStateOverrides(props.schemaUrl, overrides);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var TargetComponent = this.props.Component;
      var props = Object.assign({}, this.props);

      delete props.Component;

      return _react2.default.createElement(TargetComponent, _extends({ setOverrides: this.setOverrides }, props));
    }
  }]);

  return FileSchemaHandler;
}(_react.Component);

FileSchemaHandler.propTypes = {
  fileAttributes: _react.PropTypes.object,
  Component: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.func]),
  schemaUrl: _react.PropTypes.string,
  actions: _react.PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      schema: (0, _redux.bindActionCreators)(schemaActions, dispatch)
    }
  };
}

var ConnectedFileSchemaHandler = (0, _reactRedux.connect)(function () {
  return {};
}, mapDispatchToProps())(FileSchemaHandler);

function fileSchemaModalHandler(AssetAdmin) {
  function mapStateToProps() {
    return {
      Component: AssetAdmin
    };
  }

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FileSchemaHandler);
}

exports.FileSchemaHandler = FileSchemaHandler;
exports.ConnectedFileSchemaHandler = ConnectedFileSchemaHandler;
exports.default = fileSchemaModalHandler;

/***/ }),

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isomorphicFetch = __webpack_require__(396);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _es6Promise = __webpack_require__(1323);

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _qs = __webpack_require__(399);

var _qs2 = _interopRequireDefault(_qs);

var _merge = __webpack_require__(249);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_es6Promise2.default.polyfill();

function checkStatus(response) {
  var ret = null;
  var error = null;
  if (response.status >= 200 && response.status < 300) {
    ret = response;
  } else {
    error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  return ret;
}

function encodeBody(data) {
  var encodedData = null;
  if (data instanceof FormData || typeof data === 'string') {
    encodedData = data;
  } else if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    encodedData = JSON.stringify(data);
  } else {
    throw new Error('Invalid body type');
  }
  return encodedData;
}

function encode(contentType, data) {
  switch (contentType) {
    case 'application/x-www-form-urlencoded':
      return _qs2.default.stringify(data);

    case 'application/json':
    case 'application/x-json':
    case 'application/x-javascript':
    case 'text/javascript':
    case 'text/x-javascript':
    case 'text/x-json':
      return JSON.stringify(data);

    default:
      throw new Error('Can\'t encode format: ' + contentType);
  }
}

function decode(contentType, text) {
  switch (contentType) {
    case 'application/x-www-form-urlencoded':
      return _qs2.default.parse(text);

    case 'application/json':
    case 'application/x-json':
    case 'application/x-javascript':
    case 'text/javascript':
    case 'text/x-javascript':
    case 'text/x-json':
      return JSON.parse(text);

    default:
      throw new Error('Can\'t decode format: ' + contentType);
  }
}

function addQuerystring(url, querystring) {
  if (querystring === '') {
    return url;
  }

  if (url.match(/\?/)) {
    return url + '&' + querystring;
  }

  return url + '?' + querystring;
}

function parseResponse(response) {
  return response.text().then(function (body) {
    return decode(response.headers.get('Content-Type'), body);
  });
}

function applySchemaToData(payloadSchema, data) {
  return Object.keys(data).reduce(function (prev, key) {
    var schema = payloadSchema[key];

    if (schema && (schema.remove === true || schema.querystring === true)) {
      return prev;
    }

    return Object.assign(prev, _defineProperty({}, key, data[key]));
  }, {});
}

function applySchemaToUrl(payloadSchema, url, data) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { setFromData: false };

  var newUrl = url;

  var queryData = Object.keys(data).reduce(function (prev, key) {
    var schema = payloadSchema[key];
    var includeThroughSetFromData = opts.setFromData === true && !(schema && schema.remove === true);
    var includeThroughSpec = schema && schema.querystring === true && schema.remove !== true;
    if (includeThroughSetFromData || includeThroughSpec) {
      return Object.assign(prev, _defineProperty({}, key, data[key]));
    }

    return prev;
  }, {});
  var encodedQuery = encode('application/x-www-form-urlencoded', queryData);

  newUrl = addQuerystring(newUrl, encodedQuery);

  newUrl = Object.keys(payloadSchema).reduce(function (prev, key) {
    var replacement = payloadSchema[key].urlReplacement;
    if (replacement) {
      return prev.replace(replacement, data[key]);
    }

    return prev;
  }, newUrl);

  return newUrl;
}

var Backend = function () {
  function Backend() {
    _classCallCheck(this, Backend);

    this.fetch = _isomorphicFetch2.default;
  }

  _createClass(Backend, [{
    key: 'createEndpointFetcher',
    value: function createEndpointFetcher(endpointSpec) {
      var _this = this;

      var refinedSpec = Object.assign({
        method: 'get',
        payloadFormat: 'application/x-www-form-urlencoded',
        responseFormat: 'application/json',
        payloadSchema: {},
        defaultData: {}
      }, endpointSpec);

      var formatShortcuts = {
        json: 'application/json',
        urlencoded: 'application/x-www-form-urlencoded'
      };
      ['payloadFormat', 'responseFormat'].forEach(function (key) {
        if (formatShortcuts[refinedSpec[key]]) refinedSpec[key] = formatShortcuts[refinedSpec[key]];
      });

      return function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var mergedHeaders = Object.assign({}, headers, {
          Accept: refinedSpec.responseFormat,
          'Content-Type': refinedSpec.payloadFormat
        });

        var mergedData = _merge2.default.recursive({}, refinedSpec.defaultData, data);

        var url = applySchemaToUrl(refinedSpec.payloadSchema, refinedSpec.url, mergedData, { setFromData: refinedSpec.method.toLowerCase() === 'get' });

        var encodedData = refinedSpec.method.toLowerCase() !== 'get' ? encode(refinedSpec.payloadFormat, applySchemaToData(refinedSpec.payloadSchema, mergedData)) : '';

        var args = refinedSpec.method.toLowerCase() === 'get' ? [url, mergedHeaders] : [url, encodedData, mergedHeaders];

        return _this[refinedSpec.method.toLowerCase()].apply(_this, args).then(parseResponse);
      };
    }
  }, {
    key: 'get',
    value: function get(url) {
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.fetch(url, {
        method: 'get',
        credentials: 'same-origin',
        headers: headers
      }).then(checkStatus);
    }
  }, {
    key: 'post',
    value: function post(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var defaultHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' };
      return this.fetch(url, {
        method: 'post',
        credentials: 'same-origin',
        body: encodeBody(data),
        headers: Object.assign({}, defaultHeaders, headers)
      }).then(checkStatus);
    }
  }, {
    key: 'put',
    value: function put(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.fetch(url, {
        method: 'put',
        credentials: 'same-origin',
        body: encodeBody(data),
        headers: headers
      }).then(checkStatus);
    }
  }, {
    key: 'delete',
    value: function _delete(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.fetch(url, {
        method: 'delete',
        credentials: 'same-origin',
        body: encodeBody(data),
        headers: headers
      }).then(checkStatus);
    }
  }]);

  return Backend;
}();

var backend = new Backend();

exports.default = backend;

/***/ }),

/***/ 1022:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  _createClass(Config, null, [{
    key: "get",
    value: function get(key) {
      return window.ss.config[key];
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return window.ss.config;
    }
  }, {
    key: "getSection",
    value: function getSection(key) {
      return window.ss.config.sections.find(function (section) {
        return section.name === key;
      });
    }
  }, {
    key: "getCurrentSection",
    value: function getCurrentSection() {}
  }]);

  return Config;
}();

exports.default = Config;

/***/ }),

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeQuery = decodeQuery;
exports.fileSize = fileSize;
exports.getFileExtension = getFileExtension;

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _qs = __webpack_require__(399);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decodeQuery(query) {
  return _qs2.default.parse(query.replace(/^\?/, ''));
}

function fileSize(size) {
  var number = null;
  var metric = '';

  if (size < 1024) {
    number = size;
    metric = 'bytes';
  } else if (size < 1024 * 10) {
    number = Math.round(size / 1024 * 10) / 10;
    metric = 'KB';
  } else if (size < 1024 * 1024) {
    number = Math.round(size / 1024);
    metric = 'KB';
  } else if (size < 1024 * 1024 * 10) {
    number = Math.round(size / (1024 * 1024) * 10) / 10;
    metric = 'MB';
  } else if (size < 1024 * 1024 * 1024) {
    number = Math.round(size / (1024 * 1024));
    metric = 'MB';
  }
  if (!number && number !== 0 || !metric) {
    number = Math.round(size / (1024 * 1024 * 1024) * 10) / 10;
    metric = 'GB';
  }

  if (isNaN(number)) {
    return _i18n2.default._t('Admin.NO_SIZE', 'N/A');
  }
  return number + ' ' + metric;
}

function getFileExtension(filename) {
  return (/[.]/.exec(filename) ? filename.replace(/^.+[.]/, '') : ''
  );
}

/***/ }),

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadComponent = exports.inject = exports.withInjector = exports.provideContext = exports.provideInjector = undefined;

var _provideInjector = __webpack_require__(260);

var _provideInjector2 = _interopRequireDefault(_provideInjector);

var _provideContext = __webpack_require__(416);

var _provideContext2 = _interopRequireDefault(_provideContext);

var _withInjector = __webpack_require__(261);

var _withInjector2 = _interopRequireDefault(_withInjector);

var _inject = __webpack_require__(414);

var _inject2 = _interopRequireDefault(_inject);

var _loadComponent = __webpack_require__(415);

var _loadComponent2 = _interopRequireDefault(_loadComponent);

var _Container = __webpack_require__(186);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.provideInjector = _provideInjector2.default;
exports.provideContext = _provideContext2.default;
exports.withInjector = _withInjector2.default;
exports.inject = _inject2.default;
exports.loadComponent = _loadComponent2.default;
exports.default = _Container2.default;

/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactRouteRegister = function () {
  function ReactRouteRegister() {
    _classCallCheck(this, ReactRouteRegister);

    this.reset();
  }

  _createClass(ReactRouteRegister, [{
    key: 'reset',
    value: function reset() {
      var _this = this;

      this.childRoutes = [];
      this.rootRoute = {
        path: '/',

        getChildRoutes: function getChildRoutes(location, cb) {
          cb(null, _this.childRoutes);
        }
      };
    }
  }, {
    key: 'updateRootRoute',
    value: function updateRootRoute(route) {
      this.rootRoute = Object.assign({}, this.rootRoute, route);
    }
  }, {
    key: 'add',
    value: function add(route) {
      var parentPaths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var childRoutes = this.findChildRoute(parentPaths);

      var newRoute = Object.assign({}, { childRoutes: [] }, route);

      var splatRoute = newRoute.childRoutes[newRoute.childRoutes.length - 1];
      if (!splatRoute || splatRoute.path !== '**') {
        splatRoute = { path: '**' };
        newRoute.childRoutes.push(splatRoute);
      }

      var newRouteIndex = childRoutes.findIndex(function (childRoute) {
        return childRoute.path === route.path;
      });
      if (newRouteIndex >= 0) {
        childRoutes[newRouteIndex] = newRoute;
      } else {
        childRoutes.unshift(newRoute);
      }
    }
  }, {
    key: 'findChildRoute',
    value: function findChildRoute(parentPaths) {
      var childRoutes = this.childRoutes;

      if (parentPaths) {
        parentPaths.forEach(function (path) {
          var nextParent = childRoutes.find(function (childRoute) {
            return childRoute.path === path;
          });
          if (!nextParent) {
            throw new Error('Parent path ' + path + ' could not be found.');
          }
          childRoutes = nextParent.childRoutes;
        });
      }

      return childRoutes;
    }
  }, {
    key: 'getRootRoute',
    value: function getRootRoute() {
      return this.rootRoute;
    }
  }, {
    key: 'getChildRoutes',
    value: function getChildRoutes() {
      return this.childRoutes;
    }
  }, {
    key: 'remove',
    value: function remove(path) {
      var parentPaths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var childRoutes = this.findChildRoute(parentPaths);
      var routeIndex = childRoutes.findIndex(function (childRoute) {
        return childRoute.path === path;
      });
      if (routeIndex < 0) {
        return null;
      }

      return childRoutes.splice(routeIndex, 1)[0];
    }
  }]);

  return ReactRouteRegister;
}();

window.ss = window.ss || {};
window.ss.routeRegister = window.ss.routeRegister || new ReactRouteRegister();

exports.default = window.ss.routeRegister;

/***/ }),

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _page = __webpack_require__(1940);

var _page2 = _interopRequireDefault(_page);

var _url = __webpack_require__(764);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveURLToBase(path) {
  var absoluteBase = _page2.default.getAbsoluteBase();
  var absolutePath = _url2.default.resolve(absoluteBase, path);

  if (absolutePath.indexOf(absoluteBase) !== 0) {
    return absolutePath;
  }

  return absolutePath.substring(absoluteBase.length - 1);
}

function show(pageShow) {
  return function (path, state, dispatch, push) {
    return pageShow(_page2.default.resolveURLToBase(path), state, dispatch, push);
  };
}

function routeAppliesToCurrentLocation(route) {
  var r = new _page2.default.Route(route);
  return r.match(_page2.default.current, {});
}

function getAbsoluteBase() {
  return _page2.default.absoluteBaseURL;
}

function setAbsoluteBase(base) {
  _page2.default.absoluteBaseURL = base;

  var a = document.createElement('a');
  a.href = base;
  var basePath = a.pathname;

  basePath = basePath.replace(/\/$/, '');
  if (basePath.match(/^[^\/]/)) {
    basePath = '/' + basePath;
  }
  _page2.default.base(basePath);
}

if (!_page2.default.oldshow) {
  _page2.default.oldshow = _page2.default.show;
}
_page2.default.setAbsoluteBase = setAbsoluteBase.bind(_page2.default);
_page2.default.getAbsoluteBase = getAbsoluteBase.bind(_page2.default);
_page2.default.resolveURLToBase = resolveURLToBase.bind(_page2.default);
_page2.default.show = show(_page2.default.oldshow);
_page2.default.routeAppliesToCurrentLocation = routeAppliesToCurrentLocation;

window.ss = window.ss || {};
window.ss.router = window.ss.router || _page2.default;

exports.default = window.ss.router;

/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stringifyRegex = function stringifyRegex(regexp) {
  return regexp.toString().slice(1, -1);
};
var SHORTCODE_ATTRS = stringifyRegex(/((?:[,\s]+(?:[a-z0-9\-_]+)=(?:(?:[a-z0-9\-_]+)|(?:\d+\.\d+)|(?:'[^']*')|(?:"[^"]*")))*)/);

var SHORTCODE_ATTR = /[,\s]+([a-z0-9\-_]+)=(?:([a-z0-9\-_]+)|(\d+\.\d+)|(?:'([^']*)')|(?:"([^"]*)"))/;
var SHORTCODE_OPEN = stringifyRegex(/\[%s/);
var SHORTCODE_RIGHT_BRACKET = '\\]';
var SHORTCODE_CLOSE = stringifyRegex(/\[\s*\/\s*%s\s*]/);
var SHORTCODE_CONTENT = stringifyRegex(/((?:.|\n|)*?)/);
var SHORTCODE_SPACE = stringifyRegex(/\s*/);


var ShortcodeSerialiser = {
  match: function match(name, wrapped, content) {
    var open = _i18n2.default.sprintf(SHORTCODE_OPEN, name);
    var pattern = '' + open + SHORTCODE_ATTRS + SHORTCODE_SPACE + SHORTCODE_RIGHT_BRACKET;
    if (wrapped) {
      pattern = '' + pattern + SHORTCODE_CONTENT + _i18n2.default.sprintf(SHORTCODE_CLOSE, name);
    }

    var regex = new RegExp(pattern, 'i');
    var match = regex.exec(content);
    if (!match) {
      return null;
    }

    var properties = this.parseProperties(match[1]);
    return {
      name: name,
      wrapped: wrapped,
      properties: properties,
      original: match[0],
      content: wrapped ? match[2] : null
    };
  },
  parseProperties: function parseProperties(input) {
    var unmatched = input;
    var result = {};
    var match = unmatched.match(SHORTCODE_ATTR);
    while (match) {
      var key = match[1] || '';
      var value = match[2] || match[3] || match[4] || match[5] || '';
      if (key) {
        result[key] = value;
      }

      var idx = unmatched.indexOf(match[0]);
      unmatched = unmatched.substr(idx + match[0].length);
      match = unmatched.match(SHORTCODE_ATTR);
    }
    return result;
  },
  serialise: function serialise(object) {
    var attributesafe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var rule = attributesafe ? { sep: ',', quote: '', replacer: /[^a-z0-9\-_.]/gi } : { sep: ' ', quote: '"', replacer: /"/g };
    var attrs = Object.entries(object.properties).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          value = _ref2[1];

      return value ? '' + rule.sep + name + '=' + rule.quote + ('' + value).replace(rule.replacer, '') + rule.quote : null;
    }).filter(function (attr) {
      return attr !== null;
    }).join('');

    if (object.wrapped) {
      return '[' + object.name + attrs + ']' + object.content + '[/' + object.name + ']';
    }
    return '[' + object.name + attrs + ']';
  }
};

exports.default = ShortcodeSerialiser;

/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var warned = false;
var timer = null;

var SilverStripeComponent = function (_Component) {
  _inherits(SilverStripeComponent, _Component);

  function SilverStripeComponent() {
    _classCallCheck(this, SilverStripeComponent);

    var _this = _possibleConstructorReturn(this, (SilverStripeComponent.__proto__ || Object.getPrototypeOf(SilverStripeComponent)).call(this));

    clearTimeout(timer);
    if (!warned && "development" !== 'production') {
      timer = setTimeout(function () {
        console.warn('SilverStripeComponent will be removed');
        warned = true;
      });
    }
    return _this;
  }

  _createClass(SilverStripeComponent, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return SilverStripeComponent;
}(_react.Component);

SilverStripeComponent.propTypes = {};

exports.default = SilverStripeComponent;

/***/ }),

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TinyMCEActionRegistrar = function () {
  function TinyMCEActionRegistrar() {
    _classCallCheck(this, TinyMCEActionRegistrar);

    this.actions = {};

    this.editorCommandsToUrlTestsMap = {};

    this.defaultCommand = 'sslinkexternal';
  }

  _createClass(TinyMCEActionRegistrar, [{
    key: 'addAction',
    value: function addAction(menu, action) {
      var priority = action.priority || 50;
      this.actions[menu] = this.getActions(menu).concat([_extends({}, action, { priority: priority })]);
      return this;
    }
  }, {
    key: 'getActions',
    value: function getActions(menu) {
      return this.actions[menu] || [];
    }
  }, {
    key: 'getSortedActions',
    value: function getSortedActions(menu) {
      var actions = this.getActions(menu);
      return actions.sort(function (a, b) {
        if (a.priority !== b.priority) {
          return a.priority < b.priority;
        }

        return a.text.toLocaleLowerCase() > b.text.toLocaleLowerCase();
      });
    }
  }, {
    key: 'addCommandWithUrlTest',
    value: function addCommandWithUrlTest(command, test) {
      this.editorCommandsToUrlTestsMap[command] = test;
      return this;
    }
  }, {
    key: 'setDefaultCommand',
    value: function setDefaultCommand(command) {
      this.defaultCommand = command;

      return this;
    }
  }, {
    key: 'getDefaultCommand',
    value: function getDefaultCommand() {
      return this.defaultCommand;
    }
  }, {
    key: 'getEditorCommandFromUrl',
    value: function getEditorCommandFromUrl(url) {
      var _this = this;

      var command = this.getDefaultCommand();

      var commands = Object.keys(this.editorCommandsToUrlTestsMap);
      var matchedCmd = commands.find(function (cmd) {
        return _this.editorCommandsToUrlTestsMap[cmd] && _this.editorCommandsToUrlTestsMap[cmd].test(url);
      });
      if (matchedCmd) {
        command = matchedCmd;
      }

      return command;
    }
  }]);

  return TinyMCEActionRegistrar;
}();

window.ss = window.ss || {};
window.ss.tinymceactions = window.ss.tinymceactions || new TinyMCEActionRegistrar();

exports.default = window.ss.tinymceactions;

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatWrittenNumber;

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatWrittenNumber(num) {
  var parsed = Number(num);
  if (num !== null && parsed >= 0 && parsed < 10) {
    return [_i18n2.default._t('Admin.WRITTEN_NUMBER_ZERO', 'zero'), _i18n2.default._t('Admin.WRITTEN_NUMBER_ONE', 'one'), _i18n2.default._t('Admin.WRITTEN_NUMBER_TWO', 'two'), _i18n2.default._t('Admin.WRITTEN_NUMBER_THREE', 'three'), _i18n2.default._t('Admin.WRITTEN_NUMBER_FOUR', 'four'), _i18n2.default._t('Admin.WRITTEN_NUMBER_FIVE', 'five'), _i18n2.default._t('Admin.WRITTEN_NUMBER_SIX', 'six'), _i18n2.default._t('Admin.WRITTEN_NUMBER_SEVEN', 'seven'), _i18n2.default._t('Admin.WRITTEN_NUMBER_EIGHT', 'eight'), _i18n2.default._t('Admin.WRITTEN_NUMBER_NINE', 'nine')][parsed];
  } else if (parsed) {
    return String(parsed);
  }

  return null;
}

/***/ }),

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFormState;
function getFormState(state) {
  var formState = state.form && state.form.formState;
  return formState || {};
}

/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFieldReducer;

var _deepFreezeStrict = __webpack_require__(84);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getFieldReducer(state, action) {
  var initialFieldState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return function (fieldReducer) {
    if (!action.payload.fieldId) {
      throw new Error('Invalid fieldId');
    }

    var fields = state.fields || {};
    var field = fields[action.payload.fieldId] ? state.fields[action.payload.fieldId] : initialFieldState;

    return (0, _deepFreezeStrict2.default)(Object.assign({}, state, {
      fields: Object.assign({}, fields, _defineProperty({}, action.payload.fieldId, Object.assign({}, field, fieldReducer(field))))
    }));
  };
}

/***/ }),

/***/ 1033:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemaMerge = schemaMerge;
exports.findField = findField;
exports.default = schemaFieldValues;

var _merge = __webpack_require__(249);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function schemaMerge(schema, state) {
  if (typeof state === 'undefined') {
    return schema;
  }
  return _merge2.default.recursive(true, schema, state);
}

function findField(fields, name) {
  if (!fields) {
    return null;
  }

  return fields.reduce(function (prev, field) {
    if (prev) {
      return prev;
    }
    return findField(field.children, name);
  }, fields.find(function (field) {
    return field.name === name;
  }));
}

function schemaFieldValues(schema, state) {
  if (!state) {
    return {};
  }

  return state.fields.reduce(function (prev, curr) {
    var match = findField(schema.fields, curr.name);

    if (!match) {
      return prev;
    }

    if (match.type === 'Structural' || match.readOnly === true) {
      return prev;
    }

    return Object.assign({}, prev, _defineProperty({}, match.name, curr.value));
  }, {});
}

/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBreadcrumbs = setBreadcrumbs;

var _BreadcrumbsActionTypes = __webpack_require__(417);

var _BreadcrumbsActionTypes2 = _interopRequireDefault(_BreadcrumbsActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setBreadcrumbs(breadcrumbs) {
  return {
    type: _BreadcrumbsActionTypes2.default.SET_BREADCRUMBS,
    payload: { breadcrumbs: breadcrumbs }
  };
}

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  FETCH_RECORDS_REQUEST: 'FETCH_RECORDS_REQUEST',
  FETCH_RECORDS_FAILURE: 'FETCH_RECORDS_FAILURE',
  FETCH_RECORDS_SUCCESS: 'FETCH_RECORDS_SUCCESS',
  FETCH_RECORD_REQUEST: 'FETCH_RECORD_REQUEST',
  FETCH_RECORD_FAILURE: 'FETCH_RECORD_FAILURE',
  FETCH_RECORD_SUCCESS: 'FETCH_RECORD_SUCCESS',
  DELETE_RECORD_REQUEST: 'DELETE_RECORD_REQUEST',
  DELETE_RECORD_FAILURE: 'DELETE_RECORD_FAILURE',
  DELETE_RECORD_SUCCESS: 'DELETE_RECORD_SUCCESS'
};

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchRecords = fetchRecords;
exports.fetchRecord = fetchRecord;
exports.deleteRecord = deleteRecord;

var _Backend = __webpack_require__(777);

var _Backend2 = _interopRequireDefault(_Backend);

var _RecordsActionTypes = __webpack_require__(421);

var _RecordsActionTypes2 = _interopRequireDefault(_RecordsActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function populate(template, params) {
  return Object.keys(params).reduce(function (result, name) {
    return result.replace(':' + name, params[name]);
  }, template);
}

function fetchRecords(recordType, method, url) {
  var payload = { recordType: recordType };
  var headers = { Accept: 'text/json' };
  var methodToLowerCase = method.toLowerCase();

  return function (dispatch) {
    dispatch({
      type: _RecordsActionTypes2.default.FETCH_RECORDS_REQUEST,
      payload: payload
    });

    var args = methodToLowerCase === 'get' ? [populate(url, payload), headers] : [populate(url, payload), {}, headers];

    return _Backend2.default[methodToLowerCase].apply(_Backend2.default, args).then(function (response) {
      return response.json();
    }).then(function (json) {
      dispatch({
        type: _RecordsActionTypes2.default.FETCH_RECORDS_SUCCESS,
        payload: { recordType: recordType, data: json }
      });
    }).catch(function (err) {
      dispatch({
        type: _RecordsActionTypes2.default.FETCH_RECORDS_FAILURE,
        payload: { error: err, recordType: recordType }
      });
      throw err;
    });
  };
}

function fetchRecord(recordType, method, url) {
  var payload = { recordType: recordType };
  var headers = { Accept: 'text/json' };
  var methodToLowerCase = method.toLowerCase();

  return function (dispatch) {
    dispatch({
      type: _RecordsActionTypes2.default.FETCH_RECORD_REQUEST,
      payload: payload
    });

    var args = methodToLowerCase === 'get' ? [populate(url, payload), headers] : [populate(url, payload), {}, headers];

    return _Backend2.default[methodToLowerCase].apply(_Backend2.default, args).then(function (response) {
      return response.json();
    }).then(function (json) {
      dispatch({
        type: _RecordsActionTypes2.default.FETCH_RECORD_SUCCESS,
        payload: { recordType: recordType, data: json }
      });
    }).catch(function (err) {
      dispatch({
        type: _RecordsActionTypes2.default.FETCH_RECORD_FAILURE,
        payload: { error: err, recordType: recordType }
      });
      throw err;
    });
  };
}

function deleteRecord(recordType, id, method, url) {
  var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var payload = { recordType: recordType, id: id };
  var methodToLowerCase = method.toLowerCase();
  var args = methodToLowerCase === 'get' ? [populate(url, payload), headers] : [populate(url, payload), {}, headers];

  return function (dispatch) {
    dispatch({
      type: _RecordsActionTypes2.default.DELETE_RECORD_REQUEST,
      payload: payload
    });
    return _Backend2.default[methodToLowerCase].apply(_Backend2.default, args).then(function () {
      dispatch({
        type: _RecordsActionTypes2.default.DELETE_RECORD_SUCCESS,
        payload: { recordType: recordType, id: id }
      });
    }).catch(function (err) {
      dispatch({
        type: _RecordsActionTypes2.default.DELETE_RECORD_FAILURE,
        payload: { error: err, recordType: recordType, id: id }
      });
      throw err;
    });
  };
}

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.setSchema = setSchema;
exports.setSchemaStateOverrides = setSchemaStateOverrides;
exports.setSchemaLoading = setSchemaLoading;

var _SchemaActionTypes = __webpack_require__(422);

var _SchemaActionTypes2 = _interopRequireDefault(_SchemaActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setSchema(id) {
  var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var name = arguments[2];

  return {
    type: _SchemaActionTypes2.default.SET_SCHEMA,
    payload: _extends({}, schema, {
      id: id,
      name: name
    })
  };
}

function setSchemaStateOverrides(id, stateOverride) {
  return {
    type: _SchemaActionTypes2.default.SET_SCHEMA_STATE_OVERRIDES,
    payload: {
      id: id,
      stateOverride: stateOverride
    }
  };
}

function setSchemaLoading(id, loading) {
  return {
    type: _SchemaActionTypes2.default.SET_SCHEMA_LOADING,
    payload: {
      id: id,
      loading: loading
    }
  };
}

/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addFormChanged = addFormChanged;
exports.removeFormChanged = removeFormChanged;

var _UnsavedFormsActionTypes = __webpack_require__(424);

var _UnsavedFormsActionTypes2 = _interopRequireDefault(_UnsavedFormsActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addFormChanged(form) {
  return {
    type: _UnsavedFormsActionTypes2.default.ADD_FORM_CHANGED,
    meta: { form: form }
  };
}

function removeFormChanged(form) {
  return {
    type: _UnsavedFormsActionTypes2.default.REMOVE_FORM_CHANGED,
    meta: { form: form }
  };
}

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

exports.default = {
  injector: _react.PropTypes.shape({
    get: _react.PropTypes.func,
    context: _react.PropTypes.string,
    validate: _react.PropTypes.func
  })
};

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = modernizr;

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = schemaFieldValues;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buildInjectorContainer = __webpack_require__(977);

var _buildInjectorContainer2 = _interopRequireDefault(_buildInjectorContainer);

var _buildComponentContainer = __webpack_require__(975);

var _buildComponentContainer2 = _interopRequireDefault(_buildComponentContainer);

var _buildReducerContainer = __webpack_require__(978);

var _buildReducerContainer2 = _interopRequireDefault(_buildReducerContainer);

var _buildFormContainer = __webpack_require__(976);

var _buildFormContainer2 = _interopRequireDefault(_buildFormContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Injector = (0, _buildInjectorContainer2.default)();

Injector.register('component', (0, _buildComponentContainer2.default)());
Injector.register('reducer', (0, _buildReducerContainer2.default)());
Injector.register('form', (0, _buildFormContainer2.default)());

exports.default = Injector;

/***/ }),

/***/ 1933:
/***/ (function(module, exports) {

module.exports = ApolloClient;

/***/ }),

/***/ 1934:
/***/ (function(module, exports) {

module.exports = FileSchemaModalHandler;

/***/ }),

/***/ 1935:
/***/ (function(module, exports) {

module.exports = FormAction;

/***/ }),

/***/ 1936:
/***/ (function(module, exports) {

module.exports = FormBuilder;

/***/ }),

/***/ 1937:
/***/ (function(module, exports) {

module.exports = FormBuilderLoader;

/***/ }),

/***/ 1938:
/***/ (function(module, exports) {

module.exports = GridField;

/***/ }),

/***/ 1939:
/***/ (function(module, exports) {

module.exports = LiteralField;

/***/ }),

/***/ 1940:
/***/ (function(module, exports) {

module.exports = Page;

/***/ }),

/***/ 1941:
/***/ (function(module, exports) {

module.exports = ReactRouteRegister;

/***/ }),

/***/ 1942:
/***/ (function(module, exports) {

module.exports = ReactRouter;

/***/ }),

/***/ 1943:
/***/ (function(module, exports) {

module.exports = ReactSelect;

/***/ }),

/***/ 1944:
/***/ (function(module, exports) {

module.exports = RecordsActions;

/***/ }),

/***/ 1945:
/***/ (function(module, exports) {

module.exports = ReduxThunk;

/***/ }),

/***/ 1946:
/***/ (function(module, exports) {

module.exports = Router;

/***/ }),

/***/ 1947:
/***/ (function(module, exports) {

module.exports = reduxFieldReducer;

/***/ }),

/***/ 1948:
/***/ (function(module, exports) {

module.exports = validator;

/***/ }),

/***/ 1949:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = i18n;

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = merge;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IframeDialog = __webpack_require__(946);

var _IframeDialog2 = _interopRequireDefault(_IframeDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(400);

_jquery2.default.noConflict();

window.ss = window.ss || {};

window.ss.debounce = function (func, wait, immediate) {
  var timeout, context, args;

  var later = function later() {
    timeout = null;
    if (!immediate) func.apply(context, args);
  };

  return function () {
    var callNow = immediate && !timeout;

    context = this;
    args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

(0, _jquery2.default)(window).bind('resize.leftandmain', function (e) {
  (0, _jquery2.default)('.cms-container').trigger('windowresize');
});

_jquery2.default.entwine.warningLevel = _jquery2.default.entwine.WARN_LEVEL_BESTPRACTISE;

_jquery2.default.entwine('ss', function ($) {
  $(window).on("message", function (e) {
    var target,
        event = e.originalEvent,
        data = null;

    try {
      data = _typeof(event.data) === 'object' ? event.data : JSON.parse(event.data);
    } catch (e) {}

    if (!data || $.path.parseUrl(window.location.href).domain !== $.path.parseUrl(event.origin).domain) return;

    target = typeof data.target === 'undefined' ? $(window) : $(data.target);

    switch (data.type) {
      case 'event':
        target.trigger(data.event, data.data);
        break;
      case 'callback':
        target[data.callback].call(target, data.data);
        break;
    }
  });

  var positionLoadingSpinner = function positionLoadingSpinner() {
    var offset = 120;
    var spinner = $('.ss-loading-screen .loading-animation');
    var top = ($(window).height() - spinner.height()) / 2;
    spinner.css('top', top + offset);
    spinner.show();
  };

  var applyChosen = function applyChosen(el) {
    if (el.is(':visible')) {
      el.addClass('has-chosen').chosen({
        allow_single_deselect: true,
        disable_search_threshold: 20,
        display_disabled_options: true,
        width: '100%'
      });
    } else {
      setTimeout(function () {
        el.show();
        applyChosen(el);
      }, 500);
    }
  };

  var isSameUrl = function isSameUrl(url1, url2) {
    var baseUrl = $('base').attr('href');
    url1 = $.path.isAbsoluteUrl(url1) ? url1 : $.path.makeUrlAbsolute(url1, baseUrl), url2 = $.path.isAbsoluteUrl(url2) ? url2 : $.path.makeUrlAbsolute(url2, baseUrl);
    var url1parts = $.path.parseUrl(url1),
        url2parts = $.path.parseUrl(url2);
    return url1parts.pathname.replace(/\/*$/, '') == url2parts.pathname.replace(/\/*$/, '') && url1parts.search == url2parts.search;
  };

  var ajaxCompleteEvent = window.ss.debounce(function () {
    $(window).trigger('ajaxComplete');
  }, 1000, true);

  $(window).bind('resize', positionLoadingSpinner).trigger('resize');

  $(document).ajaxComplete(function (e, xhr, settings) {
    var origUrl = document.URL,
        url = xhr.getResponseHeader('X-ControllerURL'),
        destUrl = settings.url,
        msg = xhr.getResponseHeader('X-Status') !== null ? xhr.getResponseHeader('X-Status') : xhr.statusText,
        msgType = xhr.status < 200 || xhr.status > 399 ? 'bad' : 'good',
        ignoredMessages = ['OK', 'success', 'HTTP/2.0 200'];

    if (url !== null && (!isSameUrl(origUrl, url) || !isSameUrl(destUrl, url))) {
      window.ss.router.show(url, {
        id: new Date().getTime() + String(Math.random()).replace(/\D/g, ''),
        pjax: xhr.getResponseHeader('X-Pjax') ? xhr.getResponseHeader('X-Pjax') : settings.headers['X-Pjax']
      });
    }

    if (xhr.getResponseHeader('X-Reauthenticate')) {
      $('.cms-container').showLoginDialog();
      return;
    }

    if (xhr.status !== 0 && msg && $.inArray(msg, ignoredMessages) === -1) {
      statusMessage(decodeURIComponent(msg), msgType);
    }

    ajaxCompleteEvent(this);
  });

  $('.cms-container').entwine({
    StateChangeXHR: null,

    FragmentXHR: {},

    StateChangeCount: 0,

    LayoutOptions: {
      minContentWidth: 940,
      minPreviewWidth: 400,
      mode: 'content'
    },

    onadd: function onadd() {
      if ($.browser.msie && parseInt($.browser.version, 10) < 8) {
        $('.ss-loading-screen').append('<p class="ss-loading-incompat-warning"><span class="notice">' + 'Your browser is not compatible with the CMS interface. Please use Internet Explorer 8+, Google Chrome or Mozilla Firefox.' + '</span></p>').css('z-index', $('.ss-loading-screen').css('z-index') + 1);
        $('.loading-animation').remove();

        this._super();
        return;
      }

      this.redraw();

      $('.ss-loading-screen').hide();
      $('body').removeClass('loading');
      $(window).unbind('resize', positionLoadingSpinner);
      this.restoreTabState();
      this._super();
    },

    'onwindowresize': function onwindowresize() {
      this.redraw();
    },

    'from .cms-panel': {
      ontoggle: function ontoggle() {
        this.redraw();
      }
    },

    'from .cms-container': {
      onaftersubmitform: function onaftersubmitform() {
        this.redraw();
      }
    },

    updateLayoutOptions: function updateLayoutOptions(newSpec) {
      var spec = this.getLayoutOptions();

      var dirty = false;

      for (var k in newSpec) {
        if (spec[k] !== newSpec[k]) {
          spec[k] = newSpec[k];
          dirty = true;
        }
      }

      if (dirty) this.redraw();
    },

    clearViewMode: function clearViewMode() {
      this.removeClass('cms-container--split-mode');
      this.removeClass('cms-container--preview-mode');
      this.removeClass('cms-container--content-mode');
    },

    splitViewMode: function splitViewMode() {
      this.updateLayoutOptions({
        mode: 'split'
      });
    },

    contentViewMode: function contentViewMode() {
      this.updateLayoutOptions({
        mode: 'content'
      });
    },

    previewMode: function previewMode() {
      this.updateLayoutOptions({
        mode: 'preview'
      });
    },

    RedrawSuppression: false,

    redraw: function redraw() {
      if (this.getRedrawSuppression()) return;

      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));

      var changed = this.setProperMode();

      if (!changed) {
        this.find('.cms-panel-layout').redraw();
        this.find('.cms-content-fields[data-layout-type]').redraw();
        this.find('.cms-edit-form[data-layout-type]').redraw();
        this.find('.cms-preview').redraw();
        this.find('.cms-content').redraw();
      }
    },

    setProperMode: function setProperMode() {
      var options = this.getLayoutOptions();
      var mode = options.mode;
      this.clearViewMode();

      var content = this.find('.cms-content');
      var preview = this.find('.cms-preview');

      content.css({ 'min-width': 0 });
      preview.css({ 'min-width': 0 });

      if (content.width() + preview.width() >= options.minContentWidth + options.minPreviewWidth) {
        content.css({ 'min-width': options.minContentWidth });
        preview.css({ 'min-width': options.minPreviewWidth });
        preview.trigger('enable');
      } else {
        preview.trigger('disable');
        if (mode == 'split') {
          preview.trigger('forcecontent');
          return true;
        }
      }

      this.addClass('cms-container--' + mode + '-mode');
      return false;
    },

    checkCanNavigate: function checkCanNavigate(selectors) {
      var contentEls = this._findFragments(selectors || ['Content']),
          trackedEls = contentEls.find(':data(changetracker)').add(contentEls.filter(':data(changetracker)')),
          safe = true;

      if (!trackedEls.length) {
        return true;
      }

      trackedEls.each(function () {
        if (!$(this).confirmUnsavedChanges()) {
          safe = false;
        }
      });

      return safe;
    },

    loadPanel: function loadPanel(url) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var forceReload = arguments[3];
      var forceReferer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : document.URL;

      if (!this.checkCanNavigate(data.pjax ? data.pjax.split(',') : ['Content'])) {
        return;
      }

      this.saveTabState();

      data.__forceReferer = forceReferer;

      if (forceReload) {
        data.__forceReload = 1 + Math.random();
      }

      window.ss.router.show(url, data);
    },

    reloadCurrentPanel: function reloadCurrentPanel() {
      this.loadPanel(document.URL, null, null, true);
    },

    submitForm: function submitForm(form, button, callback, ajaxOptions) {
      var self = this;

      if (!button) button = this.find('.btn-toolbar :submit[name=action_save]');

      if (!button) button = this.find('.btn-toolbar :submit:first');

      form.trigger('beforesubmitform');
      this.trigger('submitform', { form: form, button: button });

      $(button).addClass('btn--loading loading');

      if ($(button).is('button')) {
        $(button).data('original-text', $(button).text());

        $(button).append($('<div class="btn__loading-icon">' + '<span class="btn__circle btn__circle--1" />' + '<span class="btn__circle btn__circle--2" />' + '<span class="btn__circle btn__circle--3" />' + '</div>'));

        $(button).css($(button).outerWidth() + 'px');
      }

      var validationResult = form.validate();

      var clearButton = function clearButton() {
        $(button).removeClass('btn--loading loading');
        $(button).find('.btn__loading-icon').remove();
        $(button).css('width', 'auto');
        $(button).text($(button).data('original-text'));
      };

      if (typeof validationResult !== 'undefined' && !validationResult) {
        statusMessage("Validation failed.", "bad");
        clearButton();
      }

      var formData = form.serializeArray();

      formData.push({ name: $(button).attr('name'), value: '1' });

      formData.push({ name: 'BackURL', value: document.URL.replace(/\/$/, '') });

      this.saveTabState();

      jQuery.ajax(jQuery.extend({
        headers: { "X-Pjax": "CurrentForm,Breadcrumbs" },
        url: form.attr('action'),
        data: formData,
        type: 'POST',
        complete: function complete() {
          clearButton();
        },
        success: function success(data, status, xhr) {
          clearButton();
          form.removeClass('changed');
          if (callback) callback(data, status, xhr);

          var newContentEls = self.handleAjaxResponse(data, status, xhr);
          if (!newContentEls) return;

          newContentEls.filter('form').trigger('aftersubmitform', { status: status, xhr: xhr, formData: formData });
        }
      }, ajaxOptions));

      return false;
    },

    LastState: null,

    PauseState: false,

    handleStateChange: function handleStateChange(event) {
      var historyState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.history.state;

      if (this.getPauseState()) {
        return;
      }

      if (this.getStateChangeXHR()) {
        this.getStateChangeXHR().abort();
      }

      var self = this,
          fragments = historyState.pjax || 'Content',
          headers = {},
          fragmentsArr = fragments.split(','),
          contentEls = this._findFragments(fragmentsArr);

      this.setStateChangeCount(this.getStateChangeCount() + 1);

      if (!this.checkCanNavigate()) {
        var lastState = this.getLastState();

        this.setPauseState(true);

        if (lastState && lastState.path) {
          window.ss.router.show(lastState.path);
        } else {
          window.ss.router.back();
        }

        this.setPauseState(false);

        return;
      }

      this.setLastState(historyState);

      if (contentEls.length < fragmentsArr.length) {
        fragments = 'Content', fragmentsArr = ['Content'];
        contentEls = this._findFragments(fragmentsArr);
      }

      this.trigger('beforestatechange', { state: historyState, element: contentEls });

      headers['X-Pjax'] = fragments;

      if (typeof historyState.__forceReferer !== 'undefined') {
        var url = historyState.__forceReferer;

        try {
          url = decodeURI(url);
        } catch (e) {} finally {
          headers['X-Backurl'] = encodeURI(url);
        }
      }

      contentEls.addClass('loading');

      var promise = $.ajax({
        headers: headers,
        url: historyState.path || document.URL
      }).done(function (data, status, xhr) {
        var els = self.handleAjaxResponse(data, status, xhr, historyState);
        self.trigger('afterstatechange', { data: data, status: status, xhr: xhr, element: els, state: historyState });
      }).always(function () {
        self.setStateChangeXHR(null);

        contentEls.removeClass('loading');
      });

      this.setStateChangeXHR(promise);

      return promise;
    },

    loadFragment: function loadFragment(url, pjaxFragments) {

      var self = this,
          xhr,
          headers = {},
          baseUrl = $('base').attr('href'),
          fragmentXHR = this.getFragmentXHR();

      if (typeof fragmentXHR[pjaxFragments] !== 'undefined' && fragmentXHR[pjaxFragments] !== null) {
        fragmentXHR[pjaxFragments].abort();
        fragmentXHR[pjaxFragments] = null;
      }

      url = $.path.isAbsoluteUrl(url) ? url : $.path.makeUrlAbsolute(url, baseUrl);
      headers['X-Pjax'] = pjaxFragments;

      xhr = $.ajax({
        headers: headers,
        url: url,
        success: function success(data, status, xhr) {
          var elements = self.handleAjaxResponse(data, status, xhr, null);

          self.trigger('afterloadfragment', { data: data, status: status, xhr: xhr, elements: elements });
        },
        error: function error(xhr, status, _error) {
          self.trigger('loadfragmenterror', { xhr: xhr, status: status, error: _error });
        },
        complete: function complete() {
          var fragmentXHR = self.getFragmentXHR();
          if (typeof fragmentXHR[pjaxFragments] !== 'undefined' && fragmentXHR[pjaxFragments] !== null) {
            fragmentXHR[pjaxFragments] = null;
          }
        }
      });

      fragmentXHR[pjaxFragments] = xhr;

      return xhr;
    },

    handleAjaxResponse: function handleAjaxResponse(data, status, xhr, state) {
      var self = this,
          url,
          selectedTabs,
          guessFragment,
          fragment,
          $data;

      if (xhr.getResponseHeader('X-Reload') && xhr.getResponseHeader('X-ControllerURL')) {
        var baseUrl = $('base').attr('href'),
            rawURL = xhr.getResponseHeader('X-ControllerURL'),
            url = $.path.isAbsoluteUrl(rawURL) ? rawURL : $.path.makeUrlAbsolute(rawURL, baseUrl);

        document.location.href = url;
        return;
      }

      if (!data) return;

      var title = xhr.getResponseHeader('X-Title');
      if (title) document.title = decodeURIComponent(title.replace(/\+/g, ' '));

      var newFragments = {},
          newContentEls;

      if (xhr.getResponseHeader('Content-Type').match(/^((text)|(application))\/json[ \t]*;?/i)) {
        newFragments = data;
      } else {
        fragment = document.createDocumentFragment();

        jQuery.clean([data], document, fragment, []);
        $data = $(jQuery.merge([], fragment.childNodes));

        guessFragment = 'Content';
        if ($data.is('form') && !$data.is('[data-pjax-fragment~=Content]')) guessFragment = 'CurrentForm';

        newFragments[guessFragment] = $data;
      }

      this.setRedrawSuppression(true);
      try {
        $.each(newFragments, function (newFragment, html) {
          var contentEl = $('[data-pjax-fragment]').filter(function () {
            return $.inArray(newFragment, $(this).data('pjaxFragment').split(' ')) != -1;
          }),
              newContentEl = $(html);

          if (newContentEls) newContentEls.add(newContentEl);else newContentEls = newContentEl;

          if (newContentEl.find('.cms-container').length) {
            throw 'Content loaded via ajax is not allowed to contain tags matching the ".cms-container" selector to avoid infinite loops';
          }

          var origStyle = contentEl.attr('style');
          var origParent = contentEl.parent();
          var layoutClasses = ['east', 'west', 'center', 'north', 'south', 'column-hidden'];
          var elemClasses = contentEl.attr('class');
          var origLayoutClasses = [];
          if (elemClasses) {
            origLayoutClasses = $.grep(elemClasses.split(' '), function (val) {
              return $.inArray(val, layoutClasses) >= 0;
            });
          }

          newContentEl.removeClass(layoutClasses.join(' ')).addClass(origLayoutClasses.join(' '));
          if (origStyle) newContentEl.attr('style', origStyle);

          var styles = newContentEl.find('style').detach();
          if (styles.length) $(document).find('head').append(styles);

          contentEl.replaceWith(newContentEl);
        });

        var newForm = newContentEls.filter('form');
        if (newForm.hasClass('cms-tabset')) newForm.removeClass('cms-tabset').addClass('cms-tabset');
      } finally {
        this.setRedrawSuppression(false);
      }

      this.redraw();
      this.restoreTabState(state && typeof state.tabState !== 'undefined' ? state.tabState : null);

      return newContentEls;
    },

    _findFragments: function _findFragments(fragments) {
      return $('[data-pjax-fragment]').filter(function () {
        var i,
            nodeFragments = $(this).data('pjaxFragment').split(' ');
        for (i in fragments) {
          if ($.inArray(fragments[i], nodeFragments) != -1) return true;
        }
        return false;
      });
    },

    refresh: function refresh() {
      $(window).trigger('statechange');

      $(this).redraw();
    },

    saveTabState: function saveTabState() {
      if (typeof window.sessionStorage == "undefined" || window.sessionStorage === null) return;

      var selectedTabs = [],
          url = this._tabStateUrl();
      this.find('.cms-tabset,.ss-tabset').each(function (i, el) {
        var id = $(el).attr('id');
        if (!id) return;
        if (!$(el).data('tabs')) return;
        if ($(el).data('ignoreTabState') || $(el).getIgnoreTabState()) return;

        selectedTabs.push({ id: id, selected: $(el).tabs('option', 'selected') });
      });

      if (selectedTabs) {
        var tabsUrl = 'tabs-' + url;
        try {
          window.sessionStorage.setItem(tabsUrl, JSON.stringify(selectedTabs));
        } catch (err) {
          if (err.code === DOMException.QUOTA_EXCEEDED_ERR && window.sessionStorage.length === 0) {
            return;
          } else {
            throw err;
          }
        }
      }
    },

    restoreTabState: function restoreTabState(overrideStates) {
      var self = this,
          url = this._tabStateUrl(),
          hasSessionStorage = typeof window.sessionStorage !== "undefined" && window.sessionStorage,
          sessionData = hasSessionStorage ? window.sessionStorage.getItem('tabs-' + url) : null,
          sessionStates = sessionData ? JSON.parse(sessionData) : false;

      this.find('.cms-tabset, .ss-tabset').each(function () {
        var index,
            tab,
            tabset = $(this),
            tabsetId = tabset.attr('id'),
            forcedTab = tabset.children('ul').children('li.ss-tabs-force-active');

        if (!tabset.data('tabs')) {
          return;
        }

        tabset.tabs('refresh');

        if (forcedTab.length) {
          index = forcedTab.first().index();
        } else if (overrideStates && overrideStates[tabsetId]) {
          tab = tabset.find(overrideStates[tabsetId].tabSelector);
          if (tab.length) {
            index = tab.index();
          }
        } else if (sessionStates) {
          $.each(sessionStates, function (i, state) {
            if (tabsetId == state.id) {
              index = state.selected;
            }
          });
        }
        if (index !== null) {
          tabset.tabs('option', 'active', index);
          self.trigger('tabstaterestored');
        }
      });
    },

    clearTabState: function clearTabState(url) {
      if (typeof window.sessionStorage == "undefined") return;

      var s = window.sessionStorage;
      if (url) {
        s.removeItem('tabs-' + url);
      } else {
        for (var i = 0; i < s.length; i++) {
          if (s.key(i).match(/^tabs-/)) s.removeItem(s.key(i));
        }
      }
    },

    clearCurrentTabState: function clearCurrentTabState() {
      this.clearTabState(this._tabStateUrl());
    },

    _tabStateUrl: function _tabStateUrl() {
      return window.location.href.replace(/\?.*/, '').replace(/#.*/, '').replace($('base').attr('href'), '');
    },

    showLoginDialog: function showLoginDialog() {
      var dialog = $('.leftandmain__login-dialog');
      if (dialog.length) {
        dialog.destroy();
      }

      dialog = $('<div class="leftandmain__login-dialog" />');
      $('body').append(dialog);
      dialog.open();
    }
  });

  $('.leftandmain__login-dialog').entwine({
    destroy: function destroy() {
      this.close();
      this.remove();
    },
    close: function close() {
      this.renderModal(false);
    },
    open: function open() {
      this.renderModal(true);
    },
    renderModal: function renderModal(show) {
      var tempid = $('body').data('member-tempid');
      var url = $.path.addSearchParams('CMSSecurity/login', {
        tempid: tempid,
        BackURL: window.location.href
      });

      _reactDom2.default.render(_react2.default.createElement(_IframeDialog2.default, {
        title: i18n._t('Admin.CMS_LOGIN_TITLE', 'Login'),
        className: 'login-dialog',
        bodyClassName: 'login-dialog__body',
        iframeId: 'login-dialog-iframe',
        iframeClassName: 'login-dialog__body__iframe',
        show: show,
        url: url
      }), this[0]);
    },
    reauthenticate: function reauthenticate(data) {
      if (typeof data.SecurityID !== 'undefined') {
        $(':input[name=SecurityID]').val(data.SecurityID);
      }

      if (typeof data.TempID !== 'undefined') {
        $('body').data('member-tempid', data.TempID);
      }
      this.close();
    }
  });

  $('form.loading,.cms-content.loading,.cms-content-fields.loading,.cms-content-view.loading').entwine({
    onmatch: function onmatch() {
      this.append('<div class="cms-content-loading-overlay ui-widget-overlay-light"></div><div class="cms-content-loading-spinner"></div>');
      this._super();
    },
    onunmatch: function onunmatch() {
      this.find('.cms-content-loading-overlay,.cms-content-loading-spinner').remove();
      this._super();
    }
  });

  $('.cms .cms-panel-link').entwine({
    onclick: function onclick(e) {
      if ($(this).hasClass('external-link')) {
        e.stopPropagation();

        return;
      }

      var href = this.attr('href'),
          url = href && !href.match(/^#/) ? href : this.data('href'),
          data = { pjax: this.data('pjaxTarget') };

      $('.cms-container').loadPanel(url, null, data);
      e.preventDefault();
    }
  });

  $('.cms .ss-ui-button-ajax').entwine({
    onclick: function onclick(e) {
      $(this).removeClass('ui-button-text-only');
      $(this).addClass('ss-ui-button-loading ui-button-text-icons');

      var loading = $(this).find(".ss-ui-loading-icon");

      if (loading.length < 1) {
        loading = $("<span></span>").addClass('ss-ui-loading-icon ui-button-icon-primary ui-icon');

        $(this).prepend(loading);
      }

      loading.show();

      var href = this.attr('href'),
          url = href ? href : this.data('href');

      jQuery.ajax({
        url: url,

        complete: function complete(xmlhttp, status) {
          var msg = xmlhttp.getResponseHeader('X-Status') ? xmlhttp.getResponseHeader('X-Status') : xmlhttp.responseText;

          try {
            if (typeof msg != "undefined" && msg !== null) eval(msg);
          } catch (e) {}

          loading.hide();

          $(".cms-container").refresh();

          $(this).removeClass('ss-ui-button-loading ui-button-text-icons');
          $(this).addClass('ui-button-text-only');
        },
        dataType: 'html'
      });
      e.preventDefault();
    }
  });

  $('.cms .ss-ui-dialog-link').entwine({
    UUID: null,
    onmatch: function onmatch() {
      this._super();
      this.setUUID(new Date().getTime());
    },
    onunmatch: function onunmatch() {
      this._super();
    },
    onclick: function onclick() {
      this._super();

      var self = this,
          id = 'ss-ui-dialog-' + this.getUUID();
      var dialog = $('#' + id);
      if (!dialog.length) {
        dialog = $('<div class="ss-ui-dialog" id="' + id + '" />');
        $('body').append(dialog);
      }

      var extraClass = this.data('popupclass') ? this.data('popupclass') : '';

      dialog.ssdialog({ iframeUrl: this.attr('href'), autoOpen: true, dialogExtraClass: extraClass });
      return false;
    }
  });

  $('.cms .field.date input.text').entwine({
    onmatch: function onmatch() {
      var holder = $(this).parents('.field.date:first'),
          config = holder.data();
      if (!config.showcalendar) {
        this._super();
        return;
      }

      config.showOn = 'button';
      if (config.locale && $.datepicker.regional[config.locale]) {
        config = $.extend(config, $.datepicker.regional[config.locale], {});
      }

      if (!this.prop('disabled') && !this.prop('readonly')) {
        $(this).datepicker(config);
      }

      this._super();
    },
    onunmatch: function onunmatch() {
      this._super();
    }
  });

  $('.cms .field.dropdown select, .cms .field select[multiple], .form__fieldgroup-item select.dropdown').entwine({
    onmatch: function onmatch() {
      if (this.is('.no-chosen')) {
        this._super();
        return;
      }

      if (!this.data('placeholder')) this.data('placeholder', ' ');

      this.removeClass('has-chosen').chosen("destroy");
      this.siblings('.chosen-container').remove();

      applyChosen(this);

      this._super();
    },
    onunmatch: function onunmatch() {
      this._super();
    }
  });

  $(".cms-panel-layout").entwine({
    redraw: function redraw() {
      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));
    }
  });

  $('.cms .grid-field:not([cms-loading-ignore-url-params])').entwine({
    showDetailView: function showDetailView(url) {
      var params = window.location.search.replace(/^\?/, '');
      if (params) url = $.path.addSearchParams(url, params);
      $('.cms-container').loadPanel(url);
    }
  });

  $('.cms-search-form').entwine({
    onsubmit: function onsubmit(e) {
      var nonEmptyInputs, url;

      nonEmptyInputs = this.find(':input:not(:submit)').filter(function () {
        var vals = $.grep($(this).fieldValue(), function (val) {
          return val;
        });
        return vals.length;
      });

      url = this.attr('action');

      if (nonEmptyInputs.length) {
        url = $.path.addSearchParams(url, nonEmptyInputs.serialize().replace('+', '%20'));
      }

      var container = this.closest('.cms-container');
      container.loadPanel(url, "", {}, true);

      return false;
    }
  });

  $(".cms-search-form button[type=reset], .cms-search-form input[type=reset]").entwine({
    onclick: function onclick(e) {
      e.preventDefault();

      var form = $(this).parents('form');

      form.clearForm();
      form.find(".dropdown select").prop('selectedIndex', 0).trigger("chosen:updated");
      form.submit();
    }
  });

  window._panelDeferredCache = {};
  $('.cms-panel-deferred').entwine({
    onadd: function onadd() {
      this._super();
      this.redraw();
    },
    onremove: function onremove() {
      if (window.debug) console.log('saving', this.data('url'), this);

      if (!this.data('deferredNoCache')) window._panelDeferredCache[this.data('url')] = this.html();
      this._super();
    },
    redraw: function redraw() {
      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));

      var self = this,
          url = this.data('url');
      if (!url) throw 'Elements of class .cms-panel-deferred need a "data-url" attribute';

      this._super();

      if (!this.data('deferredNoCache') && typeof window._panelDeferredCache[url] !== 'undefined') {
        this.html(window._panelDeferredCache[url]);
      } else {
        this.addClass('loading');
        $.ajax({
          url: url,
          complete: function complete() {
            self.removeClass('loading');
          },
          success: function success(data, status, xhr) {
            self.html(data);
          }
        });
      }
    }
  });

  $('.cms-tabset').entwine({
    onadd: function onadd() {
      this.redrawTabs();
      this._super();
    },
    onremove: function onremove() {
      if (this.data('tabs')) this.tabs('destroy');
      this._super();
    },
    redrawTabs: function redrawTabs() {
      this.rewriteHashlinks();

      var id = this.attr('id'),
          activeTab = this.find('ul:first .ui-tabs-active');

      if (!this.data('tabs')) this.tabs({
        active: activeTab.index() != -1 ? activeTab.index() : 0,
        beforeLoad: function beforeLoad(e, ui) {
          return false;
        },
        beforeActivate: function beforeActivate(e, ui) {
          var link = ui.oldTab.find('.cms-panel-link');

          if (link && link.length === 1) {
            return false;
          }
        },
        activate: function activate(e, ui) {
          var actions = $(this).closest('form').find('.btn-toolbar');
          if ($(ui.newTab).closest('li').hasClass('readonly')) {
            actions.fadeOut();
          } else {
            actions.show();
          }
        }
      });
      this.trigger('afterredrawtabs');
    },

    rewriteHashlinks: function rewriteHashlinks() {
      $(this).find('ul a').each(function () {
        if (!$(this).attr('href')) return;
        var matches = $(this).attr('href').match(/#.*/);
        if (!matches) return;
        $(this).attr('href', document.location.href.replace(/#.*/, '') + matches[0]);
      });
    }
  });

  $('#filters-button').entwine({
    onmatch: function onmatch() {
      this._super();

      this.data('collapsed', true);
      this.data('animating', false);
    },
    onunmatch: function onunmatch() {
      this._super();
    },
    showHide: function showHide() {
      var self = this,
          $filters = $('.cms-content-filters').first(),
          collapsed = this.data('collapsed');

      if (collapsed) {
        this.addClass('active');
        $filters.css('display', 'block');
      } else {
        this.removeClass('active');
        $filters.css('display', '');
      }
      self.data('collapsed', !collapsed);
    },
    onclick: function onclick() {
      this.showHide();
    }
  });
});

var statusMessage = function statusMessage(text, type) {
  text = jQuery('<div/>').text(text).html();
  jQuery.noticeAdd({ text: text, type: type, stayTime: 5000, inEffect: { left: '0', opacity: 'show' } });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _moment = __webpack_require__(178);

var _moment2 = _interopRequireDefault(_moment);

var _modernizr = __webpack_require__(177);

var _modernizr2 = _interopRequireDefault(_modernizr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(150);

_jquery2.default.entwine('ss', function ($) {
  $('input[type=date]').entwine({
    onadd: function onadd() {
      if (_modernizr2.default.inputtypes.date) {
        return;
      }

      if (this.prop('disabled') || this.prop('readonly') || this.hasClass('hasDatepicker')) {
        return;
      }

      var hiddenInput = $('<input/>', { type: 'hidden', name: this.attr('name'), value: this.val() });
      this.parent().append(hiddenInput);

      this.removeAttr('name');

      _moment2.default.locale(this.attr('lang'));
      var isoDate = this.val();
      var localDate = '';
      if (isoDate) {
        var dateObject = (0, _moment2.default)(isoDate);
        if (dateObject.isValid()) {
          localDate = dateObject.format('L');
        }
      }
      this.val(localDate);

      var placeholder = _i18n2.default.inject(_i18n2.default._t('Admin.FormatExample', 'Example: {format}'), { format: (0, _moment2.default)().endOf('month').format('L') });
      this.attr('placeholder', placeholder);

      this.updateValue();
    },
    onchange: function onchange() {
      this.updateValue();
    },
    updateValue: function updateValue() {
      var localDate = this.val();
      var isoDate = '';
      if (localDate) {
        var _arr = ['L', 'YYYY-MM-DD'];

        for (var _i = 0; _i < _arr.length; _i++) {
          var format = _arr[_i];
          var dateObject = (0, _moment2.default)(localDate, format);
          if (dateObject.isValid()) {
            isoDate = dateObject.format('YYYY-MM-DD');
            break;
          }
        }
      }
      this.parent().find('input[type=hidden]').val(isoDate);
    }
  });
});

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _TextField2 = __webpack_require__(411);

var _moment = __webpack_require__(178);

var _moment2 = _interopRequireDefault(_moment);

var _modernizr = __webpack_require__(177);

var _modernizr2 = _interopRequireDefault(_modernizr);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var localFormat = 'L';

var DateField = function (_TextField) {
  _inherits(DateField, _TextField);

  function DateField() {
    _classCallCheck(this, DateField);

    return _possibleConstructorReturn(this, (DateField.__proto__ || Object.getPrototypeOf(DateField)).apply(this, arguments));
  }

  _createClass(DateField, [{
    key: 'render',
    value: function render() {
      return _get(DateField.prototype.__proto__ || Object.getPrototypeOf(DateField.prototype), 'render', this).call(this);
    }
  }, {
    key: 'hasNativeSupport',
    value: function hasNativeSupport() {
      return _modernizr2.default.inputtypes.date;
    }
  }, {
    key: 'getInputProps',
    value: function getInputProps() {
      var placeholder = _i18n2.default.inject(_i18n2.default._t('Admin.FormatExample', 'Example: {format}'), { format: (0, _moment2.default)().endOf('month').format(localFormat) });
      var props = {};

      var val = this.props.value;

      if (!this.props.data.html5 || this.hasNativeSupport() && this.props.data.html5) {
        val = this.props.value;
      } else {
        val = this.getLocalisedValue();
      }

      Object.assign(props, _get(DateField.prototype.__proto__ || Object.getPrototypeOf(DateField.prototype), 'getInputProps', this).call(this), {
        type: this.props.data.html5 ? 'date' : 'text',

        defaultValue: val,
        placeholder: placeholder
      });

      delete props.value;

      return props;
    }
  }, {
    key: 'getLocalisedValue',
    value: function getLocalisedValue() {
      return this.convertToLocalised(this.props.value);
    }
  }, {
    key: 'isMultiline',
    value: function isMultiline() {
      return false;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var enteredValue = event.target.value;
      var isoValue = '';

      if (!this.props.data.html5 || this.hasNativeSupport() && this.props.data.html5) {
        isoValue = enteredValue;
      } else {
        isoValue = this.convertToIso(enteredValue);
      }

      if (typeof this.props.onChange === 'function') {
        this.triggerChange(isoValue);
      }
    }
  }, {
    key: 'triggerChange',
    value: function triggerChange(value) {
      this.props.onChange(value);
    }
  }, {
    key: 'convertToIso',
    value: function convertToIso(localDate) {
      _moment2.default.locale(this.props.lang);
      var isoDate = '';

      if (localDate) {
        var dateObject = (0, _moment2.default)(localDate, [localFormat, 'YYYY-MM-DD']);
        if (dateObject.isValid()) {
          isoDate = dateObject.format('YYYY-MM-DD');
        }
      }

      return isoDate;
    }
  }, {
    key: 'convertToLocalised',
    value: function convertToLocalised(isoDate) {
      _moment2.default.locale(this.props.lang);
      var localDate = '';
      if (isoDate) {
        var dateObject = (0, _moment2.default)(isoDate);
        if (dateObject.isValid()) {
          localDate = dateObject.format(localFormat);
        }
      }
      return localDate;
    }
  }]);

  return DateField;
}(_TextField2.Component);

DateField.propTypes = {
  lang: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.shape({
    html5: _react2.default.PropTypes.boolean
  })
};

DateField.defaultProps = {
  data: {}
};

exports.Component = DateField;
exports.default = (0, _FieldHolder2.default)(DateField);

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridFieldRow = function GridFieldRow(props) {
  var className = 'grid-field__row ' + props.className;
  return _react2.default.createElement(
    'tr',
    { tabIndex: 0, className: className },
    props.children
  );
};

exports.default = GridFieldRow;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _castStringToElement = __webpack_require__(85);

var _castStringToElement2 = _interopRequireDefault(_castStringToElement);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionField = function (_Component) {
  _inherits(OptionField, _Component);

  function OptionField(props) {
    _classCallCheck(this, OptionField);

    var _this = _possibleConstructorReturn(this, (OptionField.__proto__ || Object.getPrototypeOf(OptionField)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(OptionField, [{
    key: 'getInputProps',
    value: function getInputProps() {
      var classNames = [this.props.className, this.props.extraClass, 'form-check'];

      if (this.props.value) {
        classNames.push('checked');
      }

      if (this.props.readOnly || this.props.disabled) {
        classNames.push('disabled');

        if (this.props.disabled) {
          classNames.push('option-field--disabled');
        }
      }

      return {
        id: this.props.id,
        name: this.props.name,
        disabled: this.props.disabled || this.props.readOnly,
        readOnly: this.props.readOnly,
        className: classNames.join(' '),
        onChange: this.handleChange,
        checked: !!this.props.value,
        value: 1
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      if (this.props.readOnly || this.props.disabled) {
        event.preventDefault();
        return;
      }
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(event, {
          id: this.props.id,
          value: event.target.checked ? 1 : 0
        });
      } else if (typeof this.props.onClick === 'function') {
        this.props.onClick(event, {
          id: this.props.id,
          value: event.target.checked ? 1 : 0
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var labelText = this.props.leftTitle !== null ? this.props.leftTitle : this.props.title;

      var Option = null;

      switch (this.props.type) {
        case 'checkbox':
          Option = _reactBootstrapSs.Checkbox;
          break;
        case 'radio':
          Option = _reactBootstrapSs.Radio;
          break;
        default:
          throw new Error('Invalid OptionField type: ' + this.props.type);
      }

      var label = typeof labelText === 'string' ? { react: _react2.default.createElement(
          'span',
          null,
          labelText
        ) } : labelText;

      return (0, _castStringToElement2.default)(Option, label, this.getInputProps());
    }
  }]);

  return OptionField;
}(_react.Component);

OptionField.propTypes = {
  type: _react2.default.PropTypes.oneOf(['checkbox', 'radio']),
  leftTitle: _react2.default.PropTypes.any,
  title: _react2.default.PropTypes.any,
  extraClass: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
  readOnly: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool
};

OptionField.defaultProps = {
  extraClass: '',
  className: '',
  type: 'radio',
  leftTitle: null
};

exports.default = OptionField;

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var TreeDropdownFieldNode = function TreeDropdownFieldNode() {
  return null;
};

TreeDropdownFieldNode.propTypes = {
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  title: _react.PropTypes.string,
  titlePath: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  parentid: _react.PropTypes.number,
  count: _react.PropTypes.number,
  depth: _react.PropTypes.number,
  expanded: _react.PropTypes.bool,
  limited: _react.PropTypes.bool,
  marked: _react.PropTypes.bool,
  opened: _react.PropTypes.bool,
  children: _react.PropTypes.array
};

exports.default = TreeDropdownFieldNode;

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _MiddlewareRegistry = __webpack_require__(413);

var _MiddlewareRegistry2 = _interopRequireDefault(_MiddlewareRegistry);

var _redux = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var buildBaseContainer = function buildBaseContainer() {
  return {
    middlewareRegistries: {},

    services: {},

    factories: {},

    factoryCache: {},

    initialised: false,

    isProtected: function isProtected() {
      if (this.initialised) {
        throw new Error('Cannot mutate DI container after it has been initialised');
      }
    },
    get: function get(key, context) {
      if (!this.initialised) {
        throw new Error('\n      Injector.get(): Attempted to access DI layer before it was initialised.\n      Did you forget to invoke Injector.load()?');
      }
      var factory = this.factories[key];
      if (!factory) {
        throw new Error('Injector.get(): Component ' + key + ' does not exist');
      }

      return factory(context);
    },
    customise: function customise(meta, key, factory) {
      this.isProtected();

      var _key$split = key.split('.'),
          _key$split2 = _toArray(_key$split),
          serviceName = _key$split2[0],
          context = _key$split2.slice(1);

      var registry = this.middlewareRegistries[serviceName];
      if (!registry) {
        registry = new _MiddlewareRegistry2.default();
        this.middlewareRegistries = _extends({}, this.middlewareRegistries, _defineProperty({}, serviceName, registry));
      }
      registry.add(meta, factory, context);
    },
    load: function load() {
      var _this = this;

      this.isProtected();
      this.factories = Object.entries(this.services).reduce(function (factories, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            service = _ref2[1];

        var middleware = _this.middlewareRegistries[key];
        if (middleware) {
          middleware.sort();

          return _extends({}, factories, _defineProperty({}, key, function () {
            var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _MiddlewareRegistry.GLOBAL_CONTEXT;

            var cacheKey = key + '__' + context;
            if (!_this.factoryCache[cacheKey]) {
              var matches = middleware.getMatchesForContext(context);
              _this.factoryCache[cacheKey] = _this.getFactory(key, matches);
            }

            return _this.factoryCache[cacheKey];
          }));
        }
        return _extends({}, factories, _defineProperty({}, key, function () {
          return service;
        }));
      }, {});

      this.initialised = true;
    },
    register: function register(key, value) {
      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          force = _ref3.force;

      this.isProtected();

      if (this.services[key] && force !== true) {
        throw new Error('\n      Tried to register service ' + key + ' more than once. This practice is discouraged. Consider\n      using Injector.update() to enhance the service rather than override it completely.\n      Otherwise, invoke the register() function with { force: true } as the third argument.\n     ');
      }
      this.services = _extends({}, this.services, _defineProperty({}, key, value));
    },
    registerMany: function registerMany(map) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          force = _ref4.force;

      this.isProtected();

      var mapKeys = Object.keys(map);
      var existing = Object.keys(this.services).filter(function (service) {
        return mapKeys.includes(service);
      });
      if (existing.length && force !== true) {
        var list = existing.join(', ');

        throw new Error('\n      Tried to register services (' + list + ') more than once. This practice is discouraged. Consider\n      using Injector.update() to enhance the service rather than override it completely.\n      Otherwise, invoke the register() function with { force: true } as the third argument.\n     ');
      }
      this.services = _extends({}, this.services, map);
    },
    transform: function transform(name, callback) {
      var priorities = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.isProtected();

      callback(this.createTransformer(name, priorities));
    },
    createTransformer: function createTransformer(name, priorities) {
      var _this2 = this;

      return function (key, wrapper) {
        _this2.customise(_extends({ name: name }, priorities), key, wrapper);
      };
    },
    getFactory: function getFactory(key, middlewareMatches) {
      var service = this.services[key];
      var middlewares = middlewareMatches.map(function (m) {
        return m.factory;
      });
      return _redux.compose.apply(undefined, _toConsumableArray(middlewares))(service);
    }
  };
};

exports.default = buildBaseContainer;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Container = __webpack_require__(186);

var _Container2 = _interopRequireDefault(_Container);

var _injectorContext = __webpack_require__(154);

var _injectorContext2 = _interopRequireDefault(_injectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function provideInjector(Injectable) {
  var injectorContainer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Container2.default;

  var InjectorProvider = function (_Component) {
    _inherits(InjectorProvider, _Component);

    function InjectorProvider() {
      _classCallCheck(this, InjectorProvider);

      return _possibleConstructorReturn(this, (InjectorProvider.__proto__ || Object.getPrototypeOf(InjectorProvider)).apply(this, arguments));
    }

    _createClass(InjectorProvider, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var component = injectorContainer.component,
            form = injectorContainer.form;
        var get = component.get;


        return {
          injector: {
            get: get.bind(component),
            validate: form.getValidation.bind(form)
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Injectable, this.props);
      }
    }]);

    return InjectorProvider;
  }(_react.Component);

  InjectorProvider.childContextTypes = _injectorContext2.default;

  return InjectorProvider;
}

exports.default = provideInjector;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _injectorContext = __webpack_require__(154);

var _injectorContext2 = _interopRequireDefault(_injectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withInjector = function withInjector(Component) {
  Component.contextTypes = _extends({}, Component.contextTypes, _injectorContext2.default);

  Component.displayName = 'withInjector(\n    ' + (Component.displayName || Component.name || 'Component') + '\n  )';

  return Component;
};

exports.default = withInjector;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = ReactBootstrap;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = FormAlert;

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = IsomorphicFetch;

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = SchemaActions;

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = getFormState;

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = qs;

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(151);

_jquery2.default.widget("ssui.ssdialog", _jquery2.default.ui.dialog, {
  options: {
    iframeUrl: '',
    reloadOnOpen: true,
    dialogExtraClass: '',

    modal: true,
    bgiframe: true,
    autoOpen: false,
    autoPosition: true,
    minWidth: 500,
    maxWidth: 800,
    minHeight: 300,
    maxHeight: 700,
    widthRatio: 0.8,
    heightRatio: 0.8,
    resizable: false
  },
  _create: function _create() {
    _jquery2.default.ui.dialog.prototype._create.call(this);

    var self = this;

    var iframe = (0, _jquery2.default)('<iframe marginWidth="0" marginHeight="0" frameBorder="0" scrolling="auto"></iframe>');
    iframe.bind('load', function (e) {
      if ((0, _jquery2.default)(this).attr('src') == 'about:blank') return;

      iframe.addClass('loaded').show();
      self._resizeIframe();
      self.uiDialog.removeClass('loading');
    }).hide();

    if (this.options.dialogExtraClass) this.uiDialog.addClass(this.options.dialogExtraClass);
    this.element.append(iframe);

    if (this.options.iframeUrl) this.element.css('overflow', 'hidden');
  },
  open: function open() {
    _jquery2.default.ui.dialog.prototype.open.call(this);

    var self = this,
        iframe = this.element.children('iframe');

    if (this.options.iframeUrl && (!iframe.hasClass('loaded') || this.options.reloadOnOpen)) {
      iframe.hide();
      iframe.attr('src', this.options.iframeUrl);
      this.uiDialog.addClass('loading');
    }

    (0, _jquery2.default)(window).bind('resize.ssdialog', function () {
      self._resizeIframe();
    });
  },
  close: function close() {
    _jquery2.default.ui.dialog.prototype.close.call(this);

    this.uiDialog.unbind('resize.ssdialog');
    (0, _jquery2.default)(window).unbind('resize.ssdialog');
  },
  _resizeIframe: function _resizeIframe() {
    var opts = {},
        newWidth,
        newHeight,
        iframe = this.element.children('iframe');;
    if (this.options.widthRatio) {
      newWidth = (0, _jquery2.default)(window).width() * this.options.widthRatio;
      if (this.options.minWidth && newWidth < this.options.minWidth) {
        opts.width = this.options.minWidth;
      } else if (this.options.maxWidth && newWidth > this.options.maxWidth) {
        opts.width = this.options.maxWidth;
      } else {
        opts.width = newWidth;
      }
    }
    if (this.options.heightRatio) {
      newHeight = (0, _jquery2.default)(window).height() * this.options.heightRatio;
      if (this.options.minHeight && newHeight < this.options.minHeight) {
        opts.height = this.options.minHeight;
      } else if (this.options.maxHeight && newHeight > this.options.maxHeight) {
        opts.height = this.options.maxHeight;
      } else {
        opts.height = newHeight;
      }
    }

    if (!jQuery.isEmptyObject(opts)) {
      this._setOptions(opts);

      iframe.attr('width', opts.width - parseFloat(this.element.css('paddingLeft')) - parseFloat(this.element.css('paddingRight')));
      iframe.attr('height', opts.height - parseFloat(this.element.css('paddingTop')) - parseFloat(this.element.css('paddingBottom')));

      if (this.options.autoPosition) {
        this._setOption("position", this.options.position);
      }
    }
  }
});

_jquery2.default.widget("ssui.titlebar", {
  _create: function _create() {
    this.originalTitle = this.element.attr('title');

    var self = this;
    var options = this.options;

    var title = options.title || this.originalTitle || '&nbsp;';
    var titleId = _jquery2.default.ui.dialog.getTitleId(this.element);

    this.element.parent().addClass('ui-dialog');

    var uiDialogTitlebar = this.element.addClass('ui-dialog-titlebar ' + 'ui-widget-header ' + 'ui-corner-all ' + 'ui-helper-clearfix');

    if (options.closeButton) {
      var uiDialogTitlebarClose = (0, _jquery2.default)('<a href="#"/>').addClass('ui-dialog-titlebar-close ' + 'ui-corner-all').attr('role', 'button').hover(function () {
        uiDialogTitlebarClose.addClass('ui-state-hover');
      }, function () {
        uiDialogTitlebarClose.removeClass('ui-state-hover');
      }).focus(function () {
        uiDialogTitlebarClose.addClass('ui-state-focus');
      }).blur(function () {
        uiDialogTitlebarClose.removeClass('ui-state-focus');
      }).mousedown(function (ev) {
        ev.stopPropagation();
      }).appendTo(uiDialogTitlebar);

      var uiDialogTitlebarCloseText = (this.uiDialogTitlebarCloseText = (0, _jquery2.default)('<span/>')).addClass('ui-icon ' + 'ui-icon-closethick').text(options.closeText).appendTo(uiDialogTitlebarClose);
    }

    var uiDialogTitle = (0, _jquery2.default)('<span/>').addClass('ui-dialog-title').attr('id', titleId).html(title).prependTo(uiDialogTitlebar);

    uiDialogTitlebar.find("*").add(uiDialogTitlebar).disableSelection();
  },

  destroy: function destroy() {
    this.element.unbind('.dialog').removeData('dialog').removeClass('ui-dialog-content ui-widget-content').hide().appendTo('body');

    this.originalTitle && this.element.attr('title', this.originalTitle);
  }
});

_jquery2.default.extend(_jquery2.default.ssui.titlebar, {
  version: "0.0.1",
  options: {
    title: '',
    closeButton: false,
    closeText: 'close'
  },

  uuid: 0,

  getTitleId: function getTitleId($el) {
    return 'ui-dialog-title-' + ($el.attr('id') || ++this.uuid);
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _castStringToElement = __webpack_require__(85);

var _castStringToElement2 = _interopRequireDefault(_castStringToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompositeField = function (_Component) {
  _inherits(CompositeField, _Component);

  function CompositeField() {
    _classCallCheck(this, CompositeField);

    return _possibleConstructorReturn(this, (CompositeField.__proto__ || Object.getPrototypeOf(CompositeField)).apply(this, arguments));
  }

  _createClass(CompositeField, [{
    key: 'getLegend',
    value: function getLegend() {
      if (this.props.data.tag === 'fieldset' && this.props.data.legend) {
        return (0, _castStringToElement2.default)('legend', this.props.data.legend);
      }
      return null;
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      return this.props.className + ' ' + this.props.extraClass;
    }
  }, {
    key: 'render',
    value: function render() {
      var legend = this.getLegend();
      var Tag = this.props.data.tag || 'div';
      var className = this.getClassName();

      return _react2.default.createElement(
        Tag,
        { className: className },
        legend,
        this.props.children
      );
    }
  }]);

  return CompositeField;
}(_react.Component);

CompositeField.propTypes = {
  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
    tag: _react2.default.PropTypes.string,
    legend: _react2.default.PropTypes.string
  })]),
  extraClass: _react2.default.PropTypes.string
};

CompositeField.defaultProps = {
  className: '',
  extraClass: ''
};

exports.default = CompositeField;

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _FormAlert = __webpack_require__(395);

var _FormAlert2 = _interopRequireDefault(_FormAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundComponent = function NotFoundComponent(_ref) {
  var itemName = _ref.itemName,
      name = _ref.name,
      value = _ref.value;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(itemName, 'not-found-component') },
    _react2.default.createElement(_FormAlert2.default, { value: _i18n2.default.inject(_i18n2.default._t('Admin.NOT_FOUND_COMPONENT', 'The component here ({component}) failed to load, there is a chance that you may lose data when saving due to this.'), { component: itemName })
    }),
    name && typeof value === 'string' ? _react2.default.createElement('input', { type: 'hidden', name: name, value: value }) : null
  );
};

NotFoundComponent.propTypes = {
  itemName: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string,
  value: _react.PropTypes.any
};

exports.default = NotFoundComponent;

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopoverField = function (_Component) {
  _inherits(PopoverField, _Component);

  function PopoverField(props) {
    _classCallCheck(this, PopoverField);

    var _this = _possibleConstructorReturn(this, (PopoverField.__proto__ || Object.getPrototypeOf(PopoverField)).call(this, props));

    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);

    _this.state = {
      showing: false
    };
    return _this;
  }

  _createClass(PopoverField, [{
    key: 'getPlacement',
    value: function getPlacement() {
      var placement = this.props.data.placement;
      return placement || 'bottom';
    }
  }, {
    key: 'handleShow',
    value: function handleShow() {
      this.setState({
        showing: true
      });
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      this.setState({
        showing: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var placement = this.getPlacement();
      var overlay = _react2.default.createElement(
        _reactBootstrapSs.Popover,
        {
          id: this.props.id + '_Popover',
          className: 'fade in bs-popover-' + placement + ' ' + this.props.popoverClassName,
          title: this.props.data.popoverTitle
        },
        this.props.children
      );

      var buttonClasses = ['btn', 'btn-secondary', this.props.className];
      if (this.state.showing) {
        buttonClasses.push('btn--no-focus');
      }

      if (!this.props.title) {
        buttonClasses.push('font-icon-dot-3 btn--no-text');
        buttonClasses.push('btn--icon-' + this.props.buttonSize);
      }

      var buttonProps = {
        id: this.props.id,
        type: 'button',
        className: buttonClasses.join(' ')
      };
      if (this.props.data.buttonTooltip) {
        buttonProps.title = this.props.data.buttonTooltip;
      }

      return _react2.default.createElement(
        _reactBootstrapSs.OverlayTrigger,
        {
          rootClose: true,
          trigger: 'click',
          placement: placement,
          overlay: overlay,
          onEnter: this.handleShow,
          onExited: this.handleHide,
          container: this.props.container
        },
        _react2.default.createElement(
          'button',
          buttonProps,
          this.props.title
        )
      );
    }
  }]);

  return PopoverField;
}(_react.Component);

PopoverField.propTypes = {
  id: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.any,
  container: _react2.default.PropTypes.any,
  className: _react2.default.PropTypes.string,
  popoverClassName: _react2.default.PropTypes.string,
  buttonSize: _react2.default.PropTypes.oneOf(['sm', 'md', 'large', 'xl']),
  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
    popoverTitle: _react2.default.PropTypes.string,
    buttonTooltip: _react2.default.PropTypes.string,
    placement: _react2.default.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
  })])
};

PopoverField.defaultProps = {
  data: {},
  className: '',
  popoverClassName: '',
  buttonSize: 'xl'
};

exports.default = PopoverField;

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextField = function (_Component) {
  _inherits(TextField, _Component);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(TextField, [{
    key: 'getInputProps',
    value: function getInputProps() {
      var props = {
        bsClass: this.props.bsClass,
        className: this.props.className + ' ' + this.props.extraClass,
        id: this.props.id,
        name: this.props.name,
        disabled: this.props.disabled,
        readOnly: this.props.readOnly,
        value: this.props.value,
        placeholder: this.props.placeholder,
        autoFocus: this.props.autoFocus,
        maxLength: this.props.data && this.props.data.maxlength
      };

      if (this.props.attributes && !Array.isArray(this.props.attributes)) {
        Object.assign(props, this.props.attributes);
      }

      if (this.isMultiline()) {
        Object.assign(props, {
          componentClass: 'textarea',
          rows: this.props.data.rows,
          cols: this.props.data.columns
        });
      } else {
        Object.assign(props, {
          componentClass: 'input',
          type: this.props.type ? this.props.type : null
        });
      }

      if (!this.props.readOnly) {
        Object.assign(props, {
          onChange: this.handleChange
        });
      }

      return props;
    }
  }, {
    key: 'isMultiline',
    value: function isMultiline() {
      return this.props.data && this.props.data.rows > 1;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(event, { id: this.props.id, value: event.target.value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactBootstrapSs.FormControl, this.getInputProps());
    }
  }]);

  return TextField;
}(_react.Component);

TextField.propTypes = {
  extraClass: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  onChange: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  readOnly: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string,
  autoFocus: _react2.default.PropTypes.bool,
  attributes: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array])
};

TextField.defaultProps = {
  value: '',
  extraClass: '',
  className: '',
  type: 'text',
  attributes: {}
};

exports.Component = TextField;
exports.default = (0, _FieldHolder2.default)(TextField);

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createErrorBlock = exports.createErrorHtml = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createErrorHtml = function createErrorHtml(errors) {
  return {
    type: 'error',
    value: {
      react: errors.map(function (error, index) {
        return _react2.default.createElement(
          'span',
          { key: index, className: 'form__validation-message' },
          error
        );
      })
    }
  };
};

var createErrorBlock = function createErrorBlock(errors) {
  return Object.entries(errors).reduce(function (prev, curr) {
    var _curr = _slicedToArray(curr, 2),
        fieldName = _curr[0],
        messages = _curr[1];

    if (!messages || !messages.length) {
      return prev;
    }
    var messageList = Array.isArray(messages) ? messages : [messages];
    return _extends({}, prev, _defineProperty({}, fieldName, createErrorHtml(messageList)));
  }, {});
};

exports.default = createErrorBlock;
exports.createErrorHtml = createErrorHtml;
exports.createErrorBlock = createErrorBlock;

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GLOBAL_CONTEXT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toposort = __webpack_require__(1881);

var _toposort2 = _interopRequireDefault(_toposort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BEFORE = 'before';

var AFTER = 'after';

var GRAPH_HEAD = '__HEAD__';

var GRAPH_TAIL = '__TAIL__';

var PRIORITIES = [BEFORE, AFTER];

var GLOBAL_CONTEXT = '__GLOBAL__';

var WILDCARD = '*';

var validateMeta = function validateMeta(meta) {
  PRIORITIES.forEach(function (k) {
    if (typeof meta[k] !== 'undefined' && typeof meta[k] !== 'string' && !Array.isArray(meta[k])) {
      throw new Error('Middleware key ' + k + ' must be a string or array');
    }
  });
};

var checkWildcard = function checkWildcard(middleware) {
  var wildcard = null;
  PRIORITIES.forEach(function (PRIORITY) {
    if (middleware[PRIORITY].includes(WILDCARD)) {
      if (middleware[PRIORITY].length > 1) {
        throw new Error('\n          Key ' + PRIORITY + ' on ' + middleware.name + ' should only specify one key \n          if using the "' + WILDCARD + '" wildcard\n        ');
      } else if (wildcard) {
        throw new Error('\n          Cannot specify a ' + PRIORITY + ' rule on ' + middleware.name + ' if a wildcard \n          has been specified\n        ');
      } else {
        wildcard = PRIORITY;
      }
    }
  });

  return wildcard;
};

var MiddlewareRegistry = function () {
  function MiddlewareRegistry() {
    _classCallCheck(this, MiddlewareRegistry);

    this._middlewares = [];
    this._contextCache = {};
  }

  _createClass(MiddlewareRegistry, [{
    key: 'sort',
    value: function sort() {
      var _this = this;

      var GRAPH_INIT = [GRAPH_HEAD, GRAPH_TAIL];
      var graph = [GRAPH_INIT];
      var sortedMiddlewares = [];
      this._middlewares.forEach(function (middleware) {
        var name = middleware.name;

        var wildcard = checkWildcard(middleware);
        if (wildcard === AFTER) {
          graph.push([GRAPH_TAIL, name]);
        } else if (wildcard === BEFORE) {
          graph.push([name, GRAPH_HEAD]);
        } else {
          graph.push([name, GRAPH_TAIL]);
          graph.push([GRAPH_HEAD, name]);

          middleware[BEFORE].forEach(function (beforeEntry) {
            graph.push([name, beforeEntry]);
          });
          middleware[AFTER].forEach(function (afterEntry) {
            graph.push([afterEntry, name]);
          });
        }
      });

      (0, _toposort2.default)(graph).filter(function (item) {
        return !GRAPH_INIT.includes(item);
      }).forEach(function (name) {
        sortedMiddlewares = sortedMiddlewares.concat(_this._middlewares.filter(function (m) {
          return m.name === name;
        }));
      });

      this._middlewares = sortedMiddlewares;

      return this;
    }
  }, {
    key: 'add',
    value: function add(meta, factory, contextList) {
      validateMeta(meta);

      this._contextCache = {};
      var context = contextList;
      if (!context || !context.length) {
        context = [GLOBAL_CONTEXT];
      } else if (!Array.isArray(context)) {
        context = [context];
      }

      var normalised = _extends({}, meta, { factory: factory, context: context });

      PRIORITIES.forEach(function (k) {
        if (!Array.isArray(meta[k])) {
          normalised[k] = meta[k] ? [meta[k]] : [];
        } else {
          normalised[k] = meta[k];
        }
      });

      if (PRIORITIES.every(function (p) {
        return !normalised[p].length;
      })) {
        normalised[AFTER] = [GRAPH_HEAD];
        normalised[BEFORE] = [GRAPH_TAIL];
      }

      this._middlewares.push(normalised);

      return this;
    }
  }, {
    key: 'getMatchesForContext',
    value: function getMatchesForContext() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : GLOBAL_CONTEXT;

      if (!this._contextCache[context]) {
        var requestedContext = context.split('.');
        this._contextCache[context] = this._middlewares.filter(function (middleware) {
          return middleware.context[0] === GLOBAL_CONTEXT || middleware.context.every(function (part, index) {
            return part === WILDCARD || requestedContext[index] === part;
          });
        });
      }
      return this._contextCache[context];
    }
  }]);

  return MiddlewareRegistry;
}();

exports.GLOBAL_CONTEXT = GLOBAL_CONTEXT;
exports.default = MiddlewareRegistry;

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _injectorContext = __webpack_require__(154);

var _injectorContext2 = _interopRequireDefault(_injectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultContext = function defaultContext(props, injectorContext) {
  return injectorContext;
};

var inject = function inject(dependencies, mapDependenciesToProps) {
  var getContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultContext;
  return function (InjectingComponent) {
    if (dependencies && !Array.isArray(dependencies)) {
      throw new Error('\n      withInjector() passed an argument for dependencies that is ' + (typeof deps === 'undefined' ? 'undefined' : _typeof(deps)) + '. \n      Must be an array of named dependencies.\n    ');
    }

    if (mapDependenciesToProps && typeof mapDependenciesToProps !== 'function') {
      throw new Error('\n      Second parameter of inject() [mapDependenciesToProps] must be a function, taking the resolved\n      dependencies as enumerated arguments, and returning a map of prop names to dependencies.\n    ');
    }

    if (typeof getContext !== 'function') {
      throw new Error('\n      Third parameter of inject() [getContext] must be a function, taking the component\'s props\n      and current inject context as parameters, and returning a string representing the Injector\n      context to use throughout the component.\n    ');
    }

    var Injector = function (_Component) {
      _inherits(Injector, _Component);

      function Injector(props, context) {
        _classCallCheck(this, Injector);

        var _this = _possibleConstructorReturn(this, (Injector.__proto__ || Object.getPrototypeOf(Injector)).call(this, props, context));

        _this.state = {
          context: getContext(props, context.injector.context)
        };
        return _this;
      }

      _createClass(Injector, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            injector: _extends({}, this.context.injector, {
              context: this.state.context
            })
          };
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
          var newContext = getContext(nextProps, nextContext.injector.context);

          if (newContext !== this.state.context) {
            this.setState({
              context: newContext
            });
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var props = {};
          if (dependencies) {
            var get = this.context.injector.get;

            var resolved = dependencies.map(function (dep) {
              return get(dep, _this2.state.context);
            });

            if (mapDependenciesToProps) {
              props = mapDependenciesToProps.apply(undefined, _toConsumableArray(resolved));
            } else {
              dependencies.forEach(function (dep, index) {
                props[dep] = resolved[index];
              });
            }

            if (!props || (typeof props === 'undefined' ? 'undefined' : _typeof(props)) !== 'object') {
              throw new Error('\n            mapDepedenciesToProps parameter passed to inject()\n            should return an object that maps prop names to dependencies\n          ');
            }
          }
          var newProps = _extends({}, props, this.props);
          return _react2.default.createElement(InjectingComponent, newProps);
        }
      }]);

      return Injector;
    }(_react.Component);

    Injector.contextTypes = _injectorContext2.default;

    Injector.childContextTypes = _injectorContext2.default;

    return Injector;
  };
};

exports.default = inject;

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(780);

var _provideInjector = __webpack_require__(260);

var _provideInjector2 = _interopRequireDefault(_provideInjector);

var _withInjector = __webpack_require__(261);

var _withInjector2 = _interopRequireDefault(_withInjector);

var _Container = __webpack_require__(186);

var _Container2 = _interopRequireDefault(_Container);

var _NotFoundComponent = __webpack_require__(409);

var _NotFoundComponent2 = _interopRequireDefault(_NotFoundComponent);

var _injectorContext = __webpack_require__(154);

var _injectorContext2 = _interopRequireDefault(_injectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var loadComponent = function loadComponent(targetName) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var overrideInjector = arguments[2];

  var LegacyLoader = function (_Component) {
    _inherits(LegacyLoader, _Component);

    function LegacyLoader(props) {
      _classCallCheck(this, LegacyLoader);

      var _this = _possibleConstructorReturn(this, (LegacyLoader.__proto__ || Object.getPrototypeOf(LegacyLoader)).call(this, props));

      _this.state = {
        target: null,
        error: false
      };
      return _this;
    }

    _createClass(LegacyLoader, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var injectorContext = context && context.context;
        if (!injectorContext) {
          return this.context;
        }
        return {
          injector: _extends({}, this.context.injector, {
            context: injectorContext
          })
        };
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        _Container2.default.ready(function () {
          if (typeof targetName === 'string') {
            var error = true;
            var target = null;
            try {
              target = _this2.context.injector.get(targetName, context && context.context);
              error = false;
            } catch (e) {
              _this2.setState({ target: target, error: error });

              throw e;
            }

            _this2.setState({ target: target, error: error });
            return;
          }

          _this2.setState({ target: targetName });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var Target = this.state.target;
        if (this.state.error) {
          var NotFound = _NotFoundComponent2.default;
          try {
            NotFound = this.context.injector.get('NotFoundComponent');
          } catch (e) {}
          return _react2.default.createElement(NotFound, _extends({}, this.props, { itemName: targetName }));
        }

        if (Target) {
          if (context) {
            var fullContext = _extends({}, window.ss, context);
            var store = fullContext.store,
                client = fullContext.apolloClient;

            return _react2.default.createElement(
              _reactApollo.ApolloProvider,
              { store: store, client: client },
              _react2.default.createElement(Target, this.props)
            );
          }
          return _react2.default.createElement(Target, this.props);
        }
        return null;
      }
    }]);

    return LegacyLoader;
  }(_react.Component);

  LegacyLoader.contextTypes = _injectorContext2.default;

  LegacyLoader.childContextTypes = _injectorContext2.default;

  var contextInjector = overrideInjector || _provideInjector2.default;

  return contextInjector((0, _withInjector2.default)(LegacyLoader));
};

exports.default = loadComponent;

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _injectorContext = __webpack_require__(154);

var _injectorContext2 = _interopRequireDefault(_injectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var provideContext = function provideContext(context) {
  return function (ContextualComponent) {
    var ContextProvider = function (_Component) {
      _inherits(ContextProvider, _Component);

      function ContextProvider() {
        _classCallCheck(this, ContextProvider);

        return _possibleConstructorReturn(this, (ContextProvider.__proto__ || Object.getPrototypeOf(ContextProvider)).apply(this, arguments));
      }

      _createClass(ContextProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            injector: _extends({}, this.context.injector, {
              context: context
            })
          };
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(ContextualComponent, this.props);
        }
      }]);

      return ContextProvider;
    }(_react.Component);

    ContextProvider.contextTypes = _injectorContext2.default;

    ContextProvider.childContextTypes = _injectorContext2.default;

    return ContextProvider;
  };
};

exports.default = provideContext;

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SET_BREADCRUMBS: 'SET_BREADCRUMBS'
};

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SET_CONFIG: 'SET_CONFIG'
};

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  TOGGLE_MENU: 'TOGGLE_MENU',
  OPEN_MENU: 'OPEN_MENU',
  CLOSE_MENU: 'CLOSE_MENU'
};

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleMobileMenu = toggleMobileMenu;
exports.openMobileMenu = openMobileMenu;
exports.closeMobileMenu = closeMobileMenu;

var _MobileMenuActionTypes = __webpack_require__(419);

var _MobileMenuActionTypes2 = _interopRequireDefault(_MobileMenuActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toggleMobileMenu() {
  return {
    type: _MobileMenuActionTypes2.default.TOGGLE_MENU,
    payload: null
  };
}

function openMobileMenu() {
  return {
    type: _MobileMenuActionTypes2.default.OPEN_MENU,
    payload: null
  };
}

function closeMobileMenu() {
  return {
    type: _MobileMenuActionTypes2.default.CLOSE_MENU,
    payload: null
  };
}

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  FETCH_RECORDS_REQUEST: 'FETCH_RECORDS_REQUEST',
  FETCH_RECORDS_FAILURE: 'FETCH_RECORDS_FAILURE',
  FETCH_RECORDS_SUCCESS: 'FETCH_RECORDS_SUCCESS',
  FETCH_RECORD_REQUEST: 'FETCH_RECORD_REQUEST',
  FETCH_RECORD_FAILURE: 'FETCH_RECORD_FAILURE',
  FETCH_RECORD_SUCCESS: 'FETCH_RECORD_SUCCESS',
  DELETE_RECORD_REQUEST: 'DELETE_RECORD_REQUEST',
  DELETE_RECORD_FAILURE: 'DELETE_RECORD_FAILURE',
  DELETE_RECORD_SUCCESS: 'DELETE_RECORD_SUCCESS'
};

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION_TYPES = {
  SET_SCHEMA: 'SET_SCHEMA',
  SET_SCHEMA_STATE_OVERRIDES: 'SET_SCHEMA_STATE_OVERRIDES',
  SET_SCHEMA_LOADING: 'SET_SCHEMA_LOADING'
};

exports.default = ACTION_TYPES;

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  TREEFIELD_SET_VISIBLE: 'TREEDROPDOWNFIELD_SET_VISIBLE',
  TREEFIELD_UPDATED_TREE: 'TREEDROPDOWNFIELD_UPDATED_TREE',
  TREEFIELD_UPDATING_TREE: 'TREEDROPDOWNFIELD_UPDATING_TREE',
  TREEFIELD_UPDATE_FAILED: 'TREEFIELD_UPDATE_FAILED',
  TREEFIELD_SET_SEARCH: 'TREEFIELD_SET_SEARCH',
  TREEFIELD_ADD_SELECTED_VALUES: 'TREEFIELD_ADD_SELECTED_VALUES'
};

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  ADD_FORM_CHANGED: 'ADD_FORM_CHANGED',
  REMOVE_FORM_CHANGED: 'REMOVE_FORM_CHANGED'
};

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = FieldHolder;

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = Backend;

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = Config;

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = FormBuilderModal;

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = ReactApollo;

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = ReactRouterRedux;

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = TreeDropdownField;

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BootRoutes = __webpack_require__(924);

var _BootRoutes2 = _interopRequireDefault(_BootRoutes);

var _Injector = __webpack_require__(39);

var _Injector2 = _interopRequireDefault(_Injector);

var _redux = __webpack_require__(41);

var _reduxThunk = __webpack_require__(1945);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _Config = __webpack_require__(778);

var _Config2 = _interopRequireDefault(_Config);

var _buildApolloClient = __webpack_require__(927);

var _buildApolloClient2 = _interopRequireDefault(_buildApolloClient);

var _ConfigActions = __webpack_require__(980);

var _registerComponents = __webpack_require__(928);

var _registerComponents2 = _interopRequireDefault(_registerComponents);

var _registerReducers = __webpack_require__(929);

var _registerReducers2 = _interopRequireDefault(_registerReducers);

var _applyDevtools = __webpack_require__(925);

var _applyDevtools2 = _interopRequireDefault(_applyDevtools);

var _applyTransforms = __webpack_require__(926);

var _applyTransforms2 = _interopRequireDefault(_applyTransforms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.ss = window.ss || {};

function appBoot() {
  var baseUrl = _Config2.default.get('absoluteBaseUrl');
  var apolloClient = (0, _buildApolloClient2.default)(baseUrl);
  var apolloReducer = apolloClient.reducer();

  (0, _registerComponents2.default)();
  (0, _registerReducers2.default)({
    apollo: apolloReducer
  });
  var middleware = [_reduxThunk2.default, apolloClient.middleware()];
  var debugging = _Config2.default.get('debugging');
  var runMiddleware = _redux.applyMiddleware.apply(undefined, middleware);

  if (debugging) {
    runMiddleware = (0, _applyDevtools2.default)(runMiddleware);
  }

  var createStoreWithMiddleware = runMiddleware(_redux.createStore);

  window.ss.apolloClient = apolloClient;

  var routes = new _BootRoutes2.default(null, apolloClient);

  (0, _applyTransforms2.default)();

  _Injector2.default.ready(function () {
    var rootReducer = (0, _redux.combineReducers)(_Injector2.default.reducer.getAll());
    var store = createStoreWithMiddleware(rootReducer, {});

    store.dispatch((0, _ConfigActions.setConfig)(_Config2.default.getAll()));
    _Injector2.default.reducer.setStore(store);

    window.ss.store = store;

    routes.setStore(store);
    routes.start(window.location.pathname);

    if (window.jQuery) {
      window.jQuery('body').addClass('js-react-boot').addClass('js-injector-boot');
    }
  });

  window.setTimeout(function () {
    return _Injector2.default.load();
  }, 0);
}
window.onload = appBoot;

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var i18n = function () {
	function i18n() {
		_classCallCheck(this, i18n);

		this.defaultLocale = 'en_US';
		this.currentLocale = this.detectLocale();
		this.lang = {};
	}

	_createClass(i18n, [{
		key: 'setLocale',
		value: function setLocale(locale) {
			this.currentLocale = locale;
		}
	}, {
		key: 'getLocale',
		value: function getLocale() {
			return this.currentLocale !== null ? this.currentLocale : this.defaultLocale;
		}
	}, {
		key: '_t',
		value: function _t(entity, fallbackString, priority, context) {
			var fallback = fallbackString || '';

			if (!this.lang) {
				return fallback;
			}
			var locale = this.getLocale();
			var search = [locale, locale.replace(/_[\w]+/i, ''), this.defaultLocale, this.defaultLocale.replace(/_[\w]+/i, '')];

			for (var i = 0; i < search.length; i++) {
				var lang = search[i];
				if (this.lang[lang] && this.lang[lang][entity]) {
					return this.lang[lang][entity];
				}
			}

			return fallback;
		}
	}, {
		key: 'addDictionary',
		value: function addDictionary(locale, dict) {
			if (typeof this.lang[locale] === 'undefined') {
				this.lang[locale] = {};
			}

			for (var entity in dict) {
				this.lang[locale][entity] = dict[entity];
			}
		}
	}, {
		key: 'getDictionary',
		value: function getDictionary(locale) {
			return this.lang[locale];
		}
	}, {
		key: 'stripStr',
		value: function stripStr(str) {
			return str.replace(/^\s*/, '').replace(/\s*$/, '');
		}
	}, {
		key: 'stripStrML',
		value: function stripStrML(str) {
			var parts = str.split('\n');

			for (var i = 0; i < parts.length; i += 1) {
				parts[i] = stripStr(parts[i]);
			}

			return stripStr(parts.join(' '));
		}
	}, {
		key: 'sprintf',
		value: function sprintf(s) {
			for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				params[_key - 1] = arguments[_key];
			}

			if (params.length === 0) {
				return s;
			}

			var regx = new RegExp('(.?)(%s)', 'g');

			var i = 0;

			return s.replace(regx, function (match, subMatch1, subMatch2, offset, string) {
				if (subMatch1 === '%') {
					return match;
				}

				return subMatch1 + params[i++];
			});
		}
	}, {
		key: 'inject',
		value: function inject(s, map) {
			var regx = new RegExp('\{([A-Za-z0-9_]*)\}', 'g');

			return s.replace(regx, function (match, key, offset, string) {
				return map[key] ? map[key] : match;
			});
		}
	}, {
		key: 'detectLocale',
		value: function detectLocale() {
			var rawLocale;
			var detectedLocale;

			rawLocale = document.body.getAttribute('lang');

			if (!rawLocale) {
				var metas = document.getElementsByTagName('meta');

				for (var i = 0; i < metas.length; i++) {
					if (metas[i].attributes['http-equiv'] && metas[i].attributes['http-equiv'].nodeValue.toLowerCase() == 'content-language') {
						rawLocale = metas[i].attributes['content'].nodeValue;
					}
				}
			}

			if (!rawLocale) {
				rawLocale = this.defaultLocale;
			}

			var rawLocaleParts = rawLocale.match(/([^-|_]*)[-|_](.*)/);

			if (rawLocale.length == 2) {
				for (var compareLocale in i18n.lang) {
					if (compareLocale.substr(0, 2).toLowerCase() == rawLocale.toLowerCase()) {
						detectedLocale = compareLocale;
						break;
					}
				}
			} else if (rawLocaleParts) {
				detectedLocale = rawLocaleParts[1].toLowerCase() + '_' + rawLocaleParts[2].toUpperCase();
			}

			return detectedLocale;
		}
	}, {
		key: 'addEvent',
		value: function addEvent(obj, evType, fn, useCapture) {
			if (obj.addEventListener) {
				obj.addEventListener(evType, fn, useCapture);
				return true;
			} else if (obj.attachEvent) {
				return obj.attachEvent('on' + evType, fn);
			} else {
				console.log('Handler could not be attached');
			}
		}
	}]);

	return i18n;
}();

var _i18n = new i18n();

window.ss = typeof window.ss !== 'undefined' ? window.ss : {};
window.ss.i18n = window.i18n = _i18n;

exports.default = _i18n;

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Injector = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormBuilderModal = (0, _Injector.loadComponent)('FormBuilderModal');

_jquery2.default.entwine('ss', function ($) {
  $('.cms-content-actions .add-to-campaign-action,' + '#add-to-campaign__action').entwine({
    onclick: function onclick() {
      var dialog = $('#add-to-campaign__dialog-wrapper');

      if (!dialog.length) {
        dialog = $('<div id="add-to-campaign__dialog-wrapper" />');
        $('body').append(dialog);
      }

      dialog.open();

      return false;
    }
  });

  $('.add-to-campaign-modal .add-to-campaign-modal__nav-link').entwine({
    onclick: function onclick(e) {
      e.preventDefault();
      var $link = $(e.target);
      window.location = $link.attr('href');
    }
  });

  $('#add-to-campaign__dialog-wrapper').entwine({
    onunmatch: function onunmatch() {
      this._clearModal();
    },
    open: function open() {
      this._renderModal(true);
    },
    close: function close() {
      this._renderModal(false);
    },
    _renderModal: function _renderModal(show) {
      var _this = this;

      var handleHide = function handleHide() {
        return _this.close();
      };
      var handleSubmit = function handleSubmit() {
        return _this._handleSubmitModal.apply(_this, arguments);
      };
      var id = $('form.cms-edit-form :input[name=ID]').val();
      var sectionConfigKey = 'SilverStripe\\CMS\\Controllers\\CMSPageEditController';
      var store = window.ss.store;
      var sectionConfig = store.getState().config.sections.find(function (section) {
        return section.name === sectionConfigKey;
      });
      var modalSchemaUrl = sectionConfig.form.AddToCampaignForm.schemaUrl + '/' + id;
      var title = _i18n2.default._t('Admin.ADD_TO_CAMPAIGN', 'Add to campaign');

      _reactDom2.default.render(_react2.default.createElement(FormBuilderModal, {
        title: title,
        show: show,
        onSubmit: handleSubmit,
        onHide: handleHide,
        schemaUrl: modalSchemaUrl,
        bodyClassName: 'modal__dialog',
        className: 'add-to-campaign-modal',
        responseClassBad: 'modal__response modal__response--error',
        responseClassGood: 'modal__response modal__response--good',
        identifier: 'Admin.AddToCampaign'
      }), this[0]);
    },
    _clearModal: function _clearModal() {
      _reactDom2.default.unmountComponentAtNode(this[0]);
    },
    _handleSubmitModal: function _handleSubmitModal(data, action, submitFn) {
      return submitFn();
    }
  });
});

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).on('click', '.confirmedpassword .showOnClick a', function () {
	var $container = (0, _jquery2.default)('.showOnClickContainer', (0, _jquery2.default)(this).parent());

	$container.toggle('fast', function () {
		$container.find('input[type="hidden"]').val($container.is(":visible") ? 1 : 0);
	});

	return false;
});

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _moment = __webpack_require__(178);

var _moment2 = _interopRequireDefault(_moment);

var _modernizr = __webpack_require__(177);

var _modernizr2 = _interopRequireDefault(_modernizr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(150);

_jquery2.default.entwine('ss', function ($) {
  $('input[type=datetime-local]').entwine({
    onadd: function onadd() {
      if (_modernizr2.default.inputtypes['datetime-local']) {
        return;
      }

      if (this.prop('disabled') || this.prop('readonly') || this.hasClass('hasDatepicker')) {
        return;
      }

      var hiddenInput = $('<input/>', { type: 'hidden', name: this.attr('name'), value: this.val() });
      this.parent().append(hiddenInput);

      this.removeAttr('name');

      _moment2.default.locale(this.attr('lang'));
      var isoDate = this.val();
      var localDate = '';
      if (isoDate) {
        var dateObject = (0, _moment2.default)(isoDate);
        if (dateObject.isValid()) {
          localDate = dateObject.format('L LT');
        }
      }
      this.val(localDate);

      var placeholder = _i18n2.default.inject(_i18n2.default._t('Admin.FormatExample', 'Example: {format}'), { format: (0, _moment2.default)().endOf('month').format('L LT') });
      this.attr('placeholder', placeholder);

      this.updateValue();
    },
    onchange: function onchange() {
      this.updateValue();
    },
    updateValue: function updateValue() {
      var localDate = this.val();
      var isoDate = '';
      if (localDate) {
        var dateObject = (0, _moment2.default)(localDate, ['L LT', _moment2.default.ISO_8601]);
        if (dateObject.isValid()) {
          isoDate = dateObject.format('YYYY-MM-DDTHH:mm:ss');
        }
      }
      this.parent().find('input[type=hidden]').val(isoDate);
    }
  });
});

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(151);
__webpack_require__(150);

_jquery2.default.entwine('ss', function ($) {
  $('.grid-field').entwine({
    onmatch: function onmatch() {
      if (this.needsColumnFix()) {
        this.fixColumns();
        this.injectSearchButton(false);
      }
    },


    reload: function reload(ajaxOpts, successCallback) {
      var self = this,
          form = this.closest('form'),
          focusedElName = this.find(':input:focus').attr('name'),
          data = form.find(':input').serializeArray();

      if (!ajaxOpts) ajaxOpts = {};
      if (!ajaxOpts.data) ajaxOpts.data = [];
      ajaxOpts.data = ajaxOpts.data.concat(data);

      if (window.location.search) {
        ajaxOpts.data = window.location.search.replace(/^\?/, '') + '&' + $.param(ajaxOpts.data);
      }

      form.addClass('loading');

      $.ajax($.extend({}, {
        headers: { "X-Pjax": 'CurrentField' },
        type: "POST",
        url: this.data('url'),
        dataType: 'html',
        success: function success(data) {
          self.empty().append($(data).children());

          if (focusedElName) self.find(':input[name="' + focusedElName + '"]').focus();

          if (self.find('.grid-field__filter-header').length) {
            var visible = ajaxOpts.data[0].filter === "show";
            if (self.needsColumnFix()) {
              self.fixColumns();
            }
            self.injectSearchButton(visible);
          }

          form.removeClass('loading');
          if (successCallback) successCallback.apply(this, arguments);
          self.trigger('reload', self);
          self.trigger('change');
        },
        error: function error(e) {
          alert(_i18n2.default._t('Admin.ERRORINTRANSACTION'));
          form.removeClass('loading');
        }
      }, ajaxOpts));
    },
    showDetailView: function showDetailView(url) {
      window.location.href = url;
    },
    getItems: function getItems() {
      return this.find('.ss-gridfield-item');
    },

    setState: function setState(k, v) {
      var state = this.getState();
      state[k] = v;
      this.find(':input[name="' + this.data('name') + '[GridState]"]').val(JSON.stringify(state));
    },

    getState: function getState() {
      return JSON.parse(this.find(':input[name="' + this.data('name') + '[GridState]"]').val());
    },

    needsColumnFix: function needsColumnFix() {
      return this.find('.grid-field__filter-header').length && !this.find('.grid-field__col-compact').length && !this.find('th.col-Actions').length;
    },

    fixColumns: function fixColumns(visible) {
      this.find('.sortable-header').append('<th class="main col-Actions" />');
      this.find('tbody tr').each(function () {
        var cell = $(this).find('td:last');
        cell.attr('colspan', 2);
      });
      var $extraCell = $('<th class="extra" />');
      $('.grid-field__filter-header th:last .action').each(function () {
        $(this).detach();
        $extraCell.append($(this));
      });
      $('.grid-field__filter-header').append($extraCell);
    },

    injectSearchButton: function injectSearchButton(visible) {
      var content;
      if (visible) {
        content = '<span class="non-sortable"></span>';
        this.addClass('show-filter').find('.grid-field__filter-header').show();
      } else {
        content = '<button type="button" title="Open search and filter" name="showFilter" class="btn btn-secondary font-icon-search btn--no-text btn--icon-large grid-field__filter-open"></button>';
        this.removeClass('show-filter').find('.grid-field__filter-header').hide();
      }
      this.find('.sortable-header th:last').html(content);
    }
  });

  $('.grid-field *').entwine({
    getGridField: function getGridField() {
      return this.closest('.grid-field');
    }
  });

  $('.grid-field :button[name=showFilter]').entwine({
    onclick: function onclick(e) {
      this.closest('.grid-field__table').find('.grid-field__filter-header').show().find(':input:first').focus();

      this.closest('.grid-field').addClass('show-filter');
      this.parent().html('<span class="non-sortable"></span>');
      e.preventDefault();
    }
  });

  $('.grid-field .ss-gridfield-item').entwine({
    onclick: function onclick(e) {
      if ($(e.target).closest('.action').length) {
        this._super(e);
        return false;
      }

      var editLink = this.find('.edit-link');
      if (editLink.length) this.getGridField().showDetailView(editLink.prop('href'));
    },
    onmouseover: function onmouseover() {
      if (this.find('.edit-link').length) this.css('cursor', 'pointer');
    },
    onmouseout: function onmouseout() {
      this.css('cursor', 'default');
    }
  });

  $('.grid-field .action.action_import:button').entwine({
    onclick: function onclick(e) {
      e.preventDefault();
      this.openmodal();
    },
    onmatch: function onmatch() {
      this._super();

      if (this.data('state') === 'open') {
        this.openmodal();
      }
    },
    onunmatch: function onunmatch() {
      this._super();
    },

    openmodal: function openmodal() {
      var modal = $(this.data('target'));
      var newModal = $(this.data('modal'));
      if (modal.length < 1) {
        modal = newModal;
        modal.appendTo(document.body);
      } else {
        modal.innerHTML = newModal.innerHTML;
      }

      var backdrop = $('.modal-backdrop');
      if (backdrop.length < 1) {
        backdrop = $('<div class="modal-backdrop fade"></div>');
        backdrop.appendTo(document.body);
      }

      modal.find('[data-dismiss]').on('click', function () {
        backdrop.removeClass('show');
        modal.removeClass('show');
        setTimeout(function () {
          backdrop.remove();
        }, 150);
      });

      setTimeout(function () {
        backdrop.addClass('show');
        modal.addClass('show');
      }, 0);
    }
  });

  $('.grid-field .action:button').entwine({
    onclick: function onclick(e) {
      var filterState = 'show';
      if (this.is(':disabled')) {
        e.preventDefault();
        return;
      }

      if (this.hasClass('ss-gridfield-button-close') || !this.closest('.grid-field').hasClass('show-filter')) {
        filterState = 'hidden';
      }

      this.getGridField().reload({
        data: [{ name: this.attr('name'), value: this.val(), filter: filterState }]
      });

      e.preventDefault();
    },

    actionurl: function actionurl() {
      var btn = this.closest(':button'),
          grid = this.getGridField(),
          form = this.closest('form'),
          data = form.find(':input.gridstate').serialize(),
          csrf = form.find('input[name="SecurityID"]').val();

      data += "&" + encodeURIComponent(btn.attr('name')) + '=' + encodeURIComponent(btn.val());

      if (csrf) {
        data += "&SecurityID=" + encodeURIComponent(csrf);
      }

      if (window.location.search) {
        data = window.location.search.replace(/^\?/, '') + '&' + data;
      }

      var connector = grid.data('url').indexOf('?') == -1 ? '?' : '&';

      return $.path.makeUrlAbsolute(grid.data('url') + connector + data, $('base').attr('href'));
    }

  });

  $('.grid-field .add-existing-autocompleter').entwine({
    onbuttoncreate: function onbuttoncreate() {
      var self = this;

      this.toggleDisabled();

      this.find('input[type="text"]').on('keyup', function () {
        self.toggleDisabled();
      });
    },
    onunmatch: function onunmatch() {
      this.find('input[type="text"]').off('keyup');
    },
    toggleDisabled: function toggleDisabled() {
      var $button = this.find('.ss-ui-button'),
          $input = this.find('input[type="text"]'),
          inputHasValue = $input.val() !== '',
          buttonDisabled = $button.is(':disabled');

      if (inputHasValue && buttonDisabled || !inputHasValue && !buttonDisabled) {
        $button.attr("disabled", !buttonDisabled);
      }
    }
  });

  $('.grid-field .grid-field__col-compact .action.gridfield-button-delete, .cms-edit-form .btn-toolbar button.action.action-delete').entwine({
    onclick: function onclick(e) {
      if (!confirm(_i18n2.default._t('Admin.DELETECONFIRMMESSAGE'))) {
        e.preventDefault();
        return false;
      } else {
        this._super(e);
      }
    }
  });

  $('.grid-field .grid-print-button.action:button').entwine({
    UUID: null,
    onmatch: function onmatch() {
      this._super();
      this.setUUID(new Date().getTime());
    },
    onunmatch: function onunmatch() {
      this._super();
    },
    onclick: function onclick(e) {
      var url = this.actionurl();
      window.open(url);
      e.preventDefault();
      return false;
    }
  });

  $('.ss-gridfield-print-iframe').entwine({
    onmatch: function onmatch() {
      this._super();

      this.hide().bind('load', function () {
        this.focus();
        var ifWin = this.contentWindow || this;
        ifWin.print();
      });
    },
    onunmatch: function onunmatch() {
      this._super();
    }
  });

  $('.grid-field .action.no-ajax, .grid-field .no-ajax .action:button').entwine({
    onclick: function onclick(e) {
      window.location.href = this.actionurl();
      e.preventDefault();
      return false;
    }
  });

  $('.grid-field .action-detail').entwine({
    onclick: function onclick() {
      this.getGridField().showDetailView($(this).prop('href'));
      return false;
    }
  });

  $('.grid-field[data-selectable]').entwine({
    getSelectedItems: function getSelectedItems() {
      return this.find('.ss-gridfield-item.ui-selected');
    },

    getSelectedIDs: function getSelectedIDs() {
      return $.map(this.getSelectedItems(), function (el) {
        return $(el).data('id');
      });
    }
  });
  $('.grid-field[data-selectable] .ss-gridfield-items').entwine({
    onadd: function onadd() {
      this._super();

      this.selectable();
    },
    onremove: function onremove() {
      this._super();
      if (this.data('selectable')) this.selectable('destroy');
    }
  });

  $('.grid-field .grid-field__filter-header :input').entwine({
    onmatch: function onmatch() {
      var filterbtn = this.closest('.extra').find('.ss-gridfield-button-filter'),
          resetbtn = this.closest('.extra').find('.ss-gridfield-button-reset');

      if (this.val()) {
        filterbtn.addClass('filtered');
        resetbtn.addClass('filtered');
      }
      this._super();
    },
    onunmatch: function onunmatch() {
      this._super();
    },
    onkeydown: function onkeydown(e) {
      if (this.closest('.ss-gridfield-button-reset').length) return;

      var filterbtn = this.closest('.extra').find('.ss-gridfield-button-filter'),
          resetbtn = this.closest('.extra').find('.ss-gridfield-button-reset');

      if (e.keyCode == '13') {
        var btns = this.closest('.grid-field__filter-header').find('.ss-gridfield-button-filter');
        var filterState = 'show';
        if (this.hasClass('ss-gridfield-button-close') || !this.closest('.grid-field').hasClass('show-filter')) {
          filterState = 'hidden';
        }

        this.getGridField().reload({ data: [{ name: btns.attr('name'), value: btns.val(), filter: filterState }] });
        return false;
      } else {
        filterbtn.addClass('hover-alike');
        resetbtn.addClass('hover-alike');
      }
    }
  });

  $(".grid-field .relation-search").entwine({
    onfocusin: function onfocusin(event) {
      this.autocomplete({
        source: function source(request, response) {
          var searchField = $(this.element);
          var form = $(this.element).closest("form");
          $.ajax({
            headers: {
              "X-Pjax": 'Partial'
            },
            dataType: 'json',
            type: "GET",
            url: $(searchField).data('searchUrl'),
            data: encodeURIComponent(searchField.attr('name')) + '=' + encodeURIComponent(searchField.val()),
            success: response,
            error: function error(e) {
              alert(_i18n2.default._t('Admin.ERRORINTRANSACTION', 'An error occured while fetching data from the server\n Please try again later.'));
            }
          });
        },
        select: function select(event, ui) {
          var hiddenField = $('<input type="hidden" name="relationID" class="action_gridfield_relationfind no-change-track" />');
          hiddenField.val(ui.item.id);
          $(this).closest(".grid-field").find(".action_gridfield_relationfind").replaceWith(hiddenField);
          var addbutton = $(this).closest(".grid-field").find(".action_gridfield_relationadd");

          addbutton.removeAttr('disabled');
        }
      });
    }
  });

  $(".grid-field .pagination-page-number input").entwine({
    onkeydown: function onkeydown(event) {
      if (event.keyCode == 13) {
        var newpage = parseInt($(this).val(), 10);

        var gridfield = $(this).getGridField();
        gridfield.setState('GridFieldPaginator', { currentPage: newpage });
        gridfield.reload();

        return false;
      }
    }
  });
});

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ss = typeof window.ss !== 'undefined' ? window.ss : {};

ss.editorWrappers = {};
ss.editorWrappers.tinyMCE = function () {
  var editorID;

  return {
    init: function init(ID) {
      editorID = ID;

      this.create();
    },

    destroy: function destroy() {
      tinymce.EditorManager.execCommand('mceRemoveEditor', false, editorID);
    },

    getInstance: function getInstance() {
      return tinymce.EditorManager.get(editorID);
    },

    onopen: function onopen() {},

    onclose: function onclose() {},

    getConfig: function getConfig() {
      var selector = "#" + editorID,
          config = (0, _jquery2.default)(selector).data('config'),
          self = this;

      config.selector = selector;

      config.setup = function (ed) {
        ed.on('change', function () {
          self.save();
        });
      };
      return config;
    },

    save: function save() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var instance = this.getInstance();
      instance.save();

      if (!options.silent) {
        (0, _jquery2.default)(instance.getElement()).trigger("change");
      }
    },

    create: function create() {
      var config = this.getConfig();

      if (typeof config.baseURL !== 'undefined') {
        tinymce.EditorManager.baseURL = config.baseURL;
      }
      tinymce.init(config);
    },

    repaint: function repaint() {},

    isDirty: function isDirty() {
      return this.getInstance().isDirty();
    },

    getContent: function getContent() {
      return this.getInstance().getContent();
    },

    getDOM: function getDOM() {
      return this.getInstance().getElement();
    },

    getContainer: function getContainer() {
      return this.getInstance().getContainer();
    },

    getSelectedNode: function getSelectedNode() {
      return this.getInstance().selection.getNode();
    },

    selectNode: function selectNode(node) {
      this.getInstance().selection.select(node);
    },

    setContent: function setContent(html, opts) {
      this.getInstance().setContent(html, opts);
    },

    insertContent: function insertContent(html, opts) {
      this.getInstance().insertContent(html, opts);
    },

    replaceContent: function replaceContent(html, opts) {
      this.getInstance().execCommand('mceReplaceContent', false, html, opts);
    },

    insertLink: function insertLink(attrs, opts, linkText) {
      if (linkText) {
        var linkEl = this.getInstance().dom.create('a', attrs, linkText);
        this.getInstance().selection.setNode(linkEl);
      } else {
        this.getInstance().execCommand("mceInsertLink", false, attrs, opts);
      }
    },

    removeLink: function removeLink() {
      this.getInstance().execCommand('unlink', false);
    },

    cleanLink: function cleanLink(href, node) {
      var settings = this.getConfig,
          cb = settings['urlconverter_callback'],
          cu = tinyMCE.settings['convert_urls'];
      if (cb) href = eval(cb + "(href, node, true);");

      if (cu && href.match(new RegExp('^' + tinyMCE.settings['document_base_url'] + '(.*)$'))) {
        href = RegExp.$1;
      }

      if (href.match(/^javascript:\s*mctmp/)) href = '';

      return href;
    },

    createBookmark: function createBookmark() {
      return this.getInstance().selection.getBookmark();
    },

    moveToBookmark: function moveToBookmark(bookmark) {
      this.getInstance().selection.moveToBookmark(bookmark);
      this.getInstance().focus();
    },

    blur: function blur() {
      this.getInstance().selection.collapse();
    },

    addUndo: function addUndo() {
      this.getInstance().undoManager.add();
    }
  };
};

ss.editorWrappers['default'] = ss.editorWrappers.tinyMCE;

_jquery2.default.entwine('ss', function ($) {
  $('textarea.htmleditor').entwine({

    Editor: null,

    onadd: function onadd() {
      var edClass = this.data('editor') || 'default',
          ed = ss.editorWrappers[edClass]();
      this.setEditor(ed);

      ed.init(this.attr('id'));

      this._super();
    },

    onremove: function onremove() {
      this.getEditor().destroy();
      this._super();
    },

    'from .cms-edit-form': {
      onbeforesubmitform: function onbeforesubmitform() {
        this.getEditor().save({ silent: true });
        this._super();
      }
    },

    openLinkDialog: function openLinkDialog() {
      this.openDialog('link');
    },

    openMediaDialog: function openMediaDialog() {
      this.openDialog('media');
    },

    openEmbedDialog: function openEmbedDialog() {
      this.openDialog('embed');
    },

    openDialog: function openDialog(type) {
      if (type === 'media' && window.InsertMediaModal) {
        var dialog = $('#insert-media-react__dialog-wrapper');

        if (!dialog.length) {
          dialog = $('<div id="insert-media-react__dialog-wrapper" class="insert-link__dialog-wrapper" />');
          $('body').append(dialog);
        }

        dialog.setElement(this);
        dialog.open();
        return;
      }

      if (type === 'embed' && window.InsertEmbedModal) {
        var _dialog = $('#insert-embed-react__dialog-wrapper');

        if (!_dialog.length) {
          _dialog = $('<div id="insert-embed-react__dialog-wrapper" />');
          $('body').append(_dialog);
        }

        _dialog.setElement(this);
        _dialog.open();
        return;
      }

      throw new Error('Dialog named ' + type + ' is not available.');
    }
  });
});

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.ss-tabset.ss-ui-action-tabset').entwine({
    IgnoreTabState: true,

    onadd: function onadd() {
      this._super();

      this.tabs({ 'collapsible': true, 'active': false });
    },

    onremove: function onremove() {
      var frame = $('.cms-container').find('iframe');
      frame.each(function (index, iframe) {
        try {
          $(iframe).contents().off('click.ss-ui-action-tabset');
        } catch (e) {
          console.warn('Unable to access iframe, possible https mis-match');
        }
      });
      $(document).off('click.ss-ui-action-tabset');

      this._super();
    },

    'ontabsbeforeactivate': function ontabsbeforeactivate(event, ui) {
      this.riseUp(event, ui);
    },

    onclick: function onclick(event, ui) {
      this.attachCloseHandler(event, ui);
    },

    attachCloseHandler: function attachCloseHandler(event, ui) {
      var that = this,
          frame = $('.cms-container').find('iframe'),
          _closeHandler;

      _closeHandler = function closeHandler(event) {
        var panel, frame;
        panel = $(event.target).closest('.ss-ui-action-tabset .ui-tabs-panel');

        if (!$(event.target).closest(that).length && !panel.length) {
          that.tabs('option', 'active', false);
          frame = $('.cms-container').find('iframe');
          frame.each(function (index, iframe) {
            $(iframe).contents().off('click.ss-ui-action-tabset', _closeHandler);
          });
          $(document).off('click.ss-ui-action-tabset', _closeHandler);
        }
      };

      $(document).on('click.ss-ui-action-tabset', _closeHandler);

      if (frame.length > 0) {
        frame.each(function (index, iframe) {
          $(iframe).contents().on('click.ss-ui-action-tabset', _closeHandler);
        });
      }
    },

    riseUp: function riseUp(event, ui) {
      var elHeight, trigger, endOfWindow, elPos, activePanel, activeTab, topPosition, containerSouth, padding;

      elHeight = $(this).find('.ui-tabs-panel').outerHeight();
      trigger = $(this).find('.ui-tabs-nav').outerHeight();
      endOfWindow = $(window).height() + $(document).scrollTop() - trigger;
      elPos = $(this).find('.ui-tabs-nav').offset().top;

      activePanel = ui.newPanel;
      activeTab = ui.newTab;

      if (elPos + elHeight >= endOfWindow && elPos - elHeight > 0) {
        this.addClass('rise-up');

        if (activeTab.position() !== null) {
          topPosition = -activePanel.outerHeight();
          containerSouth = activePanel.parents('.toolbar--south');
          if (containerSouth) {
            padding = activeTab.offset().top - containerSouth.offset().top;
            topPosition = topPosition - padding;
          }
          $(activePanel).css('top', topPosition + "px");
        }
      } else {
        this.removeClass('rise-up');
        if (activeTab.position() !== null) {
          $(activePanel).css('bottom', '100%');
        }
      }
      return false;
    }
  });

  $('.cms-content-actions .ss-tabset.ss-ui-action-tabset').entwine({
    'ontabsbeforeactivate': function ontabsbeforeactivate(event, ui) {
      this._super(event, ui);

      if ($(ui.newPanel).length > 0) {
        $(ui.newPanel).css('left', ui.newTab.position().left + "px");
      }
    }
  });

  $('.cms-actions-row.ss-tabset.ss-ui-action-tabset').entwine({
    'ontabsbeforeactivate': function ontabsbeforeactivate(event, ui) {
      this._super(event, ui);

      $(this).closest('.ss-ui-action-tabset').removeClass('tabset-open tabset-open-last');
    }
  });

  $('.cms-content-fields .ss-tabset.ss-ui-action-tabset').entwine({
    'ontabsbeforeactivate': function ontabsbeforeactivate(event, ui) {
      this._super(event, ui);
      if ($(ui.newPanel).length > 0) {
        if ($(ui.newTab).hasClass("last")) {
          $(ui.newPanel).css({ 'left': 'auto', 'right': '0px' });

          $(ui.newPanel).parent().addClass('tabset-open-last');
        } else {
          $(ui.newPanel).css('left', ui.newTab.position().left + "px");

          if ($(ui.newTab).hasClass("first")) {
            $(ui.newPanel).css('left', "0px");
            $(ui.newPanel).parent().addClass('tabset-open');
          }
        }
      }
    }
  });

  $('.cms-tree-view-sidebar .cms-actions-row.ss-tabset.ss-ui-action-tabset').entwine({
    'from .ui-tabs-nav li': {
      onhover: function onhover(e) {
        $(e.target).parent().find('li .active').removeClass('active');
        $(e.target).find('a').addClass('active');
      }
    },

    'ontabsbeforeactivate': function ontabsbeforeactivate(event, ui) {
      this._super(event, ui);

      $(ui.newPanel).css({ 'left': 'auto', 'right': 'auto' });

      if ($(ui.newPanel).length > 0) {
        $(ui.newPanel).parent().addClass('tabset-open');
      }
    }
  });
});

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss.tree', function ($) {
  $('#Form_BatchActionsForm').entwine({
    Actions: [],

    getTree: function getTree() {
      return $('.cms-tree');
    },

    fromTree: {
      oncheck_node: function oncheck_node(e, data) {
        this.serializeFromTree();
      },
      onuncheck_node: function onuncheck_node(e, data) {
        this.serializeFromTree();
      }
    },

    onmatch: function onmatch() {
      var self = this;

      self.getTree().bind('load_node.jstree', function (e, data) {
        self.refreshSelected();
      });
    },

    onunmatch: function onunmatch() {
      var self = this;

      self.getTree().unbind('load_node.jstree');
    },

    registerDefault: function registerDefault() {
      this.register('publish', function (ids) {
        var confirmed = confirm(_i18n2.default.inject(_i18n2.default._t("Admin.BATCH_PUBLISH_PROMPT", "You have {num} page(s) selected.\n\nDo you really want to publish?"), { 'num': ids.length }));
        return confirmed ? ids : false;
      });

      this.register('unpublish', function (ids) {
        var confirmed = confirm(_i18n2.default.inject(_i18n2.default._t("Admin.BATCH_UNPUBLISH_PROMPT", "You have {num} page(s) selected.\n\nDo you really want to unpublish"), { 'num': ids.length }));
        return confirmed ? ids : false;
      });

      this.register('delete', function (ids) {
        var confirmed = confirm(_i18n2.default.inject(_i18n2.default._t("Admin.BATCH_DELETE_PROMPT", "You have {num} page(s) selected.\n\nAre you sure you want to delete these pages?\n\nThese pages and all of their children pages will be deleted and sent to the archive."), { 'num': ids.length }));
        return confirmed ? ids : false;
      });

      this.register('restore', function (ids) {
        var confirmed = confirm(_i18n2.default.inject(_i18n2.default._t("Admin.BATCH_RESTORE_PROMPT", "You have {num} page(s) selected.\n\nDo you really want to restore to stage?\n\nChildren of archived pages will be restored to the root level, unless those pages are also being restored."), { 'num': ids.length }));
        return confirmed ? ids : false;
      });
    },

    onadd: function onadd() {
      this.registerDefault();
      this._super();
    },

    register: function register(type, callback) {
      this.trigger('register', { type: type, callback: callback });
      var actions = this.getActions();
      actions[type] = callback;
      this.setActions(actions);
    },

    unregister: function unregister(type) {
      this.trigger('unregister', { type: type });

      var actions = this.getActions();
      if (actions[type]) delete actions[type];
      this.setActions(actions);
    },

    refreshSelected: function refreshSelected(rootNode) {
      var self = this,
          st = this.getTree(),
          ids = this.getIDs(),
          allIds = [],
          viewMode = $('.cms-content-batchactions-button'),
          actionUrl = this.find(':input[name=Action]').val();

      if (rootNode == null) rootNode = st;

      for (var idx in ids) {
        $($(st).getNodeByID(idx)).addClass('selected').attr('selected', 'selected');
      }

      if (!actionUrl || actionUrl == -1 || !viewMode.hasClass('active')) {
        $(rootNode).find('li').each(function () {
          $(this).setEnabled(true);
        });
        return;
      }

      $(rootNode).find('li').each(function () {
        allIds.push($(this).data('id'));
        $(this).addClass('treeloading').setEnabled(false);
      });

      var actionUrlParts = $.path.parseUrl(actionUrl);
      var applicablePagesUrl = actionUrlParts.hrefNoSearch + '/applicablepages/';
      applicablePagesUrl = $.path.addSearchParams(applicablePagesUrl, actionUrlParts.search);
      applicablePagesUrl = $.path.addSearchParams(applicablePagesUrl, { csvIDs: allIds.join(',') });
      jQuery.getJSON(applicablePagesUrl, function (applicableIDs) {
        jQuery(rootNode).find('li').each(function () {
          $(this).removeClass('treeloading');

          var id = $(this).data('id');
          if (id == 0 || $.inArray(id, applicableIDs) >= 0) {
            $(this).setEnabled(true);
          } else {
            $(this).removeClass('selected').setEnabled(false);
            $(this).prop('selected', false);
          }
        });

        self.serializeFromTree();
      });
    },

    serializeFromTree: function serializeFromTree() {
      var tree = this.getTree(),
          ids = tree.getSelectedIDs();

      this.setIDs(ids);

      return true;
    },

    setIDs: function setIDs(ids) {
      this.find(':input[name=csvIDs]').val(ids ? ids.join(',') : null);
    },

    getIDs: function getIDs() {
      var value = this.find(':input[name=csvIDs]').val();
      return value ? value.split(',') : [];
    },

    onsubmit: function onsubmit(e) {
      var self = this,
          ids = this.getIDs(),
          tree = this.getTree(),
          actions = this.getActions();

      if (!ids || !ids.length) {
        alert(_i18n2.default._t('Admin.SELECTONEPAGE', 'Please select at least one page'));
        e.preventDefault();
        return false;
      }

      var actionURL = this.find(':input[name=Action]').val();
      if (!actionURL) {
        e.preventDefault();
        return false;
      }

      var type = actionURL.split('/').filter(function (n) {
        return !!n;
      }).pop();
      if (actions[type]) {
        ids = actions[type].apply(this, [ids]);
      }

      if (!ids || !ids.length) {
        e.preventDefault();
        return false;
      }

      this.setIDs(ids);

      tree.find('li').removeClass('failed');

      var button = this.find(':submit:first');
      button.addClass('loading');

      jQuery.ajax({
        url: actionURL,
        type: 'POST',
        data: this.serializeArray(),
        complete: function complete(xmlhttp, status) {
          button.removeClass('loading');

          tree.jstree('refresh', -1);
          self.setIDs([]);

          self.find(':input[name=Action]').val('').change();

          var msg = xmlhttp.getResponseHeader('X-Status');
          if (msg) statusMessage(decodeURIComponent(msg), status == 'success' ? 'good' : 'bad');
        },
        success: function success(data, status) {
          var id, node;

          if (data.modified) {
            var modifiedNodes = [];
            for (id in data.modified) {
              node = tree.getNodeByID(id);
              tree.jstree('set_text', node, data.modified[id]['TreeTitle']);
              modifiedNodes.push(node);
            }
            $(modifiedNodes).effect('highlight');
          }
          if (data.deleted) {
            for (id in data.deleted) {
              node = tree.getNodeByID(id);
              if (node.length) tree.jstree('delete_node', node);
            }
          }
          if (data.error) {
            for (id in data.error) {
              node = tree.getNodeByID(id);
              $(node).addClass('failed');
            }
          }
        },
        dataType: 'json'
      });

      e.preventDefault();
      return false;
    }

  });

  $('.cms-content-batchactions-button').entwine({
    onmatch: function onmatch() {
      this._super();
      this.updateTree();
    },
    onunmatch: function onunmatch() {
      this._super();
    },
    onclick: function onclick(e) {
      this.updateTree();
    },
    updateTree: function updateTree() {
      var tree = $('.cms-tree'),
          form = $('#Form_BatchActionsForm');

      this._super();

      if (this.data('active')) {
        tree.addClass('multiple');
        tree.removeClass('draggable');
        form.serializeFromTree();
      } else {
        tree.removeClass('multiple');
        tree.addClass('draggable');
      }

      $('#Form_BatchActionsForm').refreshSelected();
    }
  });

  $('#Form_BatchActionsForm select[name=Action]').entwine({
    onchange: function onchange(e) {
      var form = $(e.target.form),
          btn = form.find(':submit'),
          selected = $(e.target).val();

      $('#Form_BatchActionsForm').refreshSelected();

      this.trigger("chosen:updated");

      this._super(e);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.cms-content').entwine({

    onadd: function onadd() {
      var self = this;

      this.find('.cms-tabset').redrawTabs();
      this._super();
    },

    redraw: function redraw() {
      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));

      this.add(this.find('.cms-tabset')).redrawTabs();
      this.find('.cms-content-header').redraw();
      this.find('.cms-content-actions').redraw();
    }
  });

  $('.cms-content .cms-tree').entwine({
    onadd: function onadd() {
      var self = this;

      this._super();

      this.bind('select_node.jstree', function (e, data) {
        var node = data.rslt.obj,
            loadedNodeID = self.find(':input[name=ID]').val(),
            origEvent = data.args[2],
            container = $('.cms-container');

        if (!origEvent) {
          return false;
        }

        if ($(node).hasClass('disabled')) return false;

        if ($(node).data('id') == loadedNodeID) return;

        var url = $(node).find('a:first').attr('href');
        if (url && url != '#') {
          url = url.split('?')[0];

          self.jstree('deselect_all');
          self.jstree('uncheck_all');

          if ($.path.isExternal($(node).find('a:first'))) url = url = $.path.makeUrlAbsolute(url, $('base').attr('href'));

          if (document.location.search) url = $.path.addSearchParams(url, document.location.search.replace(/^\?/, ''));

          container.loadPanel(url);
        } else {
          self.removeForm();
        }
      });
    }
  });

  $('.cms-content .cms-content-fields').entwine({
    redraw: function redraw() {
      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));
    }
  });

  $('.cms-content .cms-content-actions').entwine({
    redraw: function redraw() {
      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));

      this.height('auto');
      var paddingTop = parseInt(this.css('padding-top'), 10);
      var paddingBottom = parseInt(this.css('padding-bottom'), 10);
      this.height(this.innerHeight() - paddingTop - paddingBottom);
    }
  });
});

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currBeforeUnload = window.onbeforeunload;

window.onbeforeunload = function (e) {
  var form = (0, _jquery2.default)('.cms-edit-form');
  form.trigger('beforesubmitform');
  if (form.is('.changed') && !form.is('.discardchanges')) {
    return _i18n2.default._t('Admin.CONFIRMUNSAVEDSHORT');
  }

  if (typeof currBeforeUnload === 'function') {
    return currBeforeUnload();
  }

  return undefined;
};

_jquery2.default.entwine('ss', function ($) {
  $('.cms-edit-form').entwine({
    PlaceholderHtml: '',

    ChangeTrackerOptions: {
      ignoreFieldSelector: '.no-change-track, .ss-upload :input, .cms-navigator :input'
    },

    ValidationErrorShown: false,

    onadd: function onadd() {
      var self = this;

      this.attr("autocomplete", "off");

      this._setupChangeTracker();

      for (var overrideAttr in { 'action': true, 'method': true, 'enctype': true, 'name': true }) {
        var el = this.find(':input[name=' + '_form_' + overrideAttr + ']');
        if (el) {
          this.attr(overrideAttr, el.val());
          el.remove();
        }
      }

      this.setValidationErrorShown(false);

      this._super();
    },
    'from .cms-tabset': {
      onafterredrawtabs: function onafterredrawtabs() {
        if (this.hasClass('validationerror')) {
          var tabError = this.find('.message.validation, .message.required').first().closest('.tab');
          $('.cms-container').clearCurrentTabState();
          var $tabSet = tabError.closest('.ss-tabset');

          if (!$tabSet.length) {
            $tabSet = tabError.closest('.cms-tabset');
          }

          if ($tabSet.length) {
            $tabSet.tabs('option', 'active', tabError.index('.tab'));
          } else if (!this.getValidationErrorShown()) {
            this.setValidationErrorShown(true);
            errorMessage(ss.i18n._t('Admin.VALIDATIONERROR', 'Validation Error'));
          }
        }
      }
    },
    onremove: function onremove() {
      this.changetracker('destroy');
      this._super();
    },
    onmatch: function onmatch() {
      this._super();
    },
    onunmatch: function onunmatch() {
      this._super();
    },
    redraw: function redraw() {
      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));

      this.add(this.find('.cms-tabset')).redrawTabs();
      this.find('.cms-content-header').redraw();
    },

    _setupChangeTracker: function _setupChangeTracker() {
      this.changetracker(this.getChangeTrackerOptions());
    },

    confirmUnsavedChanges: function confirmUnsavedChanges() {
      this.trigger('beforesubmitform');
      if (!this.is('.changed') || this.is('.discardchanges')) {
        return true;
      }
      if (this.find('.btn-toolbar :submit.btn--loading.loading').length > 0) {
        return true;
      }
      var confirmed = confirm(_i18n2.default._t('Admin.CONFIRMUNSAVED'));
      if (confirmed) {
        this.addClass('discardchanges');
      }
      return confirmed;
    },

    onsubmit: function onsubmit(e, button) {
      if (this.prop("target") != "_blank") {
        if (button) this.closest('.cms-container').submitForm(this, button);
        return false;
      }
    },

    validate: function validate() {
      var isValid = true;
      this.trigger('validate', { isValid: isValid });

      return isValid;
    },

    'from .htmleditor': {
      oneditorinit: function oneditorinit(e) {
        var self = this,
            field = $(e.target).closest('.field.htmleditor'),
            editor = field.find('textarea.htmleditor').getEditor().getInstance();

        editor.onClick.add(function (e) {
          self.saveFieldFocus(field.attr('id'));
        });
      }
    },

    'from .cms-edit-form :input:not(:submit)': {
      onclick: function onclick(e) {
        this.saveFieldFocus($(e.target).attr('id'));
      },
      onfocus: function onfocus(e) {
        this.saveFieldFocus($(e.target).attr('id'));
      }
    },

    'from .cms-edit-form .treedropdown *': {
      onfocusin: function onfocusin(e) {
        var field = $(e.target).closest('.field.treedropdown');
        this.saveFieldFocus(field.attr('id'));
      }
    },

    'from .cms-edit-form .dropdown .chosen-container a': {
      onfocusin: function onfocusin(e) {
        var field = $(e.target).closest('.field.dropdown');
        this.saveFieldFocus(field.attr('id'));
      }
    },

    'from .cms-container': {
      ontabstaterestored: function ontabstaterestored(e) {
        this.restoreFieldFocus();
      }
    },

    saveFieldFocus: function saveFieldFocus(selected) {
      if (typeof window.sessionStorage == "undefined" || window.sessionStorage === null) return;

      var id = $(this).attr('id'),
          focusElements = [];

      focusElements.push({
        id: id,
        selected: selected
      });

      if (focusElements) {
        try {
          window.sessionStorage.setItem(id, JSON.stringify(focusElements));
        } catch (err) {
          if (err.code === DOMException.QUOTA_EXCEEDED_ERR && window.sessionStorage.length === 0) {
            return;
          } else {
            throw err;
          }
        }
      }
    },

    restoreFieldFocus: function restoreFieldFocus() {
      if (typeof window.sessionStorage == "undefined" || window.sessionStorage === null) return;

      var self = this,
          hasSessionStorage = typeof window.sessionStorage !== "undefined" && window.sessionStorage,
          sessionData = hasSessionStorage ? window.sessionStorage.getItem(this.attr('id')) : null,
          sessionStates = sessionData ? JSON.parse(sessionData) : false,
          elementID,
          tabbed = this.find('.ss-tabset').length !== 0,
          activeTab,
          elementTab,
          toggleComposite,
          scrollY;

      if (hasSessionStorage && sessionStates.length > 0) {
        $.each(sessionStates, function (i, sessionState) {
          if (self.is('#' + sessionState.id)) {
            elementID = $('#' + sessionState.selected);
          }
        });

        if ($(elementID).length < 1) {
          this.focusFirstInput();
          return;
        }

        activeTab = $(elementID).closest('.ss-tabset').find('.ui-tabs-nav .ui-tabs-active .ui-tabs-anchor').attr('id');
        elementTab = 'tab-' + $(elementID).closest('.ss-tabset .ui-tabs-panel').attr('id');

        if (tabbed && elementTab !== activeTab) {
          return;
        }

        toggleComposite = $(elementID).closest('.togglecomposite');

        if (toggleComposite.length > 0) {
          toggleComposite.accordion('activate', toggleComposite.find('.ui-accordion-header'));
        }

        scrollY = $(elementID).position().top;

        if (!$(elementID).is(':visible')) {
          elementID = '#' + $(elementID).closest('.field').attr('id');
          scrollY = $(elementID).position().top;
        }

        $(elementID).focus();

        if (scrollY > $(window).height() / 2) {
          self.find('.cms-content-fields').scrollTop(scrollY);
        }
      } else {
        this.focusFirstInput();
      }
    },

    focusFirstInput: function focusFirstInput() {
      this.find(':input:not(:submit)[data-skip-autofocus!="true"]').filter(':visible:first').focus();
    }
  });

  $('.cms-edit-form .btn-toolbar input.action[type=submit], .cms-edit-form .btn-toolbar button.action').entwine({
    onclick: function onclick(e) {
      if (this.is(':disabled')) {
        e.preventDefault();
        return false;
      }

      if (this._super(e) !== false && !e.defaultPrevented && !e.isDefaultPrevented()) {
        this.parents('form').trigger('submit', [this]);
        e.preventDefault();
        return false;
      }
    }
  });

  $('.cms-edit-form .btn-toolbar input.action[type=submit].ss-ui-action-cancel, .cms-edit-form .btn-toolbar button.action.ss-ui-action-cancel').entwine({
    onclick: function onclick(e) {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        this.parents('form').trigger('submit', [this]);
      }
      e.preventDefault();
    }
  });

  $('.cms-edit-form .ss-tabset').entwine({
    onmatch: function onmatch() {
      if (!this.hasClass('ss-ui-action-tabset')) {
        var tabs = this.find("> ul:first");

        if (tabs.children("li").length == 1) {
          tabs.hide().parent().addClass("ss-tabset-tabshidden");
        }
      }

      this._super();
    },
    onunmatch: function onunmatch() {
      this._super();
    }
  });

  $('.cms-edit-form [name="CanViewType"], ' + '.cms-edit-form [name="CanEditType"], ' + '.cms-edit-form [name="CanCreateTopLevelType"]').entwine({
    onmatch: function onmatch() {
      if (this.val() === 'OnlyTheseUsers') {
        if (this.is(':checked')) {
          this.showList(true);
        } else {
          this.hideList(true);
        }
      }
    },
    onchange: function onchange(e) {
      if (e.target.value === 'OnlyTheseUsers') {
        this.showList();
      } else {
        this.hideList();
      }
    },
    showList: function showList(instant) {
      var holder = this.closest('.field');
      var list = holder.next().filter('.listbox, .treedropdown, .treemultiselect');
      holder.addClass('field--merge-below');
      if (instant) {
        list.show().css('overflow', 'visible');
      } else {
        list.slideDown(function () {
          list.css('overflow', 'visible');
        });
      }
    },
    hideList: function hideList(instant) {
      var holder = this.closest('.field');
      var list = holder.next().filter('.listbox, .treedropdown, .treemultiselect');
      list.css('overflow', 'hidden');
      if (instant) {
        list.hide().css('display', 'none');
        holder.removeClass('field--merge-below');
      } else {
        list.slideUp(function () {
          holder.removeClass('field--merge-below');
        });
      }
    }
  });
});

var errorMessage = function errorMessage(text) {
  jQuery.noticeAdd({ text: text, type: 'error', stayTime: 5000, inEffect: { left: '0', opacity: 'show' } });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {

  $('.cms-description-toggle').entwine({
    onadd: function onadd() {
      var shown = false,
          fieldId = this.prop('id').substr(0, this.prop('id').indexOf('_Holder')),
          $trigger = this.find('.cms-description-trigger'),
          $description = this.find('.description');

      if (this.hasClass('description-toggle-enabled')) {
        return;
      }

      if ($trigger.length === 0) {
        $trigger = this.find('.middleColumn').first().after('<label class="right" for="' + fieldId + '"><a class="cms-description-trigger" href="javascript:void(0)"><span class="btn-icon-information"></span></a></label>').next();
      }

      this.addClass('description-toggle-enabled');

      $trigger.on('click', function () {
        $description[shown ? 'hide' : 'show']();
        shown = !shown;
      });

      $description.hide();
    }
  });
});

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $(".cms .field.cms-description-tooltip").entwine({
    onmatch: function onmatch() {
      this._super();

      var descriptionEl = this.find('.description'),
          inputEl,
          tooltipEl;
      if (descriptionEl.length) {
        this.attr('title', descriptionEl.text()).tooltip({ content: descriptionEl.html() });
        descriptionEl.remove();
      }
    }
  });

  $(".cms .field.cms-description-tooltip :input").entwine({
    onfocusin: function onfocusin(e) {
      this.closest('.field').tooltip('open');
    },
    onfocusout: function onfocusout(e) {
      this.closest('.field').tooltip('close');
    }
  });
});

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.cms-panel.cms-menu').entwine({

    togglePanel: function togglePanel(doExpand, silent, doSaveState) {
      $('.cms-menu__list').children('li').each(function () {
        if (doExpand) {
          $(this).children('ul').each(function () {
            $(this).removeClass('collapsed-flyout');
            if ($(this).data('collapse')) {
              $(this).removeData('collapse');
              $(this).addClass('collapse');
            }
          });
        } else {
          $(this).children('ul').each(function () {
            $(this).addClass('collapsed-flyout');
            $(this).hasClass('collapse');
            $(this).removeClass('collapse');
            $(this).data('collapse', true);
          });
        }
      });

      this.toggleFlyoutState(doExpand);

      this._super(doExpand, silent, doSaveState);
    },
    toggleFlyoutState: function toggleFlyoutState(bool) {
      if (bool) {
        $('.collapsed').find('li').show();

        $('.cms-menu__list').find('.child-flyout-indicator').hide();
      } else {
        $('.collapsed-flyout').find('li').each(function () {
          $(this).hide();
        });

        var par = $('.cms-menu__list ul.collapsed-flyout').parent();
        if (par.children('.child-flyout-indicator').length === 0) par.append('<span class="child-flyout-indicator"></span>').fadeIn();
        par.children('.child-flyout-indicator').fadeIn();
      }
    },
    siteTreePresent: function siteTreePresent() {
      return $('#cms-content-tools-CMSMain').length > 0;
    },

    getPersistedStickyState: function getPersistedStickyState() {
      var persistedState, cookieValue;

      if ($.cookie !== void 0) {
        cookieValue = $.cookie('cms-menu-sticky');

        if (cookieValue !== void 0 && cookieValue !== null) {
          persistedState = cookieValue === 'true';
        }
      }

      return persistedState;
    },

    setPersistedStickyState: function setPersistedStickyState(isSticky) {
      if ($.cookie !== void 0) {
        $.cookie('cms-menu-sticky', isSticky, { path: '/', expires: 31 });
      }
    },

    getEvaluatedCollapsedState: function getEvaluatedCollapsedState() {
      var shouldCollapse,
          manualState = this.getPersistedCollapsedState(),
          menuIsSticky = $('.cms-menu').getPersistedStickyState(),
          automaticState = this.siteTreePresent();

      if (manualState === void 0) {
        shouldCollapse = automaticState;
      } else if (manualState !== automaticState && menuIsSticky) {
        shouldCollapse = manualState;
      } else {
        shouldCollapse = automaticState;
      }

      return shouldCollapse;
    },

    onadd: function onadd() {
      var self = this;

      setTimeout(function () {
        self.togglePanel(!self.getEvaluatedCollapsedState(), false, false);
      }, 0);

      $(window).on('ajaxComplete', function (e) {
        setTimeout(function () {
          self.togglePanel(!self.getEvaluatedCollapsedState(), false, false);
        }, 0);
      });

      this._super();
    }
  });

  $('.cms-menu__list').entwine({
    onmatch: function onmatch() {
      var self = this;

      this.find('li.current').select();

      this.updateItems();

      this._super();
    },
    onunmatch: function onunmatch() {
      this._super();
    },

    updateMenuFromResponse: function updateMenuFromResponse(xhr) {
      var controller = xhr.getResponseHeader('X-Controller');
      if (controller) {
        var item = this.find('li#Menu-' + controller.replace(/\\/g, '-').replace(/[^a-zA-Z0-9\-_:.]+/, ''));
        if (!item.hasClass('current')) item.select();
      }
      this.updateItems();
    },

    'from .cms-container': {
      onafterstatechange: function onafterstatechange(e, data) {
        this.updateMenuFromResponse(data.xhr);
      },
      onaftersubmitform: function onaftersubmitform(e, data) {
        this.updateMenuFromResponse(data.xhr);
      }
    },

    'from .cms-edit-form': {
      onrelodeditform: function onrelodeditform(e, data) {
        this.updateMenuFromResponse(data.xmlhttp);
      }
    },

    getContainingPanel: function getContainingPanel() {
      return this.closest('.cms-panel');
    },

    fromContainingPanel: {
      ontoggle: function ontoggle(e) {
        this.toggleClass('collapsed', $(e.target).hasClass('collapsed'));

        $('.cms-container').trigger('windowresize');

        if (this.hasClass('collapsed')) this.find('li.children.opened').removeClass('opened');

        if (!this.hasClass('collapsed')) {
          $('.toggle-children.opened').closest('li').addClass('opened');
        }
      }
    },

    updateItems: function updateItems() {
      var editPageItem = this.find('#Menu-CMSMain');

      editPageItem[editPageItem.is('.current') ? 'show' : 'hide']();

      var currentID = $('.cms-content input[name=ID]').val();
      if (currentID) {
        this.find('li').each(function () {
          if ($.isFunction($(this).setRecordID)) $(this).setRecordID(currentID);
        });
      }
    }
  });

  $('.cms-menu__list li').entwine({
    toggleFlyout: function toggleFlyout(bool) {
      var fly = $(this);

      if (fly.children('ul').first().hasClass('collapsed-flyout')) {
        if (bool) {
          if (!fly.children('ul').first().children('li').first().hasClass('clone')) {

            var li = fly.clone();
            li.addClass('clone').css({});

            li.children('ul').first().remove();

            li.find('span').not('.text').remove();

            li.find('a').first().unbind('click');

            fly.children('ul').prepend(li);
          }

          $('.collapsed-flyout').show();
          fly.addClass('opened');
          fly.children('ul').find('li').fadeIn('fast');
        } else {
          if (li) {
            li.remove();
          }
          $('.collapsed-flyout').hide();
          fly.removeClass('opened');
          fly.find('toggle-children').removeClass('opened');
          fly.children('ul').find('li').hide();
        }
      }
    }
  });

  $('.cms-menu__list li').hoverIntent(function () {
    $(this).toggleFlyout(true);
  }, function () {
    $(this).toggleFlyout(false);
  });

  $('.cms-menu__list .toggle').entwine({
    onclick: function onclick(e) {
      e.preventDefault();
      $(this).toogleFlyout(true);
    }
  });

  $('.cms-menu__list li').entwine({
    onmatch: function onmatch() {
      if (this.find('ul').length) {
        this.find('a:first').append('<span class="toggle-children"><span class="toggle-children-icon"></span></span>');
      }
      this._super();
    },
    onunmatch: function onunmatch() {
      this._super();
    },
    toggle: function toggle() {
      this[this.hasClass('opened') ? 'close' : 'open']();
    },

    open: function open() {
      var parent = this.getMenuItem();
      if (parent) parent.open();
      if (this.find('li.clone')) {
        this.find('li.clone').remove();
      }
      this.addClass('opened').find('ul').show();
      this.find('.toggle-children').addClass('opened');
    },
    close: function close() {
      this.removeClass('opened').find('ul').hide();
      this.find('.toggle-children').removeClass('opened');
    },
    select: function select() {
      var parent = this.getMenuItem();
      this.addClass('current').open();

      this.siblings().removeClass('current').close();
      this.siblings().find('li').removeClass('current');
      if (parent) {
        var parentSiblings = parent.siblings();
        parent.addClass('current');
        parentSiblings.removeClass('current').close();
        parentSiblings.find('li').removeClass('current').close();
      }

      this.getMenu().updateItems();

      this.trigger('select');
    }
  });

  $('.cms-menu__list *').entwine({
    getMenu: function getMenu() {
      return this.parents('.cms-menu__list:first');
    }
  });

  $('.cms-menu__list li *').entwine({
    getMenuItem: function getMenuItem() {
      return this.parents('li:first');
    }
  });

  $('.cms-menu__list li a').entwine({
    onclick: function onclick(e) {
      var isExternal = $.path.isExternal(this.attr('href'));
      if (e.which > 1 || isExternal) return;

      if (this.attr('target') == "_blank") {
        return;
      }

      e.preventDefault();

      var item = this.getMenuItem();

      var url = this.attr('href');
      if (!isExternal) url = $('base').attr('href') + url;

      var children = item.find('li');
      if (children.length) {
        children.first().find('a').click();
      } else {
        document.location.href = url;
      }

      item.select();
    }
  });

  $('.cms-menu__list li .toggle-children').entwine({
    onclick: function onclick(e) {
      var li = this.closest('li');
      li.toggle();
      return false;
    }
  });

  $('.cms .profile-link').entwine({
    onclick: function onclick() {
      $('.cms-container').loadPanel(this.attr('href'));
      $('.cms-menu__list li').removeClass('current').close();
      return false;
    }
  });

  $('.cms-menu .sticky-toggle').entwine({

    onadd: function onadd() {
      var isSticky = $('.cms-menu').getPersistedStickyState() ? true : false;

      this.toggleCSS(isSticky);
      this.toggleIndicator(isSticky);

      this._super();
    },

    toggleCSS: function toggleCSS(isSticky) {
      this[isSticky ? 'addClass' : 'removeClass']('active');
    },

    toggleIndicator: function toggleIndicator(isSticky) {
      this.next('.sticky-status-indicator').text(isSticky ? 'fixed' : 'auto');
    },

    onclick: function onclick() {
      var $menu = this.closest('.cms-menu'),
          persistedCollapsedState = $menu.getPersistedCollapsedState(),
          persistedStickyState = $menu.getPersistedStickyState(),
          newStickyState = persistedStickyState === void 0 ? !this.hasClass('active') : !persistedStickyState;

      if (persistedCollapsedState === void 0) {
        $menu.setPersistedCollapsedState($menu.hasClass('collapsed'));
      } else if (persistedCollapsedState !== void 0 && newStickyState === false) {
        $menu.clearPersistedCollapsedState();
      }

      $menu.setPersistedStickyState(newStickyState);

      this.toggleCSS(newStickyState);
      this.toggleIndicator(newStickyState);

      this._super();
    }
  });
});

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _MobileMenuToggleContainer = __webpack_require__(951);

var _MobileMenuToggleContainer2 = _interopRequireDefault(_MobileMenuToggleContainer);

var _MobileMenuActions = __webpack_require__(420);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {

  $('.js-react-boot').entwine({

    onmatch: function onmatch() {
      var menuToggleWrapper = $('.cms-mobile-menu-toggle-wrapper');
      if (menuToggleWrapper.length > 0) {
        _reactDom2.default.render(React.createElement(_MobileMenuToggleContainer2.default, { store: window.ss.store, controls: 'cms-menu' }), menuToggleWrapper[0]);
      }

      var store = window.ss.store;
      var menu = $('.cms-menu');
      var menuOverlay = $('.cms-menu-mobile-overlay');
      store.subscribe(function () {
        var state = store.getState();
        var isOpen = state.mobileMenu.isOpen;
        menu.toggleClass('cms-menu--open', isOpen).attr('aria-expanded', isOpen);
        menuOverlay.attr('aria-expanded', isOpen);
      });
    }
  });

  $('.cms-menu-mobile-overlay').entwine({
    onclick: function onclick() {
      var store = window.ss.store;

      store.dispatch((0, _MobileMenuActions.closeMobileMenu)());
    }
  });
});

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $.entwine.warningLevel = $.entwine.WARN_LEVEL_BESTPRACTISE;

  $('.cms-panel').entwine({

    WidthExpanded: null,

    WidthCollapsed: null,

    canSetCookie: function canSetCookie() {
      return $.cookie !== void 0 && this.attr('id') !== void 0;
    },

    getPersistedCollapsedState: function getPersistedCollapsedState() {
      var isCollapsed, cookieValue;

      if (this.canSetCookie()) {
        cookieValue = $.cookie('cms-panel-collapsed-' + this.attr('id'));

        if (cookieValue !== void 0 && cookieValue !== null) {
          isCollapsed = cookieValue === 'true';
        }
      }

      return isCollapsed;
    },

    setPersistedCollapsedState: function setPersistedCollapsedState(newState) {
      if (this.canSetCookie()) {
        $.cookie('cms-panel-collapsed-' + this.attr('id'), newState, { path: '/', expires: 31 });
      }
    },

    clearPersistedCollapsedState: function clearPersistedCollapsedState() {
      if (this.canSetCookie()) {
        $.cookie('cms-panel-collapsed-' + this.attr('id'), '', { path: '/', expires: -1 });
      }
    },

    getInitialCollapsedState: function getInitialCollapsedState() {
      var isCollapsed = this.getPersistedCollapsedState();

      if (isCollapsed === void 0) {
        isCollapsed = this.hasClass('collapsed');
      }

      return isCollapsed;
    },

    onadd: function onadd() {
      var collapsedContent, container;

      if (!this.find('.cms-panel-content').length) throw new Exception('Content panel for ".cms-panel" not found');

      if (!this.find('.cms-panel-toggle').length) {
        container = $("<div class='toolbar toolbar--south cms-panel-toggle'></div>").append('<a class="toggle-expand" href="#" data-toggle="tooltip" title="' + i18n._t('Admin.EXPANDPANEL', 'Expand Panel') + '"><span>&raquo;</span></a>').append('<a class="toggle-collapse" href="#" data-toggle="tooltip" title="' + i18n._t('Admin.COLLAPSEPANEL', 'Collapse Panel') + '"><span>&laquo;</span></a>');

        this.append(container);
      }

      this.setWidthExpanded(this.find('.cms-panel-content').innerWidth());

      collapsedContent = this.find('.cms-panel-content-collapsed');
      this.setWidthCollapsed(collapsedContent.length ? collapsedContent.innerWidth() : this.find('.toggle-expand').innerWidth());

      this.togglePanel(!this.getInitialCollapsedState(), true, false);

      this._super();
    },

    togglePanel: function togglePanel(doExpand, silent, doSaveState) {
      var newWidth, collapsedContent;

      if (!silent) {
        this.trigger('beforetoggle.sspanel', doExpand);
        this.trigger(doExpand ? 'beforeexpand' : 'beforecollapse');
      }

      this.toggleClass('collapsed', !doExpand);
      newWidth = doExpand ? this.getWidthExpanded() : this.getWidthCollapsed();

      this.width(newWidth);
      collapsedContent = this.find('.cms-panel-content-collapsed');
      if (collapsedContent.length) {
        this.find('.cms-panel-content')[doExpand ? 'show' : 'hide']();
        this.find('.cms-panel-content-collapsed')[doExpand ? 'hide' : 'show']();
      }

      if (doSaveState !== false) {
        this.setPersistedCollapsedState(!doExpand);
      }

      this.trigger('toggle', doExpand);
      this.trigger(doExpand ? 'expand' : 'collapse');
    },

    expandPanel: function expandPanel(force) {
      if (!force && !this.hasClass('collapsed')) return;

      this.togglePanel(true);
    },

    collapsePanel: function collapsePanel(force) {
      if (!force && this.hasClass('collapsed')) return;

      this.togglePanel(false);
    }
  });

  $('.cms-panel.collapsed .cms-panel-toggle').entwine({
    onclick: function onclick(e) {
      this.expandPanel();
      e.preventDefault();
    }
  });

  $('.cms-panel *').entwine({
    getPanel: function getPanel() {
      return this.parents('.cms-panel:first');
    }
  });

  $('.cms-panel .toggle-expand').entwine({
    onclick: function onclick(e) {
      e.preventDefault();
      e.stopPropagation();

      this.getPanel().expandPanel();

      this._super(e);
    }
  });

  $('.cms-panel .toggle-collapse').entwine({
    onclick: function onclick(e) {
      e.preventDefault();
      e.stopPropagation();

      this.getPanel().collapsePanel();

      this._super(e);
    }
  });

  $('.cms-content-tools.collapsed').entwine({
    onclick: function onclick(e) {
      this.expandPanel();
      this._super(e);
    }
  });
});

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss.preview', function ($) {
  $('.cms-preview').entwine({
    AllowedStates: ['StageLink', 'LiveLink', 'ArchiveLink'],

    CurrentStateName: null,

    CurrentSizeName: 'auto',

    IsPreviewEnabled: false,

    DefaultMode: 'split',

    Sizes: {
      auto: {
        width: '100%',
        height: '100%'
      },
      mobile: {
        width: '335px',
        height: '568px'
      },
      mobileLandscape: {
        width: '583px',
        height: '320px'
      },
      tablet: {
        width: '783px',
        height: '1024px'
      },
      tabletLandscape: {
        width: '1039px',
        height: '768px'
      },
      desktop: {
        width: '1024px',
        height: '800px'
      }
    },

    changeState: function changeState(stateName, save) {
      var self = this,
          states = this._getNavigatorStates();
      if (save !== false) {
        $.each(states, function (index, state) {
          self.saveState('state', stateName);
        });
      }

      this.setCurrentStateName(stateName);
      this._loadCurrentState();
      this.redraw();

      return this;
    },

    changeMode: function changeMode(modeName, save) {
      var container = $('.cms-container').entwine('.ss');

      if (modeName == 'split') {
        container.splitViewMode();
        this.setIsPreviewEnabled(true);
        this._loadCurrentState();
      } else if (modeName == 'content') {
        container.contentViewMode();
        this.setIsPreviewEnabled(false);
      } else if (modeName == 'preview') {
        container.previewMode();
        this.setIsPreviewEnabled(true);
        this._loadCurrentState();
      } else {
        throw 'Invalid mode: ' + modeName;
      }

      if (save !== false) this.saveState('mode', modeName);

      this.redraw();

      return this;
    },

    changeSize: function changeSize(sizeName) {
      var sizes = this.getSizes();

      this.setCurrentSizeName(sizeName);
      this.removeClass('auto desktop tablet mobile').addClass(sizeName);

      this.saveState('size', sizeName);

      this.redraw();

      return this;
    },

    redraw: function redraw() {

      if (window.debug) console.log('redraw', this.attr('class'), this.get(0));

      var currentStateName = this.getCurrentStateName();
      if (currentStateName) {
        this.find('.cms-preview-states').changeVisibleState(currentStateName);
      }

      var layoutOptions = $('.cms-container').entwine('.ss').getLayoutOptions();
      if (layoutOptions) {
        $('.preview-mode-selector').changeVisibleMode(layoutOptions.mode);
      }

      var currentSizeName = this.getCurrentSizeName();
      if (currentSizeName) {
        this.find('.preview-size-selector').changeVisibleSize(this.getCurrentSizeName());
      }

      return this;
    },

    saveState: function saveState(name, value) {
      if (this._supportsLocalStorage()) window.localStorage.setItem('cms-preview-state-' + name, value);
    },

    loadState: function loadState(name) {
      if (this._supportsLocalStorage()) return window.localStorage.getItem('cms-preview-state-' + name);
    },

    disablePreview: function disablePreview() {
      this.setPendingURL(null);
      this._loadUrl('about:blank');
      this._block();
      this.changeMode('content', false);
      this.setIsPreviewEnabled(false);
      return this;
    },

    enablePreview: function enablePreview() {
      if (!this.getIsPreviewEnabled()) {
        this.setIsPreviewEnabled(true);

        if ($.browser.msie && $.browser.version.slice(0, 3) <= 7) {
          this.changeMode('content');
        } else {
          this.changeMode(this.getDefaultMode(), false);
        }
      }
      return this;
    },

    getOrAppendFontFixStyleElement: function getOrAppendFontFixStyleElement() {
      var style = $('#FontFixStyleElement');
      if (!style.length) {
        style = $('<style type="text/css" id="FontFixStyleElement" disabled="disabled">' + ':before,:after{content:none !important}' + '</style>').appendTo('head');
      }

      return style;
    },

    onadd: function onadd() {
      var self = this,
          iframe = this.find('iframe');

      iframe.addClass('center');
      iframe.bind('load', function () {
        self._adjustIframeForPreview();

        self._loadCurrentPage();

        $(this).removeClass('loading');
      });

      if ($.browser.msie && 8 === parseInt($.browser.version, 10)) {
        iframe.bind('readystatechange', function (e) {
          if (iframe[0].readyState == 'interactive') {
            self.getOrAppendFontFixStyleElement().removeAttr('disabled');
            setTimeout(function () {
              self.getOrAppendFontFixStyleElement().attr('disabled', 'disabled');
            }, 0);
          }
        });
      }

      this._unblock();

      this.disablePreview();

      this._super();
    },

    _supportsLocalStorage: function _supportsLocalStorage() {
      var uid = new Date();
      var storage;
      var result;
      try {
        (storage = window.localStorage).setItem(uid, uid);
        result = storage.getItem(uid) == uid;
        storage.removeItem(uid);
        return result && storage;
      } catch (exception) {
        console.warn('localStorge is not available due to current browser / system settings.');
      }
    },

    onforcecontent: function onforcecontent() {
      this.changeMode('content', false);
    },

    onenable: function onenable() {
      var $viewModeSelector = $('.preview-mode-selector');

      $viewModeSelector.removeClass('split-disabled');
      $viewModeSelector.find('.disabled-tooltip').hide();
    },

    ondisable: function ondisable() {
      var $viewModeSelector = $('.preview-mode-selector');

      $viewModeSelector.addClass('split-disabled');
      $viewModeSelector.find('.disabled-tooltip').show();
    },

    _block: function _block() {
      this.find('.preview-note').show();
      this.find('.cms-preview-overlay').show();
      return this;
    },

    _unblock: function _unblock() {
      this.find('.preview-note').hide();
      this.find('.cms-preview-overlay').hide();
      return this;
    },

    _initialiseFromContent: function _initialiseFromContent() {
      var mode, size;

      if (!$('.cms-previewable').length) {
        this.disablePreview();
      } else {
        mode = this.loadState('mode');
        size = this.loadState('size');

        this._moveNavigator();
        if (!mode || mode != 'content') {
          this.enablePreview();
          this._loadCurrentState();
        }
        this.redraw();

        if (mode) this.changeMode(mode);
        if (size) this.changeSize(size);
      }
      return this;
    },

    'from .cms-container': {
      onafterstatechange: function onafterstatechange(e, data) {
        if (data.xhr.getResponseHeader('X-ControllerURL')) return;

        this._initialiseFromContent();
      }
    },

    PendingURL: null,

    oncolumnvisibilitychanged: function oncolumnvisibilitychanged() {
      var url = this.getPendingURL();
      if (url && !this.is('.column-hidden')) {
        this.setPendingURL(null);
        this._loadUrl(url);
        this._unblock();
      }
    },

    'from .cms-container .cms-edit-form': {
      onaftersubmitform: function onaftersubmitform() {
        this._initialiseFromContent();
      }
    },

    _loadUrl: function _loadUrl(url) {
      this.find('iframe').addClass('loading').attr('src', url);
      return this;
    },

    _getNavigatorStates: function _getNavigatorStates() {
      var urlMap = $.map(this.getAllowedStates(), function (name) {
        var stateLink = $('.cms-preview-states .state-name[data-name=' + name + ']');
        if (stateLink.length) {
          return {
            name: name,
            url: stateLink.attr('href'),
            active: stateLink.hasClass('active')
          };
        } else {
          return null;
        }
      });

      return urlMap;
    },

    _loadCurrentState: function _loadCurrentState() {
      if (!this.getIsPreviewEnabled()) return this;

      var states = this._getNavigatorStates();
      var currentStateName = this.getCurrentStateName();
      var currentState = null;

      if (states) {
        currentState = $.grep(states, function (state, index) {
          return currentStateName === state.name || !currentStateName && state.active;
        });
      }

      var url = null;

      if (currentState[0]) {
        url = currentState[0].url;
      } else if (states.length) {
        this.setCurrentStateName(states[0].name);
        url = states[0].url;
      } else {
        this.setCurrentStateName(null);
      }

      if (url) {
        var urlFrag = url.split('#');
        var urlBits = urlFrag.shift().split(/[?&]/);
        var urlBase = urlBits.shift();
        urlBits.push('CMSPreview=1');
        urlFrag = urlFrag.length ? '#' + urlFrag.join('#') : '';
        url = urlBase + '?' + urlBits.join('&') + urlFrag;
      }

      if (this.is('.column-hidden')) {
        this.setPendingURL(url);
        this._loadUrl('about:blank');
        this._block();
      } else {
        this.setPendingURL(null);

        if (url) {
          this._loadUrl(url);
          this._unblock();
        } else {
          this._block();
        }
      }

      return this;
    },

    _moveNavigator: function _moveNavigator() {
      var previewEl = $('.cms-preview .cms-preview-controls');
      var navigatorEl = $('.cms-edit-form .cms-navigator');

      if (navigatorEl.length && previewEl.length) {
        previewEl.html($('.cms-edit-form .cms-navigator').detach());
      } else {
        this._block();
      }
    },

    _loadCurrentPage: function _loadCurrentPage() {
      if (!this.getIsPreviewEnabled()) return;

      var doc,
          containerEl = $('.cms-container');
      try {
        doc = this.find('iframe')[0].contentDocument;
      } catch (e) {
        console.warn('Unable to access iframe, possible https mis-match');
      }
      if (!doc) {
        return;
      }

      var id = $(doc).find('meta[name=x-page-id]').attr('content');
      var editLink = $(doc).find('meta[name=x-cms-edit-link]').attr('content');
      var contentPanel = $('.cms-content');

      if (id && contentPanel.find(':input[name=ID]').val() != id) {
        $('.cms-container').entwine('.ss').loadPanel(editLink);
      }
    },

    _adjustIframeForPreview: function _adjustIframeForPreview() {
      var iframe = this.find('iframe')[0],
          doc;
      if (!iframe) {
        return;
      }

      try {
        doc = iframe.contentDocument;
      } catch (e) {
        console.warn('Unable to access iframe, possible https mis-match');
      }
      if (!doc) {
        return;
      }

      var links = doc.getElementsByTagName('A');
      for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');
        if (!href) continue;

        if (href.match(/^http:\/\//)) links[i].setAttribute('target', '_blank');
      }

      var navi = doc.getElementById('SilverStripeNavigator');
      if (navi) navi.style.display = 'none';
      var naviMsg = doc.getElementById('SilverStripeNavigatorMessage');
      if (naviMsg) naviMsg.style.display = 'none';

      this.trigger('afterIframeAdjustedForPreview', [doc]);
    }
  });

  $('.cms-edit-form').entwine({
    onadd: function onadd() {
      this._super();
      $('.cms-preview')._initialiseFromContent();
    }
  });

  $('.cms-preview-states').entwine({
    changeVisibleState: function changeVisibleState(state) {
      this.find('[data-name="' + state + '"]').addClass('active').siblings().removeClass('active');
    }
  });

  $('.cms-preview-states .state-name').entwine({
    onclick: function onclick(e) {
      if (e.which == 1) {
        var targetStateName = $(this).attr('data-name');

        this.addClass('active').siblings().removeClass('active');

        $('.cms-preview').changeState(targetStateName);

        e.preventDefault();
      }
    }
  });

  $('.preview-mode-selector').entwine({
    changeVisibleMode: function changeVisibleMode(mode) {
      this.find('select').val(mode).trigger('chosen:updated')._addIcon();
    }
  });

  $('.preview-mode-selector select').entwine({
    onchange: function onchange(e) {
      this._super(e);
      e.preventDefault();

      var targetStateName = $(this).val();
      $('.cms-preview').changeMode(targetStateName);
    }
  });

  $('.cms-container--content-mode').entwine({
    onmatch: function onmatch() {
      if ($('.cms-preview .result-selected').hasClass('font-icon-columns')) {
        statusMessage(_i18n2.default._t('Admin.DISABLESPLITVIEW', "Screen too small to show site preview in split mode"), "error");
      }
      this._super();
    }
  });

  $('.preview-size-selector').entwine({
    changeVisibleSize: function changeVisibleSize(size) {
      this.find('select').val(size).trigger('chosen:updated')._addIcon();
    }
  });

  $('.preview-size-selector select').entwine({
    onchange: function onchange(e) {
      e.preventDefault();

      var targetSizeName = $(this).val();
      $('.cms-preview').changeSize(targetSizeName);
    }
  });

  $('.preview-selector select.preview-dropdown').entwine({
    'onchosen:ready': function onchosenReady() {
      this._super();
      this._addIcon();
    },

    _addIcon: function _addIcon() {
      var selected = this.find(':selected');
      var iconClass = selected.attr('data-icon');

      var target = this.parent().find('.chosen-container a.chosen-single');
      var oldIcon = target.attr('data-icon');
      if (typeof oldIcon !== 'undefined') {
        target.removeClass(oldIcon);
      }
      target.addClass(iconClass);
      target.attr('data-icon', iconClass);

      return this;
    }
  });

  $('.preview-mode-selector .chosen-drop li:last-child').entwine({
    onmatch: function onmatch() {
      if ($('.preview-mode-selector').hasClass('split-disabled')) {
        this.parent().append('<div class="disabled-tooltip"></div>');
      } else {
        this.parent().append('<div class="disabled-tooltip" style="display: none;"></div>');
      }
    }
  });

  $('.preview-device-outer').entwine({
    onclick: function onclick() {
      this.parent('.preview__device').toggleClass('rotate');
    }
  });
});

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss.tree', function ($) {

  $('.cms-tree').entwine({

    Hints: null,

    IsUpdatingTree: false,

    IsLoaded: false,

    onadd: function onadd() {
      this._super();

      if ($.isNumeric(this.data('jstree_instance_id'))) return;

      var hints = this.attr('data-hints');
      if (hints) this.setHints($.parseJSON(hints));

      var self = this;
      this.jstree(this.getTreeConfig()).bind('loaded.jstree', function (e, data) {
        self.setIsLoaded(true);

        data.inst._set_settings({ 'html_data': { 'ajax': {
              'url': self.data('urlTree'),
              'data': function data(node) {
                var params = self.data('searchparams') || [];

                params = $.grep(params, function (n, i) {
                  return n.name != 'ID' && n.name != 'value';
                });
                params.push({ name: 'ID', value: $(node).data("id") ? $(node).data("id") : 0 });
                params.push({ name: 'ajax', value: 1 });
                return params;
              }
            } } });

        self.updateFromEditForm();
        self.css('visibility', 'visible');

        data.inst.hide_checkboxes();
      }).bind('before.jstree', function (e, data) {
        if (data.func == 'start_drag') {
          if (!self.hasClass('draggable') || self.hasClass('multiselect')) {
            e.stopImmediatePropagation();
            return false;
          }
        }

        if ($.inArray(data.func, ['check_node', 'uncheck_node'])) {
          var node = $(data.args[0]).parents('li:first');
          var allowedChildren = node.find('li:not(.disabled)');

          if (node.hasClass('disabled') && allowedChildren == 0) {
            e.stopImmediatePropagation();
            return false;
          }
        }
      }).bind('move_node.jstree', function (e, data) {
        if (self.getIsUpdatingTree()) return;

        var movedNode = data.rslt.o,
            newParentNode = data.rslt.np,
            oldParentNode = data.inst._get_parent(movedNode),
            newParentID = $(newParentNode).data('id') || 0,
            nodeID = $(movedNode).data('id');
        var siblingIDs = $.map($(movedNode).siblings().andSelf(), function (el) {
          return $(el).data('id');
        });

        $.ajax({
          'url': $.path.addSearchParams(self.data('urlSavetreenode'), self.data('extraParams')),
          'type': 'POST',
          'data': {
            ID: nodeID,
            ParentID: newParentID,
            SiblingIDs: siblingIDs
          },
          success: function success() {
            if ($('.cms-edit-form :input[name=ID]').val() == nodeID) {
              $('.cms-edit-form :input[name=ParentID]').val(newParentID);
            }
            self.updateNodesFromServer([nodeID]);
          },
          statusCode: {
            403: function _() {
              $.jstree.rollback(data.rlbk);
            }
          }
        });
      }).bind('select_node.jstree check_node.jstree uncheck_node.jstree', function (e, data) {
        $(document).triggerHandler(e, data);
      });
    },
    onremove: function onremove() {
      this.jstree('destroy');
      this._super();
    },

    'from .cms-container': {
      onafterstatechange: function onafterstatechange(e) {
        this.updateFromEditForm();
      }
    },

    'from .cms-container form': {
      onaftersubmitform: function onaftersubmitform(e) {
        var id = $('.cms-edit-form :input[name=ID]').val();

        this.updateNodesFromServer([id]);
      }
    },

    getTreeConfig: function getTreeConfig() {
      var self = this;
      return {
        'core': {
          'initially_open': ['record-0'],
          'animation': 0,
          'html_titles': true
        },
        'html_data': {},
        'ui': {
          "select_limit": 1,
          'initially_select': [this.find('.current').attr('id')]
        },
        "crrm": {
          'move': {
            'check_move': function check_move(data) {
              var movedNode = $(data.o),
                  newParent = $(data.np),
                  isMovedOntoContainer = data.ot.get_container()[0] == data.np[0],
                  movedNodeClass = movedNode.getClassname(),
                  newParentClass = newParent.getClassname(),
                  hints = self.getHints(),
                  disallowedChildren = [],
                  hintKey = newParentClass ? newParentClass : 'Root',
                  hint = hints && typeof hints[hintKey] != 'undefined' ? hints[hintKey] : null;

              if (hint && movedNode.attr('class').match(/VirtualPage-([^\s]*)/)) movedNodeClass = RegExp.$1;

              if (hint) disallowedChildren = typeof hint.disallowedChildren != 'undefined' ? hint.disallowedChildren : [];
              var isAllowed = movedNode.data('id') !== 0 && !movedNode.hasClass('status-archived') && (!isMovedOntoContainer || data.p == 'inside') && !newParent.hasClass('nochildren') && (!disallowedChildren.length || $.inArray(movedNodeClass, disallowedChildren) == -1);

              return isAllowed;
            }
          }
        },
        'dnd': {
          "drop_target": false,
          "drag_target": false
        },
        'checkbox': {
          'two_state': true
        },
        'themes': {
          'theme': 'apple',
          'url': $('body').data('frameworkpath') + '/admin/thirdparty/jstree/themes/apple/style.css'
        },

        'plugins': ['html_data', 'ui', 'dnd', 'crrm', 'themes', 'checkbox']
      };
    },

    search: function search(params, callback) {
      if (params) this.data('searchparams', params);else this.removeData('searchparams');
      this.jstree('refresh', -1, callback);
    },

    getNodeByID: function getNodeByID(id) {
      return this.find('*[data-id=' + id + ']');
    },

    createNode: function createNode(html, data, callback) {
      var self = this,
          parentNode = data.ParentID !== void 0 ? self.getNodeByID(data.ParentID) : false,
          newNode = $(html);

      var properties = { data: '' };
      if (newNode.hasClass('jstree-open')) {
        properties.state = 'open';
      } else if (newNode.hasClass('jstree-closed')) {
        properties.state = 'closed';
      }
      this.jstree('create_node', parentNode.length ? parentNode : -1, 'last', properties, function (node) {
        var origClasses = node.attr('class');

        for (var i = 0; i < newNode[0].attributes.length; i++) {
          var attr = newNode[0].attributes[i];
          node.attr(attr.name, attr.value);
        }

        node.addClass(origClasses).html(newNode.html());
        callback(node);
      });
    },

    updateNode: function updateNode(node, html, data) {
      var self = this,
          newNode = $(html);

      var nextNode = data.NextID ? this.getNodeByID(data.NextID) : false;
      var prevNode = data.PrevID ? this.getNodeByID(data.PrevID) : false;
      var parentNode = data.ParentID ? this.getNodeByID(data.ParentID) : false;

      $.each(['id', 'style', 'class', 'data-pagetype'], function (i, attrName) {
        node.attr(attrName, newNode.attr(attrName));
      });

      var origChildren = node.children('ul').detach();
      node.html(newNode.html()).append(origChildren);

      if (nextNode && nextNode.length) {
        this.jstree('move_node', node, nextNode, 'before');
      } else if (prevNode && prevNode.length) {
        this.jstree('move_node', node, prevNode, 'after');
      } else {
        this.jstree('move_node', node, parentNode.length ? parentNode : -1);
      }
    },

    updateFromEditForm: function updateFromEditForm() {
      var node,
          id = $('.cms-edit-form :input[name=ID]').val();
      if (id) {
        node = this.getNodeByID(id);
        if (node.length) {
          this.jstree('deselect_all');
          this.jstree('select_node', node);
        } else {
          this.updateNodesFromServer([id]);
        }
      } else {
        this.jstree('deselect_all');
      }
    },

    updateNodesFromServer: function updateNodesFromServer(ids) {
      if (this.getIsUpdatingTree() || !this.getIsLoaded()) return;

      var self = this,
          i,
          includesNewNode = false;
      this.setIsUpdatingTree(true);
      self.jstree('save_selected');

      var correctStateFn = function correctStateFn(node) {
        self.getNodeByID(node.data('id')).not(node).remove();

        self.jstree('deselect_all');
        self.jstree('select_node', node);
      };

      self.jstree('open_node', this.getNodeByID(0));
      self.jstree('save_opened');
      self.jstree('save_selected');

      $.ajax({
        url: $.path.addSearchParams(this.data('urlUpdatetreenodes'), 'ids=' + ids.join(',')),
        dataType: 'json',
        success: function success(data, xhr) {
          $.each(data, function (nodeId, nodeData) {
            var node = self.getNodeByID(nodeId);

            if (!nodeData) {
              self.jstree('delete_node', node);
              return;
            }

            if (node.length) {
              self.updateNode(node, nodeData.html, nodeData);
              setTimeout(function () {
                correctStateFn(node);
              }, 500);
            } else {
              includesNewNode = true;

              if (nodeData.ParentID && !self.find('li[data-id=' + nodeData.ParentID + ']').length) {
                self.jstree('load_node', -1, function () {
                  newNode = self.find('li[data-id=' + nodeId + ']');
                  correctStateFn(newNode);
                });
              } else {
                self.createNode(nodeData.html, nodeData, function (newNode) {
                  correctStateFn(newNode);
                });
              }
            }
          });

          if (!includesNewNode) {
            self.jstree('deselect_all');
            self.jstree('reselect');
            self.jstree('reopen');
          }
        },
        complete: function complete() {
          self.setIsUpdatingTree(false);
        }
      });
    }

  });

  $('.cms-tree.multiple').entwine({
    onmatch: function onmatch() {
      this._super();
      this.jstree('show_checkboxes');
    },
    onunmatch: function onunmatch() {
      this._super();
      this.jstree('uncheck_all');
      this.jstree('hide_checkboxes');
    },

    getSelectedIDs: function getSelectedIDs() {
      return $(this).jstree('get_checked').not('.disabled').map(function () {
        return $(this).data('id');
      }).get();
    }
  });

  $('.cms-tree li').entwine({
    setEnabled: function setEnabled(bool) {
      this.toggleClass('disabled', !bool);
    },

    getClassname: function getClassname() {
      var matches = this.attr('class').match(/class-([^\s]*)/i);
      return matches ? matches[1] : '';
    },

    getID: function getID() {
      return this.data('id');
    }
  });
});

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.TreeDropdownField').entwine({
    'from .cms-container form': {
      onaftersubmitform: function onaftersubmitform(e) {
        this.find('.tree-holder').empty();
        this._super();
      }
    }
  });
});

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(250);

_jquery2.default.entwine('ss', function ($) {
  $('.cms-content-tools #Form_SearchForm').entwine({
    onsubmit: function onsubmit(e) {
      this.trigger('beforeSubmit');
    }
  });

  $('.importSpec').entwine({
    onmatch: function onmatch() {
      this.find('div.details').hide();
      this.find('a.detailsLink').click(function () {
        $('#' + $(this).attr('href').replace(/.*#/, '')).slideToggle();
        return false;
      });

      this._super();
    },
    onunmatch: function onunmatch() {
      this._super();
    }
  });

  $('.cms .btn.clear-search').entwine({
    onclick: function onclick(e) {
      e.preventDefault();
      var container = this.parents('.cms-container');
      container.loadPanel(this.attr('href'), '', {}, true, false);
    }
  });
});

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(250);
__webpack_require__(963);

var refreshAfterImport = function refreshAfterImport(e) {
  var existingFormMessage = (0, _jquery2.default)((0, _jquery2.default)(this).contents()).find('.message');
  if (existingFormMessage && existingFormMessage.html()) {
    var memberTableField = (0, _jquery2.default)(window.parent.document).find('#Form_EditForm_Members').get(0);
    if (memberTableField) memberTableField.refresh();

    var tree = (0, _jquery2.default)(window.parent.document).find('.cms-tree').get(0);
    if (tree) tree.reload();
  }
};

(0, _jquery2.default)('#MemberImportFormIframe, #GroupImportFormIframe').entwine({
  onadd: function onadd() {
    this._super();

    (0, _jquery2.default)(this).bind('load', refreshAfterImport);
  }
});

_jquery2.default.entwine('ss', function ($) {
  $('.permissioncheckboxset .checkbox[value=ADMIN]').entwine({
    onmatch: function onmatch() {
      this.toggleCheckboxes();

      this._super();
    },
    onunmatch: function onunmatch() {
      this._super();
    },

    onclick: function onclick(e) {
      this.toggleCheckboxes();
    },

    toggleCheckboxes: function toggleCheckboxes() {
      var self = this,
          checkboxes = this.parents('.field:eq(0)').find('.checkbox').not(this);

      if (this.is(':checked')) {
        checkboxes.each(function () {
          $(this).data('SecurityAdmin.oldChecked', $(this).is(':checked'));
          $(this).data('SecurityAdmin.oldDisabled', $(this).is(':disabled'));
          $(this).prop('disabled', true);
          $(this).prop('checked', true);
        });
      } else {
        checkboxes.each(function () {
          $(this).prop('checked', $(this).data('SecurityAdmin.oldChecked'));
          $(this).prop('disabled', $(this).data('SecurityAdmin.oldDisabled'));
        });
      }
    }
  });
});

/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)('ul.SelectionGroup input.selector, ul.selection-group input.selector').live('click', function () {
    var li = (0, _jquery2.default)(this).closest('li');
    li.addClass('selected');

    var prev = li.prevAll('li.selected');
    if (prev.length) {
      prev.removeClass('selected');
    }
    var next = li.nextAll('li.selected');
    if (next.length) {
      next.removeClass('selected');
    }

    (0, _jquery2.default)(this).focus();
  });
});

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(151);
__webpack_require__(401);
__webpack_require__(150);

_jquery2.default.entwine('ss', function ($) {
	$('.ss-tabset').entwine({
		IgnoreTabState: false,

		onadd: function onadd() {
			var hash = window.location.hash;

			this.redrawTabs();

			if (hash !== '') {
				this.openTabFromURL(hash);
			}

			this._super();
		},

		onremove: function onremove() {
			if (this.data('tabs')) this.tabs('destroy');
			this._super();
		},

		redrawTabs: function redrawTabs() {
			this.rewriteHashlinks();
			this.tabs();
		},

		openTabFromURL: function openTabFromURL(hash) {
			var $trigger;

			$.each(this.find('.ui-tabs-anchor'), function () {
				if (this.href.indexOf(hash) !== -1 && $(hash).length === 1) {
					$trigger = $(this);
					return false;
				}
			});

			if ($trigger === void 0) {
				return;
			}

			$(document).ready('ajaxComplete', function () {
				$trigger.click();
			});
		},

		rewriteHashlinks: function rewriteHashlinks() {
			$(this).find('ul a').each(function () {
				if (!$(this).attr('href')) return;

				var matches = $(this).attr('href').match(/#.*/);
				if (!matches) return;
				$(this).attr('href', document.location.href.replace(/#.*/, '') + matches[0]);
			});
		}
	});

	$('.ui-tabs-active .ui-tabs-anchor').entwine({
		onmatch: function onmatch() {
			this.addClass('nav-link active');
		},
		onunmatch: function onunmatch() {
			this.removeClass('active');
		}
	});
});

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(151);

_jquery2.default.entwine('ss', function ($) {
	$('.ss-toggle').entwine({
		onadd: function onadd() {
			this._super();

			this.accordion({
				heightStyle: "content",
				collapsible: true,
				active: this.hasClass("ss-toggle-start-closed") ? false : 0
			});
		},
		onremove: function onremove() {
			if (this.data('accordion')) this.accordion('destroy');
			this._super();
		},

		getTabSet: function getTabSet() {
			return this.closest(".ss-tabset");
		},

		fromTabSet: {
			ontabsshow: function ontabsshow() {
				this.accordion("resize");
			}
		}
	});
});

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _schemaFieldValues = __webpack_require__(179);

var _TreeDropdownField = __webpack_require__(782);

var _Injector = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.js-injector-boot .TreeDropdownField').entwine({
    Value: null,
    Timer: null,
    Component: null,

    onmatch: function onmatch() {
      this._super();

      var cmsContent = this.closest('.cms-content').attr('id');
      var context = cmsContent ? { context: cmsContent } : {};

      var TreeDropdownField = (0, _Injector.loadComponent)('TreeDropdownField', context);
      this.setComponent(TreeDropdownField);

      var state = this.data('state') || {};
      var schema = this.data('schema') || {};
      var isMultiple = schema.data && schema.data.multiple;

      if (isMultiple) {
        this.setValue(state.value && state.value !== _TreeDropdownField.MULTI_EMPTY_VALUE ? state.value.map(function (next) {
          return Number(next);
        }) : []);
      } else {
        this.setValue(state.value ? Number(state.value) : '');
      }

      this.refresh();
    },
    onunmatch: function onunmatch() {
      this._super();

      var container = this[0];
      if (container) {
        _reactDom2.default.unmountComponentAtNode(container);
      }
    },
    refresh: function refresh() {
      var _this = this;

      var props = this.getAttributes();

      var onChange = function onChange(value) {
        _this.setValue(value);

        _this.refresh();

        clearTimeout(_this.getTimer());
        var timer = setTimeout(function () {
          _this.find('input').trigger('change');
        }, 0);
        _this.setTimer(timer);
      };

      var TreeDropdownField = this.getComponent();

      _reactDom2.default.render(_react2.default.createElement(TreeDropdownField, _extends({}, props, {
        onChange: onChange,
        value: this.getValue(),
        noHolder: true
      })), this[0]);
    },
    getAttributes: function getAttributes() {
      var state = this.data('state');
      var schema = this.data('schema');
      return (0, _schemaFieldValues.schemaMerge)(schema, state);
    }
  });
});

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $window = (0, _jquery2.default)(window),
    $html = (0, _jquery2.default)('html'),
    $head = (0, _jquery2.default)('head'),
    path = {
  urlParseRE: /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,

  parseUrl: function parseUrl(url) {
    if (_jquery2.default.type(url) === "object") {
      return url;
    }

    var matches = path.urlParseRE.exec(url || "") || [];

    return {
      href: matches[0] || "",
      hrefNoHash: matches[1] || "",
      hrefNoSearch: matches[2] || "",
      domain: matches[3] || "",
      protocol: matches[4] || "",
      doubleSlash: matches[5] || "",
      authority: matches[6] || "",
      username: matches[8] || "",
      password: matches[9] || "",
      host: matches[10] || "",
      hostname: matches[11] || "",
      port: matches[12] || "",
      pathname: matches[13] || "",
      directory: matches[14] || "",
      filename: matches[15] || "",
      search: matches[16] || "",
      hash: matches[17] || ""
    };
  },

  makePathAbsolute: function makePathAbsolute(relPath, absPath) {
    if (relPath && relPath.charAt(0) === "/") {
      return relPath;
    }

    relPath = relPath || "";
    absPath = absPath ? absPath.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "";

    var absStack = absPath ? absPath.split("/") : [],
        relStack = relPath.split("/");
    for (var i = 0; i < relStack.length; i++) {
      var d = relStack[i];
      switch (d) {
        case ".":
          break;
        case "..":
          if (absStack.length) {
            absStack.pop();
          }
          break;
        default:
          absStack.push(d);
          break;
      }
    }
    return "/" + absStack.join("/");
  },

  isSameDomain: function isSameDomain(absUrl1, absUrl2) {
    return path.parseUrl(absUrl1).domain === path.parseUrl(absUrl2).domain;
  },

  isRelativeUrl: function isRelativeUrl(url) {
    return path.parseUrl(url).protocol === "";
  },

  isAbsoluteUrl: function isAbsoluteUrl(url) {
    return path.parseUrl(url).protocol !== "";
  },

  makeUrlAbsolute: function makeUrlAbsolute(relUrl, absUrl) {
    if (!path.isRelativeUrl(relUrl)) {
      return relUrl;
    }

    var relObj = path.parseUrl(relUrl),
        absObj = path.parseUrl(absUrl),
        protocol = relObj.protocol || absObj.protocol,
        doubleSlash = relObj.protocol ? relObj.doubleSlash : relObj.doubleSlash || absObj.doubleSlash,
        authority = relObj.authority || absObj.authority,
        hasPath = relObj.pathname !== "",
        pathname = path.makePathAbsolute(relObj.pathname || absObj.filename, absObj.pathname),
        search = relObj.search || !hasPath && absObj.search || "",
        hash = relObj.hash;

    return protocol + doubleSlash + authority + pathname + search + hash;
  },

  addSearchParams: function addSearchParams(url, params) {
    var u = path.parseUrl(url),
        params = typeof params === "string" ? path.convertSearchToArray(params) : params,
        newParams = _jquery2.default.extend(path.convertSearchToArray(u.search), params),
        paramStr = _jquery2.default.param(newParams).replace(/\%2B/g, '+');

    return u.hrefNoSearch + '?' + paramStr + (u.hash || "");
  },

  getSearchParams: function getSearchParams(url) {
    var u = path.parseUrl(url);
    return path.convertSearchToArray(u.search);
  },

  convertSearchToArray: function convertSearchToArray(search) {
    var parts,
        i,
        tmp,
        params = {};
    search = search.replace(/^\?/, '');
    parts = search ? search.split('&') : [];
    for (i = 0; i < parts.length; i++) {
      tmp = parts[i].split('=');
      params[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp[1]);
    }
    return params;
  },

  convertUrlToDataUrl: function convertUrlToDataUrl(absUrl) {
    var u = path.parseUrl(absUrl);
    if (path.isEmbeddedPage(u)) {
      return u.hash.split(dialogHashKey)[0].replace(/^#/, "");
    } else if (path.isSameDomain(u, document)) {
      return u.hrefNoHash.replace(document.domain, "");
    }
    return absUrl;
  },

  get: function get(newPath) {
    if (newPath === undefined) {
      newPath = location.hash;
    }
    return path.stripHash(newPath).replace(/[^\/]*\.[^\/*]+$/, '');
  },

  getFilePath: function getFilePath(path) {
    var splitkey = '&' + _jquery2.default.mobile.subPageUrlKey;
    return path && path.split(splitkey)[0].split(dialogHashKey)[0];
  },

  set: function set(path) {
    location.hash = path;
  },

  isPath: function isPath(url) {
    return (/\//.test(url)
    );
  },

  clean: function clean(url) {
    return url.replace(document.domain, "");
  },

  stripHash: function stripHash(url) {
    return url.replace(/^#/, "");
  },

  cleanHash: function cleanHash(hash) {
    return path.stripHash(hash.replace(/\?.*$/, "").replace(dialogHashKey, ""));
  },

  isExternal: function isExternal(url) {
    var u = path.parseUrl(url);
    return u.protocol && u.domain !== document.domain ? true : false;
  },

  hasProtocol: function hasProtocol(url) {
    return (/^(:?\w+:)/.test(url)
    );
  }
};

_jquery2.default.path = path;

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Accordion"] = __webpack_require__(988);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["AccordionBlock"] = __webpack_require__(989);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Backend"] = __webpack_require__(1021);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Badge"] = __webpack_require__(990);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Breadcrumb"] = __webpack_require__(991);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["BreadcrumbsActions"] = __webpack_require__(1034);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Config"] = __webpack_require__(1022);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["DataFormat"] = __webpack_require__(1023);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FieldHolder"] = __webpack_require__(992);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FileSchemaModalHandler"] = __webpack_require__(1019);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Focusedzone"] = __webpack_require__(993);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Form"] = __webpack_require__(994);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FormAction"] = __webpack_require__(996);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FormAlert"] = __webpack_require__(997);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FormBuilder"] = __webpack_require__(998);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FormBuilderLoader"] = __webpack_require__(1017);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FormBuilderModal"] = __webpack_require__(999);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["FormConstants"] = __webpack_require__(995);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridField"] = __webpack_require__(1000);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridFieldCell"] = __webpack_require__(1001);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridFieldHeader"] = __webpack_require__(1002);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridFieldHeaderCell"] = __webpack_require__(1003);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridFieldRow"] = __webpack_require__(1004);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = DeepFreezeStrict;

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["GridFieldTable"] = __webpack_require__(1005);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["HiddenField"] = __webpack_require__(1006);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Injector"] = __webpack_require__(1024);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["InsertLinkModal"] = __webpack_require__(1018);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["ListGroup"] = __webpack_require__(1007);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["ListGroupItem"] = __webpack_require__(1008);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["LiteralField"] = __webpack_require__(1009);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 849:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["PopoverField"] = __webpack_require__(1010);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.mapHighlight = mapHighlight;
exports.default = castStringToElement;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapHighlight(haystack, needle, Tag) {
  var index = 0;
  var search = haystack;
  var results = [];
  var part = needle.toLocaleLowerCase();

  while (index !== -1) {
    index = search.toLocaleLowerCase().indexOf(part);

    if (index !== -1) {
      var next = index + needle.length;
      var start = search.substring(0, index);
      var found = search.substring(index, next);
      var end = search.substring(next);

      if (start.length) {
        results.push(start);
      }
      results.push(Tag ? _react2.default.createElement(
        Tag,
        { key: results.length / 2 },
        found
      ) : found);
      search = end;
    }
  }
  results.push(search);

  return results;
}

function castStringToElement(Container, value) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (value && typeof value.react !== 'undefined') {
    return _react2.default.createElement(
      Container,
      props,
      value.react
    );
  }

  if (value && typeof value.html !== 'undefined') {
    if (value.html !== null) {
      var html = { __html: value.html };
      return _react2.default.createElement(Container, _extends({}, props, { dangerouslySetInnerHTML: html }));
    }
    return null;
  }

  var body = null;
  if (value && typeof value.text !== 'undefined') {
    body = value.text;
  } else {
    body = value;
  }

  if (body && (typeof body === 'undefined' ? 'undefined' : _typeof(body)) === 'object') {
    throw new Error('Unsupported string value ' + JSON.stringify(body));
  }

  if (body !== null && typeof body !== 'undefined') {
    return _react2.default.createElement(
      Container,
      props,
      body
    );
  }
  return null;
}

/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Preview"] = __webpack_require__(1011);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["ReactRouteRegister"] = __webpack_require__(1025);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["RecordsActionTypes"] = __webpack_require__(1035);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["RecordsActions"] = __webpack_require__(1036);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Router"] = __webpack_require__(1026);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["SchemaActions"] = __webpack_require__(1037);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["ShortcodeSerialiser"] = __webpack_require__(1027);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["SilverStripeComponent"] = __webpack_require__(1028);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["TextField"] = __webpack_require__(1012);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["TinyMCEActionRegistrar"] = __webpack_require__(1029);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Toolbar"] = __webpack_require__(1013);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["TreeDropdownField"] = __webpack_require__(1014);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["TreeDropdownFieldMenu"] = __webpack_require__(1015);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["TreeDropdownFieldNode"] = __webpack_require__(1016);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["UnsavedFormsActions"] = __webpack_require__(1038);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["formatWrittenNumber"] = __webpack_require__(1030);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["getFormState"] = __webpack_require__(1031);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["reduxFieldReducer"] = __webpack_require__(1032);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["schemaFieldValues"] = __webpack_require__(1033);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(1942);

var _useBeforeUnload = __webpack_require__(312);

var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);

var _createBrowserHistory = __webpack_require__(308);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Config = __webpack_require__(778);

var _Config2 = _interopRequireDefault(_Config);

var _Router = __webpack_require__(1946);

var _Router2 = _interopRequireDefault(_Router);

var _ReactRouteRegister = __webpack_require__(1941);

var _ReactRouteRegister2 = _interopRequireDefault(_ReactRouteRegister);

var _App = __webpack_require__(959);

var _App2 = _interopRequireDefault(_App);

var _reactRouterRedux = __webpack_require__(781);

var _reactApollo = __webpack_require__(780);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _reduxForm = __webpack_require__(97);

var _getFormState = __webpack_require__(398);

var _getFormState2 = _interopRequireDefault(_getFormState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BootRoutes = function () {
  function BootRoutes(store, client) {
    _classCallCheck(this, BootRoutes);

    this.store = store;
    this.client = client;

    var base = _Config2.default.get('absoluteBaseUrl');
    _Router2.default.setAbsoluteBase(base);

    this.handleBeforeRoute = this.handleBeforeRoute.bind(this);
    this.handleBeforeUnload = this.handleBeforeUnload.bind(this);
  }

  _createClass(BootRoutes, [{
    key: 'setStore',
    value: function setStore(store) {
      this.store = store;
    }
  }, {
    key: 'setClient',
    value: function setClient(client) {
      this.client = client;
    }
  }, {
    key: 'start',
    value: function start(location) {
      if (this.matchesReactRoute(location)) {
        this.initReactRouter();
      } else {
        this.initLegacyRouter();
      }
    }
  }, {
    key: 'matchesReactRoute',
    value: function matchesReactRoute(location) {
      var sections = _Config2.default.get('sections');
      var currentPath = _Router2.default.resolveURLToBase(location).replace(/\/$/, '');

      return !!sections.find(function (section) {
        var route = _Router2.default.resolveURLToBase(section.url).replace(/\/$/, '');

        if (!section.reactRouter) {
          return false;
        }

        return currentPath.match(route);
      });
    }
  }, {
    key: 'initReactRouter',
    value: function initReactRouter() {
      _ReactRouteRegister2.default.updateRootRoute({
        component: _App2.default
      });
      var history = (0, _reactRouterRedux.syncHistoryWithStore)((0, _reactRouter.useRouterHistory)((0, _useBeforeUnload2.default)(_createBrowserHistory2.default))({
        basename: _Config2.default.get('baseUrl')
      }), this.store);
      history.listenBeforeUnload(this.handleBeforeUnload);
      history.listenBefore(this.handleBeforeRoute);

      _reactDom2.default.render(_react2.default.createElement(
        _reactApollo.ApolloProvider,
        { store: this.store, client: this.client },
        _react2.default.createElement(_reactRouter.Router, {
          history: history,
          routes: _ReactRouteRegister2.default.getRootRoute()
        })
      ), document.getElementsByClassName('cms-content')[0]);
    }
  }, {
    key: 'initLegacyRouter',
    value: function initLegacyRouter() {
      var _this = this;

      var sections = _Config2.default.get('sections');
      var store = this.store;

      (0, _Router2.default)('*', function (ctx, next) {
        var msg = _i18n2.default._t('Admin.CONFIRMUNSAVED', 'Are you sure you want to navigate away from this page?\n\n\n          WARNING: Your changes have not been saved.\n\n\n          Press OK to continue, or Cancel to stay on the current page.');

        if (!_this.shouldConfirmBeforeUnload() || window.confirm(msg)) {
          ctx.store = store;
          next();
        }
      });

      var lastPath = null;
      sections.forEach(function (section) {
        var route = _Router2.default.resolveURLToBase(section.url);
        route = route.replace(/\/$/, '');
        route = route + '(/*?)?';
        (0, _Router2.default)(route, function (ctx, next) {
          if (document.readyState !== 'complete' || ctx.init) {
            next();
            return;
          }

          if (!lastPath) {
            lastPath = window.location.pathname;
          }

          var forceReload = ctx.state && ctx.state.__forceReload;
          if (ctx.path !== lastPath || forceReload) {
            lastPath = ctx.path.replace(/#.*$/, '');
            (0, _jquery2.default)('.cms-container').entwine('ss').handleStateChange(null, ctx.state);
          }
        });
      });

      var currBeforeUnload = window.onbeforeunload;
      window.onbeforeunload = function () {
        if (_this.shouldConfirmBeforeUnload()) {
          return _i18n2.default._t('Admin.CONFIRMUNSAVEDSHORT', 'WARNING: Your changes have not been saved.');
        }

        if (typeof currBeforeUnload === 'function') {
          return currBeforeUnload();
        }

        return undefined;
      };

      _Router2.default.start();
    }
  }, {
    key: 'shouldConfirmBeforeUnload',
    value: function shouldConfirmBeforeUnload() {
      var state = this.store.getState();
      var forms = state.unsavedForms || [];
      var schemas = state.form.formSchemas;

      var changedForms = forms.filter(function (form) {
        var schema = Object.values(schemas).find(function (item) {
          return item.name === form.name;
        });

        var notify = schema && schema.state && schema.state.notifyUnsavedChanges;

        if (!notify) {
          return false;
        }

        return (0, _reduxForm.isDirty)(form.name, _getFormState2.default)(state);
      });

      return changedForms.length > 0;
    }
  }, {
    key: 'handleBeforeUnload',
    value: function handleBeforeUnload() {
      if (this.shouldConfirmBeforeUnload()) {
        return _i18n2.default._t('Admin.CONFIRMUNSAVEDSHORT', 'WARNING: Your changes have not been saved.');
      }

      return undefined;
    }
  }, {
    key: 'handleBeforeRoute',
    value: function handleBeforeRoute() {
      if (this.shouldConfirmBeforeUnload()) {
        return _i18n2.default._t('Admin.CONFIRMUNSAVED', 'Are you sure you want to navigate away\n          from this page?\n\nWARNING: Your changes have not been saved.\n\n\n          Press OK to continue, or Cancel to stay on the current page.');
      }

      return undefined;
    }
  }]);

  return BootRoutes;
}();

exports.default = BootRoutes;

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyDevtools;

var _redux = __webpack_require__(41);

function applyDevtools(middleware) {
  var composeExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  var devTools = window.__REDUX_DEVTOOLS_EXTENSION__ || window.devToolsExtension;

  if (typeof composeExtension === 'function') {
    return composeExtension(middleware);
  }
  if (typeof devTools === 'function') {
    return (0, _redux.compose)(middleware, devTools());
  }
  return middleware;
}

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Injector = __webpack_require__(39);

var _Injector2 = _interopRequireDefault(_Injector);

var _Validator = __webpack_require__(969);

var _Validator2 = _interopRequireDefault(_Validator);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _schemaFieldValues = __webpack_require__(179);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var togglePristineState = function togglePristineState(field) {
  var isPristine = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var classes = field.extraClass ? field.extraClass.split(' ').reduce(function (prev, className) {
    return _extends({}, prev, _defineProperty({}, className, true));
  }, {}) : {};
  if (typeof field.data.pristineClass === 'string') {
    classes[field.data.pristineClass] = isPristine;
  }
  if (typeof field.data.dirtyClass === 'string') {
    classes[field.data.dirtyClass] = !isPristine;
  }

  var customTitle = isPristine ? field.data.pristineTitle : field.data.dirtyTitle;
  var customIcon = isPristine ? field.data.pristineIcon : field.data.dirtyIcon;

  return _extends({}, field, {
    title: customTitle || field.title,
    icon: customIcon || field.icon,
    extraClass: (0, _classnames2.default)(classes)
  });
};

var applyTransforms = function applyTransforms() {
  _Injector2.default.transform('form-action-changed', function (updater) {
    updater.form.alterSchema('*', function (form) {
      form.mutateField('action_save', function (field) {
        var isPristine = form.isPristine();

        return togglePristineState(field, isPristine);
      });
      form.mutateField('action_publish', function (field) {
        var isPristine = field.data.isPublished && !field.data.isModified && form.isPristine();

        return togglePristineState(field, isPristine);
      });

      return form.getState();
    });
  });
  _Injector2.default.transform('schema-validation', function (updater) {
    updater.form.addValidation('*', function (values, Validation, schema) {
      var validator = new _Validator2.default(values);
      var errorMap = Object.keys(values).reduce(function (curr, key) {
        var field = (0, _schemaFieldValues.findField)(schema.fields, key);

        var _validator$validateFi = validator.validateFieldSchema(field),
            valid = _validator$validateFi.valid,
            errors = _validator$validateFi.errors;

        if (valid) {
          return curr;
        }
        return _extends({}, curr, _defineProperty({}, key, errors));
      }, {});
      Validation.addErrors(errorMap);

      return Validation.getState();
    });
  });
};

exports.default = applyTransforms;

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloClient = __webpack_require__(1933);

var _apolloClient2 = _interopRequireDefault(_apolloClient);

var _networkInterface = __webpack_require__(185);

var _qs = __webpack_require__(399);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildApolloClient(baseUrl) {
  var networkInterface = (0, _apolloClient.createNetworkInterface)({
    uri: baseUrl + 'graphql/',
    opts: {
      credentials: 'same-origin',
      headers: {
        accept: 'application/json'
      }
    }
  });
  var apolloClient = new _apolloClient2.default({
    shouldBatch: true,
    addTypename: true,
    dataIdFromObject: function dataIdFromObject(o) {
      if (o.id >= 0 && o.__typename) {
        return o.__typename + ':' + o.id;
      }
      return null;
    },
    networkInterface: networkInterface
  });

  networkInterface.use([{
    applyMiddleware: function applyMiddleware(req, next) {
      var entries = (0, _networkInterface.printRequest)(req.request);

      req.options.headers = Object.assign({}, req.options.headers, {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      });

      req.options.body = _qs2.default.stringify(Object.assign({}, entries, { variables: JSON.stringify(entries.variables) }));
      next();
    }
  }]);

  return apolloClient;
}

exports.default = buildApolloClient;

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(97);

var _Injector = __webpack_require__(39);

var _Injector2 = _interopRequireDefault(_Injector);

var _TextField = __webpack_require__(411);

var _TextField2 = _interopRequireDefault(_TextField);

var _HiddenField = __webpack_require__(944);

var _HiddenField2 = _interopRequireDefault(_HiddenField);

var _DateField = __webpack_require__(255);

var _DateField2 = _interopRequireDefault(_DateField);

var _TimeField = __webpack_require__(956);

var _TimeField2 = _interopRequireDefault(_TimeField);

var _DatetimeField = __webpack_require__(934);

var _DatetimeField2 = _interopRequireDefault(_DatetimeField);

var _CheckboxField = __webpack_require__(932);

var _CheckboxField2 = _interopRequireDefault(_CheckboxField);

var _CheckboxSetField = __webpack_require__(933);

var _CheckboxSetField2 = _interopRequireDefault(_CheckboxSetField);

var _OptionsetField = __webpack_require__(952);

var _OptionsetField2 = _interopRequireDefault(_OptionsetField);

var _GridField = __webpack_require__(1938);

var _GridField2 = _interopRequireDefault(_GridField);

var _SingleSelectField = __webpack_require__(953);

var _SingleSelectField2 = _interopRequireDefault(_SingleSelectField);

var _PopoverField = __webpack_require__(410);

var _PopoverField2 = _interopRequireDefault(_PopoverField);

var _HeaderField = __webpack_require__(943);

var _HeaderField2 = _interopRequireDefault(_HeaderField);

var _LiteralField = __webpack_require__(1939);

var _LiteralField2 = _interopRequireDefault(_LiteralField);

var _HtmlReadonlyField = __webpack_require__(945);

var _HtmlReadonlyField2 = _interopRequireDefault(_HtmlReadonlyField);

var _LookupField = __webpack_require__(949);

var _LookupField2 = _interopRequireDefault(_LookupField);

var _CompositeField = __webpack_require__(408);

var _CompositeField2 = _interopRequireDefault(_CompositeField);

var _LabelField = __webpack_require__(947);

var _LabelField2 = _interopRequireDefault(_LabelField);

var _Tabs = __webpack_require__(955);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabItem = __webpack_require__(954);

var _TabItem2 = _interopRequireDefault(_TabItem);

var _FormAction = __webpack_require__(1935);

var _FormAction2 = _interopRequireDefault(_FormAction);

var _FieldGroup = __webpack_require__(935);

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

var _TreeDropdownField = __webpack_require__(782);

var _TreeDropdownField2 = _interopRequireDefault(_TreeDropdownField);

var _FormBuilderModal = __webpack_require__(779);

var _FormBuilderModal2 = _interopRequireDefault(_FormBuilderModal);

var _NotFoundComponent = __webpack_require__(409);

var _NotFoundComponent2 = _interopRequireDefault(_NotFoundComponent);

var _Form = __webpack_require__(936);

var _Form2 = _interopRequireDefault(_Form);

var _Form3 = __webpack_require__(960);

var _Form4 = _interopRequireDefault(_Form3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.component.registerMany({
    TextField: _TextField2.default,
    HiddenField: _HiddenField2.default,
    DateField: _DateField2.default,
    TimeField: _TimeField2.default,
    DatetimeField: _DatetimeField2.default,
    CheckboxField: _CheckboxField2.default,
    CheckboxSetField: _CheckboxSetField2.default,
    OptionsetField: _OptionsetField2.default,
    GridField: _GridField2.default,
    FieldGroup: _FieldGroup2.default,
    SingleSelectField: _SingleSelectField2.default,
    PopoverField: _PopoverField2.default,
    HeaderField: _HeaderField2.default,
    LiteralField: _LiteralField2.default,
    HtmlReadonlyField: _HtmlReadonlyField2.default,
    LookupField: _LookupField2.default,
    CompositeField: _CompositeField2.default,
    Tabs: _Tabs2.default,
    TabItem: _TabItem2.default,
    FormAction: _FormAction2.default,
    LabelField: _LabelField2.default,
    TreeDropdownField: _TreeDropdownField2.default,
    ReduxForm: _Form4.default,
    ReduxFormField: _reduxForm.Field,
    Form: _Form2.default,
    FormBuilderModal: _FormBuilderModal2.default,
    NotFoundComponent: _NotFoundComponent2.default
  });
};

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Injector = __webpack_require__(39);

var _Injector2 = _interopRequireDefault(_Injector);

var _redux = __webpack_require__(41);

var _reduxForm = __webpack_require__(97);

var _reactRouterRedux = __webpack_require__(781);

var _ConfigReducer = __webpack_require__(981);

var _ConfigReducer2 = _interopRequireDefault(_ConfigReducer);

var _SchemaReducer = __webpack_require__(984);

var _SchemaReducer2 = _interopRequireDefault(_SchemaReducer);

var _RecordsReducer = __webpack_require__(983);

var _RecordsReducer2 = _interopRequireDefault(_RecordsReducer);

var _BreadcrumbsReducer = __webpack_require__(979);

var _BreadcrumbsReducer2 = _interopRequireDefault(_BreadcrumbsReducer);

var _TreeDropdownFieldReducer = __webpack_require__(986);

var _TreeDropdownFieldReducer2 = _interopRequireDefault(_TreeDropdownFieldReducer);

var _MobileMenuReducer = __webpack_require__(982);

var _MobileMenuReducer2 = _interopRequireDefault(_MobileMenuReducer);

var _UnsavedFormsReducer = __webpack_require__(987);

var _UnsavedFormsReducer2 = _interopRequireDefault(_UnsavedFormsReducer);

var _applyFormMiddleware = __webpack_require__(974);

var _applyFormMiddleware2 = _interopRequireDefault(_applyFormMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var FormReducer = (0, _redux.combineReducers)({
    formState: _reduxForm.reducer,
    formSchemas: _SchemaReducer2.default
  });

  _Injector2.default.reducer.registerMany(_extends({
    config: _ConfigReducer2.default,
    form: FormReducer,
    records: _RecordsReducer2.default,
    breadcrumbs: _BreadcrumbsReducer2.default,
    routing: _reactRouterRedux.routerReducer,
    treeDropdownField: _TreeDropdownFieldReducer2.default,
    mobileMenu: _MobileMenuReducer2.default,
    unsavedForms: _UnsavedFormsReducer2.default
  }, extra));

  _Injector2.default.transform('admin', function (updater) {
    updater.reducer('form', _applyFormMiddleware2.default);
  });
};

/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(785);

__webpack_require__(872);
__webpack_require__(816);
__webpack_require__(891);
__webpack_require__(828);
__webpack_require__(842);
__webpack_require__(890);
__webpack_require__(883);
__webpack_require__(849);
__webpack_require__(823);
__webpack_require__(826);
__webpack_require__(832);
__webpack_require__(827);
__webpack_require__(870);
__webpack_require__(829);
__webpack_require__(830);
__webpack_require__(831);
__webpack_require__(824);
__webpack_require__(843);
__webpack_require__(865);
__webpack_require__(835);
__webpack_require__(836);
__webpack_require__(837);
__webpack_require__(838);
__webpack_require__(839);
__webpack_require__(840);
__webpack_require__(813);
__webpack_require__(814);
__webpack_require__(841);
__webpack_require__(845);
__webpack_require__(846);
__webpack_require__(874);
__webpack_require__(847);
__webpack_require__(876);
__webpack_require__(818);
__webpack_require__(879);
__webpack_require__(878);
__webpack_require__(877);
__webpack_require__(819);
__webpack_require__(864);
__webpack_require__(880);
__webpack_require__(817);
__webpack_require__(850);
__webpack_require__(825);
__webpack_require__(820);
__webpack_require__(821);
__webpack_require__(860);
__webpack_require__(869);
__webpack_require__(875);
__webpack_require__(871);
__webpack_require__(882);

__webpack_require__(809);
__webpack_require__(400);
__webpack_require__(250);
__webpack_require__(791);
__webpack_require__(799);
__webpack_require__(801);
__webpack_require__(793);
__webpack_require__(794);
__webpack_require__(797);
__webpack_require__(798);
__webpack_require__(800);
__webpack_require__(792);
__webpack_require__(796);
__webpack_require__(795);
__webpack_require__(802);
__webpack_require__(786);
__webpack_require__(804);
__webpack_require__(803);

__webpack_require__(787);
__webpack_require__(805);
__webpack_require__(251);
__webpack_require__(807);
__webpack_require__(808);
__webpack_require__(251);
__webpack_require__(788);
__webpack_require__(790);
__webpack_require__(806);
__webpack_require__(789);

__webpack_require__(783);

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _OptionField = __webpack_require__(257);

var _OptionField2 = _interopRequireDefault(_OptionField);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxField = function CheckboxField(props) {
  var FieldHolder = (0, _FieldHolder2.default)(_OptionField2.default);

  return _react2.default.createElement(FieldHolder, _extends({}, props, { type: 'checkbox', hideLabels: true }));
};

exports.default = CheckboxField;

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _OptionField = __webpack_require__(257);

var _OptionField2 = _interopRequireDefault(_OptionField);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxSetField = function (_Component) {
  _inherits(CheckboxSetField, _Component);

  function CheckboxSetField(props) {
    _classCallCheck(this, CheckboxSetField);

    var _this = _possibleConstructorReturn(this, (CheckboxSetField.__proto__ || Object.getPrototypeOf(CheckboxSetField)).call(this, props));

    _this.getItemKey = _this.getItemKey.bind(_this);
    _this.getOptionProps = _this.getOptionProps.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.getValues = _this.getValues.bind(_this);
    return _this;
  }

  _createClass(CheckboxSetField, [{
    key: 'getItemKey',
    value: function getItemKey(item, index) {
      return this.props.id + '-' + (item.value || 'empty' + index);
    }
  }, {
    key: 'getValues',
    value: function getValues() {
      var values = this.props.value;

      if (!Array.isArray(values) && (values || typeof values === 'string' || typeof values === 'number')) {
        values = [values];
      }

      if (values) {
        return values.map(function (value) {
          return '' + value;
        });
      }
      return [];
    }
  }, {
    key: 'getOptionProps',
    value: function getOptionProps(item, index) {
      var oldValue = this.getValues();
      var key = this.getItemKey(item, index);

      return {
        key: key,
        id: key,
        name: this.props.name,
        className: this.props.itemClass,
        disabled: item.disabled || this.props.disabled,
        readOnly: this.props.readOnly,
        onChange: this.handleChange,
        value: oldValue.indexOf('' + item.value) > -1,
        title: item.title,
        type: 'checkbox'
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event, field) {
      var _this2 = this;

      if (typeof this.props.onChange === 'function') {
        var oldValue = this.getValues();
        var newValue = this.props.source.filter(function (item, index) {
          if (_this2.getItemKey(item, index) === field.id) {
            return field.value === 1;
          }
          return oldValue.indexOf('' + item.value) > -1;
        }).map(function (item) {
          return '' + item.value;
        });

        this.props.onChange(newValue);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.props.source) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        null,
        this.props.source.map(function (item, index) {
          return _react2.default.createElement(_OptionField2.default, _this3.getOptionProps(item, index));
        })
      );
    }
  }]);

  return CheckboxSetField;
}(_react.Component);

CheckboxSetField.propTypes = {
  className: _react2.default.PropTypes.string,
  extraClass: _react2.default.PropTypes.string,
  itemClass: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  source: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    title: _react2.default.PropTypes.any,
    disabled: _react2.default.PropTypes.bool
  })),
  onChange: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.any,
  readOnly: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool
};

CheckboxSetField.defaultProps = {
  extraClass: '',
  className: '',
  value: []
};

exports.Component = CheckboxSetField;
exports.default = (0, _FieldHolder2.default)(CheckboxSetField);

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _DateField2 = __webpack_require__(255);

var _moment = __webpack_require__(178);

var _moment2 = _interopRequireDefault(_moment);

var _modernizr = __webpack_require__(177);

var _modernizr2 = _interopRequireDefault(_modernizr);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var localFormat = 'L LT';

var DatetimeField = function (_DateField) {
  _inherits(DatetimeField, _DateField);

  function DatetimeField() {
    _classCallCheck(this, DatetimeField);

    return _possibleConstructorReturn(this, (DatetimeField.__proto__ || Object.getPrototypeOf(DatetimeField)).apply(this, arguments));
  }

  _createClass(DatetimeField, [{
    key: 'getInputProps',
    value: function getInputProps() {
      var placeholder = _i18n2.default.inject(_i18n2.default._t('Admin.FormatExample', 'Example: {format}'), { format: (0, _moment2.default)().endOf('month').format(localFormat) });
      return Object.assign({}, _get(DatetimeField.prototype.__proto__ || Object.getPrototypeOf(DatetimeField.prototype), 'getInputProps', this).call(this), {
        type: this.props.data.html5 ? 'datetime-local' : 'text',
        placeholder: placeholder
      });
    }
  }, {
    key: 'isMultiline',
    value: function isMultiline() {
      return false;
    }
  }, {
    key: 'hasNativeSupport',
    value: function hasNativeSupport() {
      return _modernizr2.default.inputtypes['datetime-local'];
    }
  }, {
    key: 'triggerChange',
    value: function triggerChange(value) {
      if (/^\d{4}-\d\d-\d\dT\d\d:\d\d$/.test(value)) {
        this.props.onChange(value + ':00');
      } else {
        this.props.onChange(value);
      }
    }
  }, {
    key: 'convertToLocalised',
    value: function convertToLocalised(isoTime) {
      _moment2.default.locale(this.props.lang);
      var localTime = '';
      if (isoTime) {
        var timeObject = (0, _moment2.default)(isoTime);
        if (timeObject.isValid()) {
          localTime = timeObject.format(localFormat);
        }
      }
      return localTime;
    }
  }, {
    key: 'convertToIso',
    value: function convertToIso(localTime) {
      _moment2.default.locale(this.props.lang);
      var isoTime = '';
      if (localTime) {
        var timeObject = (0, _moment2.default)(localTime, [localFormat, _moment2.default.ISO_8601]);
        if (timeObject.isValid()) {
          isoTime = timeObject.format('YYYY-MM-DDTHH:mm:ss');
        }
      }
      return isoTime;
    }
  }]);

  return DatetimeField;
}(_DateField2.Component);

DatetimeField.propTypes = {
  lang: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.shape({
    html5: _react2.default.PropTypes.boolean
  })
};

DatetimeField.defaultProps = {
  data: {}
};

exports.Component = DatetimeField;
exports.default = (0, _FieldHolder2.default)(DatetimeField);

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _CompositeField2 = __webpack_require__(408);

var _CompositeField3 = _interopRequireDefault(_CompositeField2);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldGroup = function (_CompositeField) {
  _inherits(FieldGroup, _CompositeField);

  function FieldGroup() {
    _classCallCheck(this, FieldGroup);

    return _possibleConstructorReturn(this, (FieldGroup.__proto__ || Object.getPrototypeOf(FieldGroup)).apply(this, arguments));
  }

  _createClass(FieldGroup, [{
    key: 'getClassName',
    value: function getClassName() {
      return 'field-group-component ' + _get(FieldGroup.prototype.__proto__ || Object.getPrototypeOf(FieldGroup.prototype), 'getClassName', this).call(this);
    }
  }]);

  return FieldGroup;
}(_CompositeField3.default);

exports.Component = FieldGroup;
exports.default = (0, _FieldHolder2.default)(FieldGroup);

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FormAlert = __webpack_require__(395);

var _FormAlert2 = _interopRequireDefault(_FormAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.autoFocus) {
        return;
      }

      if (this.form) {
        var input = this.form.querySelector('input, select, textarea');
        if (input) {
          input.focus();
        }
      }
    }
  }, {
    key: 'renderMessages',
    value: function renderMessages() {
      if (Array.isArray(this.props.messages)) {
        return this.props.messages.map(function (message, index) {
          return _react2.default.createElement(_FormAlert2.default, _extends({
            key: index,
            className: !index ? 'message-box--panel-top' : ''
          }, message));
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var valid = this.props.valid !== false;
      var fields = this.props.mapFieldsToComponents(this.props.fields);
      var actions = this.props.mapActionsToComponents(this.props.actions);
      var messages = this.renderMessages();

      var className = ['form'];
      if (valid === false) {
        className.push('form--invalid');
      }
      if (this.props.attributes && this.props.attributes.className) {
        className.push(this.props.attributes.className);
      }
      var formProps = _extends({}, this.props.attributes, {
        onSubmit: this.props.handleSubmit,
        className: className.join(' ')
      });

      return _react2.default.createElement(
        'form',
        _extends({}, formProps, {
          ref: function ref(form) {
            _this2.form = form;
          }
        }),
        fields && _react2.default.createElement(
          'fieldset',
          null,
          messages,
          this.props.afterMessages,
          fields
        ),
        actions && actions.length ? _react2.default.createElement(
          'div',
          { className: 'btn-toolbar', role: 'group' },
          actions
        ) : null
      );
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  autoFocus: _react.PropTypes.bool,
  valid: _react.PropTypes.bool,
  actions: _react.PropTypes.array,
  afterMessages: _react.PropTypes.node,
  attributes: _react.PropTypes.shape({
    action: _react.PropTypes.string.isRequired,
    className: _react.PropTypes.string,
    encType: _react.PropTypes.string,
    id: _react.PropTypes.string,
    method: _react.PropTypes.string.isRequired
  }),
  fields: _react.PropTypes.array.isRequired,

  handleSubmit: _react.PropTypes.func,
  mapActionsToComponents: _react.PropTypes.func.isRequired,
  mapFieldsToComponents: _react.PropTypes.func.isRequired,
  messages: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    extraClass: _react.PropTypes.string,
    value: _react.PropTypes.any,
    type: _react.PropTypes.string
  }))
};

exports.default = Form;

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  CSRF_HEADER: 'X-SecurityID' };

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridFieldAction = function (_Component) {
  _inherits(GridFieldAction, _Component);

  function GridFieldAction(props) {
    _classCallCheck(this, GridFieldAction);

    var _this = _possibleConstructorReturn(this, (GridFieldAction.__proto__ || Object.getPrototypeOf(GridFieldAction)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(GridFieldAction, [{
    key: 'handleClick',
    value: function handleClick(event) {
      this.props.onClick(event, this.props.record.ID);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('button', {
        className: 'grid-field__icon-action font-icon-' + this.props.icon + ' btn--icon-large',
        onClick: this.handleClick
      });
    }
  }]);

  return GridFieldAction;
}(_react.Component);

GridFieldAction.PropTypes = {
  Click: _react2.default.PropTypes.func.isRequired
};

exports.default = GridFieldAction;

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridFieldCell = function (_Component) {
  _inherits(GridFieldCell, _Component);

  function GridFieldCell(props) {
    _classCallCheck(this, GridFieldCell);

    var _this = _possibleConstructorReturn(this, (GridFieldCell.__proto__ || Object.getPrototypeOf(GridFieldCell)).call(this, props));

    _this.handleDrillDown = _this.handleDrillDown.bind(_this);
    return _this;
  }

  _createClass(GridFieldCell, [{
    key: 'handleDrillDown',
    value: function handleDrillDown(event) {
      if (typeof this.props.onDrillDown === 'function') {
        this.props.onDrillDown(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classNames = ['grid-field__cell', this.props.className];

      var _props = this.props,
          onDrillDown = _props.onDrillDown,
          props = _objectWithoutProperties(_props, ['onDrillDown']);

      return _react2.default.createElement('td', _extends({}, props, {
        className: (0, _classnames2.default)(classNames),
        onClick: this.handleDrillDown
      }));
    }
  }]);

  return GridFieldCell;
}(_react.Component);

GridFieldCell.PropTypes = {
  className: _react2.default.PropTypes.string,
  onDrillDown: _react2.default.PropTypes.func
};

exports.default = GridFieldCell;

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _GridFieldRow = __webpack_require__(256);

var _GridFieldRow2 = _interopRequireDefault(_GridFieldRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridFieldHeader = function GridFieldHeader(props) {
  return _react2.default.createElement(
    _GridFieldRow2.default,
    null,
    props.children
  );
};

exports.default = GridFieldHeader;

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridFieldHeaderCell = function GridFieldHeaderCell(props) {
  return _react2.default.createElement(
    'th',
    null,
    props.children
  );
};

exports.default = GridFieldHeaderCell;

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridFieldTable = function (_Component) {
  _inherits(GridFieldTable, _Component);

  function GridFieldTable() {
    _classCallCheck(this, GridFieldTable);

    return _possibleConstructorReturn(this, (GridFieldTable.__proto__ || Object.getPrototypeOf(GridFieldTable)).apply(this, arguments));
  }

  _createClass(GridFieldTable, [{
    key: 'generateHeader',
    value: function generateHeader() {
      if (typeof this.props.header !== 'undefined') {
        return this.props.header;
      }

      if (typeof this.props.data !== 'undefined') {}

      return null;
    }
  }, {
    key: 'generateRows',
    value: function generateRows() {
      if (typeof this.props.rows !== 'undefined') {
        return this.props.rows;
      }

      if (typeof this.props.data !== 'undefined') {}

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'grid-field' },
        _react2.default.createElement(
          'table',
          { className: 'table table-hover grid-field__table' },
          _react2.default.createElement(
            'thead',
            null,
            this.generateHeader()
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.generateRows()
          )
        )
      );
    }
  }]);

  return GridFieldTable;
}(_react.Component);

GridFieldTable.propTypes = {
  data: _react2.default.PropTypes.object,
  header: _react2.default.PropTypes.object,
  rows: _react2.default.PropTypes.array
};

exports.default = GridFieldTable;

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderField = function (_Component) {
  _inherits(HeaderField, _Component);

  function HeaderField() {
    _classCallCheck(this, HeaderField);

    return _possibleConstructorReturn(this, (HeaderField.__proto__ || Object.getPrototypeOf(HeaderField)).apply(this, arguments));
  }

  _createClass(HeaderField, [{
    key: 'getInputProps',
    value: function getInputProps() {
      return {
        className: this.props.className + ' ' + this.props.extraClass,
        id: this.props.id
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var Heading = 'h' + (this.props.data.headingLevel || 3);

      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          Heading,
          this.getInputProps(),
          this.props.data.title
        )
      );
    }
  }]);

  return HeaderField;
}(_react.Component);

HeaderField.propTypes = {
  extraClass: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
    headingLevel: _react2.default.PropTypes.number,
    title: _react2.default.PropTypes.string
  })]).isRequired
};

HeaderField.defaultProps = {
  className: '',
  extraClass: ''
};

exports.default = HeaderField;

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HiddenField = function (_Component) {
  _inherits(HiddenField, _Component);

  function HiddenField() {
    _classCallCheck(this, HiddenField);

    return _possibleConstructorReturn(this, (HiddenField.__proto__ || Object.getPrototypeOf(HiddenField)).apply(this, arguments));
  }

  _createClass(HiddenField, [{
    key: 'getInputProps',
    value: function getInputProps() {
      return {
        bsClass: this.props.bsClass,
        componentClass: 'input',
        className: this.props.className + ' ' + this.props.extraClass,
        id: this.props.id,
        name: this.props.name,
        type: 'hidden',
        value: this.props.value
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactBootstrapSs.FormControl, this.getInputProps());
    }
  }]);

  return HiddenField;
}(_react.Component);

HiddenField.propTypes = {
  id: _react2.default.PropTypes.string,
  extraClass: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  value: _react2.default.PropTypes.any
};

HiddenField.defaultProps = {
  className: '',
  extraClass: '',
  value: ''
};

exports.default = HiddenField;

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HtmlReadonlyField = function (_Component) {
  _inherits(HtmlReadonlyField, _Component);

  function HtmlReadonlyField(props) {
    _classCallCheck(this, HtmlReadonlyField);

    var _this = _possibleConstructorReturn(this, (HtmlReadonlyField.__proto__ || Object.getPrototypeOf(HtmlReadonlyField)).call(this, props));

    _this.getContent = _this.getContent.bind(_this);
    return _this;
  }

  _createClass(HtmlReadonlyField, [{
    key: 'getContent',
    value: function getContent() {
      return { __html: this.props.value };
    }
  }, {
    key: 'getInputProps',
    value: function getInputProps() {
      return {
        bsClass: this.props.bsClass,
        componentClass: this.props.componentClass,

        className: this.props.className + ' ' + this.props.extraClass,
        id: this.props.id,
        name: this.props.name
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactBootstrapSs.FormControl.Static, _extends({}, this.getInputProps(), {
        dangerouslySetInnerHTML: this.getContent()
      }));
    }
  }]);

  return HtmlReadonlyField;
}(_react.Component);

HtmlReadonlyField.propTypes = {
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  extraClass: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string
};

HtmlReadonlyField.defaultProps = {
  extraClass: '',
  className: ''
};

exports.Component = HtmlReadonlyField;
exports.default = (0, _FieldHolder2.default)(HtmlReadonlyField);

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IframeDialog = function (_Component) {
  _inherits(IframeDialog, _Component);

  function IframeDialog() {
    _classCallCheck(this, IframeDialog);

    return _possibleConstructorReturn(this, (IframeDialog.__proto__ || Object.getPrototypeOf(IframeDialog)).apply(this, arguments));
  }

  _createClass(IframeDialog, [{
    key: 'renderHeader',
    value: function renderHeader() {
      var title = this.props.title;
      if (title) {
        return _react2.default.createElement(
          _reactBootstrapSs.Modal.Header,
          null,
          _react2.default.createElement(
            _reactBootstrapSs.Modal.Title,
            null,
            title
          )
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrapSs.Modal,
        {
          show: this.props.show,
          onHide: this.props.onHide,
          className: this.props.className,
          dialogClassName: this.props.dialogClassName
        },
        this.renderHeader(),
        _react2.default.createElement(
          _reactBootstrapSs.Modal.Body,
          { className: this.props.bodyClassName },
          _react2.default.createElement('iframe', {
            id: this.props.iframeId,
            className: this.props.iframeClassName,
            src: this.props.url,
            frameBorder: 0
          })
        )
      );
    }
  }]);

  return IframeDialog;
}(_react.Component);

IframeDialog.propTypes = {
  url: _react.PropTypes.string.isRequired,
  onHide: _react.PropTypes.func,
  show: _react.PropTypes.bool,
  title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
  dialogClassName: _react.PropTypes.string,
  iframeId: _react.PropTypes.string,
  iframeClassName: _react.PropTypes.string,
  className: _react.PropTypes.string,
  bodyClassName: _react.PropTypes.string
};

IframeDialog.defaultProps = {
  show: false,
  title: null
};

exports.default = IframeDialog;

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelField = function LabelField(_ref) {
  var id = _ref.id,
      className = _ref.className,
      title = _ref.title,
      extraClass = _ref.extraClass,
      data = _ref.data;

  var htmlFor = data && data.target;
  var classes = className + ' ' + extraClass;

  return _react2.default.createElement(
    'label',
    { id: id, className: classes, htmlFor: htmlFor },
    title
  );
};

LabelField.propTypes = {
  id: _react.PropTypes.number,
  className: _react.PropTypes.string,
  extraClass: _react.PropTypes.string,
  title: _react.PropTypes.node,
  data: _react.PropTypes.shape({
    target: _react.PropTypes.string
  })
};

LabelField.defaultProps = {
  className: '',
  extraClass: ''
};

exports.default = LabelField;

/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGroupItem = function (_Component) {
  _inherits(ListGroupItem, _Component);

  function ListGroupItem(props) {
    _classCallCheck(this, ListGroupItem);

    var _this = _possibleConstructorReturn(this, (ListGroupItem.__proto__ || Object.getPrototypeOf(ListGroupItem)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(ListGroupItem, [{
    key: "handleClick",
    value: function handleClick(event) {
      if (this.props.onClick) {
        this.props.onClick(event, this.props.onClickArg);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = "list-group-item " + this.props.className;
      return _react2.default.createElement(
        "a",
        { role: "button", tabIndex: 0, className: className, onClick: this.handleClick },
        this.props.children
      );
    }
  }]);

  return ListGroupItem;
}(_react.Component);

ListGroupItem.propTypes = {
  onClickArg: _react2.default.PropTypes.any,
  onClick: _react2.default.PropTypes.func
};

exports.default = ListGroupItem;

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSs = __webpack_require__(37);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LookupField = function (_Component) {
  _inherits(LookupField, _Component);

  function LookupField(props) {
    _classCallCheck(this, LookupField);

    var _this = _possibleConstructorReturn(this, (LookupField.__proto__ || Object.getPrototypeOf(LookupField)).call(this, props));

    _this.getValueCSV = _this.getValueCSV.bind(_this);
    return _this;
  }

  _createClass(LookupField, [{
    key: 'getValueCSV',
    value: function getValueCSV() {
      var _this2 = this;

      var values = this.props.value;

      if (!Array.isArray(values) && (values || typeof values === 'string' || typeof values === 'number')) {
        var item = this.props.source.find(function (next) {
          return next.value === values;
        });
        if (item) {
          return item.title;
        }
        return '';
      }

      if (!values || !values.length) {
        return '';
      }
      return values.map(function (value) {
        var item = _this2.props.source.find(function (next) {
          return next.value === value;
        });
        return item && item.title;
      }).filter(function (value) {
        return ('' + value).length;
      }).join(', ');
    }
  }, {
    key: 'getFieldProps',
    value: function getFieldProps() {
      return {
        id: this.props.id,
        name: this.props.name,
        className: this.props.className + ' ' + this.props.extraClass
      };
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.source) {
        return null;
      }
      var none = '(\'' + _i18n2.default._t('Admin.NONE', 'None') + '\')';

      return _react2.default.createElement(
        _reactBootstrapSs.FormControl.Static,
        this.getFieldProps(),
        this.getValueCSV() || none
      );
    }
  }]);

  return LookupField;
}(_react.Component);

LookupField.propTypes = {
  extraClass: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  source: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    title: _react2.default.PropTypes.any,
    disabled: _react2.default.PropTypes.bool
  })),
  value: _react2.default.PropTypes.any
};

LookupField.defaultProps = {
  extraClass: '',
  className: '',
  value: []
};

exports.Component = LookupField;
exports.default = (0, _FieldHolder2.default)(LookupField);

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileMenuToggle = function (_Component) {
  _inherits(MobileMenuToggle, _Component);

  function MobileMenuToggle() {
    _classCallCheck(this, MobileMenuToggle);

    var _this = _possibleConstructorReturn(this, (MobileMenuToggle.__proto__ || Object.getPrototypeOf(MobileMenuToggle)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(MobileMenuToggle, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();

      if (typeof this.props.onClick === 'function') {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)({
        'cms-mobile-menu-toggle': true,
        'cms-mobile-menu-toggle--open': this.props.isOpen
      });

      return _react2.default.createElement(
        'button',
        {
          className: classes,
          href: '#toggle-mobile-menu',
          onClick: this.handleClick,
          'aria-controls': this.props.controls,
          'aria-expanded': Boolean(this.props.isOpen)
        },
        _react2.default.createElement('span', null),
        _react2.default.createElement('span', null),
        _react2.default.createElement('span', null),
        _react2.default.createElement('span', null)
      );
    }
  }]);

  return MobileMenuToggle;
}(_react.Component);

MobileMenuToggle.propTypes = {
  isOpen: _react.PropTypes.bool.isRequired,
  onClick: _react.PropTypes.func.isRequired,
  controls: _react.PropTypes.string
};

MobileMenuToggle.defaultProps = {
  controls: ''
};

exports.default = MobileMenuToggle;

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MobileMenuActions = __webpack_require__(420);

var _reactRedux = __webpack_require__(55);

var _MobileMenuToggle = __webpack_require__(950);

var _MobileMenuToggle2 = _interopRequireDefault(_MobileMenuToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    isOpen: state.mobileMenu.isOpen
  };
}, function (dispatch) {
  return {
    onClick: function onClick() {
      dispatch((0, _MobileMenuActions.toggleMobileMenu)());
    }
  };
})(_MobileMenuToggle2.default);

/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _OptionField = __webpack_require__(257);

var _OptionField2 = _interopRequireDefault(_OptionField);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionsetField = function (_Component) {
  _inherits(OptionsetField, _Component);

  function OptionsetField(props) {
    _classCallCheck(this, OptionsetField);

    var _this = _possibleConstructorReturn(this, (OptionsetField.__proto__ || Object.getPrototypeOf(OptionsetField)).call(this, props));

    _this.getItemKey = _this.getItemKey.bind(_this);
    _this.getOptionProps = _this.getOptionProps.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(OptionsetField, [{
    key: 'getItemKey',
    value: function getItemKey(item, index) {
      var value = item.value || 'empty' + index;
      return this.props.id + '-' + value;
    }
  }, {
    key: 'getOptionProps',
    value: function getOptionProps(item, index) {
      var key = this.getItemKey(item, index);

      return {
        key: key,
        id: key,
        name: this.props.name,
        className: this.props.itemClass + ' option-val--' + item.value,
        disabled: item.disabled || this.props.disabled,
        readOnly: this.props.readOnly,
        onChange: this.handleChange,
        value: '' + this.props.value === '' + item.value,
        title: item.title,
        type: 'radio'
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event, field) {
      var _this2 = this;

      if (typeof this.props.onChange === 'function') {
        if (field.value === 1) {
          var sourceItem = this.props.source.find(function (item, index) {
            return _this2.getItemKey(item, index) === field.id;
          });

          this.props.onChange(sourceItem.value);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.props.source) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        null,
        this.props.source.map(function (item, index) {
          return _react2.default.createElement(_OptionField2.default, _this3.getOptionProps(item, index));
        })
      );
    }
  }]);

  return OptionsetField;
}(_react.Component);

OptionsetField.propTypes = {
  extraClass: _react2.default.PropTypes.string,
  itemClass: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  source: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    disabled: _react2.default.PropTypes.bool
  })),
  onChange: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  readOnly: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool
};

OptionsetField.defaultProps = {
  extraClass: '',
  className: '',
  itemClass: ''
};

exports.Component = OptionsetField;
exports.default = (0, _FieldHolder2.default)(OptionsetField);

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleSelectField = function (_Component) {
  _inherits(SingleSelectField, _Component);

  function SingleSelectField(props) {
    _classCallCheck(this, SingleSelectField);

    var _this = _possibleConstructorReturn(this, (SingleSelectField.__proto__ || Object.getPrototypeOf(SingleSelectField)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(SingleSelectField, [{
    key: 'getReadonlyField',
    value: function getReadonlyField() {
      var _this2 = this;

      var label = this.props.source && this.props.source.find(function (item) {
        return item.value === _this2.props.value;
      });

      label = typeof label === 'string' ? label : this.props.value;

      return _react2.default.createElement(
        _reactBootstrapSs.FormControl.Static,
        this.getInputProps(),
        label
      );
    }
  }, {
    key: 'getSelectField',
    value: function getSelectField() {
      var _this3 = this;

      var options = this.props.source ? this.props.source.slice() : [];

      if (this.props.data.hasEmptyDefault && !options.find(function (item) {
        return !item.value;
      })) {
        options.unshift({
          value: '',
          title: this.props.data.emptyString,
          disabled: false
        });
      }

      return _react2.default.createElement(
        _reactBootstrapSs.FormControl,
        this.getInputProps(),
        options.map(function (item, index) {
          var key = _this3.props.name + '-' + (item.value || 'empty' + index);

          return _react2.default.createElement(
            'option',
            { key: key, value: item.value, disabled: item.disabled },
            item.title
          );
        })
      );
    }
  }, {
    key: 'getInputProps',
    value: function getInputProps() {
      var props = {
        bsClass: this.props.bsClass,

        className: this.props.className + ' ' + this.props.extraClass + ' no-chosen',
        id: this.props.id,
        name: this.props.name,
        disabled: this.props.disabled
      };

      if (!this.props.readOnly) {
        Object.assign(props, {
          onChange: this.handleChange,
          value: this.props.value,
          componentClass: 'select'
        });
      }

      return props;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(event, { id: this.props.id, value: event.target.value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var field = null;
      if (this.props.readOnly) {
        field = this.getReadonlyField();
      } else {
        field = this.getSelectField();
      }

      return field;
    }
  }]);

  return SingleSelectField;
}(_react.Component);

SingleSelectField.propTypes = {
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string.isRequired,
  onChange: _react2.default.PropTypes.func,
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  readOnly: _react2.default.PropTypes.bool,
  disabled: _react2.default.PropTypes.bool,
  source: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    disabled: _react2.default.PropTypes.bool
  })),
  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
    hasEmptyDefault: _react2.default.PropTypes.bool,
    emptyString: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
  })])
};

SingleSelectField.defaultProps = {
  source: [],
  extraClass: '',
  className: '',
  data: {
    emptyString: _i18n2.default._t('Boolean.ANY', 'Any')
  }
};

exports.Component = SingleSelectField;
exports.default = (0, _FieldHolder2.default)(SingleSelectField);

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabItem = function (_Component) {
  _inherits(TabItem, _Component);

  function TabItem() {
    _classCallCheck(this, TabItem);

    return _possibleConstructorReturn(this, (TabItem.__proto__ || Object.getPrototypeOf(TabItem)).apply(this, arguments));
  }

  _createClass(TabItem, [{
    key: 'getTabProps',
    value: function getTabProps() {
      var _props = this.props,
          name = _props.name,
          className = _props.className,
          extraClass = _props.extraClass,
          disabled = _props.disabled,
          bsClass = _props.bsClass,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          onExited = _props.onExited,
          animation = _props.animation,
          unmountOnExit = _props.unmountOnExit;


      return {
        eventKey: name,
        className: className + ' ' + extraClass,
        disabled: disabled,
        bsClass: bsClass,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        animation: animation,
        unmountOnExit: unmountOnExit
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var tabProps = this.getTabProps();
      return _react2.default.createElement(
        _reactBootstrapSs.Tab.Pane,
        tabProps,
        this.props.children
      );
    }
  }]);

  return TabItem;
}(_react.Component);

TabItem.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  extraClass: _react2.default.PropTypes.string,
  tabClassName: _react2.default.PropTypes.string
};

TabItem.defaultProps = {
  className: '',
  extraClass: ''
};

exports.default = TabItem;

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSs = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'getContainerProps',
    value: function getContainerProps() {
      var _props = this.props,
          activeKey = _props.activeKey,
          onSelect = _props.onSelect,
          className = _props.className,
          extraClass = _props.extraClass,
          id = _props.id;

      var combinedClassName = className + ' ' + extraClass;

      return {
        activeKey: activeKey,
        className: combinedClassName,
        defaultActiveKey: this.getDefaultActiveKey(),
        onSelect: onSelect,
        id: id
      };
    }
  }, {
    key: 'getDefaultActiveKey',
    value: function getDefaultActiveKey() {
      var _this2 = this;

      var active = null;

      if (typeof this.props.defaultActiveKey === 'string') {
        var activeChild = _react2.default.Children.toArray(this.props.children).find(function (child) {
          return child.props.name === _this2.props.defaultActiveKey;
        });

        if (activeChild) {
          active = activeChild.props.name;
        }
      }

      if (typeof active !== 'string') {
        _react2.default.Children.forEach(this.props.children, function (child) {
          if (typeof active !== 'string') {
            active = child.props.name;
          }
        });
      }

      return active;
    }
  }, {
    key: 'renderTab',
    value: function renderTab(child) {
      if (child.props.title === null) {
        return null;
      }
      return _react2.default.createElement(
        _reactBootstrapSs.NavItem,
        {
          eventKey: child.props.name,
          disabled: child.props.disabled,
          className: child.props.tabClassName
        },
        child.props.title
      );
    }
  }, {
    key: 'renderNav',
    value: function renderNav() {
      var tabs = _react2.default.Children.map(this.props.children, this.renderTab);

      if (tabs.length <= 1) {
        return null;
      }

      return _react2.default.createElement(
        _reactBootstrapSs.Nav,
        { bsStyle: this.props.bsStyle, role: 'tablist' },
        tabs
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var containerProps = this.getContainerProps();
      var nav = this.renderNav();

      return _react2.default.createElement(
        _reactBootstrapSs.Tab.Container,
        containerProps,
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          nav,
          _react2.default.createElement(
            _reactBootstrapSs.Tab.Content,
            { animation: this.props.animation },
            this.props.children
          )
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,
  defaultActiveKey: _react2.default.PropTypes.string,
  extraClass: _react2.default.PropTypes.string
};

Tabs.defaultProps = {
  bsStyle: 'tabs',
  className: '',
  extraClass: ''
};

exports.default = Tabs;

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FieldHolder = __webpack_require__(47);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _DateField2 = __webpack_require__(255);

var _moment = __webpack_require__(178);

var _moment2 = _interopRequireDefault(_moment);

var _modernizr = __webpack_require__(177);

var _modernizr2 = _interopRequireDefault(_modernizr);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var localFormat = 'LT';

var TimeField = function (_DateField) {
  _inherits(TimeField, _DateField);

  function TimeField() {
    _classCallCheck(this, TimeField);

    return _possibleConstructorReturn(this, (TimeField.__proto__ || Object.getPrototypeOf(TimeField)).apply(this, arguments));
  }

  _createClass(TimeField, [{
    key: 'getInputProps',
    value: function getInputProps() {
      var placeholder = _i18n2.default.inject(_i18n2.default._t('Admin.FormatExample', 'Example: {format}'), { format: (0, _moment2.default)().endOf('month').format(localFormat) });
      var props = {};
      Object.assign(props, _get(TimeField.prototype.__proto__ || Object.getPrototypeOf(TimeField.prototype), 'getInputProps', this).call(this));
      Object.assign(props, {
        type: this.props.data.html5 ? 'time' : 'text',
        placeholder: placeholder
      });
      return props;
    }
  }, {
    key: 'isMultiline',
    value: function isMultiline() {
      return false;
    }
  }, {
    key: 'hasNativeSupport',
    value: function hasNativeSupport() {
      return _modernizr2.default.inputtypes.time;
    }
  }, {
    key: 'convertToLocalised',
    value: function convertToLocalised(isoTime) {
      var localTime = '';
      if (isoTime) {
        var timeObject = (0, _moment2.default)(isoTime, 'HH:mm:ss');
        if (timeObject.isValid()) {
          localTime = timeObject.format(localFormat);
        }
      }
      return localTime;
    }
  }, {
    key: 'convertToIso',
    value: function convertToIso(localTime) {
      var isoTime = '';
      if (localTime) {
        var timeObject = (0, _moment2.default)(localTime, localFormat);
        if (timeObject.isValid()) {
          isoTime = timeObject.format('HH:mm:ss');
        }
      }
      return isoTime;
    }
  }]);

  return TimeField;
}(_DateField2.Component);

TimeField.propTypes = {
  lang: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.shape({
    html5: _react2.default.PropTypes.boolean
  })
};

TimeField.defaultProps = {
  data: {}
};

exports.Component = TimeField;
exports.default = (0, _FieldHolder2.default)(TimeField);

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _TreeDropdownFieldNode = __webpack_require__(258);

var _TreeDropdownFieldNode2 = _interopRequireDefault(_TreeDropdownFieldNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeDropdownFieldMenu = function (_Component) {
  _inherits(TreeDropdownFieldMenu, _Component);

  function TreeDropdownFieldMenu(props) {
    _classCallCheck(this, TreeDropdownFieldMenu);

    var _this = _possibleConstructorReturn(this, (TreeDropdownFieldMenu.__proto__ || Object.getPrototypeOf(TreeDropdownFieldMenu)).call(this, props));

    _this.render = _this.render.bind(_this);
    _this.renderOption = _this.renderOption.bind(_this);
    _this.renderBreadcrumbs = _this.renderBreadcrumbs.bind(_this);
    _this.handleBack = _this.handleBack.bind(_this);
    return _this;
  }

  _createClass(TreeDropdownFieldMenu, [{
    key: 'handleBack',
    value: function handleBack(event) {
      if (typeof this.props.onBack === 'function') {
        this.props.onBack(event);
      } else {
        event.stopPropagation();
        event.preventDefault();
      }
    }
  }, {
    key: 'renderBreadcrumbs',
    value: function renderBreadcrumbs() {
      if (this.props.breadcrumbs.length === 0) {
        return null;
      }

      var breadcrumbs = this.props.breadcrumbs.map(function (item) {
        return item.title;
      }).join(' / ');
      var icon = this.props.search ? 'font-icon-search' : 'font-icon-left-open-big';
      var button = _react2.default.createElement(
        'button',
        { className: 'treedropdownfield__breadcrumbs-button' },
        _react2.default.createElement('span', { className: 'icon ' + icon })
      );

      return _react2.default.createElement(
        'div',
        {
          className: 'Select-option treedropdownfield__breadcrumbs flexbox-area-grow fill-width',
          onClick: this.handleBack,
          role: 'button',
          tabIndex: 0
        },
        button,
        _react2.default.createElement(
          'span',
          { className: 'treedropdownfield__breadcrumbs-crumbs flexbox-area-grow' },
          breadcrumbs
        )
      );
    }
  }, {
    key: 'renderOption',
    value: function renderOption(tree, index) {
      if (!this.props.renderMenuOptions) {
        return null;
      }
      var _props$renderMenuOpti = this.props.renderMenuOptions,
          focusedOption = _props$renderMenuOpti.focusedOption,
          instancePrefix = _props$renderMenuOpti.instancePrefix,
          onFocus = _props$renderMenuOpti.onFocus,
          onSelect = _props$renderMenuOpti.onSelect,
          optionClassName = _props$renderMenuOpti.optionClassName,
          optionComponent = _props$renderMenuOpti.optionComponent,
          optionRenderer = _props$renderMenuOpti.optionRenderer,
          onOptionRef = _props$renderMenuOpti.onOptionRef;

      var Option = optionComponent;
      var value = this.props.value;

      var isSelected = value === tree.id;
      if (Array.isArray(value)) {
        isSelected = value.includes(tree.id);
      }
      var isFocused = focusedOption && tree.id === focusedOption.id;
      var optionClass = (0, _classnames2.default)(optionClassName, {
        treedropdownfield__option: true,
        'Select-option': true,
        'is-selected': isSelected,
        'is-focused': isFocused,
        'is-disabled': tree.disabled
      });

      return _react2.default.createElement(
        Option,
        {
          className: optionClass,
          instancePrefix: instancePrefix,
          isDisabled: tree.disabled,
          isFocused: isFocused,
          isSelected: isSelected,
          key: 'option-' + tree.id + '-' + index,
          onFocus: onFocus,
          onSelect: onSelect,
          option: tree,
          optionIndex: index,
          ref: function ref(_ref) {
            onOptionRef(_ref, isFocused);
          }
        },
        optionRenderer(tree, index)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)([this.props.className, 'treedropdownfield__menu']);

      if (this.props.loading) {
        return _react2.default.createElement(
          'div',
          { className: classes },
          _react2.default.createElement(
            'div',
            { className: 'Select-option flexbox-area-grow fill-width' },
            _react2.default.createElement(
              'span',
              { className: 'Select-loading-zone', 'aria-hidden': 'true' },
              _react2.default.createElement('span', { className: 'Select-loading' })
            ),
            _react2.default.createElement(
              'span',
              { className: 'treedropdownfield__menu-loading flexbox-area-grow' },
              _i18n2.default._t('Admin.TREEDROPDOWN_LOADING', 'Loading...')
            )
          )
        );
      }
      if (this.props.failed) {
        return _react2.default.createElement(
          'div',
          { className: classes },
          _react2.default.createElement(
            'div',
            { className: 'Select-option' },
            _i18n2.default._t('Admin.TREEDROPDOWN_FAILED', 'Failed to load')
          )
        );
      }
      if (this.props.tree.count === 0) {
        return _react2.default.createElement(
          'div',
          { className: classes },
          _react2.default.createElement(
            'div',
            { className: 'Select-option' },
            _i18n2.default._t('Admin.TREEDROPDOWN_NO_CHILDREN', 'No children')
          )
        );
      }

      var breadcrumbs = this.renderBreadcrumbs();
      var options = this.props.renderMenuOptions && this.props.renderMenuOptions.options;

      var children = options ? options.filter(function (option) {
        return option.title !== null;
      }).map(this.renderOption) : null;

      return _react2.default.createElement(
        'div',
        { className: classes },
        breadcrumbs,
        children
      );
    }
  }]);

  return TreeDropdownFieldMenu;
}(_react.Component);

TreeDropdownFieldMenu.propTypes = {
  className: _react.PropTypes.string,
  breadcrumbs: _react.PropTypes.arrayOf(_react.PropTypes.shape(_TreeDropdownFieldNode2.default.propTypes)),
  loading: _react.PropTypes.bool,
  failed: _react.PropTypes.bool,
  tree: _react.PropTypes.shape(_TreeDropdownFieldNode2.default.propTypes),
  renderMenuOptions: _react.PropTypes.object,
  onBack: _react.PropTypes.func,
  search: _react.PropTypes.bool,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.array])
};

exports.default = TreeDropdownFieldMenu;

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var findTreeByPath = exports.findTreeByPath = function findTreeByPath(tree, path) {
  if (!tree || Object.keys(tree).length === 0) {
    return null;
  }

  if (path.length === 0) {
    return tree;
  }
  var subPath = path.slice(0);
  var nextID = subPath.shift();
  var subTree = tree.children.find(function (nextSubTree) {
    return nextSubTree.id === nextID;
  });

  if (subTree) {
    return findTreeByPath(subTree, subPath);
  }

  return null;
};

var findTreeByID = function findTreeByID(tree, id) {
  if (!id || !tree || !tree.children || Object.keys(tree).length === 0) {
    return null;
  }

  if (tree.id === id) {
    return tree;
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tree.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var child = _step.value;

      var found = findTreeByID(child, id);
      if (found !== null) {
        return found;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
};

var findTreePath = exports.findTreePath = function findTreePath(tree, id) {
  if (!id) {
    return [];
  }

  if (!tree || Object.keys(tree).length === 0) {
    return null;
  }

  if (tree.id === id) {
    return [tree.id];
  }
  if (!tree.children) {
    return null;
  }
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = tree.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var child = _step2.value;

      var childPath = findTreePath(child, id);

      if (childPath !== null) {
        if (tree.id) {
          childPath.unshift(tree.id);
        }
        return childPath;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return null;
};

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Injector = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(
    'div',
    { className: 'app' },
    props.children
  );
};

exports.default = (0, _Injector.provideInjector)(App);

/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(97);

var _Injector = __webpack_require__(39);

var _getFormState = __webpack_require__(398);

var _getFormState2 = _interopRequireDefault(_getFormState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InjectableForm = function InjectableForm(props) {
  var FormComponent = props.formComponent;
  var newProps = _extends({}, props);
  delete newProps.formComponent;

  return _react2.default.createElement(FormComponent, newProps);
};

InjectableForm.propTypes = {
  formComponent: _react2.default.PropTypes.func.isRequired
};

var InjectedForm = (0, _Injector.inject)(['Form'], function (formComponent) {
  return { formComponent: formComponent };
})(InjectableForm);

exports.default = (0, _reduxForm.reduxForm)({
  getFormState: _getFormState2.default
})(InjectedForm);

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(11);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
	$('.permissioncheckboxset .valADMIN input').entwine({
		onmatch: function onmatch() {
			this._super();
		},
		onunmatch: function onunmatch() {
			this._super();
		},
		onclick: function onclick(e) {
			this.toggleCheckboxes();
		},
		toggleCheckboxes: function toggleCheckboxes() {
			var checkboxes = $(this).parents('.field:eq(0)').find('.checkbox').not(this);

			if ($(this).is(':checked')) {
				checkboxes.each(function () {
					$(this).data('SecurityAdmin.oldChecked', $(this).attr('checked'));
					$(this).data('SecurityAdmin.oldDisabled', $(this).attr('disabled'));
					$(this).attr('disabled', 'disabled');
					$(this).attr('checked', 'checked');
				});
			} else {
				checkboxes.each(function () {
					var oldChecked = $(this).data('SecurityAdmin.oldChecked');
					var oldDisabled = $(this).data('SecurityAdmin.oldDisabled');
					if (oldChecked !== null) $(this).attr('checked', oldChecked);
					if (oldDisabled !== null) $(this).attr('disabled', oldDisabled);
				});
			}
		}
	});

	$('.permissioncheckboxset .valCMS_ACCESS_LeftAndMain input').entwine({
		getCheckboxesExceptThisOne: function getCheckboxesExceptThisOne() {
			return $(this).parents('.field:eq(0)').find('li').filter(function (i) {
				var klass = $(this).attr('class');
				return klass ? klass.match(/CMS_ACCESS_/) : false;
			}).find('.checkbox').not(this);
		},
		onmatch: function onmatch() {
			this.toggleCheckboxes();

			this._super();
		},
		onunmatch: function onunmatch() {
			this._super();
		},
		onclick: function onclick(e) {
			this.toggleCheckboxes();
		},
		toggleCheckboxes: function toggleCheckboxes() {
			var checkboxes = this.getCheckboxesExceptThisOne();
			if ($(this).is(':checked')) {
				checkboxes.each(function () {
					$(this).data('PermissionCheckboxSetField.oldChecked', $(this).is(':checked'));
					$(this).data('PermissionCheckboxSetField.oldDisabled', $(this).is(':disabled'));
					$(this).prop('disabled', 'disabled');
					$(this).prop('checked', 'checked');
				});
			} else {
				checkboxes.each(function () {
					$(this).prop('checked', $(this).data('PermissionCheckboxSetField.oldChecked'));
					$(this).prop('disabled', $(this).data('PermissionCheckboxSetField.oldDisabled'));
				});
			}
		}
	});
});

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadComponent = exports.inject = exports.withInjector = exports.provideContext = exports.provideInjector = undefined;

var _provideInjector = __webpack_require__(260);

var _provideInjector2 = _interopRequireDefault(_provideInjector);

var _provideContext = __webpack_require__(416);

var _provideContext2 = _interopRequireDefault(_provideContext);

var _withInjector = __webpack_require__(261);

var _withInjector2 = _interopRequireDefault(_withInjector);

var _inject = __webpack_require__(414);

var _inject2 = _interopRequireDefault(_inject);

var _loadComponent = __webpack_require__(415);

var _loadComponent2 = _interopRequireDefault(_loadComponent);

var _Container = __webpack_require__(186);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.provideInjector = _provideInjector2.default;
exports.provideContext = _provideContext2.default;
exports.withInjector = _withInjector2.default;
exports.inject = _inject2.default;
exports.loadComponent = _loadComponent2.default;
exports.default = _Container2.default;

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _validator = __webpack_require__(1948);

var _validator2 = _interopRequireDefault(_validator);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
  function Validator(values) {
    _classCallCheck(this, Validator);

    this.setValues(values);
  }

  _createClass(Validator, [{
    key: 'setValues',
    value: function setValues(values) {
      this.values = values;
    }
  }, {
    key: 'getFieldValue',
    value: function getFieldValue(name) {
      var value = this.values[name];

      if (typeof value !== 'string') {
        if (typeof value === 'undefined' || value === null || value === false) {
          value = '';
        } else {
          value = value.toString();
        }
      }

      return value;
    }
  }, {
    key: 'validateValue',
    value: function validateValue(value, rule, config) {
      if (value === '') {
        return rule !== 'required';
      }
      switch (rule) {
        case 'equals':
          {
            var otherValue = this.getFieldValue(config.field);
            return _validator2.default.equals(value, otherValue);
          }
        case 'numeric':
          {
            return _validator2.default.isNumeric(value);
          }
        case 'date':
          {
            return _validator2.default.isDate(value);
          }
        case 'alphanumeric':
          {
            return _validator2.default.isAlphanumeric(value);
          }
        case 'alpha':
          {
            return _validator2.default.isAlpha(value);
          }
        case 'regex':
          {
            return _validator2.default.matches(value, config.pattern);
          }
        case 'max':
          {
            return value.length <= config.length;
          }
        case 'email':
          {
            return _validator2.default.isEmail(value);
          }
        default:
          {
            console.warn('Unknown validation rule used: \'' + rule + '\'');
            return false;
          }
      }
    }
  }, {
    key: 'validateFieldSchema',
    value: function validateFieldSchema(fieldSchema) {
      return this.validateField(fieldSchema.name, fieldSchema.validation, fieldSchema.leftTitle !== null ? fieldSchema.leftTitle : fieldSchema.title, fieldSchema.customValidationMessage);
    }
  }, {
    key: 'getMessage',
    value: function getMessage(rule, config) {
      var name = config.title;
      var message = typeof config.message === 'string' ? config.message : _i18n2.default._t('Admin.VALIDATOR_MESSAGE_' + rule.toUpperCase(), _i18n2.default._t('Admin.VALIDATOR_MESSAGE_DEFAULT', '{name} is not a valid value.'));

      return _i18n2.default.inject(message, { name: name });
    }
  }, {
    key: 'validateField',
    value: function validateField(name, rules, title, overrideMessage) {
      var _this = this;

      var response = { valid: true, errors: [] };

      if (!rules) {
        return response;
      }

      var value = this.getFieldValue(name);

      if (value === '' && rules.required) {
        var config = Object.assign({ title: title !== '' ? title : name }, rules.required);
        var message = overrideMessage || this.getMessage('required', config);
        return {
          valid: false,
          errors: [message]
        };
      }

      Object.entries(rules).forEach(function (ruleEntry) {
        var _ruleEntry = _slicedToArray(ruleEntry, 2),
            rule = _ruleEntry[0],
            initConfig = _ruleEntry[1];

        var config = Object.assign({ title: name }, { title: title }, initConfig);

        if (rule === 'required') {
          return;
        }

        var valid = _this.validateValue(value, rule, config);
        if (!valid) {
          var _message = _this.getMessage(rule, config);
          response.valid = false;
          response.errors.push(_message);
        }
      });

      if (overrideMessage && !response.valid) {
        response.errors = [overrideMessage];
      }

      return response;
    }
  }]);

  return Validator;
}();

exports.default = Validator;

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports = ReduxForm;

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createClassMap = function createClassMap(classesStr) {
  var classConfig = {};
  if (classesStr) {
    classesStr.split(' ').forEach(function (className) {
      if (className !== '') {
        classConfig[className] = true;
      }
    });
  }
  return classConfig;
};

exports.default = createClassMap;

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _createClassMap = __webpack_require__(971);

var _createClassMap2 = _interopRequireDefault(_createClassMap);

var _setIn = __webpack_require__(758);

var _setIn2 = _interopRequireDefault(_setIn);

var _reduxForm = __webpack_require__(97);

var _schemaFieldValues = __webpack_require__(179);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getFormState = function getFormState(state) {
  return state;
};

var FormStateManager = function () {
  function FormStateManager(schema, reduxFormState) {
    _classCallCheck(this, FormStateManager);

    var state = schema.state || {};
    var fields = state.fields || [];

    this.schema = _extends({}, schema, {
      state: _extends({}, state, {
        fields: [].concat(_toConsumableArray(fields))
      })
    });
    this.mockGlobalState = (0, _setIn2.default)({}, schema.name, reduxFormState);
  }

  _createClass(FormStateManager, [{
    key: 'getFieldByName',
    value: function getFieldByName(fieldName) {
      var schemaForm = _extends({
        fields: [],
        actions: []
      }, this.schema.schema);
      var fields = [].concat(_toConsumableArray(schemaForm.fields), _toConsumableArray(schemaForm.actions));
      var schema = (0, _schemaFieldValues.findField)(fields, fieldName);
      var state = this.schema.state.fields.find(function (field) {
        return field.name === fieldName;
      });

      return (0, _schemaFieldValues.schemaMerge)(schema, state);
    }
  }, {
    key: 'mutateField',
    value: function mutateField(fieldName, updater) {
      var fieldList = this.schema.state.fields || [];
      var fieldIndex = fieldList.findIndex(function (field) {
        return field.name === fieldName;
      });

      if (fieldIndex < 0) {
        return this;
      }

      var fields = [].concat(_toConsumableArray(fieldList));
      var field = this.getFieldByName(fieldName);
      fields[fieldIndex] = (0, _schemaFieldValues.schemaMerge)(field, updater(field));

      this.schema.state.fields = fields;

      return this;
    }
  }, {
    key: 'updateField',
    value: function updateField(fieldName, update) {
      return this.mutateField(fieldName, function (field) {
        return _extends({}, field, update);
      });
    }
  }, {
    key: 'updateFields',
    value: function updateFields(updates) {
      var _this = this;

      Object.keys(updates).forEach(function (key) {
        _this.updateField(key, updates[key]);
      });

      return this;
    }
  }, {
    key: 'setFieldComponent',
    value: function setFieldComponent(fieldName, component) {
      return this.updateField(fieldName, { component: component });
    }
  }, {
    key: 'setFieldClass',
    value: function setFieldClass(fieldName, className) {
      var active = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      return this.mutateField(fieldName, function (field) {
        var classConfig = (0, _createClassMap2.default)(field.extraClass);
        classConfig[className] = active;
        return _extends({}, field, {
          extraClass: (0, _classnames2.default)(classConfig)
        });
      });
    }
  }, {
    key: 'addFieldClass',
    value: function addFieldClass(fieldName, className) {
      return this.setFieldClass(fieldName, className, true);
    }
  }, {
    key: 'removeFieldClass',
    value: function removeFieldClass(fieldName, className) {
      return this.setFieldClass(fieldName, className, false);
    }
  }, {
    key: 'getValues',
    value: function getValues() {
      return (0, _reduxForm.getFormValues)(this.schema.name, getFormState)(this.mockGlobalState) || {};
    }
  }, {
    key: 'getValue',
    value: function getValue(fieldName) {
      return this.getValues()[fieldName];
    }
  }, {
    key: 'isDirty',
    value: function isDirty() {
      return (0, _reduxForm.isDirty)(this.schema.name, getFormState)(this.mockGlobalState);
    }
  }, {
    key: 'isPristine',
    value: function isPristine() {
      return (0, _reduxForm.isPristine)(this.schema.name, getFormState)(this.mockGlobalState);
    }
  }, {
    key: 'isValid',
    value: function isValid() {
      return (0, _reduxForm.isValid)(this.schema.name, getFormState)(this.mockGlobalState);
    }
  }, {
    key: 'isInvalid',
    value: function isInvalid() {
      return (0, _reduxForm.isInvalid)(this.schema.name, getFormState)(this.mockGlobalState);
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.schema;
    }
  }]);

  return FormStateManager;
}();

exports.default = FormStateManager;

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormValidationManager = function () {
  function FormValidationManager(values) {
    _classCallCheck(this, FormValidationManager);

    this.values = values;
    this.errorMap = {};
  }

  _createClass(FormValidationManager, [{
    key: "addError",
    value: function addError(fieldName, message) {
      if (!this.fieldExists(fieldName)) {
        throw new Error("Tried to add error to non-existent field: " + fieldName);
      }
      if (!this.errorMap[fieldName]) {
        this.errorMap[fieldName] = [];
      }

      this.errorMap[fieldName] = [].concat(_toConsumableArray(this.errorMap[fieldName]), [message]);

      return this;
    }
  }, {
    key: "addErrors",
    value: function addErrors(map) {
      var _this = this;

      Object.entries(map).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 1),
            fieldName = _entry[0];

        var _entry2 = _slicedToArray(entry, 2),
            messages = _entry2[1];

        if (!Array.isArray(messages)) {
          messages = [messages];
        }
        messages.forEach(function (message) {
          return _this.addError(fieldName, message);
        });
      });

      return this;
    }
  }, {
    key: "clearErrors",
    value: function clearErrors(fieldName) {
      if (!this.fieldExists(fieldName)) {
        throw new Error("Tried to clear errors for non-existent field: " + fieldName);
      }

      delete this.errorMap[fieldName];

      return this;
    }
  }, {
    key: "hasError",
    value: function hasError(fieldName) {
      return this.fieldExists(fieldName) && !!this.getErrors(fieldName).length;
    }
  }, {
    key: "fieldExists",
    value: function fieldExists(field) {
      return Object.keys(this.values).includes(field);
    }
  }, {
    key: "getErrors",
    value: function getErrors(fieldName) {
      if (!this.fieldExists(fieldName)) {
        throw new Error("Tried to get errors for non-existent field: " + fieldName);
      }

      return this.errorMap[fieldName] || [];
    }
  }, {
    key: "reset",
    value: function reset() {
      this.errorMap = {};
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.errorMap;
    }
  }]);

  return FormValidationManager;
}();

exports.default = FormValidationManager;

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Injector = __webpack_require__(968);

var _Injector2 = _interopRequireDefault(_Injector);

var _getIn = __webpack_require__(757);

var _getIn2 = _interopRequireDefault(_getIn);

var _setIn = __webpack_require__(758);

var _setIn2 = _interopRequireDefault(_setIn);

var _reduxForm = __webpack_require__(97);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var omittedActions = [_reduxForm.actionTypes.REGISTER_FIELD, _reduxForm.actionTypes.DESTROY];

var applyFormMiddleware = function applyFormMiddleware(reducer) {
  return function () {
    return function (state, action) {
      var reducedState = reducer(state, action);
      var formName = action.meta && action.meta.form;

      if (!formName || omittedActions.includes(action.type)) {
        return reducedState;
      }

      var formSchemaMiddleware = _Injector2.default.form.getSchema(formName);
      if (!formSchemaMiddleware) {
        return reducedState;
      }

      var reduxFormState = (0, _getIn2.default)(reducedState.formState, formName);
      if (!reduxFormState) {
        return reducedState;
      }

      var newState = _extends({}, reducedState);

      var schemaEntries = Object.entries(reducedState.formSchemas).filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            entry = _ref2[1];

        return entry.name === formName;
      });

      if (!schemaEntries.length) {
        return reducedState;
      }

      schemaEntries.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            schemaKey = _ref4[0],
            formSchemaState = _ref4[1];

        var updates = formSchemaMiddleware(formSchemaState, reduxFormState);

        if (!updates.state || !Array.isArray(updates.state.fields)) {
          throw new Error('\n      One more calls to alterSchema did not return a properly formed schema state\n      object. Check your calls to Injector.transform() which could affect \'' + schemaKey + '\'.\n    ');
        }

        newState = (0, _setIn2.default)(newState, 'formSchemas.' + schemaKey + '.state', updates.state);
      });

      return newState;
    };
  };
};

exports.default = applyFormMiddleware;

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _buildBaseContainer = __webpack_require__(259);

var _buildBaseContainer2 = _interopRequireDefault(_buildBaseContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createDisplayName = function createDisplayName(original, transforms) {
  var componentName = original.displayName || original.name || 'Component';
  var names = [componentName].concat(_toConsumableArray(transforms));

  return names.reduce(function (acc, curr) {
    return curr + '(' + acc + ')';
  });
};

var buildComponentContainer = function buildComponentContainer() {
  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _buildBaseContainer2.default)();
  return _extends({}, base, {
    get: function get(key, context) {
      var _base$get;

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      var service = (_base$get = base.get).call.apply(_base$get, [this, key, context].concat(_toConsumableArray(args)));

      if (service.displayName && service.displayName.match(/\]$/)) {
        return service;
      }

      var componentName = service.displayName || service.name || 'Component';
      var componentKey = context ? '[' + context + ']' : '';
      service.displayName = '' + componentName + componentKey;

      return service;
    },
    createTransformer: function createTransformer(name, priorities) {
      var _this = this;

      return function (key, wrapper, displayName) {
        _this.customise(_extends({ name: name }, priorities, { displayName: displayName }), key, wrapper);
      };
    },
    getFactory: function getFactory(key, middlewareMatches) {
      var factory = base.getFactory.call(this, key, middlewareMatches);
      var names = middlewareMatches.map(function (middleware) {
        return middleware.displayName || middleware.name;
      });
      factory.displayName = createDisplayName(this.services[key], names);

      return factory;
    }
  });
};

exports.default = buildComponentContainer;

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALIDATION_MIDDLEWARE_SERVICE = exports.SCHEMA_MIDDLEWARE_SERVICE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _buildBaseContainer = __webpack_require__(259);

var _buildBaseContainer2 = _interopRequireDefault(_buildBaseContainer);

var _FormStateManager = __webpack_require__(972);

var _FormStateManager2 = _interopRequireDefault(_FormStateManager);

var _FormValidationManager = __webpack_require__(973);

var _FormValidationManager2 = _interopRequireDefault(_FormValidationManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SCHEMA_MIDDLEWARE_SERVICE = 'FormSchemaMiddleware';
var VALIDATION_MIDDLEWARE_SERVICE = 'FormValidationMiddleware';

var buildFormContainer = function buildFormContainer() {
  var _services;

  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _buildBaseContainer2.default)();
  return _extends({}, base, {
    services: (_services = {}, _defineProperty(_services, SCHEMA_MIDDLEWARE_SERVICE, function (state) {
      return state;
    }), _defineProperty(_services, VALIDATION_MIDDLEWARE_SERVICE, function (values) {
      var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return errors;
    }), _services),

    register: function register() {
      throw new Error('\n      Attempted to register a service on Injector.form. This container accepts only two\n      services by design (' + SCHEMA_MIDDLEWARE_SERVICE + ' and ' + VALIDATION_MIDDLEWARE_SERVICE + ') \n      for updating form schema and adding validation, respectively. Consider using a more\n      generic container, e.g. Injector.reducer.\n    ');
    },
    registerMany: function registerMany() {
      this.register();
    },
    getSchema: function getSchema(context) {
      var _base$get;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_base$get = base.get).call.apply(_base$get, [this, SCHEMA_MIDDLEWARE_SERVICE, context].concat(_toConsumableArray(args)));
    },
    getValidation: function getValidation(context) {
      var _base$get2;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_base$get2 = base.get).call.apply(_base$get2, [this, VALIDATION_MIDDLEWARE_SERVICE, context].concat(_toConsumableArray(args)));
    },
    createTransformer: function createTransformer(name, priorities) {
      var _this = this;

      var factory = function factory(serviceName) {
        return function (context, wrapper) {
          return base.customise.call(_this, _extends({ name: name }, priorities), serviceName + '.' + context, wrapper);
        };
      };

      return {
        alterSchema: factory(SCHEMA_MIDDLEWARE_SERVICE),
        addValidation: factory(VALIDATION_MIDDLEWARE_SERVICE)
      };
    },
    getFactory: function getFactory(key, middlewareMatches) {
      var factories = middlewareMatches.map(function (middleware) {
        return middleware.factory;
      });
      if (key === SCHEMA_MIDDLEWARE_SERVICE) {
        return this.getSchemaReducer(factories);
      } else if (key === VALIDATION_MIDDLEWARE_SERVICE) {
        return this.getValidationReducer(factories);
      }
      throw new Error('Invalid service for form injector: ' + key);
    },
    getSchemaReducer: function getSchemaReducer(factories) {
      return function (formSchemaState, reduxFormState) {
        return factories.reduce(function (currentState, currentFactory) {
          var manager = new _FormStateManager2.default(currentState, reduxFormState);
          var modifications = currentFactory(manager);
          return _extends({}, currentState, modifications);
        }, formSchemaState);
      };
    },
    getValidationReducer: function getValidationReducer(factories) {
      return function (values, schema) {
        var validation = new _FormValidationManager2.default(values);
        factories.forEach(function (factory) {
          return factory(values, validation, schema);
        });

        return validation.getState();
      };
    }
  });
};

exports.SCHEMA_MIDDLEWARE_SERVICE = SCHEMA_MIDDLEWARE_SERVICE;
exports.VALIDATION_MIDDLEWARE_SERVICE = VALIDATION_MIDDLEWARE_SERVICE;
exports.default = buildFormContainer;

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buildInjectorContainer = function buildInjectorContainer() {
  return {
    services: {},

    initialised: false,

    callbacks: [],

    register: function register(key, value) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          force = _ref.force;

      if (this.initialised) {
        throw new Error('Cannot mutate DI container after it has been initialised');
      }
      if (this.services[key] && force !== true) {
        throw new Error('\n      Tried to register service ' + key + ' more than once. This practice is discouraged. Consider\n      using Injector.update() to enhance the service rather than override it completely.\n      Otherwise, invoke the register() function with { force: true } as the third argument.\n     ');
      }

      if (typeof this[key] !== 'undefined' && !this.services[key]) {
        throw new Error('\n      Tried to register service ' + key + ' which is a reserved keyword. This would affect the behaviour\n      of this API class, so it is forbidden to register with Injector.\n      ');
      }

      var requiredMethods = ['load', 'createTransformer', 'get', 'register'];
      if (!requiredMethods.every(function (method) {
        return typeof value[method] === 'function';
      })) {
        throw new Error('\n      Tried to register service ' + key + ' that is not a valid object, Injector requires an object\n      which contains the following methods: ' + requiredMethods.join(', ') + '\n      ');
      }

      this.services[key] = value;

      this[key] = value;
    },
    load: function load() {
      if (this.initialised) {
        throw new Error('Cannot mutate DI container after it has been initialised');
      }
      Object.values(this.services).forEach(function (service) {
        return service.load();
      });

      this.initialised = true;
      this.callbacks.forEach(function (callback) {
        callback();
      });
      this.callbacks = [];
    },
    transform: function transform(name, callback) {
      var priorities = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this.initialised) {
        throw new Error('Cannot mutate DI container after it has been initialised');
      }

      var updater = Object.entries(this.services).reduce(function (updateContainer, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            serviceName = _ref3[0],
            service = _ref3[1];

        return _extends({}, updateContainer, _defineProperty({}, serviceName, service.createTransformer(name, priorities)));
      }, {});
      callback(updater);
    },
    ready: function ready(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Callback provided is not a function');
      }
      if (this.initialised) {
        callback();
        return;
      }

      this.callbacks = [].concat(_toConsumableArray(this.callbacks), [callback]);
    }
  };
};

exports.default = buildInjectorContainer;

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _buildBaseContainer = __webpack_require__(259);

var _buildBaseContainer2 = _interopRequireDefault(_buildBaseContainer);

var _MiddlewareRegistry = __webpack_require__(413);

var _MiddlewareRegistry2 = _interopRequireDefault(_MiddlewareRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buildReducerContainer = function buildReducerContainer() {
  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _buildBaseContainer2.default)();
  return _extends({}, base, {
    store: null,

    setStore: function setStore(store) {
      this.store = store;
    },
    customise: function customise(meta, key, factory) {
      var _this = this;

      this.isProtected();

      var registry = this.middlewareRegistries[key];
      if (!registry) {
        registry = new _MiddlewareRegistry2.default();
        this.middlewareRegistries = _extends({}, this.middlewareRegistries, _defineProperty({}, key, registry));
      }
      var enhancedFactory = function enhancedFactory(service) {
        var getState = _this.store && _this.store.getState;

        return factory(service)(getState);
      };
      registry.add(meta, enhancedFactory);
    },
    getAll: function getAll() {
      var newFactories = this.initialised ? Object.entries(this.factories).reduce(function (prev, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            factory = _ref2[1];

        return _extends({}, prev, _defineProperty({}, key, factory()));
      }, {}) : Object.entries(this.services).reduce(function (prev, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            service = _ref4[1];

        return _extends({}, prev, _defineProperty({}, key, service));
      }, {});

      return newFactories;
    }
  });
};

exports.default = buildReducerContainer;

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepFreezeStrict = __webpack_require__(84);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _BreadcrumbsActionTypes = __webpack_require__(417);

var _BreadcrumbsActionTypes2 = _interopRequireDefault(_BreadcrumbsActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = (0, _deepFreezeStrict2.default)([]);

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _BreadcrumbsActionTypes2.default.SET_BREADCRUMBS:
      return (0, _deepFreezeStrict2.default)(Object.assign([], action.payload.breadcrumbs));

    default:
      return state;
  }
}

exports.default = reducer;

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = setConfig;

var _ConfigActionTypes = __webpack_require__(418);

var _ConfigActionTypes2 = _interopRequireDefault(_ConfigActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setConfig(config) {
  return {
    type: _ConfigActionTypes2.default.SET_CONFIG,
    payload: { config: config }
  };
}

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepFreezeStrict = __webpack_require__(84);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _ConfigActionTypes = __webpack_require__(418);

var _ConfigActionTypes2 = _interopRequireDefault(_ConfigActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _ConfigActionTypes2.default.SET_CONFIG:
      return (0, _deepFreezeStrict2.default)(Object.assign({}, state, action.payload.config));

    default:
      return state;
  }
}

exports.default = configReducer;

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _deepFreezeStrict = __webpack_require__(84);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _MobileMenuActionTypes = __webpack_require__(419);

var _MobileMenuActionTypes2 = _interopRequireDefault(_MobileMenuActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  isOpen: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _MobileMenuActionTypes2.default.TOGGLE_MENU:
      {
        return (0, _deepFreezeStrict2.default)(_extends({}, state, { isOpen: !state.isOpen }));
      }

    case _MobileMenuActionTypes2.default.OPEN_MENU:
      {
        return (0, _deepFreezeStrict2.default)(_extends({}, state, { isOpen: true }));
      }

    case _MobileMenuActionTypes2.default.CLOSE_MENU:
      {
        return (0, _deepFreezeStrict2.default)(_extends({}, state, { isOpen: false }));
      }

    default:
      {
        return state;
      }
  }
}

exports.default = reducer;

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _deepFreezeStrict = __webpack_require__(84);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _RecordsActionTypes = __webpack_require__(421);

var _RecordsActionTypes2 = _interopRequireDefault(_RecordsActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

function recordsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _RecordsActionTypes2.default.FETCH_RECORDS_SUCCESS:
      {
        var recordType = action.payload.recordType;
        if (!recordType) {
          throw new Error('Undefined record type');
        }
        var records = action.payload.data._embedded[recordType] || [];
        return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, recordType, records)));
      }

    case _RecordsActionTypes2.default.FETCH_RECORD_SUCCESS:
      {
        var _recordType = action.payload.recordType;
        var newRecord = action.payload.data;
        if (!_recordType) {
          throw new Error('Undefined record type');
        }
        if (!newRecord) {
          throw new Error('Undefined record data given');
        }
        var _records = state[_recordType] || [];

        if (_records.find(function (next) {
          return next.ID === newRecord.ID;
        })) {
          return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, _recordType, _records.map(function (next) {
            return next.ID === newRecord.ID ? newRecord : next;
          }))));
        }
        return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, _recordType, [].concat(_toConsumableArray(_records), [newRecord]))));
      }

    case _RecordsActionTypes2.default.DELETE_RECORD_SUCCESS:
      {
        var _recordType2 = action.payload.recordType;
        if (!_recordType2) {
          throw new Error('Undefined record type');
        }
        var _records2 = state[_recordType2].filter(function (record) {
          return record.ID !== action.payload.id;
        });

        return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, _recordType2, _records2)));
      }

    default:
      {
        return state;
      }
  }
}

exports.default = recordsReducer;

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = schemaReducer;

var _deepFreezeStrict = __webpack_require__(84);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _SchemaActionTypes = __webpack_require__(422);

var _SchemaActionTypes2 = _interopRequireDefault(_SchemaActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = (0, _deepFreezeStrict2.default)({});

function schemaReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  switch (action.type) {
    case _SchemaActionTypes2.default.SET_SCHEMA:
      {
        var oldSchema = state[action.payload.id] || {};

        return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, action.payload.id, _extends({}, oldSchema, action.payload))));
      }

    case _SchemaActionTypes2.default.SET_SCHEMA_STATE_OVERRIDES:
      {
        var schema = state[action.payload.id] || {};
        var stateOverride = action.payload.stateOverride;

        if (!stateOverride || !stateOverride.fields) {
          return state;
        }

        return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, action.payload.id, _extends({}, schema, {
          stateOverride: stateOverride
        }))));
      }

    case _SchemaActionTypes2.default.SET_SCHEMA_LOADING:
      {
        var _schema = state[action.payload.id] || {};
        var metadata = _schema.metadata || {};

        return (0, _deepFreezeStrict2.default)(_extends({}, state, _defineProperty({}, action.payload.id, _extends({}, _schema, {
          metadata: _extends({}, metadata, {
            loading: action.payload.loading
          })
        }))));
      }

    default:
      return state;
  }
}

/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVisible = setVisible;
exports.beginTreeUpdating = beginTreeUpdating;
exports.updateTree = updateTree;
exports.updateTreeFailed = updateTreeFailed;
exports.setSearch = setSearch;
exports.addSelectedValues = addSelectedValues;

var _TreeDropdownFieldActionTypes = __webpack_require__(423);

var _TreeDropdownFieldActionTypes2 = _interopRequireDefault(_TreeDropdownFieldActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setVisible(fieldId, path) {
  return {
    type: _TreeDropdownFieldActionTypes2.default.TREEFIELD_SET_VISIBLE,
    payload: { fieldId: fieldId, path: path }
  };
}

function beginTreeUpdating(fieldId, path) {
  return {
    type: _TreeDropdownFieldActionTypes2.default.TREEFIELD_UPDATING_TREE,
    payload: { fieldId: fieldId, path: path }
  };
}

function updateTree(fieldId, path, tree) {
  return {
    type: _TreeDropdownFieldActionTypes2.default.TREEFIELD_UPDATED_TREE,
    payload: { fieldId: fieldId, path: path, tree: tree }
  };
}

function updateTreeFailed(fieldId, path) {
  return {
    type: _TreeDropdownFieldActionTypes2.default.TREEFIELD_UPDATE_FAILED,
    payload: { fieldId: fieldId, path: path }
  };
}

function setSearch(fieldId, search) {
  return {
    type: _TreeDropdownFieldActionTypes2.default.TREEFIELD_SET_SEARCH,
    payload: { fieldId: fieldId, search: search }
  };
}

function addSelectedValues(fieldId, values) {
  return {
    type: _TreeDropdownFieldActionTypes2.default.TREEFIELD_ADD_SELECTED_VALUES,
    payload: { fieldId: fieldId, values: values }
  };
}

/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = treeDropdownFieldReducer;

var _deepFreezeStrict = __webpack_require__(84);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _reduxFieldReducer = __webpack_require__(1947);

var _reduxFieldReducer2 = _interopRequireDefault(_reduxFieldReducer);

var _TreeDropdownFieldActionTypes = __webpack_require__(423);

var _TreeDropdownFieldActionTypes2 = _interopRequireDefault(_TreeDropdownFieldActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var initialState = (0, _deepFreezeStrict2.default)({ fields: {} });

var initialFieldState = (0, _deepFreezeStrict2.default)({
  visible: [],

  tree: {},

  loading: [],

  failed: [],

  search: '',

  selectedValues: []
});

function mergeTree(base, path, tree) {
  if (path.length === 0) {
    return tree;
  }

  var _path = _toArray(path),
      nextID = _path[0],
      subPath = _path.slice(1);

  if (!base.children) {
    return base;
  }

  return (0, _deepFreezeStrict2.default)(_extends({}, base, {
    children: base.children.map(function (subTree) {
      return subTree.id === nextID ? mergeTree(subTree, subPath, tree) : subTree;
    })
  }));
}

function idFromPath(path) {
  if (path.length) {
    return path[path.length - 1];
  }
  return 0;
}

function treeDropdownFieldReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var reduceField = (0, _reduxFieldReducer2.default)(state, action, initialFieldState);

  var removeFromList = function removeFromList(list, remove) {
    return list.filter(function (next) {
      return next !== remove;
    });
  };

  var addToList = function addToList(list, add) {
    if (list.find(function (next) {
      return next === add;
    })) {
      return list;
    }
    var newList = [].concat(_toConsumableArray(list), [add]);

    return newList.sort();
  };

  switch (action.type) {
    case _TreeDropdownFieldActionTypes2.default.TREEFIELD_SET_VISIBLE:
      {
        return reduceField(function () {
          return { visible: action.payload.path };
        });
      }

    case _TreeDropdownFieldActionTypes2.default.TREEFIELD_UPDATING_TREE:
      {
        return reduceField(function (field) {
          return {
            loading: addToList(field.loading, idFromPath(action.payload.path)),
            failed: removeFromList(field.failed, idFromPath(action.payload.path))
          };
        });
      }

    case _TreeDropdownFieldActionTypes2.default.TREEFIELD_UPDATED_TREE:
      {
        return reduceField(function (field) {
          return {
            tree: mergeTree(field.tree, action.payload.path, action.payload.tree),

            loading: removeFromList(field.loading, idFromPath(action.payload.path)),
            failed: removeFromList(field.failed, idFromPath(action.payload.path))
          };
        });
      }

    case _TreeDropdownFieldActionTypes2.default.TREEFIELD_UPDATE_FAILED:
      {
        return reduceField(function (field) {
          return {
            loading: removeFromList(field.loading, idFromPath(action.payload.path)),
            failed: addToList(field.failed, idFromPath(action.payload.path))
          };
        });
      }

    case _TreeDropdownFieldActionTypes2.default.TREEFIELD_SET_SEARCH:
      {
        return reduceField(function (field) {
          return _extends({}, field, {
            search: action.payload.search
          });
        });
      }

    case _TreeDropdownFieldActionTypes2.default.TREEFIELD_ADD_SELECTED_VALUES:
      {
        var values = action.payload.values || [];
        return reduceField(function (field) {
          return _extends({}, field, {
            selectedValues: [].concat(_toConsumableArray(field.selectedValues.filter(function (value) {
              return !values.find(function (item) {
                return item.id === value.id;
              });
            })), _toConsumableArray(values)).sort(function (a, b) {
              return a.id - b.id;
            })
          });
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepFreezeStrict = __webpack_require__(84);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _reduxForm = __webpack_require__(97);

var _UnsavedFormsActionTypes = __webpack_require__(424);

var _UnsavedFormsActionTypes2 = _interopRequireDefault(_UnsavedFormsActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function unsavedFormsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  var formName = action.meta && action.meta.form;

  switch (action.type) {
    case _UnsavedFormsActionTypes2.default.ADD_FORM_CHANGED:
    case _reduxForm.actionTypes.CHANGE:
      {
        return (0, _deepFreezeStrict2.default)([].concat(_toConsumableArray(state.filter(function (form) {
          return form.name !== formName;
        })), [{ name: formName }]));
      }

    case _UnsavedFormsActionTypes2.default.REMOVE_FORM_CHANGED:
    case _reduxForm.actionTypes.STOP_SUBMIT:
      {
        return (0, _deepFreezeStrict2.default)([].concat(_toConsumableArray(state.filter(function (form) {
          return form.name !== formName;
        }))));
      }

    case _reduxForm.actionTypes.DESTROY:
      {
        return (0, _deepFreezeStrict2.default)([].concat(_toConsumableArray(state.filter(function (form) {
          return !formName.includes(form.name);
        }))));
      }

    default:
      {
        return state;
      }
  }
}

exports.default = unsavedFormsReducer;

/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Accordion = function Accordion(props) {
  return _react2.default.createElement(
    "div",
    {
      className: "accordion",
      role: "tablist",
      "aria-multiselectable": "true"
    },
    props.children
  );
};

exports.default = Accordion;

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccordionBlock = function AccordionBlock(props) {
  var headerID = props.groupid + '_Header';
  var listID = props.groupid + '_Items';
  var listIDAttr = listID.replace(/\\/g, '_');
  var headerIDAttr = headerID.replace(/\\/g, '_');

  var groupProps = {
    id: listIDAttr,
    'aria-expanded': true,
    className: 'list-group list-group-flush collapse show',
    role: 'tabpanel',
    'aria-labelledby': headerID
  };
  return _react2.default.createElement(
    'div',
    { className: 'accordion__block' },
    _react2.default.createElement(
      'a',
      {
        className: 'accordion__title',
        'data-toggle': 'collapse',
        href: '#' + listIDAttr,
        'aria-expanded': 'true',
        'aria-controls': listID,
        id: headerIDAttr,
        role: 'tab'
      },
      props.title
    ),
    _react2.default.createElement(
      'div',
      groupProps,
      props.children
    )
  );
};

exports.default = AccordionBlock;

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Badge = function (_PureComponent) {
  _inherits(Badge, _PureComponent);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: 'render',
    value: function render() {
      if (!this.props.status) {
        return null;
      }
      var className = (0, _classnames2.default)(this.props.className, 'badge badge-' + this.props.status + ' badge-pill');
      return _react2.default.createElement(
        'span',
        { className: className },
        this.props.message
      );
    }
  }]);

  return Badge;
}(_react.PureComponent);

Badge.propTypes = {
  message: _react.PropTypes.node,
  status: _react.PropTypes.oneOf(['default', 'info', 'success', 'warning', 'danger', 'primary', 'secondary']),
  className: _react.PropTypes.string
};

Badge.defaultProps = {
  status: 'default'
};

exports.default = Badge;

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumb = function (_Component) {
  _inherits(Breadcrumb, _Component);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
  }

  _createClass(Breadcrumb, [{
    key: 'getLastCrumb',
    value: function getLastCrumb() {
      return this.props.crumbs && this.props.crumbs[this.props.crumbs.length - 1];
    }
  }, {
    key: 'renderBreadcrumbs',
    value: function renderBreadcrumbs() {
      if (!this.props.crumbs) {
        return null;
      }

      return this.props.crumbs.slice(0, -1).map(function (crumb) {
        return _react2.default.createElement(
          'li',
          { key: crumb.text, className: 'breadcrumb__item' },
          _react2.default.createElement(
            'a',
            {
              className: 'breadcrumb__item-title',
              href: crumb.href,
              onClick: crumb.onClick
            },
            crumb.text
          )
        );
      });
    }
  }, {
    key: 'renderLastCrumb',
    value: function renderLastCrumb() {
      var crumb = this.getLastCrumb();
      if (!crumb) {
        return null;
      }

      var iconClassNames = ['breadcrumb__icon'];
      if (crumb.icon) {
        iconClassNames.push(crumb.icon.className);
      }

      return _react2.default.createElement(
        'div',
        { className: 'breadcrumb__item breadcrumb__item--last' },
        _react2.default.createElement(
          'h2',
          { className: 'breadcrumb__item-title' },
          crumb.text,
          crumb.icon && _react2.default.createElement('span', {
            className: iconClassNames.join(' '),
            role: 'button',
            tabIndex: 0,
            onClick: crumb.icon.onClick
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'breadcrumb__container fill-height flexbox-area-grow' },
        this.props.crumbs && this.props.crumbs.length > 1 && _react2.default.createElement(
          'div',
          { className: 'breadcrumb__list-container' },
          _react2.default.createElement(
            'ol',
            { className: 'breadcrumb' },
            this.renderBreadcrumbs()
          )
        ),
        this.renderLastCrumb()
      );
    }
  }]);

  return Breadcrumb;
}(_react.Component);

Breadcrumb.propTypes = {
  crumbs: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    onClick: _react.PropTypes.func,
    text: _react.PropTypes.string,
    icon: _react.PropTypes.shape({
      className: _react.PropTypes.string,
      onClick: _react.PropTypes.func,
      action: function action(props) {
        if (props.action) {
          throw new Error('action: no longer used');
        }
      }
    })
  }))
};

function mapStateToProps(state) {
  return {
    crumbs: state.breadcrumbs
  };
}

exports.Component = Breadcrumb;
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Breadcrumb);

/***/ }),

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSs = __webpack_require__(37);

var _castStringToElement = __webpack_require__(85);

var _castStringToElement2 = _interopRequireDefault(_castStringToElement);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function fieldHolder(Field) {
  var FieldHolder = function (_Component) {
    _inherits(FieldHolder, _Component);

    function FieldHolder() {
      _classCallCheck(this, FieldHolder);

      return _possibleConstructorReturn(this, (FieldHolder.__proto__ || Object.getPrototypeOf(FieldHolder)).apply(this, arguments));
    }

    _createClass(FieldHolder, [{
      key: 'getMessage',
      value: function getMessage() {
        var message = null;
        if (this.props.message && this.props.message.value) {
          message = this.props.message;
        }

        var meta = this.props.meta;
        if (meta && meta.error && meta.touched && (!message || meta.dirty)) {
          message = meta.error;
        }

        return message;
      }
    }, {
      key: 'getHolderProps',
      value: function getHolderProps() {
        var classNames = ['field', this.props.extraClass];
        if (this.props.readOnly) {
          classNames.push('readonly');
        }

        return {
          bsClass: this.props.bsClass,
          bsSize: this.props.bsSize,
          validationState: this.props.validationState,
          className: classNames.join(' '),
          controlId: this.props.id,
          id: this.props.holderId
        };
      }
    }, {
      key: 'renderDescription',
      value: function renderDescription() {
        if (this.props.description === null) {
          return null;
        }

        return (0, _castStringToElement2.default)('div', this.props.description, { className: 'form__field-description' });
      }
    }, {
      key: 'renderMessage',
      value: function renderMessage() {
        var message = this.getMessage();
        if (!message) {
          return null;
        }

        var classNames = (0, _classnames2.default)(['form__field-message', 'form__field-message--' + message.type]);
        var body = (0, _castStringToElement2.default)('div', message.value);
        return _react2.default.createElement(
          'div',
          { className: classNames },
          body
        );
      }
    }, {
      key: 'renderLeftTitle',
      value: function renderLeftTitle() {
        var labelText = this.props.leftTitle !== null ? this.props.leftTitle : this.props.title;

        if (!labelText || this.props.hideLabels) {
          return null;
        }

        return (0, _castStringToElement2.default)(_reactBootstrapSs.ControlLabel, labelText, { className: 'form__field-label' });
      }
    }, {
      key: 'renderRightTitle',
      value: function renderRightTitle() {
        if (!this.props.rightTitle || this.props.hideLabels) {
          return null;
        }

        return (0, _castStringToElement2.default)(_reactBootstrapSs.ControlLabel, this.props.rightTitle, { className: 'form__field-label' });
      }
    }, {
      key: 'renderField',
      value: function renderField() {
        var hasMessage = Boolean(this.getMessage());
        var props = _extends({}, this.props, {
          extraClass: (0, _classnames2.default)(this.props.extraClass, { 'is-invalid': hasMessage })
        });

        var field = _react2.default.createElement(Field, props);
        var prefix = this.props.data.prefix;
        var suffix = this.props.data.suffix;
        if (!prefix && !suffix) {
          return field;
        }
        return _react2.default.createElement(
          _reactBootstrapSs.InputGroup,
          null,
          prefix && _react2.default.createElement(
            _reactBootstrapSs.InputGroup.Addon,
            null,
            prefix
          ),
          field,
          suffix && _react2.default.createElement(
            _reactBootstrapSs.InputGroup.Addon,
            null,
            suffix
          )
        );
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.props.noHolder) {
          return this.renderField();
        }
        return _react2.default.createElement(
          _reactBootstrapSs.FormGroup,
          this.getHolderProps(),
          this.renderLeftTitle(),
          _react2.default.createElement(
            'div',
            { className: 'form__field-holder' },
            this.renderField(),
            this.renderMessage(),
            this.renderDescription()
          ),
          this.renderRightTitle()
        );
      }
    }]);

    return FieldHolder;
  }(_react.Component);

  FieldHolder.propTypes = {
    leftTitle: _react.PropTypes.any,
    rightTitle: _react.PropTypes.any,
    title: _react.PropTypes.any,
    extraClass: _react.PropTypes.string,
    holderId: _react.PropTypes.string,
    id: _react.PropTypes.string,
    name: _react.PropTypes.string,
    description: _react.PropTypes.any,
    hideLabels: _react.PropTypes.bool,
    message: _react.PropTypes.shape({
      extraClass: _react.PropTypes.string,
      value: _react.PropTypes.any,
      type: _react.PropTypes.string
    }),
    data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.shape({
      prefix: _react.PropTypes.string,
      suffix: _react.PropTypes.string
    })])
  };

  FieldHolder.defaultProps = {
    className: '',
    extraClass: '',
    leftTitle: null,
    rightTitle: null,
    title: '',
    description: null,
    hideLabels: false,
    noHolder: false,
    message: null,
    data: {}
  };

  return FieldHolder;
}

exports.default = fieldHolder;

/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Focusedzone = function (_Component) {
  _inherits(Focusedzone, _Component);

  function Focusedzone(props) {
    _classCallCheck(this, Focusedzone);

    var _this = _possibleConstructorReturn(this, (Focusedzone.__proto__ || Object.getPrototypeOf(Focusedzone)).call(this, props));

    _this.wasClicked = false;

    _this.handleElementClick = _this.handleElementClick.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    return _this;
  }

  _createClass(Focusedzone, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var element = this.container;

      element.addEventListener('click', this.handleElementClick);
      document.addEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var element = this.container;
      element.removeEventListener('click', this.handleElementClick);
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: 'handleElementClick',
    value: function handleElementClick() {
      this.wasClicked = true;
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick() {
      if (!this.wasClicked) {
        this.props.onClickOut();
      }
      this.wasClicked = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          className: this.props.className,
          ref: function ref(container) {
            _this2.container = container;
          }
        },
        this.props.children
      );
    }
  }]);

  return Focusedzone;
}(_react.Component);

Focusedzone.propTypes = {
  children: _react.PropTypes.any,
  className: _react.PropTypes.string,
  onClickOut: _react.PropTypes.func.isRequired
};

Focusedzone.defaultProps = {
  className: ''
};

exports.default = Focusedzone;

/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FormAlert = __webpack_require__(395);

var _FormAlert2 = _interopRequireDefault(_FormAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.autoFocus) {
        return;
      }

      if (this.form) {
        var input = this.form.querySelector('input, select, textarea');
        if (input) {
          input.focus();
        }
      }
    }
  }, {
    key: 'renderMessages',
    value: function renderMessages() {
      if (Array.isArray(this.props.messages)) {
        return this.props.messages.map(function (message, index) {
          return _react2.default.createElement(_FormAlert2.default, _extends({
            key: index,
            className: !index ? 'message-box--panel-top' : ''
          }, message));
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var valid = this.props.valid !== false;
      var fields = this.props.mapFieldsToComponents(this.props.fields);
      var actions = this.props.mapActionsToComponents(this.props.actions);
      var messages = this.renderMessages();

      var className = ['form'];
      if (valid === false) {
        className.push('form--invalid');
      }
      if (this.props.attributes && this.props.attributes.className) {
        className.push(this.props.attributes.className);
      }
      var formProps = _extends({}, this.props.attributes, {
        onSubmit: this.props.handleSubmit,
        className: className.join(' ')
      });

      return _react2.default.createElement(
        'form',
        _extends({}, formProps, {
          ref: function ref(form) {
            _this2.form = form;
          }
        }),
        fields && _react2.default.createElement(
          'fieldset',
          null,
          messages,
          this.props.afterMessages,
          fields
        ),
        actions && actions.length ? _react2.default.createElement(
          'div',
          { className: 'btn-toolbar', role: 'group' },
          actions
        ) : null
      );
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  autoFocus: _react.PropTypes.bool,
  valid: _react.PropTypes.bool,
  actions: _react.PropTypes.array,
  afterMessages: _react.PropTypes.node,
  attributes: _react.PropTypes.shape({
    action: _react.PropTypes.string.isRequired,
    className: _react.PropTypes.string,
    encType: _react.PropTypes.string,
    id: _react.PropTypes.string,
    method: _react.PropTypes.string.isRequired
  }),
  fields: _react.PropTypes.array.isRequired,

  handleSubmit: _react.PropTypes.func,
  mapActionsToComponents: _react.PropTypes.func.isRequired,
  mapFieldsToComponents: _react.PropTypes.func.isRequired,
  messages: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    extraClass: _react.PropTypes.string,
    value: _react.PropTypes.any,
    type: _react.PropTypes.string
  }))
};

exports.default = Form;

/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  CSRF_HEADER: 'X-SecurityID' };

/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _castStringToElement = __webpack_require__(85);

var _castStringToElement2 = _interopRequireDefault(_castStringToElement);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormAction = function (_Component) {
  _inherits(FormAction, _Component);

  function FormAction(props) {
    _classCallCheck(this, FormAction);

    var _this = _possibleConstructorReturn(this, (FormAction.__proto__ || Object.getPrototypeOf(FormAction)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(FormAction, [{
    key: 'getButtonProps',
    value: function getButtonProps() {
      return Object.assign({}, typeof this.props.attributes === 'undefined' ? {} : this.props.attributes, {
        id: this.props.id,
        name: this.props.name,
        className: this.getButtonClasses(),
        disabled: this.props.disabled,
        onClick: this.handleClick
      });
    }
  }, {
    key: 'getButtonClasses',
    value: function getButtonClasses() {
      var buttonClasses = {
        btn: true,
        'btn--no-text': typeof this.props.title !== 'string',
        'btn--loading': this.props.loading,
        disabled: this.props.disabled
      };

      var style = this.getButtonStyle();

      if (style) {
        buttonClasses['btn-' + style] = true;
      }

      var icon = this.getIcon();
      if (icon) {
        buttonClasses['font-icon-' + icon] = true;
      }

      if (typeof this.props.extraClass === 'string') {
        buttonClasses[this.props.extraClass] = true;
      }

      return (0, _classnames2.default)(buttonClasses);
    }
  }, {
    key: 'getButtonStyle',
    value: function getButtonStyle() {
      if (typeof this.props.data.buttonStyle !== 'undefined') {
        return this.props.data.buttonStyle;
      }

      if (typeof this.props.buttonStyle !== 'undefined') {
        return this.props.buttonStyle;
      }

      var extraClasses = this.props.extraClass.split(' ');

      if (extraClasses.find(function (className) {
        return className.indexOf('btn-') > -1;
      })) {
        return null;
      }

      if (this.isPrimary()) {
        return 'primary';
      }

      return 'secondary';
    }
  }, {
    key: 'getIcon',
    value: function getIcon() {
      return this.props.icon || this.props.data.icon || null;
    }
  }, {
    key: 'getLoadingIcon',
    value: function getLoadingIcon() {
      if (this.props.loading) {
        return _react2.default.createElement(
          'div',
          { className: 'btn__loading-icon' },
          _react2.default.createElement('span', { className: 'btn__circle btn__circle--1' }),
          _react2.default.createElement('span', { className: 'btn__circle btn__circle--2' }),
          _react2.default.createElement('span', { className: 'btn__circle btn__circle--3' })
        );
      }

      return null;
    }
  }, {
    key: 'isPrimary',
    value: function isPrimary() {
      var extraClasses = this.props.extraClass.split(' ');
      return this.props.name === 'action_save' || extraClasses.find(function (className) {
        return className === 'ss-ui-action-constructive';
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      if (typeof this.props.onClick === 'function') {
        this.props.onClick(event, this.props.name || this.props.id);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var title = this.props.title;

      return _react2.default.createElement(
        'button',
        this.getButtonProps(),
        this.getLoadingIcon(),
        (0, _castStringToElement2.default)('span', title, { className: 'btn__title' })
      );
    }
  }]);

  return FormAction;
}(_react.Component);

FormAction.propTypes = {
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string,
  onClick: _react2.default.PropTypes.func,
  title: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string,
  loading: _react2.default.PropTypes.bool,
  icon: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.shape({
    buttonStyle: _react2.default.PropTypes.string
  })]),
  extraClass: _react2.default.PropTypes.string,
  attributes: _react2.default.PropTypes.object
};

FormAction.defaultProps = {
  title: '',
  icon: '',
  extraClass: '',
  attributes: {},
  data: {},
  disabled: false
};

exports.default = FormAction;

/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSs = __webpack_require__(37);

var _castStringToElement = __webpack_require__(85);

var _castStringToElement2 = _interopRequireDefault(_castStringToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormAlert = function (_Component) {
  _inherits(FormAlert, _Component);

  function FormAlert(props) {
    _classCallCheck(this, FormAlert);

    var _this = _possibleConstructorReturn(this, (FormAlert.__proto__ || Object.getPrototypeOf(FormAlert)).call(this, props));

    _this.handleDismiss = _this.handleDismiss.bind(_this);

    _this.state = {
      visible: true
    };
    return _this;
  }

  _createClass(FormAlert, [{
    key: 'getMessageStyle',
    value: function getMessageStyle() {
      switch (this.props.type) {
        case 'good':
        case 'success':
          return 'success';
        case 'info':
          return 'info';
        case 'warn':
        case 'warning':
          return 'warning';
        default:
          return 'danger';
      }
    }
  }, {
    key: 'getMessageProps',
    value: function getMessageProps() {
      var type = this.props.type || 'no-type';

      return {
        className: ['message-box', 'message-box--' + type, this.props.className, this.props.extraClass].join(' '),
        bsStyle: this.props.bsStyle || this.getMessageStyle(),
        bsClass: this.props.bsClass,
        onDismiss: this.props.closeLabel ? this.handleDismiss : null,
        closeLabel: this.props.closeLabel
      };
    }
  }, {
    key: 'handleDismiss',
    value: function handleDismiss() {
      if (typeof this.props.onDismiss === 'function') {
        this.props.onDismiss();
      } else {
        this.setState({ visible: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (typeof this.props.visible !== 'boolean' && this.state.visible || this.props.visible) {
        var body = (0, _castStringToElement2.default)('div', this.props.value);
        if (body) {
          return _react2.default.createElement(
            _reactBootstrapSs.Alert,
            this.getMessageProps(),
            body
          );
        }
      }
      return null;
    }
  }]);

  return FormAlert;
}(_react.Component);

FormAlert.propTypes = {
  extraClass: _react.PropTypes.string,
  value: _react.PropTypes.any,
  type: _react.PropTypes.string,
  onDismiss: _react.PropTypes.func,
  closeLabel: _react.PropTypes.string,
  visible: _react.PropTypes.bool
};

FormAlert.defaultProps = {
  extraClass: '',
  className: ''
};

exports.default = FormAlert;

/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemaPropType = exports.basePropTypes = exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _merge = __webpack_require__(249);

var _merge2 = _interopRequireDefault(_merge);

var _schemaFieldValues = __webpack_require__(179);

var _schemaFieldValues2 = _interopRequireDefault(_schemaFieldValues);

var _createErrorBlock = __webpack_require__(412);

var _Backend = __webpack_require__(777);

var _Backend2 = _interopRequireDefault(_Backend);

var _Injector = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormBuilder = function (_Component) {
  _inherits(FormBuilder, _Component);

  function FormBuilder(props) {
    _classCallCheck(this, FormBuilder);

    var _this = _possibleConstructorReturn(this, (FormBuilder.__proto__ || Object.getPrototypeOf(FormBuilder)).call(this, props));

    var schemaStructure = props.schema.schema;
    _this.state = { submittingAction: null };
    _this.submitApi = _Backend2.default.createEndpointFetcher({
      url: schemaStructure.attributes.action,
      method: schemaStructure.attributes.method
    });
    _this.mapActionsToComponents = _this.mapActionsToComponents.bind(_this);
    _this.mapFieldsToComponents = _this.mapFieldsToComponents.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleAction = _this.handleAction.bind(_this);
    _this.buildComponent = _this.buildComponent.bind(_this);
    _this.validateForm = _this.validateForm.bind(_this);
    return _this;
  }

  _createClass(FormBuilder, [{
    key: 'getComponentForDataType',
    value: function getComponentForDataType(dataType, name) {
      var _this2 = this;

      var identifier = this.props.identifier;

      var get = function get(type) {
        return _this2.context.injector.get(type, identifier + '.' + name);
      };

      switch (dataType) {
        case 'String':
        case 'Text':
          return get('TextField');
        case 'Date':
          return get('DateField');
        case 'Time':
          return get('TimeField');
        case 'Datetime':
          return get('DatetimeField');
        case 'Hidden':
          return get('HiddenField');
        case 'SingleSelect':
          return get('SingleSelectField');
        case 'Custom':
          return get('GridField');
        case 'Structural':
          return get('CompositeField');
        case 'Boolean':
          return get('CheckboxField');
        case 'MultiSelect':
          return get('CheckboxSetField');
        default:
          return null;
      }
    }
  }, {
    key: 'validateForm',
    value: function validateForm(values) {
      if (typeof this.props.validate === 'function') {
        return this.props.validate(values);
      }

      var schema = this.props.schema && this.props.schema.schema;
      if (!schema) {
        return {};
      }

      var validationMiddleware = this.context.injector.validate(this.props.identifier);

      var middlewareValidationResult = {};
      if (validationMiddleware) {
        middlewareValidationResult = validationMiddleware(values, this.props.schema.schema) || {};
      }

      return (0, _createErrorBlock.createErrorBlock)(middlewareValidationResult);
    }
  }, {
    key: 'buildComponent',
    value: function buildComponent(props) {
      var componentProps = _extends({}, props, props.input, {
        container: this
      });
      delete componentProps.input;
      var identifier = this.props.identifier;
      var name = componentProps.name;

      var SchemaComponent = componentProps.schemaComponent !== null ? this.context.injector.get(componentProps.schemaComponent, identifier + '.' + name) : this.getComponentForDataType(componentProps.schemaType, name);

      if (SchemaComponent === null) {
        return null;
      } else if (componentProps.schemaComponent !== null && SchemaComponent === undefined) {
        throw Error('Component not found in injector: ' + componentProps.schemaComponent);
      }

      var createFn = this.props.createFn;
      if (typeof createFn === 'function') {
        return createFn(SchemaComponent, componentProps);
      }

      return _react2.default.createElement(SchemaComponent, _extends({ key: componentProps.id }, componentProps));
    }
  }, {
    key: 'mapFieldsToComponents',
    value: function mapFieldsToComponents(fields) {
      var _this3 = this;

      var FieldComponent = this.props.baseFieldComponent;
      return fields.map(function (field) {
        var props = field;
        if (field.children) {
          props = Object.assign({}, field, { children: _this3.mapFieldsToComponents(field.children) });
        }
        props = Object.assign({
          onAutofill: _this3.props.onAutofill,
          formid: _this3.props.form
        }, props);

        if (field.schemaType === 'Structural' || field.readOnly === true) {
          return _this3.buildComponent(props);
        }

        return _react2.default.createElement(FieldComponent, _extends({ key: props.id }, props, { component: _this3.buildComponent }));
      });
    }
  }, {
    key: 'handleAction',
    value: function handleAction(event) {
      if (typeof this.props.onAction === 'function') {
        this.props.onAction(event, this.props.values);
      }

      if (!event.isPropagationStopped()) {
        this.setState({ submittingAction: event.currentTarget.name });
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(data) {
      var _this4 = this;

      var action = this.state.submittingAction ? this.state.submittingAction : this.props.schema.schema.actions[0].name;

      var dataWithAction = Object.assign({}, data, _defineProperty({}, action, 1));
      var requestedSchema = this.props.responseRequestedSchema.join();
      var headers = {
        'X-Formschema-Request': requestedSchema,
        'X-Requested-With': 'XMLHttpRequest'
      };

      var submitFn = function submitFn(customData) {
        return _this4.submitApi(customData || dataWithAction, headers).then(function (formSchema) {
          _this4.setState({ submittingAction: null });
          return formSchema;
        }).catch(function (reason) {
          _this4.setState({ submittingAction: null });
          throw reason;
        });
      };

      if (typeof this.props.onSubmit === 'function') {
        return this.props.onSubmit(dataWithAction, action, submitFn);
      }

      return submitFn();
    }
  }, {
    key: 'mapActionsToComponents',
    value: function mapActionsToComponents(actions) {
      var _this5 = this;

      return actions.map(function (action) {
        var props = Object.assign({}, action);

        if (action.children) {
          props.children = _this5.mapActionsToComponents(action.children);
        } else {
          props.onClick = _this5.handleAction;

          if (_this5.props.submitting && _this5.state.submittingAction === action.name) {
            props.loading = true;
          }
        }

        return _this5.buildComponent(props);
      });
    }
  }, {
    key: 'normalizeFields',
    value: function normalizeFields(fields, state) {
      var _this6 = this;

      return fields.map(function (field) {
        var fieldState = state && state.fields ? state.fields.find(function (item) {
          return item.id === field.id;
        }) : {};
        var data = _merge2.default.recursive(true, (0, _schemaFieldValues.schemaMerge)(field, fieldState), {
          schemaComponent: fieldState && fieldState.component ? fieldState.component : field.component
        });
        if (field.children) {
          data.children = _this6.normalizeFields(field.children, state);
        }

        return data;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var schema = this.props.schema.schema;
      var state = this.props.schema.state;
      var BaseFormComponent = this.props.baseFormComponent;

      var attributes = _extends({}, schema.attributes, {
        className: schema.attributes.class,
        encType: schema.attributes.enctype,

        noValidate: true
      });
      delete attributes.class;
      delete attributes.enctype;

      var _props = this.props,
          asyncValidate = _props.asyncValidate,
          onSubmitFail = _props.onSubmitFail,
          onSubmitSuccess = _props.onSubmitSuccess,
          shouldAsyncValidate = _props.shouldAsyncValidate,
          touchOnBlur = _props.touchOnBlur,
          touchOnChange = _props.touchOnChange,
          persistentSubmitErrors = _props.persistentSubmitErrors,
          form = _props.form,
          afterMessages = _props.afterMessages,
          autoFocus = _props.autoFocus;


      var props = {
        form: form,
        afterMessages: afterMessages,
        fields: this.normalizeFields(schema.fields, state),
        actions: this.normalizeFields(schema.actions, state),
        attributes: attributes,
        data: schema.data,
        initialValues: (0, _schemaFieldValues2.default)(schema, state),
        onSubmit: this.handleSubmit,
        valid: state && state.valid,
        messages: state && Array.isArray(state.messages) ? state.messages : [],
        mapActionsToComponents: this.mapActionsToComponents,
        mapFieldsToComponents: this.mapFieldsToComponents,
        asyncValidate: asyncValidate,
        onSubmitFail: onSubmitFail,
        onSubmitSuccess: onSubmitSuccess,
        shouldAsyncValidate: shouldAsyncValidate,
        touchOnBlur: touchOnBlur,
        touchOnChange: touchOnChange,
        persistentSubmitErrors: persistentSubmitErrors,
        validate: this.validateForm,
        autoFocus: autoFocus
      };

      return _react2.default.createElement(BaseFormComponent, props);
    }
  }]);

  return FormBuilder;
}(_react.Component);

var schemaPropType = _react.PropTypes.shape({
  id: _react.PropTypes.string,
  schema: _react.PropTypes.shape({
    attributes: _react.PropTypes.shape({
      class: _react.PropTypes.string,
      enctype: _react.PropTypes.string
    }),
    fields: _react.PropTypes.array.isRequired
  }),
  state: _react.PropTypes.shape({
    fields: _react.PropTypes.array
  }),
  loading: _react.PropTypes.boolean,
  stateOverride: _react.PropTypes.shape({
    fields: _react.PropTypes.array
  })
});

var basePropTypes = {
  createFn: _react.PropTypes.func,
  onSubmit: _react.PropTypes.func,
  onAction: _react.PropTypes.func,
  asyncValidate: _react.PropTypes.func,
  onSubmitFail: _react.PropTypes.func,
  onSubmitSuccess: _react.PropTypes.func,
  shouldAsyncValidate: _react.PropTypes.func,
  touchOnBlur: _react.PropTypes.bool,
  touchOnChange: _react.PropTypes.bool,
  persistentSubmitErrors: _react.PropTypes.bool,
  validate: _react.PropTypes.func,
  values: _react.PropTypes.object,
  submitting: _react.PropTypes.bool,
  baseFormComponent: _react.PropTypes.func.isRequired,
  baseFieldComponent: _react.PropTypes.func.isRequired,
  responseRequestedSchema: _react.PropTypes.arrayOf(_react.PropTypes.oneOf(['schema', 'state', 'errors', 'auto'])),
  identifier: function identifier(props, propName, componentName) {
    if (!/^[A-Za-z0-9_.]+$/.test(props[propName])) {
      return new Error('\n        Invalid identifier supplied to ' + componentName + '. Must be a set of\n        dot-separated alphanumeric strings.\n      ');
    }

    return null;
  }
};

FormBuilder.propTypes = Object.assign({}, basePropTypes, {
  form: _react.PropTypes.string.isRequired,
  schema: schemaPropType.isRequired,
  autoFocus: _react.PropTypes.bool
});

FormBuilder.defaultProps = {
  responseRequestedSchema: ['auto'],
  autoFocus: false
};

exports.Component = FormBuilder;
exports.basePropTypes = basePropTypes;
exports.schemaPropType = schemaPropType;
exports.default = (0, _Injector.withInjector)(FormBuilder);

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(22);

var _i18n2 = _interopRequireDefault(_i18n);

var _reactBootstrapSs = __webpack_require__(37);

var _FormBuilderLoader = __webpack_require__(1937);

var _FormBuilderLoader2 = _interopRequireDefault(_FormBuilderLoader);

var _castStringToElement = __webpack_require__(85);

var _castStringToElement2 = _interopRequireDefault(_castStringToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {
  return null;
};

var FormBuilderModal = function (_Component) {
  _inherits(FormBuilderModal, _Component);

  function FormBuilderModal(props) {
    _classCallCheck(this, FormBuilderModal);

    var _this = _possibleConstructorReturn(this, (FormBuilderModal.__proto__ || Object.getPrototypeOf(FormBuilderModal)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);
    _this.clearResponse = _this.clearResponse.bind(_this);
    _this.handleLoadingError = _this.handleLoadingError.bind(_this);
    return _this;
  }

  _createClass(FormBuilderModal, [{
    key: 'getForm',
    value: function getForm() {
      if (!this.props.schemaUrl) {
        return null;
      }
      return _react2.default.createElement(_FormBuilderLoader2.default, {
        schemaUrl: this.props.schemaUrl,
        onSubmit: this.handleSubmit,
        onAction: this.props.onAction,
        onLoadingError: this.handleLoadingError,
        identifier: this.props.identifier
      });
    }
  }, {
    key: 'getResponse',
    value: function getResponse() {
      if (!this.state || !this.state.response) {
        return null;
      }

      var className = '';

      if (this.state.error) {
        className = this.props.responseClassBad;
      } else {
        className = this.props.responseClassGood;
      }

      return _react2.default.createElement(
        'div',
        { className: className },
        (0, _castStringToElement2.default)('span', { html: this.state.response })
      );
    }
  }, {
    key: 'clearResponse',
    value: function clearResponse() {
      this.setState({
        response: null
      });
    }
  }, {
    key: 'handleLoadingError',
    value: function handleLoadingError(schema) {
      var providesOnLoadingError = this.props.onLoadingError !== noop;
      if (this.props.showErrorMessage || !providesOnLoadingError) {
        var error = schema.errors && schema.errors[0];
        this.setState({
          response: error.value,
          error: true
        });
      }
      if (providesOnLoadingError) {
        this.props.onLoadingError(schema);
      }
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      this.clearResponse();
      if (typeof this.props.onHide === 'function') {
        this.props.onHide();
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(data, action, submitFn) {
      var _this2 = this;

      this.clearResponse();
      var promise = null;
      if (typeof this.props.onSubmit === 'function') {
        promise = this.props.onSubmit(data, action, submitFn);
      } else {
        promise = submitFn();
      }

      if (promise) {
        promise.then(function (response) {
          if (response) {
            _this2.setState({
              response: response.message,
              error: false
            });
          }
          return response;
        }).catch(function (errorPromise) {
          errorPromise.then(function (errorText) {
            _this2.setState({
              response: errorText,
              error: true
            });
          });
        });
      } else {
        throw new Error('Promise was not returned for submitting');
      }

      return promise;
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      if (this.props.title !== false) {
        return _react2.default.createElement(
          _reactBootstrapSs.Modal.Header,
          { closeButton: true },
          _react2.default.createElement(
            _reactBootstrapSs.Modal.Title,
            null,
            this.props.title
          )
        );
      }

      if (typeof this.props.onHide === 'function') {
        return _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: 'close form-builder-modal__close-button',
            onClick: this.handleHide,
            'aria-label': _i18n2.default._t('Admin.CLOSE', 'Close')
          },
          _react2.default.createElement(
            'span',
            { 'aria-hidden': 'true' },
            '\xD7'
          )
        );
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var form = this.getForm();
      var response = this.getResponse();

      return _react2.default.createElement(
        _reactBootstrapSs.Modal,
        {
          show: this.props.show,
          onHide: this.handleHide,
          className: this.props.className,
          dialogClassName: this.props.dialogClassName,
          bsSize: this.props.bsSize
        },
        this.renderHeader(),
        _react2.default.createElement(
          _reactBootstrapSs.Modal.Body,
          { className: this.props.bodyClassName },
          response,
          form,
          this.props.children
        )
      );
    }
  }]);

  return FormBuilderModal;
}(_react.Component);

FormBuilderModal.propTypes = {
  show: _react2.default.PropTypes.bool,
  title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.bool]),
  className: _react2.default.PropTypes.string,
  bodyClassName: _react2.default.PropTypes.string,
  onHide: _react2.default.PropTypes.func,
  schemaUrl: _react2.default.PropTypes.string,
  onSubmit: _react2.default.PropTypes.func,
  onAction: _react2.default.PropTypes.func,
  responseClassGood: _react2.default.PropTypes.string,
  responseClassBad: _react2.default.PropTypes.string,
  identifier: _react2.default.PropTypes.string,

  showErrorMessage: _react2.default.PropTypes.bool,
  onLoadingError: _react2.default.PropTypes.func
};

FormBuilderModal.defaultProps = {
  showErrorMessage: false,
  onLoadingError: noop,
  show: false,
  title: null,
  responseClassGood: 'alert alert-success',
  responseClassBad: 'alert alert-danger'
};

exports.default = FormBuilderModal;

/***/ })

},[930]);
//# sourceMappingURL=bundle.js.map
>>>>>>> build
