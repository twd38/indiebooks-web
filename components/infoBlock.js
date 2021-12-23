export default function infoBlock({ title, body }){

  return(
    <div className="bg-secondary px-4 py-8 sm:px-6 lg:py-10 md:w-72">
      <div className="font-heebo font-extrabold">
        <h3 className='text-lg pb-3'>{title}</h3>
        <p className="text-gray-500">{body}</p>
      </div>
    </div>
  )
}