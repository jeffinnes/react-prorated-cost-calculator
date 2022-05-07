import React, { useState } from "react";
import "./App.css";

function Calculator() {
  return (
    <main className="content-box">
      <div className="title-box">
        <i className="fad fa-calculator fa-4x" />
        <h1>Prorated Cost Calculator</h1>
        <span>Fill in the info below. Empty fields are treated as zero.</span>
      </div>

      <div className="calculator">
        <div id="start-date-selector">
          <label for="start-date">Start Date:</label>
          <input type="date" id="start-date" />
        </div>

        <div id="renewal-date-selector">
          <label for="renewal-date">Renewal Date:</label>
          <input type="date" id="renewal-date" />
        </div>

        <div className="days-left">
          <span>
            Days until renewal: <span id="days-left" />
          </span>
        </div>

        <div className="single-cost-per-year">
          <label for="single-cost-per-year">
            Cost of Single License per Year:
          </label>
          <div>
            <span>$</span>
            <input
              type="number"
              step="0.01"
              id="single-cost-per-year"
              className="num-input"
            />
            <span>
              {" "}
              = $<span id="single-cost-per-day">0</span> per Day.
            </span>
          </div>
        </div>

        <div className="prorate-single">
          <span>
            Prorated Cost for Single License: $
            <span id="prorate-single">0</span>
          </span>
        </div>

        <div className="qty">
          <label for="qty">Number of Additional seats:</label>
          <input
            type="number"
            step="1"
            min="0"
            id="qty"
            className="num-input"
          />
        </div>

        <div className="subtotal">
          <span>
            Subtotal: $<span id="subtotal">0</span>
          </span>
        </div>

        <div className="tax">
          <label for="tax">Current Tax Rate:</label>
          <input
            type="number"
            step="0.0001"
            min="0"
            id="tax"
            className="num-input"
          />
          <span>%</span>
        </div>

        <div className="total">
          <span>
            Prorate Total: $<span id="total">0</span>
          </span>
        </div>
      </div>

      <span className="cute-bs">
        <i className="far fa-code" /> with <i className="fas fa-heart" />
      </span>
    </main>
  );
}

export default Calculator;
