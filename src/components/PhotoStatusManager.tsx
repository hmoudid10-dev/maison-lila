import React, { useState, useEffect, useRef } from 'react';
import { Upload, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';

export const REQUIRED_PHOTOS = [
  { filename: 'magasin.jpg', label: 'Devanture Boutique (Accueil)' },
  { filename: 'wedding-cake.jpg', label: 'Wedding Cake' },
  { filename: 'cupcakes.jpg', label: 'Cupcakes' },
  { filename: 'viennoiseries.jpg', label: 'Viennoiseries' },
  { filename: 'donuts.jpg', label: 'Donuts' },
  { filename: 'macarons.jpg', label: 'Macarons' },
  { filename: 'cookies.jpg', label: 'Cookies' },
  { filename: 'patisserie-marocaine.jpg', label: 'Pâtisseries marocaines' }
];

export const PhotoStatusManager: React.FC = () => {
  const [photoStatus, setPhotoStatus] = useState<Record<string, boolean>>({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const checkPhotos = async () => {
    try {
      const res = await fetch('/api/check-photos');
      if (res.ok) {
        const data = await res.json();
        setPhotoStatus(data.status || {});
      }
    } catch {
      // Ignore network errors
    }
  };

  useEffect(() => {
    checkPhotos();
    const handleUpdate = () => {
      checkPhotos();
    };
    window.addEventListener('photo-updated', handleUpdate);
    return () => window.removeEventListener('photo-updated', handleUpdate);
  }, []);

  const totalCount = REQUIRED_PHOTOS.length;
  const presentCount = REQUIRED_PHOTOS.filter((p) => photoStatus[p.filename]).length;

  const handleFilesSelected = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setIsUploading(true);
    setUploadMessage('Téléversement des photos en cours...');

    let uploadedCount = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const lowerName = file.name.toLowerCase().trim();

      // Find matching required photo
      const matched = REQUIRED_PHOTOS.find(
        (p) =>
          p.filename === lowerName ||
          lowerName.includes(p.filename.replace('.jpg', ''))
      );

      if (matched) {
        try {
          const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });

          const res = await fetch('/api/upload-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: matched.filename, base64 })
          });

          if (res.ok) {
            uploadedCount++;
            window.dispatchEvent(
              new CustomEvent('photo-updated', {
                detail: { filename: matched.filename, dataUrl: base64 }
              })
            );
          }
        } catch {
          // Continue with next file
        }
      }
    }

    setIsUploading(false);
    await checkPhotos();
    if (uploadedCount > 0) {
      setUploadMessage(`${uploadedCount} photo(s) intégrée(s) avec succès !`);
      setTimeout(() => setUploadMessage(null), 4000);
    } else {
      setUploadMessage(
        'Aucune photo correspondante aux noms attendus (ex: wedding-cake.jpg, magasin.jpg...).'
      );
      setTimeout(() => setUploadMessage(null), 4000);
    }
  };

  // If all photos are present, keep it discreet
  if (presentCount === totalCount) {
    return (
      <div className="mb-6 p-3.5 rounded-2xl bg-[#E8F5E9] border border-[#A5D6A7] text-[#1B5E20] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
          <span className="font-semibold">
            Toutes les 8 photos officielles sont bien synchronisées.
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#2E7D32]/80">8 / 8 prêtes</span>
      </div>
    );
  }

  return (
    <div
      id="gestionnaire-photos-creations"
      className="mb-8 rounded-2xl bg-[#FFFDF9] border border-[#E8B4B8] shadow-xs overflow-hidden transition-all"
    >
      {/* Top summary strip */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F6E6E8] border border-[#E8B4B8] flex items-center justify-center text-[#C97A85] shrink-0">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-sm font-bold text-[#3D271D]">
                Photos officielles Maison Lila
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[#FAF7F2] border border-[#E8B4B8] text-[11px] font-mono font-bold text-[#3D271D]">
                {presentCount} / {totalCount} photos prêtes
              </span>
            </div>
            <p className="text-xs text-[#5C4033]/80 mt-0.5 font-light">
              Les cartes sans image indiquent clairement le fichier attendu. Vous pouvez glisser vos fichiers ici.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFilesSelected(e.target.files)}
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#3D271D] text-[#FAF7F2] text-xs font-semibold hover:bg-[#251610] transition-colors shadow-xs"
          >
            <Upload className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{isUploading ? 'Traitement...' : 'Déposer / Importer vos photos'}</span>
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-full border border-[#E8B4B8] text-[#3D271D] hover:bg-[#FAF7F2] transition-colors"
            title={isExpanded ? 'Masquer la liste' : 'Voir la liste des fichiers attendus'}
            aria-label="Afficher la liste des fichiers"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {uploadMessage && (
        <div className="px-5 py-2.5 bg-[#FAF7F2] border-t border-[#E8B4B8]/40 text-xs text-[#3D271D] font-medium flex items-center gap-2 animate-in fade-in">
          <AlertCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>{uploadMessage}</span>
        </div>
      )}

      {/* Expanded list of files */}
      {isExpanded && (
        <div className="p-4 sm:p-5 bg-[#FAF7F2]/60 border-t border-[#E8B4B8]/40">
          <span className="text-[11px] uppercase font-bold tracking-wider text-[#5C4033] block mb-3">
            Correspondance exacte des fichiers :
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            {REQUIRED_PHOTOS.map((photo) => {
              const exists = photoStatus[photo.filename];
              return (
                <div
                  key={photo.filename}
                  className={`p-2.5 rounded-xl border flex items-center justify-between ${
                    exists
                      ? 'bg-[#FFFDF9] border-[#A5D6A7] text-[#1B5E20]'
                      : 'bg-[#FFFDF9] border-[#E8B4B8] text-[#3D271D]'
                  }`}
                >
                  <div className="truncate mr-2">
                    <span className="font-semibold block truncate text-[11px]">{photo.label}</span>
                    <code className="text-[10px] font-mono text-[#5C4033]/80">{photo.filename}</code>
                  </div>
                  {exists ? (
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  ) : (
                    <span className="text-[10px] font-semibold text-[#C97A85] shrink-0 bg-[#F6E6E8] px-1.5 py-0.5 rounded">
                      En attente
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
