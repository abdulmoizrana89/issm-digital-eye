export const requiredValidator = (val) =>
  !val || val === null || val === undefined;

export const requiredValidation = (val, name) => [
  requiredValidator,
  `${name} is required`,
];

// TODO: find a way to return an object on first error found
export const fieldValidation = (name, value, fieldValidations = []) => {
  return fieldValidations.reduce((acc, [validationType, validations]) => {
    let validationFn;
    let errorMsg;
    if (Array.isArray(validations)) {
      [validationFn, errorMsg] = validations;
    } else if (typeof validations === "function") {
      [validationFn, errorMsg] = validations(value, name);
    }
    if (validationFn(value)) {
      acc.type = validationType;
      acc.message = errorMsg;
    }
    return acc;
  }, {});
};

// convert this into a hook and validate performance and re-rendering
export const customResolver = (validationSchema) => {
  // TODO: Figure out what else can be acheived with context and options arguments
  return (data, context, options) => {
    const errors = Object.entries(validationSchema).reduce(
      (acc, [fieldName, fieldValidations]) => {
        const value = data[fieldName];
        const fieldError = fieldValidation(fieldName, value, fieldValidations);
        if (Object.keys(fieldError).length) acc.errors[fieldName] = fieldError;
        return acc;
      },
      {
        values: data,
        errors: {},
      }
    );
    return errors;
  };
};
