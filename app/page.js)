"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("Marble Kitchen Counter");

  const styles = [
    "Marble Kitchen Counter",
    "Luxury Wooden Shelf",
    "Minimalist Podium with Plants",
    "Soft Studio Lighting"
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleGenerate = () => {
    if (!image) return alert("Pehle product ki image upload karein!");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("AI Image Process Successful!");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#0b0d17] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7c5cff] to-[#22d3ee]">
            AI Snap Studio
          </h1>
          <span className="text-xs px-3 py-1 bg-[#7c5cff]/20 text-[#22d3ee] rounded-full border border-[#7c5cff]/30">
            Free Plan
          </span>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload Section */}
          <div className="space-y-4">
            <div className="border-2 border-dashed border-white/20 rounded-2xl p-6 text-center bg-[#121524]">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="product-upload"
              />
              <label htmlFor="product-upload" className="cursor-pointer block">
                {preview ? (
                  <img src={preview} alt="Preview" className="max-h-48 mx-auto rounded-lg object-contain" />
                ) : (
                  <div className="py-8">
                    <p className="text-sm font-medium">Click to upload product photo</p>
                    <p className="text-xs text-white/40 mt-1">PNG or JPG file</p>
                  </div>
                )}
              </label>
            </div>

            {/* Vibe Selection */}
            <div>
              <label className="block text-xs font-medium mb-2 text-white/80">Select Background Vibe</label>
              <div className="grid grid-cols-2 gap-2">
                {styles.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setSelectedStyle(style)}
                    className={`p-3 rounded-xl text-xs text-left border transition ${
                      selectedStyle === style
                        ? "bg-[#7c5cff] border-[#22d3ee] text-white"
                        : "bg-[#121524] border-white/10 text-white/70 hover:border-white/30"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !image}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7c5cff] to-[#22d3ee] font-semibold hover:opacity-90 transition disabled:opacity-40"
            >
              {loading ? "Generating Image..." : "Generate AI Background"}
            </button>
          </div>

          {/* Result Output Area */}
          <div className="bg-[#121524] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[300px]">
            {loading ? (
              <p className="text-sm text-[#22d3ee] animate-pulse">AI is processing product background...</p>
            ) : (
              <p className="text-xs text-white/40">Generated ad image will appear here</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
