export const activeUsersPerDay = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(5, 10),
  users: Math.floor(2200 + Math.random() * 400),
}));
