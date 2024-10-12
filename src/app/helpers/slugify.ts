export function getSlug(item: string) {
    return item.replace(/ /g, "_").replace(/\./g, "").toLowerCase()
    } 