import jwt from "jsonwebtoken";
import fs from "fs";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    const writeStream = fs.createWriteStream("file.txt", { flags: "a" });

    // Log some relevant information from the req object
    writeStream.write("total" + req + "\n");
    writeStream.write("Method: " + req.method + "\n");
    writeStream.write("URL: " + req.url + "\n");
    writeStream.write("Headers: " + JSON.stringify(req.headers) + "\n");

    if (!token) {
      writeStream.write("Something is wrong here\n");
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
