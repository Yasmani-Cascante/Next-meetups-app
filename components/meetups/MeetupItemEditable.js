
const MeetupItemEditable = ({ title, image, description, address, marker }) => {

let markStyle = {
  border: '1px solid black'
  
};
  return (
    <div className="transition-all shadow-[4px_4px_1px_rgba(0,0,0,0.6)] border-2 border-black">
    
      <div className="relative bg-transparent border-3 border-black max-w-sm flex flex-col h-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="transition duration-1000 w-full h-48 object-cover bg-center bg-no-repeat hover:scale-105 "
        />
        <div className="p-5 flex flex-col">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight dark:text-white">
            <span 
            className={ marker !== 'title' ? 'blur-sm' : ''}
            >
            {title}
            </span>
          </h5>
          <p className="font-semibold mb-2 mt-3 block ">
            <span
            className={marker !== 'address' ? 'blur-sm' : ''}
            >
            {address}
            </span>
          </p>
          <p className="font-normal text-gray-600 mb-3 dark:text-gray-400 mt-3">
          <span
            className={ marker !== 'description' ? 'blur-sm' : ''}
            >
            { description }
            </span>

          </p>
        </div>      
      </div>
    </div>
  );
};

export default MeetupItemEditable;
