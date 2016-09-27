'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require("./index.less");
var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var btn_prefix = 'btn';
var btn_size = { large: true, small: true };
var btn_type = { primary: true, secondary: true, warn: true };

var Button = function Button(props) {
    var _classNames;

    var _props = props;
    var className = _props.className;
    var block = _props.block;
    var square = _props.square;
    var type = _props.type;
    var size = _props.size;
    var onClick = _props.onClick;
    var href = _props.href;
    var disabled = _props.disabled;

    var others = _objectWithoutProperties(_props, ['className', 'block', 'square', 'type', 'size', 'onClick', 'href', 'disabled']);

    var btnClass = (0, _classnames2.default)(btn_prefix, (_classNames = {}, _defineProperty(_classNames, btn_prefix + '-block', block), _defineProperty(_classNames, btn_prefix + '-square', square), _defineProperty(_classNames, btn_prefix + '-' + type, btn_type[type]), _defineProperty(_classNames, btn_prefix + '-' + size, btn_size[size]), _classNames), className);

    props = _extends({
        href: href,
        disabled: disabled,
        className: btnClass,
        onClick: onClick
    }, others);

    if (disabled) {
        props.onClick = props.onClick = function (e) {
            e.preventDefault();
        };
    }

    if (href) {
        return _react2.default.createElement('a', props);
    }

    return _react2.default.createElement('button', props);
};

Button.propTypes = {
    block: _react.PropTypes.bool,
    square: _react.PropTypes.bool,
    size: _react.PropTypes.string,
    type: _react.PropTypes.string,
    href: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    onClick: _react.PropTypes.func
};

Button.defaultProps = {
    block: false,
    square: false,
    size: 'medium',
    disabled: false,
    onClick: function onClick() {}
};

exports.default = Button;
module.exports = exports['default'];
