import React, { useState, useEffect, useRef } from 'react';
import { ImageOff, AlertCircle, Upload, Check } from 'lucide-react';

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = 'aspect-[4/3] w-full'
}) => {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'missing'>('loading');
  const [imageSrc, setImageSrc] = useState(src);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  useEffect(() => {
    if (!imageSrc) {
      setImageState('missing');
      return;
    }

    let isMounted = true;
    setImageState('loading');

    const img = new Image();
    const resolvedUrl = imageSrc.startsWith('data:') || imageSrc.startsWith('blob:')
      ? imageSrc
      : `${imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`}`;

    img.src = resolvedUrl;

    if (img.complete && img.naturalWidth > 0) {
      setImageState('loaded');
      return;
    }

    img.onload = () => {
      if (isMounted) setImageState('loaded');
    };

    img.onerror = () => {
      if (isMounted) setImageState('missing');
    };

    return () => {
      isMounted = false;
    };
  }, [imageSrc]);

  // Listen for photo updates from other components
  useEffect(() => {
    const handlePhotoUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<{ filename: string; dataUrl?: string }>;
      if (customEvent.detail?.filename === src) {
        if (customEvent.detail.dataUrl) {
          setImageSrc(customEvent.detail.dataUrl);
        } else {
          setImageSrc(`${src}?t=${Date.now()}`);
        }
        setImageState('loaded');
      }
    };

    window.addEventListener('photo-updated', handlePhotoUpdated);
    return () => {
      window.removeEventListener('photo-updated', handlePhotoUpdated);
    };
  }, [src]);

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = e.target?.result as string;
        try {
          const res = await fetch('/api/upload-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: src, base64 })
          });
          if (res.ok) {
            setUploadSuccess(true);
            setImageSrc(base64);
            setImageState('loaded');
            window.dispatchEvent(
              new CustomEvent('photo-updated', {
                detail: { filename: src, dataUrl: base64 }
              })
            );
          } else {
            // Still display locally even if API fails
            setImageSrc(base64);
            setImageState('loaded');
          }
        } catch {
          setImageSrc(base64);
          setImageState('loaded');
        } finally {
          setIsUploading(false);
          setTimeout(() => setUploadSuccess(false), 2000);
        }
      };
      reader.readAsDataURL(file);
    } catch {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  if (imageState === 'missing') {
    return (
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={`relative ${containerClassName} bg-[#FAF7F2] border-2 border-dashed border-[#C5A059]/50 hover:border-[#C5A059] flex flex-col items-center justify-center p-3 text-center select-none overflow-hidden transition-colors`}
      >
        <div className="w-8 h-8 rounded-full bg-[#FFFDF9] border border-[#E8B4B8] flex items-center justify-center mb-1 text-[#C97A85] shadow-xs">
          <ImageOff className="w-4 h-4" />
        </div>

        <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C283B] flex items-center gap-1">
          <AlertCircle className="w-3 h-3 text-[#C97A85]" />
          Image non trouvée
        </span>

        <div className="mt-1 max-w-full px-2">
          <code className="text-[11px] font-mono font-bold text-[#3D271D] bg-[#FFFDF9] px-2 py-0.5 rounded-md border border-[#E8B4B8] block truncate shadow-xs">
            {src}
          </code>
        </div>

        <p className="text-[10px] text-[#5C4033]/80 mt-1 font-medium leading-tight px-2">
          Fichier attendu : <strong className="font-mono text-[#3D271D]">{src}</strong>
        </p>

        {/* Hidden file input to allow picking the file */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFileUpload(e.target.files[0]);
            }
          }}
        />

        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            disabled={isUploading}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#3D271D] text-[#FAF7F2] text-[10px] font-semibold hover:bg-[#251610] transition-colors shadow-xs"
            title={`Choisir la photo pour ${src}`}
          >
            {isUploading ? (
              <span>Envoi...</span>
            ) : uploadSuccess ? (
              <>
                <Check className="w-3 h-3 text-[#C5A059]" />
                <span>Ajouté !</span>
              </>
            ) : (
              <>
                <Upload className="w-3 h-3 text-[#C5A059]" />
                <span>Importer {src}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setImageState('loading');
              const img = new Image();
              img.src = `${src.startsWith('/') ? src : `/${src}`}?t=${Date.now()}`;
              img.onload = () => setImageState('loaded');
              img.onerror = () => setImageState('missing');
            }}
            className="text-[9px] font-semibold text-[#C5A059] hover:text-[#3D271D] underline tracking-wider uppercase"
            title="Re-tester la présence du fichier sur le serveur"
          >
            Re-tester
          </button>
        </div>
      </div>
    );
  }

  const displaySrc = imageSrc.startsWith('data:') || imageSrc.startsWith('blob:') || imageSrc.startsWith('/')
    ? imageSrc
    : `/${imageSrc}`;

  return (
    <div className={`relative ${containerClassName} overflow-hidden bg-[#F3EFEA]`}>
      {imageState === 'loading' && (
        <div className="absolute inset-0 bg-[#F3EFEA] animate-pulse flex items-center justify-center">
          <span className="text-[10px] text-[#5C4033]/60 font-mono">Chargement {src}...</span>
        </div>
      )}
      <img
        src={displaySrc}
        alt={alt}
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageState === 'loaded' ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading="lazy"
      />
    </div>
  );
};
