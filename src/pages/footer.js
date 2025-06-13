export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-2">QuestionAsk</h3>
                        <p className="text-sm text-gray-400">
                            Crea, publica y analiza formularios de forma dinámica e intuitiva. Perfecto para encuestas,
                            registros, exámenes y más.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold text-white mb-2">Navegación</h4>
                        <ul className="space-y-1 text-sm">
                            <li><a href="#home" className="hover:underline">Inicio</a></li>
                            <li><a href="#features" className="hover:underline">Características</a></li>
                            <li><a href="#plans" className="hover:underline">Planes</a></li>
                            <li><a href="https://questionask-dev.netlify.app" className="hover:underline">Iniciar sesión</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold text-white mb-2">Contacto</h4>
                        <p className="text-sm text-gray-400">
                            ¿Tienes dudas o sugerencias? <br />
                            Escríbenos a: <a href="mailto:soporte.questionask@gmail.com" className="text-indigo-400 hover:underline">soporte.questionask@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} QuestionAsk. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
