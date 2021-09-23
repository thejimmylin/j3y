import Image from "next/image";

const PostImage = ({ src, alt }) => {
  return (
    <div className="mb-5">
      <Image src={src} alt={alt} className="rounded-lg" priority={true} />
    </div>
  );
};

export default PostImage;
