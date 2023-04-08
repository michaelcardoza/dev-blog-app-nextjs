export const getNameLettersForAvatar = (
  firstName: string,
  lastName: string,
) => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
};
