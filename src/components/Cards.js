import React from "react";

function Cards({ title, value, color, icon, isProgress }) {
  return (
    <>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card border-left-${color} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-2">
                  {title}
                </div>
                {!isProgress ? (
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {value}
                  </div>
                ) : (
                  <div className="row no-gutters align-items-center">
                    <div className="col-auto">
                      <div
                        className="h5 mb-0 mr-1 font-weight-bold text-gray-800"
                        style={{ marginLeft: "15px" }}
                      >
                        {value}
                      </div>
                    </div>
                    <div className="col">
                      <div className="progress progress-md mr-2">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{
                            width: value,
                            ariaValueNow: value,
                            ariValueMin: value,
                            ariaValueMax: value
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}{" "}
              </div>
              <div className="col-auto">
                <i
                  className={`fas ${icon} fa-2x text-gray-300`}
                  style={{ margin: "10px" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
