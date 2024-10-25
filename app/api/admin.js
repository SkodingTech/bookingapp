import { checkRole } from '../../middleware/checkRole';

const handler = (req, res) => {
  res.status(200).json({ message: 'Welcome to the Admin Area' });
};

export default (req, res) => {
  checkRole(['admin', 'superadmin'])(req, res, () => handler(req, res));
};
