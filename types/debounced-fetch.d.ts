declare module "debounced-fetch" {
  type DebouncedFetch = (url: string, delay: number) => Promise<Response>;
  const debouncedFetch: DebouncedFetch;
  export default debouncedFetch;
}
