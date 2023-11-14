import { useNavigation } from "@remix-run/react";

// .state // "idle" | "submitting" | "loading"
// navigation.formMethod; // "GET" | "POST" | "PATCH" | "PUT" | "DELETE"
// navigation.location; // Location being navigated to
// navigation.formData; // formData being submitted
// navigation.formAction; // url being submitted to

// From: https://remix.run/docs/en/1.19.1/pages/v2#usetransition

// Normal nav is    idle → loading → idle
// Normal action is idle → submitting → loading → idle
export function useNavigationType() {

  const navigation = useNavigation();

  const isNormalLoad =
    navigation.state === "loading" &&
    navigation.formData == null;

  const isReloading =
    navigation.state === "loading" &&
    navigation.formData != null &&
    navigation.formAction === navigation.location.pathname;

  
  // transition.type === "actionSubmission"
  const isActionSubmission =
    navigation.state === "submitting";

  // transition.type === "actionReload"
  const isActionReload =
    navigation.state === "loading" &&
    navigation.formMethod !== null &&
    navigation.formMethod !== "GET" &&
    // We had a submission navigation and are loading the submitted location
    navigation.formAction === navigation.location.pathname;

  // transition.type === "actionRedirect"
  const isActionRedirect =
    navigation.state === "loading" &&
    navigation.formMethod != null &&
    navigation.formMethod != "GET" &&
    // We had a submission navigation and are now navigating to different location
    navigation.formAction !== navigation.location.pathname;

  // transition.type === "loaderSubmission"
  const isLoaderSubmission =
    navigation.state === "loading" &&
    navigation.formMethod === "GET" &&
    // We had a loader submission and are navigating to the submitted location
    navigation.formAction === navigation.location.pathname;

  // transition.type === "loaderSubmissionRedirect"
  const isLoaderSubmissionRedirect =
    navigation.state === "loading" &&
    navigation.formMethod === "GET" &&
    // We had a loader submission and are navigating to a new location
    navigation.formAction !== navigation.location.pathname;

  return {
    isNormalLoad,
    isReloading,

    isActionSubmission,
    isActionReload,
    isActionRedirect,

    isLoaderSubmission,
    isLoaderSubmissionRedirect,
  };
}