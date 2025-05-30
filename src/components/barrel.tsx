import fs from "fs";
import download from "download";
import { Download } from "lucide-react";

export async function downloadFiles() {
  // Download to 'dist' folder
  await download("/portrait.jpg", "downloads");

  // Download and write manually
  //const data = await download("/portrait.jpg");
  //fs.writeFileSync("downloads/portrait.jpg", data);

  // Pipe stream to file
  //download("/portrait.jpg").pipe(
  //fs.createWriteStream("dist/foo.jpg"));

  // Download multiple files
  //const urls = ["http://unicorn.com/foo.jpg", "http://cats.com/dancing.gif"];

  //await Promise.all(urls.map((url) => download(url, "dist")));
}
