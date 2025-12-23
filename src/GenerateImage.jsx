import { useState } from "react";
import axios from "axios";
import "./GenerateImage.css";

function GenerateImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Modal state
  const [modalImage, setModalImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setGeneratedImage(null);
    setMessage("");
  };

  const handleUpload = async () => {
    if (!selectedFile) return setMessage("Please select an image first.");
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      setLoading(true);
      const res = await axios.post("https://backend-pickabook-assignment.onrender.com/upload", formData);
      setImageUrl(res.data.imageUrl);
      setMessage("Image uploaded. You can personalize now.");
    }  catch (err) {
      console.error(err);
      setMessage(
        err.response?.data?.error ||
        err.response?.data?.details ||
        "Generation failed. Try again."
      );
    }
 finally {
      setLoading(false);
    }
  };

  const handleGenerate = async () => {
    if (!imageUrl) return setMessage("Upload image before personalizing.");
    try {
      setLoading(true);
      setGeneratedImage(null);
      setMessage("Generating illustration...");
      const res = await axios.post("https://backend-pickabook-assignment.onrender.com/generate", {
        imageUrl,
      });
      setGeneratedImage(res.data.image);
      setMessage("Personalization completed!");
    } catch {
      setMessage("Generation failed.try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = "personalized-image.png";
    link.click();
  };

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
  <div className="card" style={styles.card}>
    <div style={styles.page}>
      {loading && (
        <div style={styles.loaderOverlay}>
          <div style={styles.spinner}></div>
        </div>
      )}

      <div style={styles.card}>
        <h2 style={styles.title}>Pickabook Image Personalization</h2>
        <div className="imageCard" style={styles.imageCard}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        {/* Image Cards */}
        <div style={styles.imageContainer}>
          {/* Original Image Preview */}
          <div style={styles.imageCard} onClick={() => previewUrl && openModal(previewUrl)}>
            <p style={styles.imageLabel}>Original Image</p>
            {previewUrl ? (
              <img src={previewUrl} alt="original" style={styles.image} />
            ) : (
              <div style={styles.placeholder}>No Image</div>
            )}
          </div>

          {/* Personalized Image */}
          <div style={styles.imageCard} onClick={() => generatedImage && openModal(generatedImage)}>
            <p style={styles.imageLabel}>Personalized Image</p>
            {generatedImage ? (
              <img src={generatedImage} alt="generated" style={styles.image} />
            ) : (
              <div style={styles.placeholder}>Waiting…</div>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttons}>
          <button onClick={handleUpload} style={styles.btn}>
            Upload
          </button>
          <button
            onClick={handleGenerate}
            disabled={!imageUrl}
            style={styles.btnPrimary}
          >
            {generatedImage ? "Generate Again" : "Personalize"}
          </button>
          {generatedImage && (
            <button onClick={handleDownload} style={styles.btn}>
              Download
            </button>
          )}
        </div>

        {message && <p style={styles.message}>{message}</p>}
      </div>

      {/* Modal */}
      {modalImage && (
        <div style={styles.modal} onClick={closeModal}>
          <img src={modalImage} alt="modal" style={styles.modalImage} />
        </div>
      )}
    </div>
   </div>  
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F5F7FA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "#FFFFFF",
    padding: "30px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "800px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    color: "#1F3A5F",
    marginBottom: "15px",
  },
  controls: {
    display: "flex",
    gap: "20px",
    marginTop: "15px",
    flexWrap: "wrap",
  },
  controlItem: { flex: "1 1 200px" },
  imageContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  imageCard: {
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "10px",
    textAlign: "center",
    background: "#F0F4F8",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  imageLabel: {
    marginBottom: "10px",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "12px",
    background: "#E6ECF3",
  },
  placeholder: {
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    background: "#E6ECF3",
    color: "#999",
  },
  buttons: {
    display: "flex",
    gap: "15px",
    marginTop: "25px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btn: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "1px solid #1F3A5F",
    background: "transparent",
    cursor: "pointer",
  },
  btnPrimary: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#1F3A5F",
    color: "white",
    cursor: "pointer",
  },
  message: { marginTop: "15px", color: "#2E2E2E" },
  loaderOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(255,255,255,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #E6ECF3",
    borderTop: "5px solid #1F3A5F",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  modal: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
    backdropFilter: "blur(5px)",
    cursor: "pointer",
  },
  modalImage: {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  },

};

export default GenerateImage;
