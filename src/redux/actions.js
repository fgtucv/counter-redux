export const addAtion = (value) => {
    console.log(value)
    return { type: "add", payload: value };
};