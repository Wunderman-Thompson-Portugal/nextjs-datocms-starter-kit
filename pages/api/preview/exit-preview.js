export default async (_, res) => {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()

  let location = _.headers.referer.replace('?preview=true', '')
  // Redirect the user back to the index page.
  res.writeHead(307, { Location: `${location}?preview=false` })
  res.end()
}