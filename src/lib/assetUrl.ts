const devAssetVersion = import.meta.env.DEV ? `${Date.now()}` : 'static-v1'
const baseUrl = import.meta.env.BASE_URL || '/'

export function withAssetVersion(path: string) {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path.replace(/^\.\//, '')
  return `${baseUrl}${normalizedPath}?v=${devAssetVersion}`
}
