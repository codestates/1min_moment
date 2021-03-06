const db = require('../../../models');

module.exports = async (req, res) => {
  const id = req.body.id;
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const date = new Date().toLocaleDateString();
  if(id && ip) {
    await db.views.findOrCreate({
      where: {ip: ip, video_id: id, createdAt: date},
      default: {
        video_id: id,
        ip: ip,
      }
    })
  }
  res.send("ok")
}