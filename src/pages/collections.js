import {
    ClipboardDocumentListIcon,
    DocumentTextIcon,
    AcademicCapIcon,
} from '@heroicons/react/24/outline'

const callouts = [
    {
        name: 'Encuestas de satisfacción',
        description: 'Evalúa la experiencia de tus clientes y obtén datos valiosos para mejorar tus servicios.',
        icon: ClipboardDocumentListIcon,
        href: '#',
    },
    {
        name: 'Formularios de registro',
        description: 'Crea formularios inteligentes para inscripciones a eventos, cursos o plataformas.',
        icon: DocumentTextIcon,
        href: '#',
    },
    {
        name: 'Evaluaciones académicas',
        description: 'Diseña tests o quizzes y análisis automático de resultados.',
        icon: AcademicCapIcon,
        href: '#',
    },
]

export default function Collections() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Ejemplos</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                                <callout.icon className="h-12 w-12 text-blue-600" aria-hidden="true" />
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
