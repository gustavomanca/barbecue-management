export async function delay(ms = 1500) {
  return await new Promise((resolve) => setTimeout(resolve, ms))
}
