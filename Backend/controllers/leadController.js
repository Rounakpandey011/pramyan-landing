import Lead from '../models/Lead.js';

export const createLead = async (req, res) => {
  try {
    const { parentName, mobile, email, studentClass, sendUpdates } = req.body;

    if (!parentName || !mobile || !email || !studentClass) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const lead = await Lead.create({
      parentName,
      mobile,
      email,
      studentClass,
      sendUpdates,
    });

    res.status(201).json({
      success: true,
      message: 'Fee inquiry submitted successfully',
      data: lead,
    });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ message: 'Server error, could not save lead' });
  }
};

// GET /api/leads - list all leads (newest first)
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Server error, could not fetch leads' });
  }
};