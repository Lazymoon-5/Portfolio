const messages = [];

const handleContact = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  const entry = { name, email, message, receivedAt: new Date().toISOString() };
  messages.push(entry);

  console.log('\n📩 New Contact Message:');
  console.log(`  Name   : ${name}`);
  console.log(`  Email  : ${email}`);
  console.log(`  Message: ${message}`);
  console.log(`  Time   : ${entry.receivedAt}\n`);

  res.status(200).json({ success: true, message: 'Message received! I will get back to you soon.' });
};

module.exports = { handleContact, messages };
