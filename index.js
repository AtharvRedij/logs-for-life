const DEFAULT_FONT_COLOR = "#00000";
const SUCCESS_FONT_COLOR = "#5cb85c";
const INFO_FONT_COLOR = "#5bc0de";
const WARN_FONT_COLOR = "#f0ad4e";
const ERROR_FONT_COLOR = "#d9534f";

const DEFAULT_FONT_WEIGHT = "400";
const DEFAULT_FONT_SIZE = "1.3em";

// actual function that does the logging
// can take multiple args
const print = (fontColor, fontWeight, fontSize, ...args) => {
  for (i = 0; i < args.length; i++) {
    const arg = args[i];

    // if arg is not a string then print normally
    if (typeof arg !== "string") {
      console.log(arg);
    } else {
      console.log(
        "%c " + arg,
        `color: ${fontColor}; font-weight: ${fontWeight}; font-size: ${fontSize}`
      );
    }
  }
};

const log = (...args) => {
  print(DEFAULT_FONT_COLOR, DEFAULT_FONT_WEIGHT, DEFAULT_FONT_SIZE, ...args);
};

const success = (...args) => {
  print(SUCCESS_FONT_COLOR, DEFAULT_FONT_WEIGHT, DEFAULT_FONT_SIZE, ...args);
};

const info = (...args) => {
  print(INFO_FONT_COLOR, DEFAULT_FONT_WEIGHT, DEFAULT_FONT_SIZE, ...args);
};

const warn = (...args) => {
  print(WARN_FONT_COLOR, DEFAULT_FONT_WEIGHT, DEFAULT_FONT_SIZE, ...args);
};

const error = (...args) => {
  print(ERROR_FONT_COLOR, DEFAULT_FONT_WEIGHT, DEFAULT_FONT_SIZE, ...args);
};

const group = (title, ...args) => {
  console.group(title);
  log(...args);
  console.groupEnd();
};

module.exports = {
  log,
  success,
  info,
  warn,
  error,
  group,
};
