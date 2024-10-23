import React from 'react';
import './Timeline.scss'; // Import the CSS

const Timeline = () => {
  return (
    <div className="ipo-timeline-container">
      <div className="timeline">
        <div className="timeline-step">
          <div className="step-icon">&#10003;</div>
          <div className="step-details">
            <span>Bidding starts</span>
            <small>12 Dec 2023</small>
          </div>
        </div>
        <div className="timeline-step">
          <div className="step-icon">&#10003;</div>
          <div className="step-details">
            <span>Bidding ends</span>
            <small>15 Dec 2023</small>
          </div>
        </div>
        <div className="timeline-step">
          <div className="step-icon">&#10003;</div>
          <div className="step-details">
            <span>Allotment finalization</span>
            <small>18 Dec 2023</small>
          </div>
        </div>
        <div className="timeline-step">
          <div className="step-icon">&#10003;</div>
          <div className="step-details">
            <span>Refund initiation</span>
            <small>18 Dec 2023</small>
          </div>
        </div>
        <div className="timeline-step">
          <div className="step-icon">&#10003;</div>
          <div className="step-details">
            <span>Demat transfer</span>
            <small>18 Dec 2023</small>
          </div>
        </div>
        <div className="timeline-step">
          <div className="step-icon">&#10003;</div>
          <div className="step-details">
            <span>Listing date</span>
            <small>21 Dec 2023</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
