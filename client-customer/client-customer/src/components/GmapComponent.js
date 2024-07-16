import React, { Component } from "react";
class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">My Location</h2>
        <iframe
          title="gmap"
          src="https://maps.app.goo.gl/m4bRfXZJhKCYcqvT6"
          width={800}
          height={600}
          style={{border : 0}}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}
export default Gmap;
