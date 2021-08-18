import React, { Component } from "react";

// function CaptionImage({imgUrl, alt, caption}) {

function CaptionImage(props) {
  console.log("props");
  console.log(props);
  return (
    <div>
      <img
        src={props.imgUrl}
        alt={props.alt}
        style={{ width: 500, height: "auto" }}
      />
      <p>{props.caption}</p>
    </div>
  );
}

class ClassCaptionImage extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        <img
          src={this.props.imgUrl}
          alt={this.props.alt}
          style={{ width: 500, height: "auto" }}
        />
        <p>{this.props.caption}</p>
      </div>
    );
  }
}

export default CaptionImage;
// export default ClassCaptionImage;
