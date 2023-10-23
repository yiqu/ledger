export function getParamsAsObject(params: URLSearchParams): {[key: string]: string} {
  const currentParams: {[key: string]: string} = {};
  params.forEach((value, key) => {
    currentParams[key] = value;
  });
  return currentParams;
}