export const URL_ID_NAME_SEPARATOR = '__';

export function getParamsAsObject(params: URLSearchParams): { [key: string]: string } {
  const currentParams: { [key: string]: string } = {};
  params.forEach((value, key) => {
    currentParams[key] = value;
  });
  return currentParams;
}

export function getIdNameFromIdAndNamePathCombo(url: string) {
  if (url && url.includes(URL_ID_NAME_SEPARATOR)) {
    const urlParts = url.split(URL_ID_NAME_SEPARATOR);
    const id: string = urlParts[0];
    const name: string = urlParts[1];
    return {
      id,
      name: name
    };
  }
  return {
    id: url,
    name: url
  };
}