
export const handler = async (event) => {
  const greeting = process.env.GREETING || "Welcome to cloud!";
  return {
    statusCode: 200,
    body: JSON.stringify({ message: greeting }),
  };
};