import { marcas } from "../constants"

const Formulario = () => {
  return (
    <>
        <form>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                <select name="marca" className="w-full p-3 border border-gray-200" id="">
                    <option value=""> -- Selecciona marca --</option>
                    {marcas.map(marca => (
                        <option
                            key={marca.id}
                            value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
                <select name="marca" className="w-full p-3 border border-gray-200" id="">
                    <option value=""> -- Selecciona año --</option>
                    {marcas.map(marca => (
                        <option
                            key={marca.id}
                            value={marca.id}
                        >
                            {marca.nombre}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    </>
  )
}

export default Formulario