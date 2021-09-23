import Image from "next/image";

const PostAvatarImage = ({ src, alt }) => {
  return (
    <div className="mb-5">
      <div className="py-12 pr-12">
        <Image
          src={src}
          alt={alt}
          priority={true}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default PostAvatarImage;
