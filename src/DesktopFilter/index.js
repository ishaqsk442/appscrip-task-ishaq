import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./index.css"
import { TiTick } from "react-icons/ti";
import ProductsSection from "../ProductsSection";

// import "../styles/Products.css";
// import ProductsItems from "./ProductsItems";

const DesktopFilter = () => {
  const [showFilter, setShowFilter] = useState(true);

  const onClickshow = () => {
    setShowFilter(!showFilter);
  };

  const onClickHide = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="products-container">
      
        <div className="recommended-container">
          <div className="items-container">
            <p className="items">3425 ITEMS</p>
            {showFilter ? (
              <div className="hide-container" onClick={onClickshow}>
                <IoIosArrowForward />
                <p className="filter-heading">SHOW FILTER</p>
              </div>
            ) : (
              <div className="hide-container" onClick={onClickHide}>
                <IoIosArrowBack />
                <p className="filter-heading">HIDE FILTER</p>
              </div>
                      )}
                      <select className="select-container">
            <option className="recom">
              <TiTick /> RECOMMENDED
            </option>
            <option className="option">Newest first</option>
            <option className="option">popular</option>
            <option className="option">Price : high to low</option>
            <option className="option">Price : low to high</option>
          </select>
          </div>
          
        
        <hr />
      </div>
      
      {/* filter and products */}
      <div className="filter-products-container">
        {/* filter */}
        {showFilter ? (
          " "
        ) : (
          <div className="filter-container">
            <div className="filter-items">
              <input type="checkbox" className="checkbox" />
              <h3>CUSTOMIZBLE</h3>
            </div>
            <hr />
            {/* details */}
            <details className="details">
              <summary>
                IDEAL FOR <p>All</p>
              </summary>

              <p className="unselect-all">Unselect all</p>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Men</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Women</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Baby & Kids</p>
              </div>
            </details>
            <hr />
            <hr />
            {/* details */}
            <details className="details">
              <summary>
                OCCASION <p>All</p>
              </summary>

              <p className="unselect-all">Unselect all</p>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Men</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Women</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Baby & Kids</p>
              </div>
            </details>
            <hr />
            <hr />
            {/* details */}
            <details className="details">
              <summary>
                WORK <p>All</p>
              </summary>

              <p className="unselect-all">Unselect all</p>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Men</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Women</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Baby & Kids</p>
              </div>
            </details>
            <hr />
            <hr />
            {/* details */}
            <details className="details">
              <summary>
                FABRIC <p>All</p>
              </summary>

              <p className="unselect-all">Unselect all</p>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Men</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Women</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Baby & Kids</p>
              </div>
            </details>
            <hr />

            <hr />
            {/* details */}
            <details className="details">
              <summary>
                SEGMENT <p>All</p>
              </summary>

              <p className="unselect-all">Unselect all</p>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Men</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Women</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Baby & Kids</p>
              </div>
            </details>
            <hr />
            <hr />
            {/* details */}
            <details className="details">
              <summary>
                SUITABLE FOR <p>All</p>
              </summary>

              <p className="unselect-all">Unselect all</p>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Men</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Women</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Baby & Kids</p>
              </div>
            </details>
            <hr />
            <hr />
            {/* details */}
            <details className="details">
              <summary>
                RAW MATERIALS<p>All</p>
              </summary>

              <p className="unselect-all">Unselect all</p>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Men</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Women</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Baby & Kids</p>
              </div>
            </details>
            <hr />

            <hr />
            {/* details */}
            <details className="details">
              <summary>
                PATTERN <p>All</p>
              </summary>

              <p className="unselect-all">Unselect all</p>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Men</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Women</p>
              </div>
              <div className="filter-values">
                <input type="checkbox" className="filter-checkbox" />
                <p className="catergoy">Baby & Kids</p>
              </div>
            </details>
            <hr />
          </div>
              )}

              
              <ProductsSection />
          </div>
          
      </div>
     
  );
};

export default DesktopFilter;