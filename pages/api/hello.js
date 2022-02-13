// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name: "pepito" }));
  // ejemplo original
  // res.status(200).json({ name: 'John Doe' })
}
