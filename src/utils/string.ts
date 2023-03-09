export const removeCommaWithNewLines = (str: string) => {
  const noo = str.replace(/,/g, "");
  const foo = noo.replace(/\n|\r/g, "");
  const too = foo.replace(/(^\s*)|(\s*$)/gi, "");
  return too;
};
