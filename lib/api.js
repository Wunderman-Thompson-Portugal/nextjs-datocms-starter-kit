import { sectionConfig } from '@/lib/section-config'

const API_URL = process.env.DATOCMS_API_URL
const API_TOKEN = process.env.DATOCMS_API_TOKEN

/**
 * 
 * @param {string} query 
 * @param {object} param1 
 * @returns 
 */
export async function fetchAPI(query, { variables, preview, apiToken } = {}) {
    let token = apiToken ? apiToken : API_TOKEN
    const res = await fetch(API_URL + (preview ? '/preview' : ''), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json()
    if (json.errors) {
        console.log(json.errors)
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}

export async function fetchPages(query, key) {
    let allData = []
    let first = 100
    let skip = 0
    let data = await fetchAPI(query, { variables: { first: first, skip: skip } })
    while (data[key].length > 0) {
        data = await fetchAPI(query, { variables: { first: first, skip: skip } })
        allData.push(...data[key])
        skip = skip + first
    }
    return allData
}


export async function fetchComponentRelations({ sections }, locale, preview = false) {

    let relations = {}
    if (!sections) return relations

    await Promise.all(sections.map(async (slice) => {

        let Component = sectionConfig[slice.__typename]
        if (!Component || !Component.query) return true

        let args = Component.variables ? Component.variables(slice) : {}
        let query = `${Component.query}${responsiveImageFragment}`
        let componentQuery = await fetchAPI(query, { variables: { ...args, locale }, preview })
        relations[slice.__typename] = componentQuery

    }))

    return relations

}


export function createPagePaths(records, context) {

    let paths = []
console.log(records)
    records.map(item => {

        if (item._allSlugLocales) {
            let def = item._allSlugLocales.find(item => item.locale === process.env.DEFAULT_SITE_LOCALE )
            item._allSlugLocales.map(slug => {
                if (context.locales.indexOf(slug.locale) === -1) return
                let value = slug.value ? slug.value : def.value
                paths.push({ params: { slug: value }, locale: slug.locale })
            })
        } else {
            context.locales.map(locale => {
                paths.push({ params: { slug: item.slug }, locale: locale })
            })
        }

    })
    return paths

}