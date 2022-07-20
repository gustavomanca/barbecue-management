export async function delay(ms = 2500) {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}
