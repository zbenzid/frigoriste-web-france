
export async function uploadFileToStorage(
  supabase: any,
  file: File,
  submissionId: string,
  fileType: 'cv' | 'cover_letter'
): Promise<{ success: boolean; filePath?: string; error?: string }> {
  try {
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const prefix = fileType === 'cv' ? 'cv_' : 'lettre_motivation_';
    const fileName = `${submissionId}/${prefix}${sanitizedFileName}`;
    const fileArrayBuffer = await file.arrayBuffer();
    
    const { error: uploadError } = await supabase.storage
      .from("recruitment-uploads")
      .upload(fileName, fileArrayBuffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error(`${fileType} upload error:`, uploadError);
      return { 
        success: false, 
        error: `Erreur lors de l'upload ${fileType === 'cv' ? 'du CV' : 'de la lettre de motivation'}` 
      };
    }

    return { success: true, filePath: fileName };
  } catch (error) {
    console.error(`File upload exception for ${fileType}:`, error);
    return { 
      success: false, 
      error: `Erreur lors du traitement ${fileType === 'cv' ? 'du CV' : 'de la lettre de motivation'}` 
    };
  }
}

export async function createSignedUrl(
  supabase: any,
  filePath: string
): Promise<string> {
  try {
    const { data } = await supabase.storage
      .from("recruitment-uploads")
      .createSignedUrl(filePath, 604800); // 7 days
    
    return data?.signedUrl || "";
  } catch (error) {
    console.error("Error creating signed URL:", error);
    return "";
  }
}
