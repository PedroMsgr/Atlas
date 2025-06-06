// src/lib/deleteFirebaseFile.ts
import { deleteObject, ref as storageRef } from "firebase/storage";
import { storage } from "./firebase";

/**
 * Elimina un archivo de Firebase Storage a partir de su URL pública.
 * No lanza error si la URL es inválida o el archivo no existe.
 */
export async function deleteFirebaseFile(url: string) {
  if (!url) {
    console.log('[deleteFirebaseFile] No URL provided');
    return;
  }
  try {
    // Extraer la ruta relativa de la URL de Firebase
    const matches = url.match(/\/o\/(.+)\?/);
    if (matches && matches[1]) {
      const path = decodeURIComponent(matches[1]);
      console.log('[deleteFirebaseFile] Deleting from Firebase path:', path);
      const fileRef = storageRef(storage, path);
      await deleteObject(fileRef);
      console.log('[deleteFirebaseFile] Deleted successfully:', path);
    } else {
      console.log('[deleteFirebaseFile] No path extracted from URL:', url);
    }
  } catch (e) {
    console.error('[deleteFirebaseFile] Error deleting file:', url, e);
  }
}
