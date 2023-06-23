export const Card = ({description, price}) =>{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> Descripcion : {description} </div>
                <p className="text-gray-700 text-base">Precio : {price}</p>
            </div>
        </div>    

    )
}