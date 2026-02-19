const Client = require('../model/client');
const User = require('../model/user');


// CREATE CLIENT
exports.createClient = async (req, res) => {
  try {
    const { name, email, address, tasktype } = req.body;

    const client = await Client.create({
      userId: req.userId,
      name,
      email,
      address,
      tasktype,
      status: "active"
    });

    // update usage
    const user = await User.findById(req.userId);
    if (user) {
      user.usage.clientsCreated++;
      await user.save();
    }

    res.status(201).json({ client });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};



// VIEW ALL CLIENTS (only logged in user)
exports.viewClient = async (req, res) => {
  try {
    const clients = await Client.find({ userId: req.userId });

    res.json({
      total: clients.length,
      clients
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};



// VIEW ONE CLIENT
exports.viewOneClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client)
      return res.status(404).json({ message: "Client not found" });

    if (client.userId.toString() !== req.userId)
      return res.status(403).json({ message: "Not authorized" });

    res.json(client);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};