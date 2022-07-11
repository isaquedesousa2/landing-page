import { FaApple } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';


export function Main(){
    return (
        <div className="flex flex-1 flex-col gap-32 items-center max-w-5xl m-auto mt-20 p-5">
            <div className="text-center">
                <h1 className="font-bold mb-6 text-5xl">
                    Entre com sua conta
                </h1>
                <span className="text-text text-lg text-center">
                    Escolha entre 130.000 cursos em vídeo online com novas adições <br/> publicadas a cada dois meses
                </span>
            </div>
            <div className="flex justify-between items-center gap-10 w-full sm:flex-col">
                <div className="w-full max-w-md">
                    <form className="flex flex-col gap-4 w-full">
                        <input type="text" placeholder="Nome"/>
                        <input type="password" placeholder="Sua senha" />
                        <button type="button" className="bg-secondary text-black h-16 rounded font-bold">
                            Entrar com a conta
                        </button>
                    </form>
                </div>

                <span className="w-[3px] h-9 rotate-[35deg] z-0 bg-white rounded">|</span>

                <div className="flex flex-col w-full gap-4 max-w-md">
                    <button className="border border-secondary w-full flex justify-start h-16 items-center px-3 rounded gap-4 sm:justify-center hover:bg-secondary hover:text-black transition-colors">
                        <FaFacebookF size={27}/> <span>Entra com google</span>
                    </button>
                    <button className="border border-secondary w-full flex justify-start h-16 items-center px-3 rounded gap-4 sm:justify-center hover:bg-secondary hover:text-black transition-colors">
                        <FaGoogle size={27}/><span>Entra com facebook</span>
                    </button>
                    <button className="border border-secondary w-full flex justify-start h-16 items-center px-3 rounded gap-4 sm:justify-center hover:bg-secondary hover:text-black transition-colors">
                        <FaApple size={27}/> <span>Entra com Apple</span>
                    </button>
                </div>
            </div>
            <a href="" className="underline">
                Esqueceu a senha?
            </a>
        </div>
    )
}