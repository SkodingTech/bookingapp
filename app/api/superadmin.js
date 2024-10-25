import { checkRole } from '../../middleware/checkRole';

const handler = (req, res) => {
  res.status(200).json({ message: 'Welcome to the Superadmin Area' });
};

export default (req, res) => {
  checkRole(['superadmin'])(req, res, () => handler(req, res));
};
