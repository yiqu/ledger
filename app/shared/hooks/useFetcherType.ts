import type { useFetcher} from "@remix-run/react";
import { useNavigation } from "@remix-run/react";

export function useFetcherType(fetcher: ReturnType<typeof useFetcher>) {

  const navigation = useNavigation();
  
  // fetcher.type === "done"
  const isFetcherDone = fetcher.state === "idle" && fetcher.data != null;

  // fetcher.type === "actionSubmission"
  const isFetcherActionSubmission = fetcher.state === "submitting";

  // fetcher.type === "actionReload"
  const isFetcherActionReload =
    fetcher.state === "loading" &&
    fetcher.formMethod != null &&
    //fetcher.formMethod != "GET" &&
    // If we returned data, we must be reloading
    fetcher.data != null;

  // fetcher.type === "actionRedirect"
  const isFetcherActionRedirect =
    fetcher.state === "loading" &&
    fetcher.formMethod != null &&
    navigation.formMethod != "GET" &&
    // If we have no data we must have redirected
    fetcher.data == null;

  // fetcher.type === "loaderSubmission"
  const isFetcherLoaderSubmission =
  navigation.state === "loading" &&
  navigation.formMethod === "GET";

  // fetcher.type === "normalLoad"
  const isFetcherNormalLoad =
    fetcher.state === "loading" &&
    fetcher.formMethod == null &&
    fetcher.data == null;

  return {
    isFetcherDone,
    isFetcherActionSubmission,
    isFetcherActionReload,
    isFetcherActionRedirect,
    isFetcherLoaderSubmission,
    isFetcherNormalLoad,
  };
}