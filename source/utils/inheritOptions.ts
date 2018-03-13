export default function inheritOptions(context, options) {
  Object.keys(options).forEach(optionName => context[optionName] = options[optionName]);
  return context;
}
