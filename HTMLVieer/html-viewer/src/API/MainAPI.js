export const getHtmlFile = async () => {
  const url = "https://localhost:44303/api/Waiter";
  return await fetch(url, {}).then((response) => {
    return response.text();
  });
};
