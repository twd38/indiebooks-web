export default function infoBlock({ title, body }){

  return(
    <div className="bg-secondary px-4 py-6 md:py-8 lg:py-10">
      <div className="font-heebo">
        <h3 className='text-xl pb-3 font-bold'>{title}</h3>
        <p className="text-gray-500">{body}</p>
      </div>
    </div>
  )
}