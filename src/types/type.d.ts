declare namespace Express {
  interface Request {
    user: {
      id: string;
      name: string;
      regNo: string
      isAdmin: boolean;
    };
  }
}