import React from "react";
import Card from "react-bootstrap/Card";

const Overlay = () => {
  return (
    <Card className="bg-dark text-primary fw-bold mt-3">
      <Card.Img src="https://d35w6hwqhdq0in.cloudfront.net/transform/scale,h=600,w=600,upscale=True:compress/d0c6466f90f458968d90f21d9962d24b.jpg" alt="Card image" height="600"/>
      <Card.ImgOverlay>
        <Card.Title className="display-3 fw-bold mt-5" style={{fontSize:78,fontFamily:'Times new roman'}}>Computer Enginerring</Card.Title>
        <Card.Text className="lead text-white fw-bold" style={{fontSize:45,fontFamily:'Times new roman'}}>142,765 Computer Engineers follow this....</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Overlay;
