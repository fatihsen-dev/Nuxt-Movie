export const formatDate = (date: string, locales?: string) => {
   const today = new Date(date);
   return today.toLocaleDateString(locales ? locales : "en-US");
};
