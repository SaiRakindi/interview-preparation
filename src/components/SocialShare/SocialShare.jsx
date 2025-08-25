import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
  FaRedditAlien,
  FaEnvelope,
  FaDiscord,
  FaLink,
} from "react-icons/fa";
import "./styles.css";

const SocialShare = () => {
  const pageUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Check this out!");

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    whatsapp: `https://wa.me/?text=${shareText}%20${pageUrl}`,
    telegram: `https://t.me/share/url?url=${pageUrl}&text=${shareText}`,
    reddit: `https://www.reddit.com/submit?url=${pageUrl}&title=${shareText}`,
    email: `mailto:?subject=${shareText}&body=${pageUrl}`,
  };

  return (
    <div className="social-share">
      <div className="buttons">
        <button className="social-btn linkedin" aria-label="LinkedIn">
          <FaLinkedinIn />
        </button>
        <button className="social-btn telegram" aria-label="Telegram">
          <FaTelegramPlane />
        </button>
        <button className="social-btn reddit" aria-label="Reddit">
          <FaRedditAlien />
        </button>
        <button className="social-btn email" aria-label="Email">
          <FaEnvelope />
        </button>
        <button className="social-btn discord" aria-label="Discord">
          <FaDiscord />
        </button>
        <button className="social-btn facebook" aria-label="Facebook">
          <FaFacebookF />
        </button>
        <button className="social-btn whatsapp" aria-label="WhatsApp">
          <FaWhatsapp />
        </button>
      </div>

      <div className="copy-link-container">
        <p className="copy-label">Or copy link:</p>
        <div className="copy-link-box">
          <FaLink className="link-icon" />
          <input type="text" />
          <button>Copy Link</button>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
