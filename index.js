// This is v0.1.0
// simple console log

const DEFAULT_FONT_COLOR = "#0275d8";
const SUCCESS_FONT_COLOR = "#5cb85c";
const INFO_FONT_COLOR = "#5bc0de";
const WARN_FONT_COLOR = "#f0ad4e";
const ERROR_FONT_COLOR = "#d9534f";

const DEFAULT_FONT_WEIGHT = "400";
const DEFAULT_FONT_SIZE = "1.3em";

const log = (
  message,
  fontColor = DEFAULT_FONT_COLOR,
  fontWeight = DEFAULT_FONT_WEIGHT,
  fontSize = DEFAULT_FONT_SIZE
) => {
  console.log(
    "%c" + message,
    `color: ${fontColor}; font-weight: ${fontWeight}; font-size: ${fontSize}`
  );
};

const success = (message) => {
  log(message, SUCCESS_FONT_COLOR);
};

const info = (message) => {
  log(message, INFO_FONT_COLOR);
};

const warn = (message) => {
  log(message, WARN_FONT_COLOR);
};

const error = (message) => {
  log(message, ERROR_FONT_COLOR);
};

module.exports = {
  log,
  success,
  info,
  warn,
  error,
};
