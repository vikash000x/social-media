import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config(" cloud configured", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET ? "loaded" : "MISSING"
});

console.log("hh", process.env.NEXT_PUBLIC_CLOUD_NAME)

export const cld = globalThis.cloudinary || cloudinary;

if (process.env.NODE_ENV !== "production") globalThis.cloudinary = cld;