import React, { useState } from "react";
import BalanceIcon from "@mui/icons-material/Balance";
import SchoolIcon from '@mui/icons-material/School';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
// import "./LandingPage.css";

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  return (
    <div>
      <div class="card-deck">
        <div class="card">
          <BalanceIcon/>
          <div class="card-body">
            <h5 class="card-title">PROMOTING JUSTICE</h5>
            <p class="card-text">
              Protecting the rights of Minnesota Muslims is at the core of
              CAIR-Minnesota's mission. We work vigorously to educate on behalf
              of community members experiencing discrimination and remedy cases
              through in-person negotiation.
            </p>
          </div>
          <div class="card-footer"></div>
        </div>
        <div class="card">
          <HowToVoteIcon />
          <div class="card-body">
            <h5 class="card-title">VOTER REGISTRATION</h5>
            <p class="card-text">
              In order to increase Muslim participation in the political arena,
              CAIR and its chapters regularly sponsor voter registration drives
              across the country. To register to vote, visit our website
            </p>
          </div>
          <div class="card-footer"></div>
        </div>
        <div class="card">
          <SchoolIcon/>
          <div class="card-body">
            <h5 class="card-title">EDUCATION</h5>
            <p class="card-text">
            CAIR organizes regular conferences and training seminars for government and law enforcement agencies, media professionals and the academic community.
            </p>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
