export function resolveHref(
  documentType?: string,
  slug?: string,
): string | undefined {
  switch (documentType) {
    case "homePage":
      return "/";
    case "aboutPage":
      return "/about";
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}
