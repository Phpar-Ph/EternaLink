import Memorial from "../model/memorialSchema.js";

export const getPublicMemorials = async (req, res) => {
  try {
    const memorialsFeed = await Memorial.find({ visibility: "public" }).sort({
      createdAt: -1,
    });

    res.json({ success: true, data: memorialsFeed });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
