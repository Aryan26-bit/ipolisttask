import React, { useState } from "react";
import "./Detailpage.scss";
import Timeline from "./TimeLine/Timeline";
import { IoIosArrowBack } from "react-icons/io";
import { GrDocumentDownload } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Detailpage = () => {
  const [showFullText, setShowFullText] = useState(false);
  const navigate = useNavigate(); 
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const handleBackClick = () => {
    navigate("/ipo-list"); 
  };
  return (
    <div className="ipo-container">
      <div className="ipo-header">
        <div className="ipo-logo">
          <span className="left-arrow-background" onClick={handleBackClick}>
            <IoIosArrowBack />
          </span>
          <img src="\images\oyo.png" alt="OYO Logo" />
          <div className="ipo-company-name">
            <span style={{ fontSize: "3vh", fontWeight: "600" }}> OYO </span>

            <span style={{ fontSize: "2vh" }}>OYO Private Limited</span>
          </div>
        </div>

        <div className="ipo-btn-view">
          <span>
            <GrDocumentDownload className="btn-download-logo" />
          </span>
          <button className="apply-btn">Apply now</button>
        </div>
      </div>
      <div className="ipo-details-container">
        <div className="ipo-details">
          <div className="ipo-detail-item-issue">
            <span style={{ color: "#AFAEB3" }}>Issue size</span>
            <strong>₹3,600 - 3,700 Cr.</strong>
          </div>
          <div className="ipo-detail-item-price-range">
            <span style={{ color: "#AFAEB3" }}>Price range</span>
            <strong>₹100 - 200</strong>
          </div>
          <div className="ipo-detail-item-min">
            <span style={{ color: "#AFAEB3" }}>Minimum amount</span>
            <strong>₹50,000</strong>
          </div>
          <div className="ipo-detail-item-size">
            <span style={{ color: "#AFAEB3" }}>Lot size</span>
            <strong>150 shares/lots</strong>
          </div>
          <div className="ipo-detail-item-date">
            <span style={{ color: "#AFAEB3" }}>Issue dates</span>
            <strong>12 Dec - 15 Dec 22</strong>
          </div>
          <div className="ipo-detail-item-list">
            <span style={{ color: "#AFAEB3" }}>Listed on</span>
            <strong>15 Dec 22</strong>
          </div>
          <div className="ipo-detail-item-price">
            <span style={{ color: "#AFAEB3" }}>Listed price</span>
            <strong>₹150</strong>
          </div>
          <div className="ipo-detail-item-gain">
            <span style={{ color: "#AFAEB3" }}>Listing gains</span>
            <strong>₹10 (10.0%)</strong>
          </div>

          <div className="ipo-detail-item-quantity">
            <span style={{ color: "#AFAEB3" }}>Min. Quantity</span>
            <strong>150 shares</strong>
          </div>
        </div>
      </div>

      <Timeline />

      <div className="about-company">
        <h3>About the company</h3>
        <p>
          {showFullText
            ? `Lorem Ipsum dolor sit amet. Ea reprehenderit qula cum consequuntur deleniti rem odio enim sit corporis galisum est quisquam magni ea sequl maxime. Aut Incidunt adipisci in fuga necessitatibus aut Inventore enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non repellendus harum.`
            : `Lorem Ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio enim sit corporis galisum est quisquam magni ea sequi maxime. Aut Incidunt adipisci in fuga necessitatibus aut Inventare enim. Et atque autem sed tempora omnis qui corrupti explicabo alt quia reprehenderit nam esse dolorem qui delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non repellendus harum. Lorem Ipsum dolor sit amet. Ea reprehenderit quia cum consequuntur deleniti rem odio enim sit corporis galisum est quisquam magni ea sequi maxime. Aut Incidunt adipisci in fuga necessitatibus aut Inventore enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui delectus odio ea doloribus omnis non repellendus harum. temporibus ratione. Et voluptates autem nam totam consequuntur non
            
            Lorem Ipsum dolor sit amet. Ea reprehenderit qula cum consequuntur deleniti rem odio enim sit corporis galisum est quisquam magni ea sequl maxime. Aut Incidunt adipisci in fuga necessitatibus aut Inventore enim. Et atque autem sed tempora omnis qui corrupti explicabo sit quia reprehenderit nam esse dolorem qui delectus odio ea temporibus ratione. Et voluptates autem nam totam consequuntur non doloribus omnis non repellendus harum.
            `}
        </p>

        <span className="read-more-btn" onClick={toggleText}>
          {showFullText ? "Read More" : "Read Less"}
        </span>
      </div>
    </div>
  );
};

export default Detailpage;
