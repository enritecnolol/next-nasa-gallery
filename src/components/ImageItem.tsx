import Image from "next/image";

type ImageItemProps = {
  imgUrl: string;
};
export default function ImageItem({ imgUrl }: ImageItemProps) {
  return (
    <div className="h-[300px] w-[350px]">
      <Image
        src={imgUrl}
        alt=""
        width={350}
        height={300}
        className="rounded-lg shadow-lg shadow-gray-500/40 object-cover"
        loading="lazy"
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}
