import { apiVersion, dataset, projectId, useCdn } from "@/sanity/sanity.api";
import { createClient, type SanityClient } from "next-sanity";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export function getClient(preview?: { token: string }): SanityClient {
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
    });
  }
  return client;
}
