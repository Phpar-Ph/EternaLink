import Memorial from "../model/memorialSchema";


export const getMyMemorials = async (req, res) => {
  try {
    const memorials = await Memorial.find({ userId: req.user.id });

    res.json({ success: true, data: memorials });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};