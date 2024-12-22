import React from 'react';
import './Gmap.css' // Create a CSS file for styling

const GoogleMap = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=cbit narasaraopeta&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
