// pages/api/protected-route.js
export default function handler(req, res) {
    const token = req.cookies['auth-token'];
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    // Continue with the API logic if authenticated
    res.status(200).json({ message: 'Success! You are authenticated.' });
  }
  