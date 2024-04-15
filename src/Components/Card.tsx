type CardProps = {
  img: string;
  title: string;
  description?: string;
  link: string;
  linkText: string;
};

export default function Card(props: CardProps) {
  return (
    <div className="flex flex-col gap-4">
      <img src={props.img} />
      <div className="flex flex-col justify-between h-full gap-y-4">
        <div className="flex flex-col gap-4">
          <h2 className="font-extrabold text-gray-900">{props.title}</h2>
          <p className="text-gray-600 text-sm font-semibold">
            {props.description}
          </p>
        </div>
        <a href={props.link} className="text-blue-700 font-semibold underline">
          {props.linkText}
        </a>
        <a href={props.link} className="text-blue-700 font-semibold underline">
          {props.linkText}
        </a>
      </div>
    </div>
  );
}
