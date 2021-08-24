import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import ImagesZoom from "./ImagesZoom";

const PostImages = ({ images }) => {
  const [shoImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  });

  if (images.length === 1) {
    return (
      <>
        <img
          src={images[0].src}
          alt={`알트!`}
          role="presentation"
          onClick={onZoom}
        />
        {shoImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <img
          style={{ width: "50%", display: "inline-block" }}
          src={images[0].src}
          alt={`알트!`}
          role="presentation"
          onClick={onZoom}
        />
        <img
          style={{ width: "50%", display: "inline-block" }}
          src={images[1].src}
          alt={`알트!`}
          role="presentation"
          onClick={onZoom}
        />
        {shoImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          style={{ width: "50%" }}
          src={images[0].src}
          alt={`알트!`}
          role="presentation"
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
      {shoImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
