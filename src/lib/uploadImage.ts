import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

/***
 * Sube una imagen a Firebase Storage y devuelve su URL pública.
 */
export async function uploadImage(file: File): Promise<string> {
  const storageRef = ref(storage, `images/${Date.now()}-${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
}
