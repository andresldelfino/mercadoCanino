
const App = () => {
    return (
      <div className="flex flex-col justify-center w-auto mx-2 whitespace-pre border-4 border-none rounded-md cursor-pointer md:border-double border-slate-900 hover:bg-green-200" >
        <h6 className="flex py-4 text-lg italic font-semibold text-green-600">¿Por que elegir mercado canino? </h6>
        <ul className="flex flex-col mx-2 font-light list-disc list-inside marker:text-amber-900">
          <li>
            Somos el Pet Shop mas completo del pais.
          </li>
          <li>
            Contamos con mas de 21 años de experiencia en satisfaccion al cliente.
          </li>
          <li>
            Ofrecemos una amplia variedad de marcas y productos para tu mascota.
          </li>
          
        </ul>
      </div>
    );
  }
  
  export default App;