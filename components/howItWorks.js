export default function infoBlock({ title, body }){

  return(
    <div className="px-4 py-2 sm:px-6 md:max-w-sm">
      <span>
        <p>ICON</p>
        <span className="font-heebo">
          <h3 className='text-xl pb-3 font-bold'>{title}</h3>
          <p className="text-gray-500">{body}</p>
        </span>
      </span>
    </div>
  )
}