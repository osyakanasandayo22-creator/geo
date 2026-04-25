/**
 * Mapillary アクセストークンを環境変数から返す（ブラウザは Graph API 用に必要）。
 * Vercel: Project Settings → Environment Variables → MAPILLARY_ACCESS_TOKEN
 * ローカル: プロジェクト直下に .env.local を置き `vercel dev`
 */
module.exports = function handler(req, res) {
  const token = process.env.MAPILLARY_ACCESS_TOKEN;
  if (!token || typeof token !== 'string') {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(500).json({
      ok: false,
      error: 'MAPILLARY_ACCESS_TOKEN is not set'
    });
  }
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  return res.status(200).json({
    ok: true,
    mapillaryAccessToken: token.trim()
  });
};
