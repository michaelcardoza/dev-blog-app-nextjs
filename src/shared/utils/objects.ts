export const getUrlSearchParamsFromObject = (
  params: Record<string, string | number>,
): string => {
  const urlSearchParams = new URLSearchParams();
  const queries = Object.entries(params);

  if (queries.length) {
    for (const query of queries) {
      urlSearchParams.set(query[0], String(query[1]));
    }
  }

  return urlSearchParams.toString();
};

export const getUrlSearchParamsFromString = (params: string) => {
  const urlSearchParams = new URLSearchParams(params);
  return Object.fromEntries(urlSearchParams);
};
