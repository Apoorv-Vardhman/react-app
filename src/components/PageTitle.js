export const PageTitle = (props)=>{
    return (
        <div className="text-center bg-lime-100 text-gray-800 py-20 px-6">
            <h1 className="font-bold text-5xl ">{props.title}</h1>
        </div>
    );
}