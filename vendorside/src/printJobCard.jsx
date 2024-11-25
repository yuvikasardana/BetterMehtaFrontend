import React from "react";
import "./PrintJobCard.css"; // Import the updated CSS file

const PrintJobCard = () => {
  return (
    <div className="card-container vendor-card">
      {/* Document Preview and Text */}
      <div class="card-header">
    <span class="card-title">Name: Yuvika</span>
    <span class="card-roll">Roll No.: 102203800</span>
  </div>
      <div className="content">
        {/* Document Preview Section */}
        <div className="document-preview">
          Document Preview
          </div>

        {/* Text Section */}
         <div className="details-container"> 
        
          <div className=" doc-details">
            <p><strong>Color:</strong> b&w</p>
            <p><strong>No. of Pages:</strong> 3</p>
            <p><strong>Orientation:</strong> Portrait</p>
            <p><strong>Amount Paid:</strong> ₹20</p>
          </div>
         </div> 
      

      {/* Buttons Section */}
      <div className="button-container">
        <button className="btn print-button">Print</button>
        <button className="btn cancel-button">Cancel</button>
      </div>
    </div>
    </div>
  );
};

export default PrintJobCard;
