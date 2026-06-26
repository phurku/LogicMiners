export default function ServiceCard({ image, title, description, delay = 0 }) {
  return (
    <div
      className="bg-gray-50 rounded-lg shadow hover:shadow-xl transition p-4 flex flex-col items-center animate-fade-in-up hover:scale-105 duration-300 cursor-pointer group"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
      tabIndex={0}
    >
      <img
        src={image}
        alt={title}
        className="rounded-md mb-4 w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110 animate-fade-in"
        style={{ animationDelay: `${delay + 0.1}s`, animationFillMode: 'both' }}
      />
      <h3 className="text-lg font-bold mb-2 group-hover:text-primary/80 transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 text-center group-hover:text-gray-700 transition-colors duration-300">{description}</p>
    </div>
  );
}
