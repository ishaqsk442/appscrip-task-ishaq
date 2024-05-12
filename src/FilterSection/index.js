import './index.css'

import DesktopFilter from "../DesktopFilter"
import ProductsSection from "../ProductsSection";

const FilterSection = () => {
    return (
        <>
        
            <div className='filters-cont'>
                
              <div className='mobile-cont'>
            <div className='mobile'>

               
           <div className="dropdown">
                <button className="dropbtn">FILTER</button>
                    <div className="dropdown-content">
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
        
        </div>
            
            
            <select className='recomended-cont'>
                <option>Recommended</option>
                <option>Popular</option>
                <option>New Arrivals</option>
                <option>Price High</option>
                <option>Price Low</option>
            </select>
                </div>
                </div>
          {/* <ProductsSection /> */}
              <DesktopFilter />
            </div>
            
            </>
    )
}

export default FilterSection