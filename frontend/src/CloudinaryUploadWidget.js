import React, { useEffect, useRef, useState } from "react";

const CloudinaryUploadWidget = ({ onImageUpload }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const uploadButtonRef = useRef(null);

  useEffect(() => {
    // Ensure Cloudinary is loaded
    const loadCloudinaryScript = () => {
      if (window.cloudinary) {
        setIsLoaded(true);
      } else {
        const script = document.createElement("script");
        script.src = "https://upload.cloudinary.com/global/all.js";
        script.onload = () => setIsLoaded(true);
        document.body.appendChild(script);
      }
    };

    loadCloudinaryScript();
  }, []);

  useEffect(() => {
    if (isLoaded && window.cloudinary) {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dhlw57iz4", // replace with your Cloudinary cloud name
          uploadPreset: "ml_default", // replace with your upload preset
          sources: ["local"], // set sources as per your need
          multiple: false, // only upload one image at a time
          showAdvancedOptions: false,
          cropping: true, // enable image cropping
          croppingAspectRatio: 1, // set cropping ratio (1 for square)
          theme: "white", // use white theme for the widget
          buttonText: "Upload Image", // customize the upload button text
        },
        (error, result) => {
          if (result && result.event === "success") {
            onImageUpload(result.info.secure_url);
          }
        }
      );

      if (uploadButtonRef.current) {
        uploadButtonRef.current.onclick = () => {
          widget.open();
        };
      }
    }

    return () => {
      if (window.cloudinary) {
        window.cloudinary.createUploadWidget = undefined;
      }
    };
  }, [isLoaded, onImageUpload]);

  return (
    <button ref={uploadButtonRef} className="cloudinary-button">
      Upload Image
    </button>
  );
};

export default CloudinaryUploadWidget;
