import React from "react";
import "./Listpage.scss";

const Listpage = () => {
  const ipoData = [
    {
      company: "GO AIR",
      date: "4th - 7th Oct 2022",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvest: "₹50,000",
      lotSize: "100 Shares/5 Lots",
      imageUrl: "/images/GoAir_logo.png",
    },
    {
      company: "BAJAJ ENERGY",
      date: "4th - 7th Oct 2022",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvest: "₹50,000",
      lotSize: "100 Shares/5 Lots",
      imageUrl: "/images/bajajenergy.png",
    },
    {
      company: "OYO",
      date: "To be announced",
      issueSize: "₹3600 Crores",
      priceRange: "₹50-60",
      minInvest: "₹50,000",
      lotSize: "100 Shares/5 Lots",
      imageUrl: "/images/oyo.png",
    },
  ];

  return (
    <div className="ipo-list-container">
      <div className="ipo-list">
        <table>
          <thead>
            <tr>
              <th>Company / Issue Date</th>
              <th>Issue Size</th>
              <th>Price Range</th>
              <th>Min Invest/Qty</th>
            </tr>
          </thead>
          <tbody>
            {ipoData.map((ipo, index) => (
              <tr key={index}>
                <td className="company">
                  <img
                    src={ipo.imageUrl}
                    alt={ipo.company}
                    width="20%"
                    height="20%"
                  />
                  <div>
                    <div className="heading-name">{ipo.company}</div>
                    <div className="heading-date">{ipo.date}</div>
                  </div>
                </td>
                <td className="issue-size-text">{ipo.issueSize}</td>
                <td className="price-range-text">{ipo.priceRange}</td>
                <td className="min-invest-lot-size">
                  <div className="mininvest-text">{ipo.minInvest}</div>
                  <div className="ipolot-text">{ipo.lotSize}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listpage;
