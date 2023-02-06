import React from "react";
import gallery from "./css/gallery.module.css";

const Gallery = (props) => {
  return (
    <div className={gallery.gallery}>
      {props.selectedImage > 3 && <img className={gallery.previewImage} src={"/assets/images/" + props.shortTitle + "/" + props.shortTitle + " (" + (props.selectedImage + -3) + ").jpg"} onClick={() => props.setSelectedImage((state) => state - 3)} onMouseOver={() => props.setTooltip("Show selected image")} onMouseLeave={() => props.setTooltip("")} alt="" />}

      {props.selectedImage > 2 && <img className={gallery.previewImage} src={"/assets/images/" + props.shortTitle + "/" + props.shortTitle + " (" + (props.selectedImage + -2) + ").jpg"} onClick={() => props.setSelectedImage((state) => state - 2)} onMouseOver={() => props.setTooltip("Show selected image")} onMouseLeave={() => props.setTooltip("")} alt="" />}
      {props.selectedImage > 1 && <img className={gallery.previewImage} src={"/assets/images/" + props.shortTitle + "/" + props.shortTitle + " (" + (props.selectedImage + -1) + ").jpg"} onClick={() => props.setSelectedImage((state) => state - 1)} onMouseOver={() => props.setTooltip("Show selected image")} onMouseLeave={() => props.setTooltip("")} alt="" />}

      <img className={[gallery.previewImage, gallery.currentImage].join(" ")} src={"/assets/images/" + props.shortTitle + "/" + props.shortTitle + " (" + (props.selectedImage + 0) + ").jpg"} onMouseOver={() => props.setTooltip("Current image")} onMouseLeave={() => props.setTooltip("")} alt="" />

      {props.selectedImage < props.imageLength && <img className={gallery.previewImage} src={"/assets/images/" + props.shortTitle + "/" + props.shortTitle + " (" + (props.selectedImage + 1) + ").jpg"} onClick={() => props.setSelectedImage((state) => state + 1)} onMouseOver={() => props.setTooltip("Show selected image")} onMouseLeave={() => props.setTooltip("")} alt="" />}
      {props.selectedImage < props.imageLength - 1 && <img className={gallery.previewImage} src={"/assets/images/" + props.shortTitle + "/" + props.shortTitle + " (" + (props.selectedImage + 2) + ").jpg"} onClick={() => props.setSelectedImage((state) => state + 2)} onMouseOver={() => props.setTooltip("Show selected image")} onMouseLeave={() => props.setTooltip("")} alt="" />}
      {props.selectedImage < props.imageLength - 2 && <img className={gallery.previewImage} src={"/assets/images/" + props.shortTitle + "/" + props.shortTitle + " (" + (props.selectedImage + 3) + ").jpg"} onClick={() => props.setSelectedImage((state) => state + 3)} onMouseOver={() => props.setTooltip("Show selected image")} onMouseLeave={() => props.setTooltip("")} alt="" />}
    </div>
  );
};

export default Gallery;
