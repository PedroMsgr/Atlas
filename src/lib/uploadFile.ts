// src/lib/uploadFile.ts
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

/**
 * Sube un archivo a Firebase Storage y devuelve la URL pública.
 * @param file Archivo a subir (File o Blob)
 * @param folder Carpeta destino en Storage (por defecto 'files')
 */
export async function uploadFile(
  file: File | Blob,
  folder = "files"
): Promise<string> {
  const storageRef = ref(
    storage,
    `${folder}/${Date.now()}-${(file as any).name || "archivo"}`
  );
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
}
