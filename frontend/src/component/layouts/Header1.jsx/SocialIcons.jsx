// components/SocialIcons.js
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const socialLinks = [
  { icon: <FaFacebook style={{ color: "#1877F2" }} />, url: "https://www.facebook.com" },
  { icon: <RiInstagramFill style={{ color: "#C13584" }} />, url: "https://www.instagram.com" },
  { icon: <FaXTwitter style={{ color: "#000" }} />, url: "https://www.twitter.com" },
  { icon: <IoLogoWhatsapp style={{ color: "#25D366" }} />, url: "https://www.whatsapp.com" },
  { icon: <FaYoutube style={{ color: "#FF0000" }} />, url: "https://www.youtube.com" },
];

const SocialIcons = () => (
  <div className="d-flex gap-1">
    {socialLinks.map((item, idx) => (
      <a
        key={idx}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-circle d-flex align-items-center justify-content-center p-1 text-reset"
      >
        {item.icon}
      </a>
    ))}
  </div>
);

export default SocialIcons;
