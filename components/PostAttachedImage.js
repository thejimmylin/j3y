import Image from "next/image";

const PostAttachedImage = ({ children, src, alt }) => {
  return (
    <div className="my-5 flex gap-8 justify-between items-center">
      {children}
      <div className="w-12 h-12 xs:w-24 xs:h-24 relative my-5">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </div>
    </div>
  );
};

export default PostAttachedImage;
