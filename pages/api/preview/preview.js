export default async (req, res) => {

  // Please set the NEXT_DATOCMS_PREVIEW_SECRET env variable
  // on Vercel/Netlify, or everyone will be able to enter Preview Mode and
  // see draft content!

  const secret =
    process.env.NEXT_DATOCMS_PREVIEW_SECRET;

  // Check the secret and next parameters
  if (secret && req.query.secret !== secret) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});


  // Redirect to the homepage
  res.writeHead(307, { Location: `${req.query.slug}?preview=true` });
  res.end();
};