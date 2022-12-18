import React, { useState, useEffect } from 'react';
// import { Button } from '@mui/material';
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { API } from '../global';
// import { Navigate } from 'react-router-dom';
const CompanyList = () => {
    const [ companyInfo, setCompanyInfo ] = useState([]);
    console.log(companyInfo);
    const getCompanies = () => {
        fetch(`${API}/api/companies/getcompany`, { method: "GET" })
          .then((data) => data.json())
          .then((companiesdetail) => setCompanyInfo(companiesdetail));
    }
      useEffect(() => getCompanies(), []);
  return (
    <>
      <div className="container" style={{ minHeight: "100%" }}>
        <div className="row">
          <div className="company-header">
            <div className="col-md-6">
              {companyInfo.map((cmp) => (
                <div className="col">
                  <p className="contact">Let's Connect</p>
                  <h1>Our Office Location</h1>

                  <h4 className="movie-summary">{cmp.name}</h4>
                  <p>
                    {cmp.address}, {cmp.district}, {cmp.city}- {cmp.pincode}
                  </p>

                  {/* <p className="movie-summary">{cmp.district}</p> */}
                  {/* <p className="movie-summary">{cmp.city}</p>
                <p className="movie-summary">{cmp.pincode}</p> */}
                  <p>{cmp.phone}</p>
                  <p>{cmp.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyList