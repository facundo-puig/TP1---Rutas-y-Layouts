export default function Login() {
    return (
        <div className="max-w-xl mx-auto px-6 py-28">
            <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-semibold">Iniciar Sesión</h1>
                    <p className="text-sm text-zinc-400">
                        ¿No tenés cuenta?{" "}
                        <span className="text-purple-500 hover:text-purple-400 cursor-pointer transition">
                            Registrate
                        </span>
                    </p>
                </div>
                <div>
                    <label className="block text-sm text-zinc-400 mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full bg-zinc-900 border border-zinc-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        placeholder="tu@email.com"
                    />
                </div>
                <div>
                    <label className="block text-sm text-zinc-400 mb-1">Contraseña</label>
                    <input
                        type="password"
                        className="w-full bg-zinc-900 border border-zinc-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        placeholder="Contraseña*"
                    />
                </div>
                <button className="bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg mt-4 cursor-pointer transition">
                    Iniciar Sesión
                </button>
                <p className="text-purple-500 hover:text-purple-400 cursor-pointer w-fit mx-auto mt-2">Olvidé mi contraseña</p>

            </div>
        </div>
    );
}